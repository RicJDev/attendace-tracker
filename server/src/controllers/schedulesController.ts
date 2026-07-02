import { Router } from 'express'
import { prisma } from '../../lib/prisma.js'

export const scheduleRouter = Router()

scheduleRouter.get('/', async (_req, res) => {
  const schedules = await prisma.schedule.findMany({
    include: { section: true },
  })

  res.json(schedules)
})

scheduleRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  const schedule = await prisma.schedule.findUnique({
    where: { id },
    include: { section: true },
  })

  if (!schedule) {
    res.status(404).json({ error: 'Schedule not found' })
    return
  }

  res.json(schedule)
})

scheduleRouter.post('/', async (req, res) => {
  const { day_of_week, start_time, end_time, section_id } = req.body

  const schedule = await prisma.schedule.create({
    data: { day_of_week, start_time, end_time, section_id },
  })

  res.status(201).json(schedule)
})

scheduleRouter.put('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { day_of_week, start_time, end_time, section_id } = req.body

  const schedule = await prisma.schedule.update({
    where: { id },
    data: { day_of_week, start_time, end_time, section_id },
  })

  res.json(schedule)
})

scheduleRouter.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)

  await prisma.schedule.delete({ where: { id } })

  res.status(204).end()
})
