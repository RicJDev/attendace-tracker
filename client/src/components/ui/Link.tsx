import type { AnchorHTMLAttributes } from 'react'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function Link({ ...rest }: LinkProps) {
  return (
    <a
      className='underline text-blue-100 hover:text-blue-300 hover:cursor-pointer font-bold'
      {...rest}
    />
  )
}
