import { sections } from '../mock/mockData'
import { SectionCard } from './SectionCard'

export function SectionList() {
  return (
    <>
      <h3 className='text-xl text-center'>Tus secciones</h3>

      <ul className='flex flex-col gap-2 overflow-auto scrollbar-thin'>
        {sections.map((section) => (
          <li key={section.id}>
            <SectionCard {...section} />
          </li>
        ))}
      </ul>
    </>
  )
}
