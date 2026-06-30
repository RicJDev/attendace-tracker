import type { PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren) {
  return (
    <div
      className='flex flex-col gap-2 min-h-screen w-full p-3 bg-gray-900'
    >
      {children}
    </div>
  )
}
