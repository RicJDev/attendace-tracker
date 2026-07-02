import type { Section } from '../types'

export function SectionCard({ course, section_number }: Section) {
  return (
    <div className='bg-gray-800 rounded-sm h-30 p-2 text-sm flex flex-col justify-center items-center'>
      <p className='font-medium text-center text-lg'>{course.name}</p>

      <p className='text-gray-300'>Sección {section_number}</p>

      <span>Próxima clase a las... </span>
    </div>
  )
}
