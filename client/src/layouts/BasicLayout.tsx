import './BasicLayout.css'
import { Outlet } from 'react-router'

export function BasicLayout() {
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
