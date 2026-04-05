import './Header.css'
import { Button } from '../components/Button'
import { useNavigate } from 'react-router'

export function Header() {
  const navigate = useNavigate()

  return (
    <header className='main-header'>
      <Button onClick={() => navigate(-1)}>{'<'}</Button>
      <h1>Registro de asistencias</h1>
      <Button onClick={() => navigate(1)}>{'>'}</Button>
    </header>
  )
}
