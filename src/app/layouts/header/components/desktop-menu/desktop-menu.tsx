import { MenuActions } from '@/app/layouts/header/components/menu-actions'
import { NavigateActions } from '@/app/layouts/header/components/navigate-actions'

import styles from './decktop-menu.module.css'

export const DesktopMenu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navItem}>
        <NavigateActions />
      </div>
      <div className={styles.menuAct}>
        <MenuActions isNotFullWidth />
      </div>
    </div>
  )
}
