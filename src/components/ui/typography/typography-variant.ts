import { cva } from 'class-variance-authority'

export const typographyVariants = cva('', {
  variants: {
    variant: {
      display:
        'text-[49px] leading-[56px] font-bold tracking-[0.25px] text-foreground',
      h1: 'text-[35px] leading-[40px] font-bold tracking-[0.25px] text-foreground',
      h2: 'text-[27px] leading-[32px] font-semibold tracking-[0.25px] text-foreground',
      h3: 'text-[21px] leading-[26px] font-semibold tracking-[0.25px] text-foreground',
      l: 'text-[21px] leading-[28px] font-normal tracking-[0.2px] text-foreground',
      m: 'text-[17px] leading-[24px] font-normal tracking-[0.2px] text-foreground',
      s: 'text-[15px] leading-[20px] font-normal tracking-[0.2px] text-foreground',
      minor:
        'text-[13px] leading-[16px] font-normal tracking-[0.2px] text-foreground',
      mini: 'text-[11px] leading-[14px] font-normal tracking-[0.2px] text-foreground',
    },
    size: {
      extra: 'uppercase font-bold',
      body_long: '',
      body_short: '',
      body_accent: 'font-semibold',
      subtitle: 'font-semibold',
      overline: 'uppercase font-bold tracking-[0.6px]',
      caption: '',
      caption_accent: 'font-semibold',
      regular: '',
      accent: 'font-semibold',
    },
    color: {
      primary: 'text-content-primary',
      secondary: 'text-content-secondary',
      brand: 'text-brand-primary',
      invert: 'text-content-inverse',
    },
  },
  compoundVariants: [
    { variant: 'display', size: 'extra', className: 'tracking-[1.2px]' },
    { variant: 'h1', size: 'extra', className: 'tracking-[1px]' },
    {
      variant: ['h2', 'h3'],
      size: 'extra',
      className: 'tracking-[0.6px]',
    },
    {
      variant: 'l',
      size: ['body_short', 'subtitle'],
      className: 'leading-[26px]',
    },
    {
      variant: 'm',
      size: ['body_short', 'subtitle'],
      className: 'leading-[22px]',
    },
    {
      variant: 's',
      size: ['body_short', 'subtitle'],
      className: 'leading-[18px]',
    },
    {
      variant: 'mini',
      size: 'overline',
      className: 'font-semibold tracking-[0.3px]',
    },
  ],
  defaultVariants: {
    variant: 'm',
  },
})
