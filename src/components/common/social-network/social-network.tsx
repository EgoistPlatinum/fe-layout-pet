import { Button } from '@/components/ui/button'
import { type SocialItem } from '@/config'
import { cn } from '@/lib'
interface SocialNetworkProps {
  items: readonly SocialItem[]
  className?: string
}

export const SocialNetwork = ({ items, className }: SocialNetworkProps) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {items.map(({ name, link, icon }) => (
        <Button
          asChild
          key={name}
          variant="ghost"
          size="icon"
          aria-label={name}
        >
          <a href={link} target="_blank" rel="noreferrer">
            <img className="size-5" src={icon} alt="" aria-hidden="true" />
          </a>
        </Button>
      ))}
    </div>
  )
}
