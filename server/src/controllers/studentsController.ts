import { Router } from 'express'
import { prisma } from '../../lib/prisma.js'

export const studentRouter = Router()

studentRouter.get('/', async (_req, res) => {
  const students = await prisma.student.findMany({
    include: { sectionStudents: true, attendances: true },
  })

  res.json(students)
})

studentRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id)

  const student = await prisma.student.findUnique({
    where: { id },
    include: { sectionStudents: true, attendances: true },
  })

  if (!student) {
    res.status(404).json({ error: 'Student not found' })
    return
  }

  res.json(student)
})

studentRouter.post('/', async (req, res) => {
  const { first_name, last_name, national_id, list_number } = req.body

  const student = await prisma.student.create({
    data: { first_name, last_name, national_id, list_number },
  })

  res.status(201).json(student)
})

studentRouter.put('/:id', async (req, res) => {
  const id = Number(req.params.id)

  const { first_name, last_name, national_id, list_number } = req.body

  const student = await prisma.student.update({
    where: { id },
    data: { first_name, last_name, national_id, list_number },
  })

  res.json(student)
})

studentRouter.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)

  await prisma.student.delete({ where: { id } })

  res.status(204).end()
})
