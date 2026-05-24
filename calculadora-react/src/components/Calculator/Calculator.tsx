import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'
import type { CalculatorKey } from '../../logic/calculatorTypes'

export default function Calculator() {
  const display = '0'
  const handleKey = (_key: CalculatorKey) => { /* TODO */ }

  return (
    <div className="calculator">
      <Display value={display} />
      <Keyboard onKeyPress={handleKey} />
    </div>
  )
}