import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { routes } from '@/config'
import { cn } from '@/lib'

interface MenuActionsProps {
  isNotFullWidth?: boolean
}

export const MenuActions = ({ isNotFullWidth }: MenuActionsProps) => {
  return (
    <>
      <Button
        asChild
        variant="ghost"
        className={isNotFullWidth ? '' : 'w-full'}
      >
        <NavLink to={routes.login}>Login</NavLink>
      </Button>
      <Button
        asChild
        className={cn(
          'text-white!',
          isNotFullWidth ? '' : 'w-full',
          'text - white!',
        )}
        variant="default"
      >
        <NavLink to={routes.signup}>Sign Up</NavLink>
      </Button>
    </>
  )
}
