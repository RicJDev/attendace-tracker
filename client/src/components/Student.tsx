import type { Student as StudentType } from '../types'

export function Student({ name, lastName }: StudentType) {
  return (
    <>
      <p>
        {name} {lastName}
      </p>
    </>
  )
}
