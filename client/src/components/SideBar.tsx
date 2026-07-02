import { NavLink } from 'react-router'
import { SectionList } from './SectionList'
import HomeIcon from '../assets/home.svg?react'
import CalendarIcon from '../assets/calendar.svg?react'
import UserIcon from '../assets/user.svg?react'

export function SideBar() {
  return (
    <aside className='min-h-full w-75 bg-gray-900 flex flex-col rounded-sm p-3 gap-3'>
      <nav className='block bg-gray-800 -mx-3 -mt-3 rounded-tl-sm rounded-tr-sm px-4 py-1'>
        <ul className='flex w-full items-baseline justify-around'>
          <li className='block p-2'>
            <NavLink
              className='flex flex-col justify-center items-center size-10 fill-gray-50 hover:fill-blue-300'
              to='/schedule'
            >
              <HomeIcon />
              <small className='text-xs'>Horario</small>
            </NavLink>
          </li>

          <li className='block p-2'>
            <NavLink
              className='flex flex-col justify-center items-center size-10 fill-gray-50 hover:fill-blue-300'
              to='/calendar'
            >
              <CalendarIcon />
              <small className='text-xs'>Calendario</small>
            </NavLink>
          </li>

          <li className='block p-2'>
            <NavLink
              className='flex flex-col justify-center items-center size-10 fill-gray-50 hover:fill-blue-300'
              to='/students'
            >
              <UserIcon />
              <small className='text-xs'>Estudiantes</small>
            </NavLink>
          </li>
        </ul>
      </nav>

      <SectionList />
    </aside>
  )
}
