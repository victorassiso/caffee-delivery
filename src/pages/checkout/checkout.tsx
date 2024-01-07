import expressoTradicional from '../../../public/images/coffees/expresso.png'
import latte from '../../../public/images/coffees/latte.png'
import { SelectedItemsCard } from './components/selected-items/selected-items-card'

const items = [
  {
    id: '1',
    title: 'Expresso Tradicional',
    image: expressoTradicional,
    price: 9.9,
    quantity: 2,
  },
  {
    id: '2',
    title: 'Latte',
    image: latte,
    price: 11.9,
    quantity: 1,
  },
]

export function Checkout() {
  return (
    <div className="mt-[104px] flex w-full flex-col items-center gap-8 px-[160px] py-10 xl:flex-row xl:items-start">
      <div className="w-full">
        <h2 className="font-ballo2 text-lg font-bold leading-[130%] text-base-subtitle">
          Complete seu pedido
        </h2>
        <div className="mt-[0.9375rem] flex flex-col gap-3">
          <div className="bg-base-card p-10">a</div>
          <div className="bg-base-card p-10">b</div>
        </div>
      </div>
      <div className="">
        <h2 className="font-ballo2 text-lg font-bold leading-[130%] text-base-subtitle">
          Cafés selecionados
        </h2>
        <SelectedItemsCard items={items} />
      </div>
    </div>
  )
}
