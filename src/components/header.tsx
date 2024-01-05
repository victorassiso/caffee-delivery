import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../assets/logo.svg'

export function Header() {
  return (
    <div className="fixed flex w-full max-w-[1440px] justify-between px-40 py-8">
      <img src={logo} alt="Coffee Delivery" className="h-[40px]" />
      <div className="flex gap-3">
        <div className="flex items-center rounded-md bg-secondary-light p-2 text-secondary-dark">
          <MapPin color="var(--secondary)" weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </div>
        <button className="felx items-center justify-center rounded-md bg-primary-light p-2">
          <ShoppingCart
            color="var(--primary-dark)"
            weight="fill"
            className="h-[1.375rem] w-[1.375rem]"
          />
        </button>
      </div>
    </div>
  )
}
