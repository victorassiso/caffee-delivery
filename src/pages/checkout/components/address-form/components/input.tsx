type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input({ className, ...props }: InputProps) {
  return (
    <div className="flex grow items-center rounded-[4px] border border-base-button bg-base-input">
      <input
        {...props}
        className={
          'flex grow  bg-base-input p-3 placeholder:text-base-label ' +
          className
        }
      />
    </div>
  )
}
