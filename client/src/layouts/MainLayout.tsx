import type { PropsWithChildren } from 'react'
import { Container } from '../layouts/Container'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header />

      <div className='flex-1 h-full w-full px-2'>
        <main className='text-balance max-w-prose mx-auto text-blue-100 flex flex-col justify-center gap-2'>
          {children}
        </main>
      </div>

      <Footer />
    </Container>
  )
}
