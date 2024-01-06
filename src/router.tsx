import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/app'
import { Checkout } from './pages/checkout/checkout'
import { Home } from './pages/home/home'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/checkout', element: <Checkout /> },
      ],
    },
  ],
  { basename: '/coffee-delivery' },
)
