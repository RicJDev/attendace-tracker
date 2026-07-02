import type {
  Teacher,
  Course,
  Section,
  Student,
  SectionStudent,
  Schedule,
  Attendance,
} from '../types'

export function generateMockData() {
  const teachers: Teacher[] = [
    { id: 1, first_name: 'María', last_name: 'González', sections: [] },
    { id: 2, first_name: 'Carlos', last_name: 'Pérez', sections: [] },
    { id: 3, first_name: 'Ana', last_name: 'Martínez', sections: [] },
  ]

  const courses: Course[] = [
    { id: 1, name: 'Matemáticas', sections: [] },
    { id: 2, name: 'Física', sections: [] },
    { id: 3, name: 'Química', sections: [] },
    { id: 4, name: 'Historia', sections: [] },
  ]

  const sectionsData = [
    { id: 1, section_number: 'A', course: courses[0], teacher: teachers[0] },
    { id: 2, section_number: 'B', course: courses[0], teacher: teachers[1] },
    { id: 3, section_number: 'A', course: courses[1], teacher: teachers[0] },
    { id: 4, section_number: 'B', course: courses[1], teacher: teachers[2] },
    { id: 5, section_number: 'A', course: courses[2], teacher: teachers[1] },
    { id: 6, section_number: 'A', course: courses[3], teacher: teachers[2] },
  ]

  const sections: Section[] = sectionsData.map((s) => ({
    ...s,
    course_id: s.course.id,
    teacher_id: s.teacher.id,
    schedules: [],
    sectionStudents: [],
  }))

  sections.forEach((sec) => {
    sec.course.sections.push(sec)
    sec.teacher.sections.push(sec)
  })

  const students: Student[] = [
    {
      id: 1,
      first_name: 'Juan',
      last_name: 'Pérez',
      national_id: '12345678',
      list_number: 1,
      sectionStudents: [],
      attendances: [],
    },
    {
      id: 2,
      first_name: 'María',
      last_name: 'López',
      national_id: '23456789',
      list_number: 2,
      sectionStudents: [],
      attendances: [],
    },
    {
      id: 3,
      first_name: 'Pedro',
      last_name: 'García',
      national_id: '34567890',
      list_number: 3,
      sectionStudents: [],
      attendances: [],
    },
    {
      id: 4,
      first_name: 'Ana',
      last_name: 'Martínez',
      national_id: '45678901',
      list_number: 4,
      sectionStudents: [],
      attendances: [],
    },
    {
      id: 5,
      first_name: 'Luis',
      last_name: 'Rodríguez',
      national_id: '56789012',
      list_number: 5,
      sectionStudents: [],
      attendances: [],
    },
    {
      id: 6,
      first_name: 'Laura',
      last_name: 'Fernández',
      national_id: '67890123',
      list_number: 6,
      sectionStudents: [],
      attendances: [],
    },
    {
      id: 7,
      first_name: 'Carlos',
      last_name: 'Sánchez',
      national_id: '78901234',
      list_number: 7,
      sectionStudents: [],
      attendances: [],
    },
    {
      id: 8,
      first_name: 'Sofía',
      last_name: 'Ramírez',
      national_id: '89012345',
      list_number: 8,
      sectionStudents: [],
      attendances: [],
    },
    {
      id: 9,
      first_name: 'Diego',
      last_name: 'Torres',
      national_id: '90123456',
      list_number: 9,
      sectionStudents: [],
      attendances: [],
    },
    {
      id: 10,
      first_name: 'Valentina',
      last_name: 'Flores',
      national_id: '01234567',
      list_number: 10,
      sectionStudents: [],
      attendances: [],
    },
  ]

  const enrollmentMap: [number, number][] = [
    [1, 1],
    [1, 3],
    [2, 1],
    [2, 4],
    [3, 2],
    [3, 3],
    [4, 2],
    [4, 5],
    [5, 3],
    [5, 6],
    [6, 4],
    [6, 5],
    [7, 1],
    [7, 6],
    [8, 2],
    [8, 4],
    [9, 3],
    [9, 5],
    [10, 4],
    [10, 6],
  ]

  const sectionStudents: SectionStudent[] = []
  let ssId = 1
  enrollmentMap.forEach(([studentId, sectionId]) => {
    const student = students.find((s) => s.id === studentId)!
    const section = sections.find((s) => s.id === sectionId)!
    const ss: SectionStudent = {
      id: ssId++,
      student_id: student.id,
      section_id: section.id,
      student,
      section,
    }
    sectionStudents.push(ss)
    student.sectionStudents.push(ss)
    section.sectionStudents.push(ss)
  })

  const scheduleData: Omit<Schedule, 'section'>[] = [
    {
      id: 1,
      day_of_week: 'Lunes',
      start_time: '08:00:00',
      end_time: '09:30:00',
      section_id: 1,
    },
    {
      id: 2,
      day_of_week: 'Miércoles',
      start_time: '08:00:00',
      end_time: '09:30:00',
      section_id: 1,
    },

    {
      id: 3,
      day_of_week: 'Martes',
      start_time: '10:00:00',
      end_time: '11:30:00',
      section_id: 2,
    },
    {
      id: 4,
      day_of_week: 'Jueves',
      start_time: '10:00:00',
      end_time: '11:30:00',
      section_id: 2,
    },

    {
      id: 5,
      day_of_week: 'Lunes',
      start_time: '10:00:00',
      end_time: '11:30:00',
      section_id: 3,
    },
    {
      id: 6,
      day_of_week: 'Miércoles',
      start_time: '10:00:00',
      end_time: '11:30:00',
      section_id: 3,
    },

    {
      id: 7,
      day_of_week: 'Martes',
      start_time: '08:00:00',
      end_time: '09:30:00',
      section_id: 4,
    },
    {
      id: 8,
      day_of_week: 'Jueves',
      start_time: '08:00:00',
      end_time: '09:30:00',
      section_id: 4,
    },

    {
      id: 9,
      day_of_week: 'Lunes',
      start_time: '13:00:00',
      end_time: '14:30:00',
      section_id: 5,
    },
    {
      id: 10,
      day_of_week: 'Miércoles',
      start_time: '13:00:00',
      end_time: '14:30:00',
      section_id: 5,
    },

    {
      id: 11,
      day_of_week: 'Martes',
      start_time: '13:00:00',
      end_time: '14:30:00',
      section_id: 6,
    },
    {
      id: 12,
      day_of_week: 'Jueves',
      start_time: '13:00:00',
      end_time: '14:30:00',
      section_id: 6,
    },
  ]

  const schedules: Schedule[] = scheduleData.map((s) => {
    const section = sections.find((sec) => sec.id === s.section_id)!
    return { ...s, section }
  })

  schedules.forEach((sch) => {
    sch.section.schedules.push(sch)
  })

  const statuses = ['present', 'absent', 'late', 'excused'] as const
  const today = new Date()
  const attendances: Attendance[] = []
  let attId = 1

  students.forEach((student) => {
    for (let i = 0; i < 10; i++) {
      const daysAgo = Math.floor(Math.random() * 30) + 1
      const date = new Date(today)
      date.setDate(date.getDate() - daysAgo)

      const dateStr = date.toISOString().split('T')[0]
      const status = statuses[Math.floor(Math.random() * statuses.length)]
      const lastUpdated = new Date()
      const attendance: Attendance = {
        id: attId++,
        date: new Date(dateStr),
        status,
        last_updated: lastUpdated,
        student_id: student.id,
        student,
      }
      attendances.push(attendance)
      student.attendances.push(attendance)
    }
  })

  return {
    teachers,
    courses,
    sections,
    students,
    sectionStudents,
    schedules,
    attendances,
  }
}

export const mockData = generateMockData()
