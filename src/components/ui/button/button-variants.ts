import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding p-4 text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-brand-primary text-content-inverse',
        outline: 'border-brand-primary bg-background text-brand-primary',
        ghost: 'text-brand-primary hover:bg-muted',
        icon: 'rounded-full bg-brand-primary',
      },
      size: {
        default: 'gap-1.5',
        xs: "gap-1 rounded-[min(var(--radius-md),10px)] text-xs in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        sm: "gap-1 rounded-[min(var(--radius-md),12px)] text-[0.8rem] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
        lg: 'gap-1.5',
        icon: '',
        'icon-xs':
          "rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        'icon-sm':
          'rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
        'icon-lg': '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
