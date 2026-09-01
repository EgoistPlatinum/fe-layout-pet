export interface NavigationItem {
  label: string
  path: string
}

export const routes = {
  about: '/about-us',
  blog: '/blog',
  contact: '/contact',
  home: '/',
  login: '/login',
  menu: '/menu',
  pricing: '/pricing',
  signup: '/signup',
  getStarted: '/get-started',
  goPro: '/go-pro',
} as const

export const headerNavigationItems: NavigationItem[] = [
  {
    label: 'Menu',
    path: routes.menu,
  },
  {
    label: 'Blog',
    path: routes.blog,
  },
  {
    label: 'Pricing',
    path: routes.pricing,
  },
  {
    label: 'Contact',
    path: routes.contact,
  },
]

export const footerNavigationItems: NavigationItem[] = [
  {
    label: 'Blog',
    path: routes.blog,
  },
  {
    label: 'Pricing',
    path: routes.pricing,
  },
  {
    label: 'About us',
    path: routes.about,
  },
  {
    label: 'Contact',
    path: routes.contact,
  },
]
