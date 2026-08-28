import { BrandName, Logo } from '@/components/icon-svg'

export const BrandLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <Logo />
      <BrandName />
    </div>
  )
}
