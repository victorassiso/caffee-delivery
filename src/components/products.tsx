import { coffees } from '../data/products.json'
import { ProductCard } from './product-card'

export function Products() {
  return (
    <div className="flex w-full flex-shrink-0 flex-col items-start gap-[54px] px-[160px] pb-[157px] pt-[32px]">
      <h1 className="font-ballo2 text-[2rem] leading-[130%]">Nossos cafés</h1>
      <div className="flex flex-row flex-wrap gap-[32px]">
        {coffees.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}
