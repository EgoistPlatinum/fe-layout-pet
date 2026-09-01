import { MenuIcon } from 'lucide-react'

import { NavigateActions } from '@/components/common/navigate-actions'
import { Button } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'
import { headerNavigationItems } from '@/config'

import { MenuActions } from '../menu-actions'

import styles from './mobile-menu.module.css'

export const MobileMenu = () => {
  return (
    <div className={styles.hidden}>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" aria-label="MobileMenu" variant="ghost">
            <MenuIcon className="size-7" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader />
          <div className={styles.navItem}>
            <NavigateActions navigationItems={headerNavigationItems} />
          </div>
          <Divider className={styles.divider} />
          <SheetFooter className="items-stretch gap-5">
            <MenuActions />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
