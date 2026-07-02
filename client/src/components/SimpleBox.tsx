import type { PropsWithChildren } from 'react'

interface SimpleBoxProps extends PropsWithChildren {
  direction?: 'column' | 'row'
}

export function SimpleBox({ direction = 'column', children }: SimpleBoxProps) {
  switch (direction) {
    case 'column':
      return (
        <div className='box flex-col border border-blue-600'>
          {children}
        </div>
      )
    case 'row':
      return (
        <div className='box border border-blue-600'>
          {children}
        </div>
      )
  }
}
