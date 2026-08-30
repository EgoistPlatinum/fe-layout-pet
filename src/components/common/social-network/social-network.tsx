import { Button } from '@/components/ui/button'
import { type SocialItem } from '@/config'

interface SocialNetworkProps {
  items: readonly SocialItem[]
}

export const SocialNetwork = ({ items }: SocialNetworkProps) => {
  return (
    <div className="flex items-center gap-2">
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
