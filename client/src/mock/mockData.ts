import type {
  AcademicPeriod,
  Teacher,
  Course,
  Student,
  SectionStudent,
  Section,
  Schedule,
  Attendance,
} from '../types'

export const academicPeriod: AcademicPeriod = {
  id: 1,
  name: '2026-I',
  start_date: new Date('2026-03-01T00:00:00'),
  end_date: new Date('2026-07-31T00:00:00'),
  sections: [],
}

export const teacher: Teacher = {
  id: 1,
  first_name: 'Juan',
  last_name: 'Pérez',
  sections: [],
}

export const courses: Course[] = [
  { id: 1, name: 'Programación II', sections: [] },
  { id: 2, name: 'Programación III', sections: [] },
  { id: 3, name: 'Base de Datos', sections: [] },
]

export const students: Student[] = [
  {
    id: 1,
    first_name: 'Carlos',
    last_name: 'García',
    national_id: 'V-11111111',
    list_number: 1,
    sectionStudents: [],
  },
  {
    id: 2,
    first_name: 'María',
    last_name: 'López',
    national_id: 'V-22222222',
    list_number: 2,
    sectionStudents: [],
  },
  {
    id: 3,
    first_name: 'Ana',
    last_name: 'Martínez',
    national_id: 'V-33333333',
    list_number: 3,
    sectionStudents: [],
  },
]

export const sections: Section[] = [
  {
    id: 1,
    section_number: 'A',
    course_id: 1,
    teacher_id: 1,
    period_id: 1,
    course: courses[0],
    teacher: teacher,
    period: academicPeriod,
    schedules: [],
    sectionStudents: [],
  },
  {
    id: 2,
    section_number: 'A',
    course_id: 2,
    teacher_id: 1,
    period_id: 1,
    course: courses[1],
    teacher: teacher,
    period: academicPeriod,
    schedules: [],
    sectionStudents: [],
  },
  {
    id: 3,
    section_number: 'A',
    course_id: 3,
    teacher_id: 1,
    period_id: 1,
    course: courses[2],
    teacher: teacher,
    period: academicPeriod,
    schedules: [],
    sectionStudents: [],
  },
]

courses[0].sections.push(sections[0])
courses[1].sections.push(sections[1])
courses[2].sections.push(sections[2])
teacher.sections.push(...sections)
academicPeriod.sections.push(...sections)

export const sectionStudents: SectionStudent[] = [
  {
    id: 1,
    student_id: 1,
    section_id: 1,
    student: students[0],
    section: sections[0],
    attendances: [],
  },
  {
    id: 2,
    student_id: 1,
    section_id: 3,
    student: students[0],
    section: sections[2],
    attendances: [],
  },
  {
    id: 3,
    student_id: 2,
    section_id: 1,
    student: students[1],
    section: sections[0],
    attendances: [],
  },
  {
    id: 4,
    student_id: 2,
    section_id: 2,
    student: students[1],
    section: sections[1],
    attendances: [],
  },
  {
    id: 5,
    student_id: 2,
    section_id: 3,
    student: students[1],
    section: sections[2],
    attendances: [],
  },
  {
    id: 6,
    student_id: 3,
    section_id: 2,
    student: students[2],
    section: sections[1],
    attendances: [],
  },
  {
    id: 7,
    student_id: 3,
    section_id: 3,
    student: students[2],
    section: sections[2],
    attendances: [],
  },
]

sectionStudents.forEach((ss) => {
  ss.student.sectionStudents.push(ss)
  ss.section.sectionStudents.push(ss)
})

export const schedules: Schedule[] = [
  {
    id: 1,
    day_of_week: 'Lunes',
    start_time: '08:00:00',
    end_time: '10:00:00',
    section_id: 1,
    section: sections[0],
    attendances: [],
  },
  {
    id: 2,
    day_of_week: 'Miércoles',
    start_time: '10:00:00',
    end_time: '12:00:00',
    section_id: 2,
    section: sections[1],
    attendances: [],
  },
  {
    id: 3,
    day_of_week: 'Viernes',
    start_time: '14:00:00',
    end_time: '16:00:00',
    section_id: 3,
    section: sections[2],
    attendances: [],
  },
]

schedules.forEach((s) => s.section.schedules.push(s))

export const attendances: Attendance[] = [
  {
    id: 1,
    date: new Date('2026-06-22T00:00:00'),
    status: 'Presente',
    last_updated: new Date('2026-06-22T09:00:00'),
    section_student_id: 1,
    schedule_id: 1,
    sectionStudent: sectionStudents[0],
    schedule: schedules[0],
  },
  {
    id: 2,
    date: new Date('2026-06-22T00:00:00'),
    status: 'Tarde',
    last_updated: new Date('2026-06-22T09:15:00'),
    section_student_id: 3,
    schedule_id: 1,
    sectionStudent: sectionStudents[2],
    schedule: schedules[0],
  },
  {
    id: 3,
    date: new Date('2026-06-24T00:00:00'),
    status: 'Presente',
    last_updated: new Date('2026-06-24T10:00:00'),
    section_student_id: 4,
    schedule_id: 2,
    sectionStudent: sectionStudents[3],
    schedule: schedules[1],
  },
  {
    id: 4,
    date: new Date('2026-06-24T00:00:00'),
    status: 'Ausente',
    last_updated: new Date('2026-06-24T10:00:00'),
    section_student_id: 6,
    schedule_id: 2,
    sectionStudent: sectionStudents[5],
    schedule: schedules[1],
  },
  {
    id: 5,
    date: new Date('2026-06-26T00:00:00'),
    status: 'Presente',
    last_updated: new Date('2026-06-26T14:05:00'),
    section_student_id: 2,
    schedule_id: 3,
    sectionStudent: sectionStudents[1],
    schedule: schedules[2],
  },
]

attendances.forEach((a) => {
  a.sectionStudent.attendances.push(a)
  a.schedule.attendances.push(a)
})

export const mockData = {
  academicPeriod,
  teacher,
  courses,
  students,
  sections,
  sectionStudents,
  schedules,
  attendances,
}
