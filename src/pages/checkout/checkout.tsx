import { AddressForm } from './components/address-form/address-form'
import { PaymentMethod } from './components/payment-method/payment-method'
import { SelectedItemsCard } from './components/selected-items/selected-items-card'

export function Checkout() {
  return (
    <div className="mt-[104px] flex w-full flex-col items-center gap-8 px-[160px] py-10 xl:flex-row xl:items-start">
      <div className="w-full">
        <h2 className="font-ballo2 text-lg font-bold leading-[130%] text-base-subtitle">
          Complete seu pedido
        </h2>
        <div className="mt-[0.9375rem] flex flex-col gap-3">
          <AddressForm />
          <PaymentMethod />
        </div>
      </div>
      <div className="">
        <h2 className="font-ballo2 text-lg font-bold leading-[130%] text-base-subtitle">
          Cafés selecionados
        </h2>
        <SelectedItemsCard />
      </div>
    </div>
  )
}
