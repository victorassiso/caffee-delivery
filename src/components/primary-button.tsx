import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function PrimaryButton({ children }: ButtonProps) {
  return (
    <button className="flex w-[8.25rem] py-3 px-2 bg-primary rounded-md items-center justify-center text-sm leading-[160%] uppercase text-white font-bold hover:bg-primary-dark">
      {children}
    </button>
  )
}
