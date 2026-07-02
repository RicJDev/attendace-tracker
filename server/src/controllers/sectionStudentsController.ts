import { Router } from 'express'
import { prisma } from '../../lib/prisma.js'

export const sectionStudentRouter = Router()

sectionStudentRouter.get('/', async (_req, res) => {
  const sectionStudents = await prisma.sectionStudent.findMany({
    include: { student: true, section: true },
  })

  res.json(sectionStudents)
})

sectionStudentRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  const sectionStudent = await prisma.sectionStudent.findUnique({
    where: { id },
    include: { student: true, section: true },
  })

  if (!sectionStudent) {
    res.status(404).json({ error: 'SectionStudent not found' })
    return
  }

  res.json(sectionStudent)
})

sectionStudentRouter.post('/', async (req, res) => {
  const { student_id, section_id } = req.body

  const sectionStudent = await prisma.sectionStudent.create({
    data: { student_id, section_id },
  })

  res.status(201).json(sectionStudent)
})

sectionStudentRouter.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)

  await prisma.sectionStudent.delete({ where: { id } })

  res.status(204).end()
})
