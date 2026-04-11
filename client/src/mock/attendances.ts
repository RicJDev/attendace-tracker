import type { Attendance } from '../types'

const getDate = (daysAgo: number): Date => {
  const date = new Date()
  date.setDate(date.getDate() - daysAgo)
  return date
}

export const mockAttendances: Attendance[] = [
  // Emma Johnson (S001)
  { studendId: 'S001', date: getDate(6), status: 'attending' },
  { studendId: 'S001', date: getDate(5), status: 'attending' },
  { studendId: 'S001', date: getDate(4), status: 'absence' },
  { studendId: 'S001', date: getDate(3), status: 'attending' },
  { studendId: 'S001', date: getDate(2), status: 'justified' },
  { studendId: 'S001', date: getDate(1), status: 'attending' },

  // Liam Smith (S002)
  { studendId: 'S002', date: getDate(6), status: 'attending' },
  { studendId: 'S002', date: getDate(5), status: 'absence' },
  { studendId: 'S002', date: getDate(4), status: 'absence' },
  { studendId: 'S002', date: getDate(3), status: 'attending' },
  { studendId: 'S002', date: getDate(2), status: 'attending' },
  { studendId: 'S002', date: getDate(1), status: 'justified' },

  // Olivia Brown (S003)
  { studendId: 'S003', date: getDate(6), status: 'justified' },
  { studendId: 'S003', date: getDate(5), status: 'attending' },
  { studendId: 'S003', date: getDate(4), status: 'attending' },
  { studendId: 'S003', date: getDate(3), status: 'attending' },
  { studendId: 'S003', date: getDate(2), status: 'attending' },
  { studendId: 'S003', date: getDate(1), status: 'attending' },

  // Noah Garcia (S004)
  { studendId: 'S004', date: getDate(6), status: 'absence' },
  { studendId: 'S004', date: getDate(5), status: 'absence' },
  { studendId: 'S004', date: getDate(4), status: 'justified' },
  { studendId: 'S004', date: getDate(3), status: 'absence' },
  { studendId: 'S004', date: getDate(2), status: 'attending' },
  { studendId: 'S004', date: getDate(1), status: 'attending' },

  // Ava Martinez (S005)
  { studendId: 'S005', date: getDate(6), status: 'attending' },
  { studendId: 'S005', date: getDate(5), status: 'attending' },
  { studendId: 'S005', date: getDate(4), status: 'attending' },
  { studendId: 'S005', date: getDate(3), status: 'justified' },
  { studendId: 'S005', date: getDate(2), status: 'attending' },
  { studendId: 'S005', date: getDate(1), status: 'attending' },
]
