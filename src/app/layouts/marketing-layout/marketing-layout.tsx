import { Outlet } from 'react-router-dom'

import { Footer } from '../footer'
import { Header } from '../header'

export const MarketingLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
