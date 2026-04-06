import './MainLayout.css'
import { Header } from '../components/Header'
import type { PropsWithChildren } from 'react'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className='container'>
      <Header />
      <main>{children}</main>
    </div>
  )
}
