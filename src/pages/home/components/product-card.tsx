import { Minus, Plus, ShoppingCart } from 'phosphor-react'

interface ProductCard {
  id: string
  title: string
  description: string
  price: number
  tags: string[]
  image: string
}

export function ProductCard(product: ProductCard) {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="flex h-[310px] w-[256px] flex-col items-center rounded-bl-[6px] rounded-tr-[36px] bg-base-card">
      <img
        src={baseUrl + '/' + product.image}
        alt=""
        className="mb-[12px] mt-[-20px] h-[120px] w-[120px] flex-shrink-0 items-center justify-center"
      />
      <div className="flex justify-center gap-1">
        {product.tags.map((tag: string) => (
          <span
            key={tag}
            className="items-center justify-center rounded-full bg-primary-light px-2 py-1 text-[10px] font-bold uppercase leading-[130%] text-primary-dark"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="mt-[16px] w-[216px] text-center font-ballo2 text-xl font-bold leading-[130%] text-base-subtitle">
        {product.title}
      </span>
      <span className="mt-[8px] w-[216px] text-center text-sm leading-[130%] text-base-label">
        {product.description}
      </span>
      <div className="mt-[33px] flex w-[208px] items-center justify-between">
        <div>
          <span className="text-right text-sm leading-[130%] text-base-text">
            R$
          </span>
          <span className="font-ballo2 text-2xl font-extrabold leading-[130%] text-base-text">
            {product.price.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 rounded-md bg-base-button p-2">
            <button className="text-color">
              <Minus color="var(--secondary)" size={14} />
            </button>
            1
            <button>
              <Plus color="var(--secondary)" size={14} />
            </button>
          </div>
          <button className="rounded-md bg-secondary-dark p-2">
            <ShoppingCart size={22} color="white" />
          </button>
        </div>
      </div>
    </div>
  )
}
