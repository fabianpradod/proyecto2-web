type DisplayProps = {
  value: string
  isError?: boolean
}

export default function Display({ value, isError }: DisplayProps) {
  return (
    <div
      aria-label="calculator display"
      aria-live="polite"
      className={isError ? 'display error' : 'display'}
    >
      {value}
    </div>
  )
}