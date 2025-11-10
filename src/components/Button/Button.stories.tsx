import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Button } from '.'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' }
    },
    variant: {
      options: ['primary', 'outline', 'flat', 'ghost'],
      control: { type: 'radio' }
    }
  },
  args: {
    children: 'Button',
    size: 'md',
    variant: 'primary',
    isLoading: false,
    disabled: false,
    asChild: false,
    onClick: fn()
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta

const EmojiIcon = () => {
  return <span>🤍</span>
}

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Outline: Story = {
  args: {
    variant: 'outline'
  }
}

export const Flat: Story = {
  args: {
    variant: 'flat'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost'
  }
}

export const Small: Story = {
  args: {
    size: 'sm'
  }
}

export const Medium: Story = {
  args: {
    size: 'md'
  }
}

export const Large: Story = {
  args: {
    size: 'lg'
  }
}

export const OnlyIcon: Story = {
  args: {
    size: 'icon-md',
    children: <EmojiIcon />
  }
}

export const Link: Story = {
  render: (args) => (
    <Button asChild {...args}>
      <a href="/">Link</a>
    </Button>
  )
}

export const WithLeftIcon: Story = {
  args: {
    leftIcon: EmojiIcon
  }
}

export const WithRightIcon: Story = {
  args: {
    rightIcon: EmojiIcon
  }
}

export const Loading: Story = {
  args: {
    isLoading: true
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}
