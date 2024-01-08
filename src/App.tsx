import { RouterProvider } from 'react-router-dom'

import { CartContextProvider } from './contexts/cart-context-provider'
import { router } from './router'

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  )
}

export default App
