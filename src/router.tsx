import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/app'
import { Checkout } from './pages/checkout/checkout'
import { Home } from './pages/home/home'
import { OrderConfirmed } from './pages/order-confirmed/order-confirmed'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/checkout', element: <Checkout /> },
        { path: '/order-confirmed', element: <OrderConfirmed /> },
      ],
    },
  ],
  { basename: '/coffee-delivery' },
)
