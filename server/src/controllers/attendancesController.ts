import { Router } from 'express'
import { prisma } from '../../lib/prisma.js'

export const attendanceRouter = Router()

attendanceRouter.get('/', async (req, res) => {
  const { date, student_id } = req.query
  const where: Record<string, unknown> = {}
  if (date) where.date = new Date(date as string)
  if (student_id) where.student_id = Number(student_id)
  const attendances = await prisma.attendance.findMany({
    where,
    include: { student: true },
    orderBy: { date: 'desc' },
  })
  res.json(attendances)
})

attendanceRouter.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const attendance = await prisma.attendance.findUnique({
    where: { id },
    include: { student: true },
  })
  if (!attendance) {
    res.status(404).json({ error: 'Attendance not found' })
    return
  }
  res.json(attendance)
})

attendanceRouter.post('/', async (req, res) => {
  const { date, status, student_id } = req.body
  const attendance = await prisma.attendance.create({
    data: {
      date: new Date(date),
      status,
      last_updated: new Date(),
      student_id,
    },
  })
  res.status(201).json(attendance)
})

attendanceRouter.put('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const { date, status } = req.body
  const attendance = await prisma.attendance.update({
    where: { id },
    data: {
      ...(date && { date: new Date(date) }),
      ...(status && { status }),
      last_updated: new Date(),
    },
  })
  res.json(attendance)
})

attendanceRouter.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  await prisma.attendance.delete({ where: { id } })
  res.status(204).end()
})
