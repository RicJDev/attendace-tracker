import { NavBar } from './NavBar'

export function Header() {
  return (
    <header className='py-2 px-4 rounded-sm min-h-15 flex justify-center items-center sticky top-2 bg-blue-950/70 backdrop-blur-sm'>
      <h1 className='text-gray-100 font-extrabold text-2xl mr-auto'>
        This Is My Website
      </h1>

      <NavBar />
    </header>
  )
}
