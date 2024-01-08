import { Trash } from 'phosphor-react'
import React, { useContext } from 'react'

import { CartContext } from '../contexts/cart-context-provider'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  id: string
}

export function RemoveButton({ id, ...props }: ButtonProps) {
  const { removeItem } = useContext(CartContext)
  return (
    <button
      className="flex h-8 shrink-0 items-center gap-1 rounded-md bg-base-button px-2 uppercase leading-[160%] text-base-text hover:bg-base-hover"
      {...props}
      onClick={() => removeItem(id)}
    >
      <Trash className="h-4 w-4 text-secondary" />
      Remover
    </button>
  )
}
