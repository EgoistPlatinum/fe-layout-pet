import { NavLink } from 'react-router-dom'

import { navigationItems } from '@/app/layouts/header'

export const NavigateActions = () => {
  return (
    <>
      {navigationItems.map(({ label, path }) => (
        <NavLink to={path}>{label}</NavLink>
      ))}
    </>
  )
}
