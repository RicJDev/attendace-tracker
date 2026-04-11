import './Debug.css'
import type { PropsWithChildren } from 'react'

export function Debug({ children }: PropsWithChildren) {
  return (
    <>
      <header className='debug-header'>
        <h1>Debug Page</h1>
      </header>

      {children}
    </>
  )
}
