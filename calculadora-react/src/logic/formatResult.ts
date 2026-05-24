const MAX = 999999999
const MAX_LEN = 9

export function formatResult(value: number): string | null {
  if (isNaN(value)) return null
  if (value < 0) return null
  if (value > MAX) return null

  if (Number.isInteger(value)) {
    const str = String(value)
    return str.length <= MAX_LEN ? str : null
  }

  const fixed = parseFloat(value.toPrecision(MAX_LEN))
  const str = String(fixed)
  return str.length <= MAX_LEN ? str : str.slice(0, MAX_LEN)
}