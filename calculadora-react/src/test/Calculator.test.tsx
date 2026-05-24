import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Calculator from '../components/Calculator/Calculator'

const setup = () => {
  render(<Calculator />)
  const press = (label: string) => userEvent.click(screen.getByRole('button', { name: label }))
  const display = () => screen.getByLabelText('calculator display')
  return { press, display }
}

describe('Calculator', () => {
  it('concatenates digits in the display', async () => {
    const { press, display } = setup()
    await press('1'); await press('2'); await press('3')
    expect(display()).toHaveTextContent('123')
  })

  it('clears display after pressing an operation', async () => {
    const { press, display } = setup()
    await press('1'); await press('2'); await press('+'); await press('7')
    expect(display()).toHaveTextContent('7')
  })

  it('computes addition with equals', async () => {
    const { press, display } = setup()
    await press('8'); await press('+'); await press('3'); await press('=')
    expect(display()).toHaveTextContent('11')
  })

  it('computes repeated operations immediately', async () => {
    const { press, display } = setup()
    await press('5'); await press('+'); await press('3'); await press('*')
    expect(display()).toHaveTextContent('8')
    await press('2'); await press('=')
    expect(display()).toHaveTextContent('16')
  })

  it('shows ERROR for negative subtraction result', async () => {
    const { press, display } = setup()
    await press('3'); await press('-'); await press('8'); await press('=')
    expect(display()).toHaveTextContent('ERROR')
  })

  it('ignores digits after 9 characters', async () => {
    const { press, display } = setup()
    await press('1'); await press('2'); await press('3')
    await press('4'); await press('5'); await press('6')
    await press('7'); await press('8'); await press('9'); await press('0')
    expect(display()).toHaveTextContent('123456789')
  })

  it('shows ERROR for result above 999999999', async () => {
    const { press, display } = setup()
    await press('9'); await press('9'); await press('9')
    await press('9'); await press('9'); await press('9')
    await press('9'); await press('9'); await press('9')
    await press('+'); await press('1'); await press('=')
    expect(display()).toHaveTextContent('ERROR')
  })

  it('handles decimal input', async () => {
    const { press, display } = setup()
    await press('1'); await press('.'); await press('2')
    expect(display()).toHaveTextContent('1.2')
  })

  it('prevents duplicate decimal points', async () => {
    const { press, display } = setup()
    await press('1'); await press('.'); await press('2'); await press('.'); await press('3')
    expect(display()).toHaveTextContent('1.23')
  })

  it('handles division with long decimal result', async () => {
    const { press, display } = setup()
    await press('2'); await press('2'); await press('/'); await press('7'); await press('=')
    expect(display().textContent?.length).toBeLessThanOrEqual(9)
  })

  it('shows ERROR for division by zero', async () => {
    const { press, display } = setup()
    await press('8'); await press('/'); await press('0'); await press('=')
    expect(display()).toHaveTextContent('ERROR')
  })

  it('handles modulo', async () => {
    const { press, display } = setup()
    await press('8'); await press('%'); await press('3'); await press('=')
    expect(display()).toHaveTextContent('2')
  })

  it('toggles sign', async () => {
    const { press, display } = setup()
    await press('1'); await press('2'); await press('+/-')
    expect(display()).toHaveTextContent('-12')
  })
})