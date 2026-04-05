import './MainLayout.css'
import { Header } from '../components/Header'
import { Outlet } from 'react-router'

export function MainLayout() {
  return (
    <div className='container'>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
