import type { Operation } from './calculatorTypes'

export function compute(stored: number, current: number, operation: Operation): number {
  switch (operation) {
    case '+': return stored + current
    case '-': return stored - current
    case '*': return stored * current
    case '/': return current === 0 ? NaN : stored / current
    case '%': return current === 0 ? NaN : stored % current
  }
}