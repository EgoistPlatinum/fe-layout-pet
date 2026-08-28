import { createBrowserRouter } from 'react-router-dom'

import { MarketingLayout } from '@/app/layouts/marketing-layout'
import { ErrorPage } from '@/pages/error-page'
import { NotFoundPage } from '@/pages/not-found-page'

export const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <>HomePage</>,
      },
      {
        path: '/mobile-menu',
        element: <>MenuPage</>,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
