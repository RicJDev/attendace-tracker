import './Daily.css'
import { useEffect, useState } from 'react'
import { getStudents } from '../services/studentsService'
import { useNavigate } from 'react-router'
// import { StudentCard } from '../components/StudentCard'
import { SectionLayout } from '../layouts/SectionLayout'
import { StudentList } from '../components/StudentList'
import { Button } from '../components/Button'
import { Loading } from '../layouts/Loading'
import type { Student as StudentType } from '../types'

/*
TODO:
- [-] Obtener el listado de estudiantes desde el servidor
- [x] Mostrar pantalla de carga
- [ ] Indicar que se puede empezar
- [x] Mencionar los estudiantes uno a uno
- [ ] Registrar el estatus de su asistencia
- [ ] Enviar los datos al servidor
*/

export function Daily() {
  const date = new Date()
  const name = `Registro Diario (${date.getDate()}/${date.getMonth()}/${date.getFullYear()})`
  const [students, setStudents] = useState<StudentType[]>([])
  const [current, setCurrent] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const handleSend = () => {
    alert(
      'Los datos se estan mandando... no se a donde, pero se estan mandando',
    )
    navigate('/')
  }
  const handleRestart = () => {
    const restart = confirm(
      'Se reiniciara el registro. Los datos ingresados se perderan',
    )

    if (restart) {
      setCurrent(0)
    }
  }

  const handleNext = () => setCurrent(current + 1)
  useEffect(() => {
    getStudents().then((data) => {
      setStudents(data)
      setIsLoading(false)
    })
  })

  if (isLoading)
    return <Loading message='Cargando data de los estudiantes...' />

  return (
    <SectionLayout name={name}>
      <article className='daily-container'>
        <StudentList students={students} />

        {current < students.length ? (
          <div className='daily-panel'>
            {/* <StudentCard {...students[current]} /> */}
            <p>{`${students[current].listIndex}: ${students[current].name} ${students[current].lastName}`}</p>

            <div className='buttons'>
              <Button onClick={handleNext}>Asistente</Button>
              <Button onClick={handleNext}>Inasistente</Button>
              <Button onClick={handleNext}>Justificado</Button>
            </div>
          </div>
        ) : (
          <div className='daily-panel'>
            <p>Registro diario completado!</p>

            <div className='buttons'>
              <Button onClick={handleRestart}>Reiniciar registro</Button>
              <Button onClick={handleSend}>Enviar registro</Button>
            </div>
          </div>
        )}
      </article>
    </SectionLayout>
  )
}
