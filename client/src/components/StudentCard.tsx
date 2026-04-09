import "./StudentCard.css"
import type { Student as StudentType } from '../types'

export function StudentCard({ name, lastName, listIndex, id }: StudentType) {
  return (
    <div className='student-card'>
      <p>Estudiante #{listIndex}</p>
      <p>{id}</p>
      <p>{name} {lastName}</p>
    </div>
  )
}
