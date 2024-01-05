import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function PrimaryButton({ children }: ButtonProps) {
  return (
    <button className="flex w-[8.25rem] items-center justify-center rounded-md bg-primary px-2 py-3 text-sm font-bold uppercase leading-[160%] text-white hover:bg-primary-dark">
      {children}
    </button>
  )
}
