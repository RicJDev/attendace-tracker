export interface Student {
  id: string
  name: string
  lastName: string
  listIndex: number
}

export interface Attendance {
  studendId: Student['id']
  date: Date
  status: 'justified' | 'attending' | 'absence'
}
