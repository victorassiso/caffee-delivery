import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../assets/logo.svg'

export function Header() {
  return (
    <div className="flex items-center justify-between max-w-[1440px] py-8 px-40">
      <img src={logo} alt="Coffee Delivery" className="h-[40px]" />
      <div className="flex gap-3">
        <div className="bg-secondary-light rounded-md flex items-center text-secondary-dark p-2">
          <MapPin color="var(--secondary)" weight="fill" />
          <span>Rio de Janeiro, RJ</span>
        </div>
        <button className="bg-primary-light p-2 rounded-md felx items-center justify-center">
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
