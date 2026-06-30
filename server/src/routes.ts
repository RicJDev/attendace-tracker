import { Router } from 'express'
import { studentRouter } from './controllers/studentsController.js'
import { teacherRouter } from './controllers/teachersController.js'
import { courseRouter } from './controllers/coursesController.js'
import { sectionRouter } from './controllers/sectionsController.js'
import { attendanceRouter } from './controllers/attendancesController.js'
import { scheduleRouter } from './controllers/schedulesController.js'
import { sectionStudentRouter } from './controllers/sectionStudentsController.js'

export const apiRouter = Router()

apiRouter.use('/students', studentRouter)
apiRouter.use('/teachers', teacherRouter)
apiRouter.use('/courses', courseRouter)
apiRouter.use('/sections', sectionRouter)
apiRouter.use('/attendances', attendanceRouter)
apiRouter.use('/schedules', scheduleRouter)
apiRouter.use('/section-students', sectionStudentRouter)
