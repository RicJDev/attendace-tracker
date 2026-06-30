import { Link } from '../components/ui/Link'
import { Button } from '../components/ui/Button'
import { SimpleBox } from '../components/SimpleBox'
import { MainLayout } from '../layouts/MainLayout'

export function Home() {
  return (
    <MainLayout>
      <SimpleBox direction='row'>
        <Button>Buy</Button>
        <Button variant='secondary'>Go to next</Button>
        <Button variant='alert'>Delete</Button>
      </SimpleBox>

      <h2 className='text-3xl font-bold'>Buttons</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        quibusdam pariatur nulla, eum fugiat voluptatum sint. Dicta dolore
        libero, iusto labore, incidunt eaque quibusdam debitis doloribus omnis
        animi accusamus magnam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illum mollitia culpa deleniti, ratione sunt tenetur
        tempore repudiandae error. Aliquam facilis culpa beatae molestiae
        nesciunt dolore suscipit, incidunt eum commodi voluptas.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        quibusdam pariatur nulla, eum fugiat voluptatum sint. Dicta dolore
        libero, iusto labore, incidunt eaque quibusdam debitis doloribus omnis
        animi accusamus magnam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illum mollitia culpa deleniti, ratione sunt tenetur
        tempore repudiandae error. Aliquam facilis culpa beatae molestiae
        nesciunt dolore suscipit, incidunt eum commodi voluptas. Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Expedita, nobis voluptate,
        dolores facere optio consequuntur laudantium impedit eius, modi
        molestiae quisquam? Maxime neque porro soluta animi laudantium nemo
        magnam odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. At
        aut esse quo inventore, temporibus perferendis. Ex ducimus doloremque
        maxime quis rem, aspernatur quas laudantium perferendis, atque sequi,
        aliquam quia praesentium!
      </p>

      <SimpleBox>
        <Link href='/'>I'm not malware</Link>
        <Link href='/'>Trust in me</Link>
        <Link href='/'>Click me!</Link>
      </SimpleBox>

      <h2 className='text-3xl font-bold'>Links</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        quibusdam pariatur nulla, eum fugiat voluptatum sint. Dicta dolore
        libero, iusto labore, incidunt eaque quibusdam debitis doloribus omnis
        animi accusamus magnam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illum mollitia culpa deleniti, ratione sunt tenetur
        tempore repudiandae error. Aliquam facilis culpa beatae molestiae
        nesciunt dolore suscipit, incidunt eum commodi voluptas.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        quibusdam pariatur nulla, eum fugiat voluptatum sint. Dicta dolore
        libero, iusto labore, incidunt eaque quibusdam debitis doloribus omnis
        animi accusamus magnam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illum mollitia culpa deleniti, ratione sunt tenetur
        tempore repudiandae error. Aliquam facilis culpa beatae molestiae
        nesciunt dolore suscipit, incidunt eum commodi voluptas.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        quibusdam pariatur nulla, eum fugiat voluptatum sint. Dicta dolore
        libero, iusto labore, incidunt eaque quibusdam debitis doloribus omnis
        animi accusamus magnam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illum mollitia culpa deleniti, ratione sunt tenetur
        tempore repudiandae error. Aliquam facilis culpa beatae molestiae
        nesciunt dolore suscipit, incidunt eum commodi voluptas.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        quibusdam pariatur nulla, eum fugiat voluptatum sint. Dicta dolore
        libero, iusto labore, incidunt eaque quibusdam debitis doloribus omnis
        animi accusamus magnam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Illum mollitia culpa deleniti, ratione sunt tenetur
        tempore repudiandae error. Aliquam facilis culpa beatae molestiae
        nesciunt dolore suscipit, incidunt eum commodi voluptas.
      </p>

      <div className='flex justify-between py-2'>
        <Button variant='secondary'>Prev</Button>
        <Button variant='secondary'>Next</Button>
      </div>
    </MainLayout>
  )
}
