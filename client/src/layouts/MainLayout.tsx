import './MainLayout.css'
import { Outlet } from 'react-router'

export function MainLayout() {
  return (
    <>
      <div className='container'>
        <header>
          <h1>Registro de asistencias</h1>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}
