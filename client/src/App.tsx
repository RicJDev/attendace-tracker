import { NavLink } from 'react-router'
import './App.css'

function App() {
  return (
    <>
      <div className='container'>
        <h1>Hola Ingeniero Profesor</h1>
        <nav>
          <NavLink to='daily'>Empezar registro diario</NavLink>
          <NavLink to='students'>Ver listado de estudiantes</NavLink>
          <NavLink to='history'>Ver historial de registros</NavLink>
        </nav>
      </div>
    </>
  )
}

export default App
