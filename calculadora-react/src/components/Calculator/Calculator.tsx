import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'
import { useCalculator } from '../../hooks/useCalculator'

export default function Calculator() {
  const { display, isError, pressKey } = useCalculator()

  return (
    <div className="calculator">
      <Display value={display} isError={isError} />
      <Keyboard onKeyPress={pressKey} />
    </div>
  )
}