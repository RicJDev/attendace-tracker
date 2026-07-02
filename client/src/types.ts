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

export interface AcademicPeriod {
  id: number
  name: string
  start_date: Date
  end_date: Date
  sections: Section[]
}

export interface Section {
  id: number
  section_number: string
  course_id: number
  teacher_id: number
  period_id: number
  course: Course
  teacher: Teacher
  period: AcademicPeriod
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
}

export interface SectionStudent {
  id: number
  student_id: number
  section_id: number
  student: Student
  section: Section
  attendances: Attendance[]
}

export interface Schedule {
  id: number
  day_of_week: string
  start_time: string
  end_time: string
  section_id: number
  section: Section
  attendances: Attendance[]
}

export interface Attendance {
  id: number
  date: Date
  status: string
  last_updated: Date
  section_student_id: number
  schedule_id: number
  sectionStudent: SectionStudent
  schedule: Schedule
}
