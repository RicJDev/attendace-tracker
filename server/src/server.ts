import express from 'express'
import { resolve, join } from 'node:path'
import { apiRouter } from './routes.js'

const __dirname = import.meta.dirname
const PORT = Number(process.env.PORT) || 4000
const CLIENT_DIST = resolve(__dirname, '../../client/dist')

const app = express()

app.use(express.json())

app.use('/api', apiRouter)

app.use(express.static(CLIENT_DIST))

app.get('/{*splat}', (_req, res) => {
  res.sendFile(join(__dirname, '../../client/dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
