import { QuantityCard } from '../../../../components/quantity-card'
import { RemoveButton } from '../../../../components/remove-button'

export interface SelectedItemProps {
  id: string
  title: string
  price: number
  image: string
  quantity: number
}

export function SelectedItem({
  title,
  price,
  image,
  quantity,
}: SelectedItemProps) {
  return (
    <>
      <div className="flex items-start justify-between px-1 py-2 leading-[130%] ">
        <div className="flex items-center gap-5">
          <img src={image} alt="" className="h-16 w-16" />
          <div className="flex flex-col gap-2">
            <span className="text-base-subtitle">{title}</span>
            <div className="flex gap-2">
              <QuantityCard quantity={quantity} />
              <RemoveButton>Remover</RemoveButton>
            </div>
          </div>
        </div>
        <span className="flex font-bold leading-[130%] text-base-text">
          R$ {price}
        </span>
      </div>
      <div className="my-6 border-t-2 border-base-button" />
    </>
  )
}
