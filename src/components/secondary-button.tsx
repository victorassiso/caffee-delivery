import { Trash } from 'phosphor-react'
import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function SecondaryButton({ children }: ButtonProps) {
  return (
    <button className="flex h-8 shrink-0 items-center gap-1 rounded-md bg-base-button px-2 uppercase leading-[160%] text-base-text hover:bg-base-hover">
      <Trash className="h-4 w-4 text-secondary" />
      {children}
    </button>
  )
}
