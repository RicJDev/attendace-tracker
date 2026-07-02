import type { PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren) {
  return (
    <div
      className='flex flex-col gap-2 min-h-screen w-full p-3 bg-gray-800 items-center justify-center text-gray-50'
    >
      {children}
    </div>
  )
}
