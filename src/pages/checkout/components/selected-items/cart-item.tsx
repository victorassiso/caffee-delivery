import { useContext } from 'react'

import { QuantityCard } from '../../../../components/quantity-card'
import { RemoveButton } from '../../../../components/remove-button'
import {
  CartContext,
  ICartItem,
} from '../../../../contexts/cart-context-provider'

export function CartItem({ id }: ICartItem) {
  const { products } = useContext(CartContext)
  const product = products.find((product) => product.id === id)
  const baseUrl = import.meta.env.BASE_URL

  return (
    <>
      <div className="flex items-start justify-between px-1 py-2 leading-[130%] ">
        <div className="flex items-center gap-5">
          <img
            src={baseUrl + '/' + product?.image}
            alt=""
            className="h-16 w-16"
          />
          <div className="flex flex-col gap-2">
            <span className="text-base-subtitle">{product?.title}</span>
            <div className="flex gap-2">
              <QuantityCard id={id} />
              <RemoveButton id={id}>Remover</RemoveButton>
            </div>
          </div>
        </div>
        <span className="flex font-bold leading-[130%] text-base-text">
          R$ {product?.price}
        </span>
      </div>
      <div className="my-6 border-t-2 border-base-button" />
    </>
  )
}
