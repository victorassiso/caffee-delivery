import { CreditCard, CurrencyDollarSimple } from 'phosphor-react'

export function PaymentMethod() {
  return (
    <div className="flex flex-col gap-8 rounded-md bg-base-card p-10">
      <div className="flex gap-2">
        <CurrencyDollarSimple size={22} color="var(--secondary)" />
        <div className="flex flex-col gap-[2px] leading-[130%]">
          <span className="text-lg text-base-subtitle">Pagamento</span>
          <span className="text-sm text-base-text">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center justify-center gap-3 self-stretch">
        <button className="flex gap-3 rounded-md bg-base-button p-4">
          <CreditCard size={16} color="var(--secondary)" />
          <span className="text-xs uppercase leading-[160%] text-base-text">
            Cartão de Crédito
          </span>
        </button>
        <button className="flex gap-3 rounded-md bg-base-button p-4">
          <CreditCard size={16} color="var(--secondary)" />
          <span className="text-xs uppercase leading-[160%] text-base-text">
            Cartão de Débito
          </span>
        </button>
        <button className="flex grow gap-3 rounded-md bg-base-button p-4">
          <CreditCard size={16} color="var(--secondary)" />
          <span className="text-xs uppercase leading-[160%] text-base-text">
            Dinheiro
          </span>
        </button>
      </div>
    </div>
  )
}
