import { NavLink } from 'react-router-dom'

import { type NavigationItem } from '@/config'
import { cn } from '@/lib'

interface NavigateActionsProps {
  className?: string
  navigationItems: readonly NavigationItem[]
}

export const NavigateActions = ({
  className,
  navigationItems,
}: NavigateActionsProps) => {
  return (
    <>
      {navigationItems.map(({ label, path }) => (
        <NavLink
          key={path}
          className={cn('md:text-base xl:text-lg', className)}
          to={path}
        >
          {label}
        </NavLink>
      ))}
    </>
  )
}
