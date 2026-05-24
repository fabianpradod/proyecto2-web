export type Operation = '+' | '-' | '*' | '/' | '%'

export type CalculatorKey =
  | '0' | '1' | '2' | '3' | '4'
  | '5' | '6' | '7' | '8' | '9'
  | '.'
  | '+'
  | '-'
  | '*'
  | '/'
  | '%'
  | '='
  | '+/-'
  | 'C'

export type CalculatorState = {
  display: string
  storedValue: number | null
  pendingOperation: Operation | null
  shouldResetDisplay: boolean
  isError: boolean
}