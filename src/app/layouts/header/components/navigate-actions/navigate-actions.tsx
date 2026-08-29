import { NavLink } from 'react-router-dom'

import { navigationItems } from '@/app/layouts/header'

export const NavigateActions = () => {
  return (
    <>
      {navigationItems.map(({ label, path }) => (
        <NavLink className="md:text-base xl:text-lg" to={path}>
          {label}
        </NavLink>
      ))}
    </>
  )
}
