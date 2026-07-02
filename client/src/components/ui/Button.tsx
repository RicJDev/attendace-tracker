import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'alert' | 'disabled'
}

export function Button({ variant = 'primary', ...rest }: ButtonProps) {
  switch (variant) {
    case 'primary':
      return (
        <button
          className='border-blue-400 text-gray-100 bg-blue-800 font-bold hover:bg-blue-700'
          {...rest}
        />
      )
    case 'secondary':
      return (
        <button
          className='bg-blue-900/30 border-blue-800 text-blue-200 font-bold hover:bg-blue-900/60'
          {...rest}
        />
      )
    case 'alert':
      return (
        <button
          className='bg-red-700 border-red-400 text-rose-100 font-bold hover:bg-red-600'
          {...rest}
        />
      )
    case 'disabled':
      return (
        <button
          className='border-gray-600 text-gray-400 bg-gray-700 font-bold hover:bg-none hover:cursor-not-allowed active:scale-none'
          {...rest}
        />
      )
  }
}
