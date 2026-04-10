import type { Student } from '../types'
import { mockStudents } from '../mock/students'

const SIMULATED_DELAY_MS = 800

export const getStudents = (): Promise<Student[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockStudents]) // Retorna una copia para evitar mutaciones
    }, SIMULATED_DELAY_MS)
  })
}
