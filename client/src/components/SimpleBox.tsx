import type { PropsWithChildren } from 'react'

interface SimpleBoxProps extends PropsWithChildren {
  direction?: 'column' | 'row'
}

export function SimpleBox({ direction = 'column', children }: SimpleBoxProps) {
  switch (direction) {
    case 'column':
      return (
        <div className='flex flex-col justify-around m-auto gap-3 border border-blue-600 p-4 rounded-sm'>
          {children}
        </div>
      )
    case 'row':
      return (
        <div className='flex justify-around m-auto gap-3 border border-blue-600 p-4 rounded-sm'>
          {children}
        </div>
      )
  }
}
