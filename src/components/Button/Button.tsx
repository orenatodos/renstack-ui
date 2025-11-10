import { Slot, Slottable } from '@radix-ui/react-slot'
import { IconLoader2 } from '@tabler/icons-react'
import type { ComponentPropsWithRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center border-2 border-transparent text-center whitespace-nowrap cursor-pointer font-bold outline-offset-5 outline-primary-solid disabled:bg-neutral-solid! disabled:border-neutral-solid! disabled:text-neutral-base disabled:pointer-events-none active:scale-[0.98] rounded-4xl',
  variants: {
    isLoading: {
      true: 'bg-neutral-solid! text-neutral-base pointer-events-none'
    },
    size: {
      sm: 'h-9 px-4 text-sm',
      md: 'h-12 px-6',
      lg: 'h-14 px-8 text-lg',
      'icon-sm': 'size-9 text-sm',
      'icon-md': 'size-12',
      'icon-lg': 'size-14 text-lg'
    },
    variant: {
      primary:
        'bg-primary-solid text-primary-base hover:bg-primary-solid-hover',
      outline:
        'border-primary-solid text-primary-solid hover:bg-primary-bg-shape-alpha',
      ghost: 'text-primary-solid hover:bg-primary-bg-shape-alpha',
      flat: 'text-primary-solid bg-primary-bg-shape hover:bg-primary-bg-hover-alpha'
    },
    hasLeftIcon: {
      true: 'gap-1.5'
    },
    hasRightIcon: {
      true: 'gap-1.5'
    }
  },
  compoundVariants: [
    {
      hasLeftIcon: true,
      isLoading: false,
      size: 'sm',
      className: 'pl-3'
    },
    {
      hasLeftIcon: true,
      isLoading: false,
      size: 'md',
      className: 'pl-5'
    },
    {
      hasLeftIcon: true,
      isLoading: false,
      size: 'lg',
      className: 'pl-7'
    },
    {
      hasRightIcon: true,
      isLoading: false,
      size: 'sm',
      className: 'pr-3'
    },
    {
      hasRightIcon: true,
      isLoading: false,
      size: 'md',
      className: 'pr-5'
    },
    {
      hasRightIcon: true,
      isLoading: false,
      size: 'lg',
      className: 'pr-7'
    }
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary'
  }
})

interface ButtonProps
  extends ComponentPropsWithRef<'button'>,
    Omit<VariantProps<typeof buttonVariants>, 'hasLeftIcon' | 'hasRightIcon'> {
  asChild?: boolean
  leftIcon?: React.ElementType
  rightIcon?: React.ElementType
}

export function Button({
  asChild,
  children,
  className,
  size,
  variant,
  isLoading,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  const isShowLeftIcon = !isLoading && !!LeftIcon
  const isShowRightIcon = !isLoading && !!RightIcon

  return (
    <Comp
      className={buttonVariants({
        className,
        isLoading,
        size,
        variant,
        hasLeftIcon: !!LeftIcon,
        hasRightIcon: !!RightIcon
      })}
      {...props}>
      {isShowLeftIcon && <LeftIcon />}
      {!isLoading ? (
        <Slottable>{children}</Slottable>
      ) : (
        <IconLoader2 className="animate-spin" />
      )}
      {isShowRightIcon && <RightIcon />}
    </Comp>
  )
}
