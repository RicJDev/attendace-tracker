import type { PropsWithChildren } from 'react'

export function Stack({ children }: PropsWithChildren) {
  return <div className='flex flex-col justify-start gap-2 w-full h-full'>{children}</div>
}
