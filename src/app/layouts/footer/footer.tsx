import { BrandLogo } from '@/components/common/brand-logo'
import { NavigateActions } from '@/components/common/navigate-actions'
import { SocialNetwork } from '@/components/common/social-network'
import { Divider } from '@/components/ui/divider'
import { footerNavigationItems, socialItems } from '@/config'

import styles from './footer.module.css'

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <BrandLogo />
      <SocialNetwork items={socialItems} />
    </div>
    <div className={styles.navItems}>
      <NavigateActions
        className="uppercase"
        navigationItems={footerNavigationItems}
      />
    </div>
    <Divider className="bg-[#CBCBCB]" />
  </footer>
)
