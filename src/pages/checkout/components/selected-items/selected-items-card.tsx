import { useContext } from 'react'

import { CartContext } from '../../../../contexts/cart-context-provider'
import { CartItem, CartItemProps } from './cart-item'

export function SelectedItemsCard() {
  const { products, cartState } = useContext(CartContext)

  const productsInCart: CartItemProps[] = cartState.cart.map((item) => {
    const product = products.find((product) => product.id === item.id)

    if (!product) {
      throw new Error('Invalid product.')
    }

    return {
      ...product,
      quantity: item.quantity,
    }
  })

  const CartPrice = productsInCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  return (
    <div className="mt-[0.9375rem] w-[448px] rounded-bl-[44px] rounded-br-md rounded-tl-md rounded-tr-[44px] bg-base-card p-10">
      {productsInCart.map((productInCart) => (
        <CartItem key={productInCart.id} {...productInCart} />
      ))}

      <div className="flex flex-col gap-3 leading-[130%] text-base-text">
        <div className="flex items-center justify-between">
          <span className="text-sm">Total de itens</span>
          <span>R$ {CartPrice.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div className="flex items-center justify-between text-xl font-bold">
          <span className="">Total</span>
          <span>R$ {(CartPrice + 3.5).toFixed(2)}</span>
        </div>
      </div>

      <button className="mt-6 flex w-[368px] items-center justify-center rounded-md bg-primary px-2 py-3 text-sm font-bold uppercase leading-[160%] text-white duration-300 hover:bg-primary-dark">
        Confirmar Pedido
      </button>
    </div>
  )
}
