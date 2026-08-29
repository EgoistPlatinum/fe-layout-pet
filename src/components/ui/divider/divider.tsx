import { type ComponentProps } from 'react'

import { cn } from '@/lib'

type DividerProps = ComponentProps<'div'> & {
  decorative?: boolean
  orientation?: 'horizontal' | 'vertical'
}

function Divider({
  className,
  decorative = true,
  orientation = 'horizontal',
  ...props
}: DividerProps) {
  return (
    <div
      data-slot="divider"
      data-orientation={orientation}
      role={decorative ? 'presentation' : 'separator'}
      aria-hidden={decorative || undefined}
      aria-orientation={decorative ? undefined : orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className,
      )}
      {...props}
    />
  )
}

export { Divider }
export type { DividerProps }
