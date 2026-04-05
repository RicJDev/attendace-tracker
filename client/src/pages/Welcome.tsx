import { NavLink } from 'react-router'

export function Welcome() {
  return (
    <>
      <h2>Hola Ingeniero Profesor</h2>
      <nav>
        <ul>
          <li>
            <NavLink to='daily'>Empezar registro diario</NavLink>
          </li>
          <li>
            <NavLink to='history'>Ver historial de registros</NavLink>
          </li>
          <li>
            <NavLink to='students'>Ver listado de estudiantes</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
