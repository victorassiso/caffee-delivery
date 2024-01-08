import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo.svg'
import { CartContext } from '../contexts/cart-context-provider'

export function Header() {
  const { cartState } = useContext(CartContext)

  return (
    <div className="fixed flex w-full max-w-[1440px] justify-between bg-background px-40 py-8">
      <Link to="/">
        <img src={logo} alt="Coffee Delivery" className="h-[40px]" />
      </Link>
      <div className="flex gap-3">
        <div className="flex items-center rounded-md bg-secondary-light p-2 text-secondary-dark">
          <MapPin color="var(--secondary)" weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </div>
        <Link
          to="/checkout"
          className="flex items-center justify-center rounded-md bg-primary-light p-2"
        >
          <ShoppingCart
            color="var(--primary-dark)"
            weight="fill"
            className="h-[1.375rem] w-[1.375rem]"
          />
          {cartState.cart.length ? (
            <div className="absolute right-[9.5rem] top-6 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary-dark text-center text-xs font-bold leading-[130%] tracking-[-0.72px] text-white">
              {cartState.cart.length}
            </div>
          ) : (
            <></>
          )}
        </Link>
      </div>
    </div>
  )
}
