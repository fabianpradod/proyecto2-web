import { useState } from 'react'
import { compute } from '../logic/operations'
import { formatResult } from '../logic/formatResult'

import type { CalculatorKey, CalculatorState, Operation } from '../logic/calculatorTypes'

const initial: CalculatorState = {
  display: '0',
  storedValue: null,
  pendingOperation: null,
  shouldResetDisplay: false,
  isError: false,
}

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>(initial)

  function pressKey(key: CalculatorKey) {
    setState(prev => next(prev, key))
  }

  return { display: state.display, isError: state.isError, pressKey }
}

function next(state: CalculatorState, key: CalculatorKey): CalculatorState {
  if (key === 'C') return initial

  if (key === '+/-') return handleToggle(state)
  if (key === '=') return handleEquals(state)
  if (key === '.') return handleDecimal(state)
  if (isOperation(key)) return handleOperation(state, key)
  return handleDigit(state, key)
}

function isOperation(key: CalculatorKey): key is Operation {
  return ['+', '-', '*', '/', '%'].includes(key)
}

function handleDigit(state: CalculatorState, digit: string): CalculatorState {
  if (state.isError) return { ...initial, display: digit }
  const base = state.shouldResetDisplay ? '' : state.display === '0' ? '' : state.display
  if (base.length >= 9) return state
  const display = base + digit
  return { ...state, display, shouldResetDisplay: false }
}

function handleDecimal(state: CalculatorState): CalculatorState {
  if (state.isError) return { ...initial, display: '0.' }
  if (state.shouldResetDisplay) return { ...state, display: '0.', shouldResetDisplay: false }
  if (state.display.includes('.')) return state
  if (state.display.length >= 9) return state
  return { ...state, display: state.display + '.' }
}

function handleOperation(state: CalculatorState, op: Operation): CalculatorState {
  if (state.isError) return state
  if (state.storedValue === null) {
    return { ...state, storedValue: parseFloat(state.display), pendingOperation: op, shouldResetDisplay: true }
  }
  const result = compute(state.storedValue, parseFloat(state.display), state.pendingOperation!)
  const formatted = formatResult(result)
  if (formatted === null) {
    return { ...initial, display: 'ERROR', isError: true }
  }
  return { ...state, display: formatted, storedValue: parseFloat(formatted),
          pendingOperation: op, shouldResetDisplay: true }
}

function handleEquals(state: CalculatorState): CalculatorState {
  if (state.storedValue === null || state.pendingOperation === null) return state
  const result = compute(state.storedValue, parseFloat(state.display), state.pendingOperation)
  const formatted = formatResult(result)
  if (formatted === null) {
    return { ...initial, display: 'ERROR', isError: true }
  }
  return { ...initial, display: formatted }
}

function handleToggle(state: CalculatorState): CalculatorState {
  if (state.isError) return state
  if (state.display === '0') return state
  if (state.display.startsWith('-')) return { ...state, display: state.display.slice(1) }
  if (state.display.length >= 9) return state
  return { ...state, display: '-' + state.display }
}