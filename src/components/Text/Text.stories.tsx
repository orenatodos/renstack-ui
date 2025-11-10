import type { Meta, StoryObj } from '@storybook/react-vite'
import { Text } from '.'

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15'
      ],
      control: { type: 'radio' }
    },
    variant: {
      options: ['primary', 'primary-subtle', 'neutral', 'neutral-subtle'],
      control: { type: 'radio' }
    },
    weight: {
      options: ['normal', 'medium', 'semibold', 'bold'],
      control: { type: 'radio' }
    }
  },
  args: {
    children: 'Text',
    size: '1',
    variant: 'neutral',
    weight: 'normal'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col">
      <Text size="15">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="14">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="13">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="12">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="11">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="10">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="9">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="8">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="7">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="6">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="5">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="4">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="3">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="2">The quick brown fox jumps over the lazy dog.</Text>
      <Text size="1">The quick brown fox jumps over the lazy dog.</Text>
    </div>
  )
}

export const Medium: Story = {
  args: {
    weight: 'medium'
  }
}

export const SemiBold: Story = {
  args: {
    weight: 'semibold'
  }
}

export const Bold: Story = {
  args: {
    weight: 'bold'
  }
}
