import { ICartItem } from '../../../../contexts/cart-context-provider'
import { CartItem } from './cart-item'

interface SelectedItemsCardProps {
  items: ICartItem[]
}

export function SelectedItemsCard({ items }: SelectedItemsCardProps) {
  return (
    <div className="mt-[0.9375rem] w-[448px] rounded-bl-[44px] rounded-br-md rounded-tl-md rounded-tr-[44px] bg-base-card p-10">
      {items.map((item) => (
        <div key={item.id}>
          <CartItem {...item} />
        </div>
      ))}

      <div className="flex flex-col gap-3 leading-[130%] text-base-text">
        <div className="flex items-center justify-between">
          <span className="text-sm">Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div className="flex items-center justify-between text-xl font-bold">
          <span className="">Total</span>
          <span>R$ 33,20</span>
        </div>
      </div>

      <button className="mt-6 flex w-[368px] items-center justify-center rounded-md bg-primary px-2 py-3 text-sm font-bold uppercase leading-[160%] text-white duration-300 hover:bg-primary-dark">
        Confirmar Pedido
      </button>
    </div>
  )
}
