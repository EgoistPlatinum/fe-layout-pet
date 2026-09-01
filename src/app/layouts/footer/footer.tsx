import { Copyright } from '@/app/layouts/footer/components/copyright'
import { BrandLogo } from '@/components/common/brand-logo'
import { NavigateActions } from '@/components/common/navigate-actions'
import { SocialNetwork } from '@/components/common/social-network'
import { Divider } from '@/components/ui/divider'
import { footerNavigationItems, socialItems } from '@/config'

import styles from './footer.module.css'

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <div className={styles.brandLogo}>
        <BrandLogo />
      </div>

      <SocialNetwork className={styles.socialNetwork} items={socialItems} />

      <nav className={styles.navItems} aria-label="Навигация в подвале">
        <NavigateActions
          className="uppercase"
          navigationItems={footerNavigationItems}
        />
      </nav>

      <Divider className={styles.divider} />

      <div className={styles.copyright}>
        <Copyright />
      </div>
    </div>
  </footer>
)
