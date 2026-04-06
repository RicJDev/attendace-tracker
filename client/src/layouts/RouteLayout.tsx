import './RouteLayout.css'
import { Outlet } from 'react-router'
import { MainLayout } from './MainLayout'
import { useNavigate } from 'react-router'
import { Button } from '../components/Button'

export function RouteLayout() {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <Outlet />
      <Button
        className='back-button'
        onClick={() => navigate(-1)}
      >
        {'<'}
      </Button>
    </MainLayout>
  )
}
