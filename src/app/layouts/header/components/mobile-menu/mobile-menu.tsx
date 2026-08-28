import { MenuIcon } from 'lucide-react'

import { NavigateActions } from '@/app/layouts/header/components/navigate-actions'
import { Button } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet'

import { MenuActions } from '../menu-actions'

import styles from './mobile-menu.module.css'

export const MobileMenu = () => {
  return (
    <div className={styles.hidden}>
      <Sheet>
        <SheetTrigger>
          <Button size="icon" aria-label="MobileMenu" variant="ghost">
            <MenuIcon className="size-7" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader />
          <div className={styles.navItem}>
            <NavigateActions />
          </div>
          <Divider color="black" className={styles.divider} />
          <SheetFooter className="items-stretch gap-5">
            <MenuActions />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
