import { Slot } from '@radix-ui/react-slot'
import type { ComponentPropsWithRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const textVariants = tv({
  base: 'text-neutral-text',
  variants: {
    size: {
      '1': 'text-[4rem] leading-normal tracking-[0.008em]',
      '2': 'text-[3.36rem] leading-normal tracking-[0.01em]',
      '3': 'text-[2.83rem] leading-[1.55] tracking-[0.015em]',
      '4': 'text-[2rem] leading-[1.55] tracking-[0.02em]',
      '5': 'text-[1.68rem] leading-[1.55] tracking-[0.02em]',
      '6': 'text-[1.41rem] leading-[1.6] tracking-[0.025em]',
      '7': 'text-[1.3rem] leading-[1.6] tracking-[0.025em]',
      '8': 'text-[1.19rem] leading-[1.6] tracking-[0.03em]',
      '9': 'text-[1.09rem] leading-[1.6] tracking-[0.03em]',
      '10': 'text-[1rem] leading-[1.6] tracking-[0.03em]',
      '11': 'text-[0.92rem] leading-[1.65] tracking-[0.03em]',
      '12': 'text-[0.84rem] leading-[1.65] tracking-[0.03em]',
      '13': 'text-[0.77rem] leading-[1.65] tracking-[0.03em]',
      '14': 'text-[0.71rem] leading-[1.65] tracking-[0.03em]',
      '15': 'text-[0.65rem] leading-[1.65] tracking-[0.03em]'
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    },
    variant: {
      white: 'text-neutral-base',
      black: 'text-neutral-text',
      primary: 'text-primary-text',
      'primary-subtle': 'text-primary-text-subtle',
      neutral: 'text-neutral-text',
      'neutral-subtle': 'text-neutral-text-subtle'
    }
  },
  defaultVariants: {
    size: '10',
    variant: 'neutral',
    weight: 'normal'
  }
})

interface TextProps
  extends ComponentPropsWithRef<'span'>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
}

export function Text({
  asChild,
  className,
  size,
  variant,
  weight,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={textVariants({ className, size, variant, weight })}
      {...props}
    />
  )
}
