import { BrandLogo } from '@/components/common/brand-logo'
import { SocialNetwork } from '@/components/common/social-network'

import styles from './footer.module.css'

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <BrandLogo />
      <SocialNetwork />
    </div>
  </footer>
)
