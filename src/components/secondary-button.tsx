import { Trash } from 'phosphor-react'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SecondaryButton({ children }: ButtonProps) {
  return (
    <button className="uppercase bg-base-button h-8 flex shrink-0 items-center gap-1 rounded-md text-base-text leading-[160%] px-2 hover:bg-base-hover">
      <Trash className="text-secondary w-4 h-4" />
      {children}
    </button>
  )
}
