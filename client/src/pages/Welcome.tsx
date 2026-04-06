import './Welcome.css'
import { Button } from '../components/Button'
import { MainLayout } from '../layouts/MainLayout'
import { useNavigate } from 'react-router'

export function Welcome() {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <h2>Hola Ingeniero Profesor</h2>

      <nav className='welcome-nav'>
        <ul>
          <li>
            <Button
              className='welcome-button'
              onClick={() => navigate('/daily')}
            >
              Empezar registro diario
            </Button>
          </li>
          <li>
            <Button
              className='welcome-button'
              onClick={() => navigate('/history')}
            >
              Ver historial de registros
            </Button>
          </li>
          <li>
            <Button
              className='welcome-button'
              onClick={() => navigate('/students')}
            >
              Ver listado de estudiantes
            </Button>
          </li>
        </ul>
      </nav>
    </MainLayout>
  )
}
