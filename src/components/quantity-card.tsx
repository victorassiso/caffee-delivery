import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'

import { CartContext } from '../contexts/cart-context-provider'

interface QuanrityCardProps {
  id: string
}

export function QuantityCard({ id }: QuanrityCardProps) {
  const {
    handleIncrementItemQuantity,
    handleDecrementItemQuantity,
    cartState,
  } = useContext(CartContext)
  const item = cartState.cart.find((item) => item.id === id)

  return (
    <div className="flex h-8 items-center justify-center gap-1 rounded-md bg-base-button p-2 leading-[130%]">
      <button
        className="text-color"
        onClick={() => handleDecrementItemQuantity(id)}
      >
        <Minus color="var(--secondary)" size={14} />
      </button>
      {item ? item.quantity : 0}
      <button>
        <Plus
          color="var(--secondary)"
          size={14}
          onClick={() => handleIncrementItemQuantity(id)}
        />
      </button>
    </div>
  )
}
