import Button from '../Button/Button'
import type { CalculatorKey } from '../../logic/calculatorTypes'

type KeyboardProps = {
  onKeyPress: (key: CalculatorKey) => void
}

const keys: { label: string; key: CalculatorKey; variant?: 'number' | 'operator' | 'action' }[] = [
  { label: 'C', key: 'C', variant: 'action' },
  { label: '=', key: '=', variant: 'action' },
  { label: '+/-', key: '+/-', variant: 'action' },
  { label: '%', key: '%', variant: 'operator' },
  { label: '/', key: '/', variant: 'operator' },
  { label: '*', key: '*', variant: 'operator' },
  { label: '-', key: '-', variant: 'operator' },
  { label: '+', key: '+', variant: 'operator' },
  { label: '0', key: '0' }, { label: '.', key: '.' },
  { label: '1', key: '1' }, { label: '2', key: '2' }, { label: '3', key: '3' },
  { label: '4', key: '4' }, { label: '5', key: '5' }, { label: '6', key: '6' },
  { label: '7', key: '7' }, { label: '8', key: '8' }, { label: '9', key: '9' },
]

export default function Keyboard({ onKeyPress }: KeyboardProps) {
  return (
    <div className="keyboard">
      {keys.map(({ label, key, variant }) => (
        <Button key={key} label={label} onClick={() => onKeyPress(key)} variant={variant} />
      ))}
    </div>
  )
}