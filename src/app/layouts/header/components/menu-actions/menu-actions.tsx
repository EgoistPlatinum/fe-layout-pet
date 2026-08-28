import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export const MenuActions = () => {
  return (
    <>
      <Button asChild variant="ghost" className="w-full">
        <NavLink to="/login">Login</NavLink>
      </Button>
      <Button asChild className="w-full text-white!" variant="default">
        <NavLink to="/signup">Sign Up</NavLink>
      </Button>
    </>
  )
}
