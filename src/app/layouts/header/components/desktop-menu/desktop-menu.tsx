import { NavigateActions } from '@/components/common/navigate-actions'
import { headerNavigationItems } from '@/config'

import { MenuActions } from '../menu-actions'

import styles from './decktop-menu.module.css'

export const DesktopMenu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navItem}>
        <NavigateActions navigationItems={headerNavigationItems} />
      </div>
      <div className={styles.menuAct}>
        <MenuActions isNotFullWidth />
      </div>
    </div>
  )
}
