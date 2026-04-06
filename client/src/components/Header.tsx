import './Header.css'
import { NavLink } from 'react-router'

export function Header() {
  return (
    <header className='main-header'>
      <NavLink to='/'>
        <h1>Registro de asistencias</h1>
      </NavLink>
    </header>
  )
}
