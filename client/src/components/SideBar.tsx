import { SectionList } from './SectionList'

export function SideBar() {
  return (
    <aside className='min-h-full w-50 bg-gray-900 flex flex-col rounded-sm p-2'>
      <nav>
        <ul>
          <li>Icon 1</li>
          <li>Icon 2</li>
          <li>Icon 3</li>
        </ul>
      </nav>

      <article>
        <SectionList />
      </article>
    </aside>
  )
}
