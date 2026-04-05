import './MainLayout.css'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router'

export function MainLayout() {
  const navigate = useNavigate()
  return (
    <>
      <div className='container'>
        <header>
          <button onClick={() => navigate(-1)}>Atrás</button>
          <button onClick={() => navigate(1)}>Adelante</button>
          <h1>Registro de asistencias</h1>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}
