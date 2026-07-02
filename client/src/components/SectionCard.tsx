import type { Section } from '../types'

export function SectionCard({ course }: Section) {
  return (
    <>
      <span>{course.name}</span>
    </>
  )
}
