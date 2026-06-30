import { Button } from '../components/ui/Button'
import { SimpleBox } from '../components/SimpleBox'
import { MainLayout } from '../layouts/MainLayout'

export function Home() {
  return (
    <MainLayout>
      <h2>Buttons</h2>

      <p>Estos son mis hermosos botones</p>

      <SimpleBox direction='row'>
        <Button variant='primary'>Buy</Button>
        <Button variant='secondary'>Go to next</Button>
        <Button variant='alert'>Delete</Button>
        <Button variant='disabled'>None</Button>
      </SimpleBox>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        deserunt harum quis veritatis provident dolores eius esse illum nam
        velit impedit eligendi, accusantium dolor dolorum corrupti vero animi
        voluptate! Nesciunt.
      </p>

      <div className='flex justify-between py-2 mt-auto'>
        <Button variant='secondary'>Prev</Button>
        <Button variant='secondary'>Next</Button>
      </div>
    </MainLayout>
  )
}
