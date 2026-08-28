import { BrandLogo } from '@/components/common/brand-logo'
import { Divider } from '@/components/ui/divider'

import { MobileMenu } from './components/mobile-menu'
import styles from './header.module.css'

export const Header = () => (
  <>
    <header className={styles.header}>
      <BrandLogo />
      <MobileMenu />
    </header>
    <Divider className={styles.divider} />
  </>
)
