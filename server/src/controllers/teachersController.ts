import { Router } from 'express'
import { prisma } from '../../lib/prisma.js'

export const teacherRouter = Router()

teacherRouter.get('/', async (_req, res) => {
  const teachers = await prisma.teacher.findMany({
    include: { sections: true },
  })

  res.json(teachers)
})

teacherRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  const teacher = await prisma.teacher.findUnique({
    where: { id },
    include: { sections: true },
  })

  if (!teacher) {
    res.status(404).json({ error: 'Teacher not found' })
    return
  }

  res.json(teacher)
})

teacherRouter.post('/', async (req, res) => {
  const { first_name, last_name } = req.body

  const teacher = await prisma.teacher.create({
    data: { first_name, last_name },
  })

  res.status(201).json(teacher)
})

teacherRouter.put('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { first_name, last_name } = req.body

  const teacher = await prisma.teacher.update({
    where: { id },
    data: { first_name, last_name },
  })

  res.json(teacher)
})

teacherRouter.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)

  await prisma.teacher.delete({ where: { id } })

  res.status(204).end()
})
