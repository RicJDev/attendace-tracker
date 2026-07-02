export interface Teacher {
  id: number
  first_name: string
  last_name: string
  sections: Section[]
}

export interface Course {
  id: number
  name: string
  sections: Section[]
}

export interface Section {
  id: number
  section_number: string
  course_id: number
  teacher_id: number
  course: Course
  teacher: Teacher
  schedules: Schedule[]
  sectionStudents: SectionStudent[]
}

export interface Student {
  id: number
  first_name: string
  last_name: string
  national_id: string
  list_number: number
  sectionStudents: SectionStudent[]
  attendances: Attendance[]
}

export interface SectionStudent {
  id: number
  student_id: number
  section_id: number
  student: Student
  section: Section
}

export interface Schedule {
  id: number
  day_of_week: string
  start_time: string // HH:MM:SS
  end_time: string // HH:MM:SS
  section_id: number
  section: Section
}

export interface Attendance {
  id: number
  date: Date // almacenado como YYYY-MM-DD
  status: string
  last_updated: Date
  student_id: number
  student: Student
}
