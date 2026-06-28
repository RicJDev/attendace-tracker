import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'alert'
}

export function Button({ variant = 'primary', ...rest }: ButtonProps) {
  const base =
    'transition-transform duration-150 ease-in-out active:scale-95 size-fit py-1 px-2 rounded-sm' // focus:outline-2 outline-offset-2 focus:outline-red-600/70

  switch (variant) {
    case 'primary':
      return (
        <button
          className={`border-2 border-lime-900 text-amber-100 bg-lime-800 font-bold
            hover:bg-lime-700 ${base}`}
          {...rest}
        />
      )
    case 'secondary':
      return (
        <button
          className={`border-2 border-lime-800 text-lime-900 bg-amber-100 rounded-sm font-bold
            hover:bg-amber-200 ${base}`}
          {...rest}
        />
      )
    case 'tertiary':
      return (
        <button
          className={`border border-lime-700 text-lime-900 bg-amber-50 rounded-sm
            hover:bg-amber-100  ${base}`}
          {...rest}
        />
      )
    case 'alert':
      return (
        <button
          className={`border bg-red-600 border-red-800 text-rose-200 rounded-sm font-bold
            hover:bg-red-500 ${base}`}
          {...rest}
        />
      )
  }
}
