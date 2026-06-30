import { Link } from './ui/Link'

interface NavBarProps {
  // todo: add a link[] prop
}

export function NavBar({}: NavBarProps) {
  return (
    <nav className='flex flex-wrap gap-2 justify-center'>
      <Link href='/'>Home</Link>
      <Link href='/'>Recent posts</Link>
      <Link href='/'>FAQ's</Link>
      <Link href='/'>About</Link>
    </nav>
  )
}
