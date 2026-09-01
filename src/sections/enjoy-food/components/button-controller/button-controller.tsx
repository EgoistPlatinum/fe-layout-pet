import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { routes } from '@/config'
import { cn } from '@/lib'

interface ButtonControllerProps {
  isNotFullWidth?: boolean
}

export const ButtonController = ({
  isNotFullWidth = true,
}: ButtonControllerProps) => (
  <div className="flex items-center justify-center gap-4 mt-10 mb-6">
    <Button
      asChild
      className={cn(
        'text-white!',
        isNotFullWidth ? '' : 'w-full',
        'text - white!',
      )}
      variant="default"
      size="lg"
    >
      <NavLink to={routes.getStarted}>Get Started</NavLink>
    </Button>
    <Button
      asChild
      variant="outline"
      size="lg"
      className={cn(isNotFullWidth ? '' : 'w-full', 'text-brand-primary!')}
    >
      <NavLink to={routes.goPro}>Go Pro</NavLink>
    </Button>
  </div>
)
