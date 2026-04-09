import './Daily.css'
import type { Student as StudentType } from '../types'
import { useEffect, useState } from 'react'
import { StudentCard } from '../components/StudentCard'
import { SectionLayout } from '../layouts/SectionLayout'
import { getStudents } from '../services/studentsService'
import { useNavigate } from 'react-router'
import { StudentList } from '../components/StudentList'

interface DailyProps {
  students: StudentType[]
}

/*
- [ ] Obtener el listado de estudiantes desde el servidor
- [ ] Mostrar pantalla de carga
- [ ] Indicar que se puede empezar
- [ ] Mencionar los estudiantes uno a uno
- [ ] Registrar el estatus de su asistencia
- [ ] Enviar los datos al servidor
*/

export function Daily({}: DailyProps) {
  const [students, setStudents] = useState<StudentType[]>([])
  const [current, setCurrent] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleNext = () => {
    setCurrent(current + 1)
  }

  useEffect(() => {
    getStudents().then((data) => {
      setStudents(data)
      setIsLoading(false)
    })
  })

  if (isLoading) {
    return (
      <SectionLayout name='Registro Diario'>
        <p>Cargando data de los estudiantes...</p>
      </SectionLayout>
    )
  }

  return (
    <>
      <SectionLayout name='Registro Diario'>
        <div className='daily'>
          {current < students.length ? (
            <>
              <StudentList students={students} />
              <StudentCard {...students[current]} />

              <div className='button-panel'>
                <button onClick={handleNext}>Asistente</button>
                <button onClick={handleNext}>Inasistente</button>
                <button onClick={handleNext}>Justificado</button>
              </div>
            </>
          ) : (
            <>
              <p>No hay mas estudiantes para registrar</p>
              <button onClick={() => setCurrent(0)}>
                Empezar registro nuevamente
              </button>

              <button onClick={() => navigate('/')}>Enviar registro</button>
            </>
          )}
        </div>
      </SectionLayout>
    </>
  )
}
