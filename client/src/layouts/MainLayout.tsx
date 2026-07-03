import { Outlet, useLocation } from 'react-router'
import { SideBar } from '../components/SideBar'

const titles: Record<string, string> = {
  '/schedule': 'Horario',
  '/calendar': 'Calendario',
  '/students': 'Listado de Estudiantes',
}

export function MainLayout() {
  const { pathname } = useLocation()

  return (
    <div className='bg-gray-950 min-h-screen max-h-screen flex text-gray-50 p-5 gap-3'>
      <SideBar />

      <div className='flex-1 bg-gray-900 p-3 flex flex-col rounded-sm gap-2'>
        <nav className='flex h-13 justify-center items-center border-b-2 border-b-gray-500'>
          <h3 className='text-3xl font-extrabold'>{titles[pathname] ?? 'Registro de asistencia'}</h3>
        </nav>

        <main className='flex-1 flex flex-col justify-center items-center'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
