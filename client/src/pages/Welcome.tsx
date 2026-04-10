import './Welcome.css'
import { Button } from '../components/Button'
import { SectionLayout } from '../layouts/SectionLayout'
import { useNavigate } from 'react-router'

export function Welcome() {
  const navigate = useNavigate()

  return (
    <SectionLayout name='Hola Ingeniero Profesor'>
      <div className='welcome-container'>
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
      </div>
    </SectionLayout>
  )
}
