import facebookIcon from '@/assets/icon/fb.svg'
import indeedIcon from '@/assets/icon/indeed.svg'
import instagramIcon from '@/assets/icon/instagram.svg'
import twitterIcon from '@/assets/icon/twit.svg'

export interface SocialItem {
  icon: string
  link: string
  name: string
}

export const socialItems: SocialItem[] = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com',
    icon: instagramIcon,
  },
  {
    name: 'Indeed',
    link: 'https://www.indeed.com',
    icon: indeedIcon,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com',
    icon: facebookIcon,
  },
  {
    name: 'Twitter',
    link: 'https://www.twitter.com',
    icon: twitterIcon,
  },
]
