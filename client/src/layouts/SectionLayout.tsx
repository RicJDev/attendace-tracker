import './SectionLayout.css'
import type { PropsWithChildren } from 'react'

interface SectionLayoutProps extends PropsWithChildren {
  name: string
}

export function SectionLayout({ name, children }: SectionLayoutProps) {
  return (
    <div className='section-layout'>
      <header>
        <h2>{name}</h2>
      </header>
      {children}
    </div>
  )
}
