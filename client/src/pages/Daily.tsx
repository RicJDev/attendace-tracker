import './Daily.css'
import type { Student } from '../types'
import { mockStudents } from '../mock/students'
import { StudentList } from '../components/StudentList'

interface DailyProps {
  students: Student[]
}

/*
- Obtener el listado de estudiantes desde el servidor
- Mencionarlos uno a uno
- Registrar el estatus de su asistencia
- Enviar los datos al servidor
*/

export function Daily({}: DailyProps) {
  return (
    <>
      <h2>Registro diario</h2>
      <StudentList students={mockStudents} />
    </>
  )
}
