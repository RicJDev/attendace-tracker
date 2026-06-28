import type { PropsWithChildren } from 'react'

interface SimpleBoxProps extends PropsWithChildren {
  grow?: boolean
}

export function SimpleBox({ grow, children }: SimpleBoxProps) {
  return (
    <div
      className={`h-full flex flex-col w-full rounded-md bg-linear-to-r from-lime-500 via-red-500 to-amber-500 p-1 ${grow ? 'flex-1' : ''}`}
    >
      <div className={`h-full w-full rounded-md p-3 bg-lime-200 flex-1`}>{children}</div>
    </div>
  )
}
