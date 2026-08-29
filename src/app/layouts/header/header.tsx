import { DesktopMenu } from '@/app/layouts/header/components/desktop-menu'
import { BrandLogo } from '@/components/common/brand-logo'
import { Divider } from '@/components/ui/divider'

import { MobileMenu } from './components/mobile-menu'
import styles from './header.module.css'

export const Header = () => (
  <>
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <BrandLogo />
        <MobileMenu />
        <DesktopMenu />
      </div>
      <Divider className={styles.divider} />
    </header>
  </>
)
