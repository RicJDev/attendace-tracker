import './StudentCard.css'
import type { Student as StudentType } from '../types'

export function StudentCard({ name, lastName, listIndex }: StudentType) {
  return (
    <div className='student-card'>
      <p>
        #{listIndex}: {name} {lastName}
      </p>
    </div>
  )
}
