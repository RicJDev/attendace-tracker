import { Button } from '../components/ui/Button'
import { MainLayout } from '../layouts/MainLayout'

export function Home() {
  return (
    <MainLayout>
      <article className='flex-1'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus hic
          aspernatur nemo suscipit illo eligendi vitae ipsam perspiciatis quos
          vero voluptates blanditiis sint placeat, sequi ducimus, praesentium
          necessitatibus? Inventore, perspiciatis!
        </p>
      </article>
      
      <div className='flex justify-between'>
        <Button variant='primary'>Prev</Button>
        <Button variant='secondary'>Next</Button>
      </div>
    </MainLayout>
  )
}
