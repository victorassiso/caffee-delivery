import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import bannerImg from '../../../assets/banner-img.svg'

export function Banner() {
  return (
    <div className="flex h-[544px] w-full items-center justify-center gap-14 bg-[url('../src/assets/background.svg')] px-[160px] py-[92px]">
      <div className="flex flex-col gap-[66px]">
        <div className="flex flex-col gap-4">
          <h1 className="font-ballo2 text-5xl font-bold leading-[130%] text-base-title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <span className="self-stretch text-xl leading-[130%] text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary-dark p-2">
                <ShoppingCart size={16} color="white" weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-base-text p-2">
                <Package size={16} color="white" weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-primary p-2">
                <Timer size={16} color="white" weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-secondary p-2">
                <Coffee size={16} color="white" weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
          </div>
        </div>
      </div>
      <img
        src={bannerImg}
        alt="Cup of Caffee and grains"
        className="h-[360px] w-[476px]"
      />
    </div>
  )
}
