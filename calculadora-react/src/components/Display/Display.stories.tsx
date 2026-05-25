import type { Meta, StoryObj } from '@storybook/react'
import Display from './Display'

const meta: Meta<typeof Display> = {
  component: Display,
  title: 'Components/Display',
}

export default meta
type Story = StoryObj<typeof Display>

export const Empty: Story = {
  args: { value: '0' },
}

export const WithNumber: Story = {
  args: { value: '123' },
}

export const WithDecimal: Story = {
  args: { value: '3.14' },
}

export const MaxLength: Story = {
  args: { value: '123456789' },
}

export const ErrorState: Story = {
  args: { value: 'ERROR', isError: true },
}