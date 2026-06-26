import express from 'express'

const app = express()
const port = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.send('Hola, maldito mundo!')
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})