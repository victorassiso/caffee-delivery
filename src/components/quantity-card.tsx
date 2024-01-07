import { Minus, Plus } from 'phosphor-react'

interface QuantityCardProps {
  quantity: number
}

export function QuantityCard({ quantity }: QuantityCardProps) {
  return (
    <div className="flex h-8 items-center justify-center gap-1 rounded-md bg-base-button p-2 leading-[130%]">
      <button className="text-color">
        <Minus color="var(--secondary)" size={14} />
      </button>
      {quantity}
      <button>
        <Plus color="var(--secondary)" size={14} />
      </button>
    </div>
  )
}
