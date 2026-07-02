import { Router } from 'express'
import { prisma } from '../../lib/prisma.js'

export const courseRouter = Router()

courseRouter.get('/', async (_req, res) => {
  const courses = await prisma.course.findMany({
    include: { sections: true },
  })

  res.json(courses)
})

courseRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  const course = await prisma.course.findUnique({
    where: { id },
    include: { sections: true },
  })

  if (!course) {
    res.status(404).json({ error: 'Course not found' })
    return
  }

  res.json(course)
})

courseRouter.post('/', async (req, res) => {
  const { name } = req.body

  const course = await prisma.course.create({ data: { name } })

  res.status(201).json(course)
})

courseRouter.put('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { name } = req.body

  const course = await prisma.course.update({ where: { id }, data: { name } })

  res.json(course)
})

courseRouter.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)

  await prisma.course.delete({ where: { id } })

  res.status(204).end()
})
