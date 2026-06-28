import type { PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren) {
  return (
    <div
      className='flex flex-col gap-2 min-h-screen w-full p-3 bg-linear-to-b from-lime-700 via-amber-400 to-red-500'
    >
      {children}
    </div>
  )
}
