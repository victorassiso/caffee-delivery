import { MapPinLine } from 'phosphor-react'

import { Input } from './components/input'

export function AddressForm() {
  return (
    <div className="flex flex-col gap-8 bg-base-card p-10">
      <div className="flex gap-2">
        <MapPinLine color="var(--primary-dark)" size={22} />
        <div className="flex flex-col leading-[130%]">
          <span className="">Endereço de Entrega</span>
          <span className="text-sm text-base-text">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </div>
      <form action="" className="flex flex-col gap-4 text-sm leading-[130%]">
        <Input id="CEP" type="text" placeholder="CEP" className="w-[200px]" />
        <Input id="street" type="text" placeholder="Rua" className="" />
        <div className="flex gap-3">
          <Input id="number" type="text" placeholder="Número" />
          <Input id="complement" type="text" placeholder="Complemento" />
        </div>
        <div className="flex gap-3">
          <Input id="neighborhood" type="text" placeholder="Bairro" />
          <Input id="city" type="text" placeholder="Cidade" />
          <Input id="UF" type="text" placeholder="UF" />
        </div>
      </form>
    </div>
  )
}
