import { Router } from 'express'
import { prisma } from '../../lib/prisma.js'

export const sectionRouter = Router()

sectionRouter.get('/', async (_req, res) => {
  const sections = await prisma.section.findMany({
    include: {
      course: true,
      teacher: true,
      schedules: true,
      sectionStudents: { include: { student: true } },
    },
  })

  res.json(sections)
})

sectionRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  const section = await prisma.section.findUnique({
    where: { id },
    include: {
      course: true,
      teacher: true,
      schedules: true,
      sectionStudents: { include: { student: true } },
    },
  })

  if (!section) {
    res.status(404).json({ error: 'Section not found' })
    return
  }

  res.json(section)
})

sectionRouter.post('/', async (req, res) => {
  const { section_number, course_id, teacher_id, period_id } = req.body

  const section = await prisma.section.create({
    data: { section_number, course_id, teacher_id, period_id },
  })

  res.status(201).json(section)
})

sectionRouter.put('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { section_number, course_id, teacher_id } = req.body

  const section = await prisma.section.update({
    where: { id },
    data: { section_number, course_id, teacher_id },
  })

  res.json(section)
})

sectionRouter.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)

  await prisma.section.delete({ where: { id } })

  res.status(204).end()
})
