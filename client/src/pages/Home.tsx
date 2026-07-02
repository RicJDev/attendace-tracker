import { useState } from 'react'
import { Container } from '../layouts/Container'
import { Button } from '../components/ui/Button'
import { Modal } from '../components/ui/Modal'
import { NavLink } from 'react-router'

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Container>
      <h1 className='text-4xl font-bold'>Attendance Tracker</h1>
      <p className='text-gray-400'>
        Bienvenido al sistema de registro de asistencias.
      </p>

      <NavLink to='/schedule'>Horario</NavLink>

      <Button
        variant='primary'
        onClick={() => setIsModalOpen(true)}
      >
        Mensaje del sistema
      </Button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Aviso del sistema'
      >
        <p>
          Aquí se mostrarán mensajes relevantes del sistema, como
          notificaciones, errores o confirmaciones.
        </p>
      </Modal>
    </Container>
  )
}
