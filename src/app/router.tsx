import { createBrowserRouter } from 'react-router-dom'

import { MarketingLayout } from '@/app/layouts/marketing-layout'

export const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: [
      {
        index: true,
        element: <>HomePage</>,
      },
      {
        path: '/menu',
        element: <>MenuPage</>,
      },
    ],
  },
])
