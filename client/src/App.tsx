import { Routes, Route } from 'react-router'
import { MainLayout } from './layouts/MainLayout'
import { Home } from './pages/Home'
import { Schedule } from './pages/Schedule'
import { Calendar } from './pages/Calendar'
import { Students } from './pages/Students'

export default function App() {
  return (
    <Routes>
      <Route
        index
        element={<Home />}
      />
      <Route element={<MainLayout />}>
        <Route
          path='schedule'
          element={<Schedule />}
        />
        <Route
          path='calendar'
          element={<Calendar />}
        />
        <Route
          path='students'
          element={<Students />}
        />
      </Route>
    </Routes>
  )
}
