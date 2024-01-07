import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import ilustration from '../../assets/illustration.svg'

export function OrderConfirmed() {
  return (
    <div className="mt-[104px] flex w-full flex-col gap-10 px-[160px] py-20">
      <div className="flex flex-col gap-1">
        <span className="font-ballo2 text-[2rem] font-extrabold leading-[130%] text-primary-dark">
          Uhu! Pedido confirmado
        </span>
        <span className="text-xl leading-[130%] text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </span>
      </div>
      {/* Second Row */}
      <div className="flex items-center justify-between">
        {/* Left Content Border */}
        <div className="rounded-bl-[36px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[36px] bg-gradient-to-r from-primary to-secondary">
          {/* Left Content */}
          <div className="m-[1px] flex w-[526px] flex-col items-start gap-8 rounded-bl-[36px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[36px] bg-background p-10">
            {/* Address */}
            <div className="flex items-center justify-center gap-3">
              <div className="rounded-full bg-secondary p-2">
                <MapPin color="white" weight="fill" size={16} />
              </div>
              <div className="flex flex-col leading-[130%] text-base-text ">
                <div className="flex">
                  <span>
                    Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
                  </span>
                </div>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>
            {/* Delivery Time */}
            <div className="flex items-center justify-center gap-3">
              <div className="rounded-full bg-primary p-2">
                <Timer color="white" weight="fill" size={16} />
              </div>
              <div className="flex flex-col leading-[130%] text-base-text ">
                <div className="flex">
                  <span>Previsão de entrega</span>
                </div>
                <strong>20min - 30min</strong>
              </div>
            </div>
            {/* Payment Method */}
            <div className="flex items-center justify-center gap-3">
              <div className="rounded-full bg-primary-dark p-2">
                <CurrencyDollar color="white" size={16} />
              </div>
              <div className="flex flex-col leading-[130%] text-base-text ">
                <div className="flex">
                  <span>Pagamento na entrega</span>
                </div>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </div>
        </div>
        <img
          src={ilustration}
          alt="Devilery person riding a mothocycle with the delivery package"
        />
      </div>
    </div>
  )
}
