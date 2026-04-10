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
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map(({ id, listIndex, name, lastName }) => (
            <tr key={id}>
              <td>{listIndex}</td>
              <td>{id}</td>
              <td>{name}</td>
              <td>{lastName}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
