import { Banner } from '../components/banner'
import { Products } from '../components/products'

export function Home() {
  return (
    <div className="mt-[104px] flex w-full flex-col items-center">
      <Banner />
      <Products />
    </div>
  )
}
