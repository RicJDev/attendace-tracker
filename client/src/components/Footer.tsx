export function Footer() {
  return (
    <footer className='bg-blue-900 -m-3 max-h-full min-h-40 flex justify-center items-center flex-col text-center gap-2'>
      <p className='text-balance text-blue-100'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque libero
        sunt repudiandae odit, rerum molestias architecto debitis esse facere
        error optio vero excepturi, placeat incidunt sed ducimus dolor
        consequatur non.
      </p>

      <small className='text-blue-200'>
        &copy; {new Date().getFullYear()} This Is My Website &mdash; All rights
        reserved
      </small>
    </footer>
  )
}
