import { NavLink } from 'react-router-dom'

import { socialItems } from '@/app/layouts/footer/social-items'
import { Button } from '@/components/ui/button'

export const SocialNetwork = () => {
  return (
    <div>
      {socialItems.map(({ name, link, icon }) => (
        <Button
          asChild
          key={name}
          variant="ghost"
          size="icon"
          aria-label={name}
        >
          <NavLink to={link}>
            <img src={icon} alt="" aria-hidden="true" />
          </NavLink>
        </Button>
      ))}
    </div>
  )
}
