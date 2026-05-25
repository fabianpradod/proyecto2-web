import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
}

export default meta
type Story = StoryObj<typeof Button>

export const NumberButton: Story = {
  args: { label: '5', onClick: () => {} },
}

export const OperatorButton: Story = {
  args: { label: '+', onClick: () => {}, variant: 'operator' },
}

export const ActionButton: Story = {
  args: { label: 'C', onClick: () => {}, variant: 'action' },
}

export const EqualsButton: Story = {
  args: { label: '=', onClick: () => {}, variant: 'action' },
}