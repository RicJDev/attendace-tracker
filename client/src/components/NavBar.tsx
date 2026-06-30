interface NavBarProps {
  // todo: add a link[] prop
}

export function NavBar({}: NavBarProps) {
  return (
    <nav className='flex flex-wrap gap-2 justify-center'>
      <a href='/'>Home</a>
      <a href='/'>Recent posts</a>
      <a href='/'>FAQ's</a>
      <a href='/'>About</a>
    </nav>
  )
}
