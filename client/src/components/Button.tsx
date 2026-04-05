import './Button.css'
import type { ButtonHTMLAttributes } from 'react'

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <>
      <button
        className='custom-button'
        {...props}
      ></button>
    </>
  )
}
