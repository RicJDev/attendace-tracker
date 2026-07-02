import type { PropsWithChildren } from 'react'

import { SideBar } from '../components/SideBar'

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className='bg-gray-950 min-h-screen flex text-gray-50 p-3 gap-3'>
      <SideBar />

      <div className='flex-1 bg-gray-900 p-3 flex flex-col rounded-sm gap-2'>
        <nav className='flex h-12 justify-center items-center border-b border-b-gray-500'>
          <h3>Hey</h3>
        </nav>

        <main className='flex-1 flex flex-col'>{children}</main>
      </div>
    </div>
  )
}
