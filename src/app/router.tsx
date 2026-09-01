import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/app/layouts/app-layout'
import { ErrorPage } from '@/pages/error-page'
import { MainPage } from '@/pages/main-page'
import { NotFoundPage } from '@/pages/not-found-page'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
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
