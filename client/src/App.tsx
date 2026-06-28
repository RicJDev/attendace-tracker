import { Button } from './components/ui/Button'
import { Container } from './layouts/Container'
import { SimpleBox } from './layouts/SimpleBox'
import { Stack } from './layouts/Stack'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <Container>
      <Header />

      <SimpleBox grow>
        <Stack>
          <Button>Do something</Button>
          <Button variant='secondary'>Click me!</Button>
          <Button variant='tertiary'>Next page</Button>
          <Button variant='alert'>Delete</Button>
        </Stack>
      </SimpleBox>

      <Footer />
    </Container>
  )
}
