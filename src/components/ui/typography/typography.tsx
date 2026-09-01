import { type VariantProps } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, type ElementType } from 'react'

import { cn } from '@/lib'

import { typographyVariants } from './typography-variant'

type TypographyProps<T extends ElementType = 'span'> = {
  as?: T
  className?: string
} & VariantProps<typeof typographyVariants> &
  Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>

function Typography<T extends ElementType = 'span'>({
  as,
  className,
  size,
  variant,
  color,
  ...props
}: TypographyProps<T>) {
  const Component = as ?? 'span'

  return (
    <Component
      data-slot="typography"
      className={cn(typographyVariants({ className, size, variant, color }))}
      {...props}
    />
  )
}

export { Typography }
export type { TypographyProps }
