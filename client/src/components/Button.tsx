import './Button.css'
import type { ButtonHTMLAttributes } from 'react'

export function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...rest } = props
  return (
    <>
      <button
        {...rest}
        className={`custom-button ${className ?? ''}`}
      ></button>
    </>
  )
}
