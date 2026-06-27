import 'dotenv/config'
import express from 'express'
import { join } from 'node:path'

const app = express()
const __dirname = import.meta.dirname

app.use(express.static(join(__dirname, '../client/dist')))

app.get('/api', (req, res) => {
  res.send('Hello from API!')
})

app.get('/{*splat}', (req, res) => {
  res.sendFile(join(__dirname, '../client/dist', 'index.html'))
})

const port = process.env.PORT ?? 3000
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})
