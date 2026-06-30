import type { PropsWithChildren } from 'react'
import { Container } from '../layouts/Container'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Header />

      <main className='flex-1 px-2 text-balance my-3 max-w-prose mx-auto text-blue-100 flex flex-col gap-2'>
        {children}
      </main>

      <Footer />
    </Container>
  )
}
