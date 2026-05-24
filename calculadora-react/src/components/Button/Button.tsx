type ButtonProps = {
  label: string
  onClick: () => void
  variant?: 'number' | 'operator' | 'action'
  ariaLabel?: string
}

export default function Button({ label, onClick, variant = 'number', ariaLabel }: ButtonProps) {
  return (
    <button
      className={`calc-button ${variant}`}
      onClick={onClick}
      aria-label={ariaLabel ?? label}
    >
      {label}
    </button>
  )
}