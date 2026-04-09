import './StudentList.css'
import type { Student as StudentType } from '../types'

interface StudentListProps {
  students: StudentType[]
}

export function StudentList({ students }: StudentListProps) {
  return (
    <div className='student-list'>
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Apellido</th>
          </tr>
        </thead>
        <tbody>
          {students.map(({ id, listIndex, name, lastName }) => (
            <tr key={id}>
              <td>{listIndex}</td>
              <td>{name}</td>
              <td>{lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
