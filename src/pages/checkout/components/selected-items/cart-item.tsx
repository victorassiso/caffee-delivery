import { QuantityCard } from '../../../../components/quantity-card'
import { RemoveButton } from '../../../../components/remove-button'
import { IProduct } from '../../../../contexts/cart-context-provider'

export interface CartItemProps extends IProduct {
  quantity: number
}
export function CartItem(props: CartItemProps) {
  const { id, image, title, price } = props
  const baseUrl = import.meta.env.BASE_URL

  return (
    <>
      <div className="flex items-start justify-between px-1 py-2 leading-[130%] ">
        <div className="flex items-center gap-5">
          <img src={baseUrl + '/' + image} alt="" className="h-16 w-16" />
          <div className="flex flex-col gap-2">
            <span className="text-base-subtitle">{title}</span>
            <div className="flex gap-2">
              <QuantityCard id={id} />
              <RemoveButton id={id}>Remover</RemoveButton>
            </div>
          </div>
        </div>
        <span className="flex font-bold leading-[130%] text-base-text">
          R$ {price.toFixed(2)}
        </span>
      </div>
      <div className="my-6 border-t-2 border-base-button" />
    </>
  )
}
