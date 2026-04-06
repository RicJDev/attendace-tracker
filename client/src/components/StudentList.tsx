import type { Student as StudentType } from '../types'
import { Student } from './Student'

interface StudentListProps {
  students: StudentType[]
}

export function StudentList({ students }: StudentListProps) {
  return (
    <ul>
      {students.map((student) => (
        <li>
          <Student {...student} />
        </li>
      ))}
    </ul>
  )
}
