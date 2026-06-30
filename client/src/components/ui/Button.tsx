import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'alert'
}

export function Button({ variant = 'primary', ...rest }: ButtonProps) {
  const base =
    'transition-transform duration-150 ease-in-out active:scale-95 size-fit py-1 px-2 rounded-sm hover:cursor-pointer' // focus:outline-2 outline-offset-2 focus:outline-red-600/70

  switch (variant) {
    case 'primary':
      return (
        <button
          className={`border border-blue-400 text-gray-100 bg-blue-800 font-bold
            hover:bg-blue-700 ${base}`}
          {...rest}
        />
      )
    case 'secondary':
      return (
        <button
          className={`border border-blue-800 text-blue-200 bg-gray-900 rounded-sm font-bold
            hover:bg-gray-800 ${base}`}
          {...rest}
        />
      )

    case 'alert':
      return (
        <button
          className={`border bg-red-700 border-red-400 text-rose-100 rounded-sm font-bold
            hover:bg-red-600 ${base}`}
          {...rest}
        />
      )
  }
}
