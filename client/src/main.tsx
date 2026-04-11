import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Daily } from './pages/Daily.tsx'
import { History } from './pages/History.tsx'
import { Students } from './pages/Students.tsx'
import { Welcome } from './pages/Welcome.tsx'
import { Debug } from './pages/Debug.tsx'
import { RouteLayout } from './layouts/RouteLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route
          path='debug'
          element={
            <Debug>
              <RouteLayout />
            </Debug>
          }
        />

        <Route element={<RouteLayout />}>
          <Route
            index
            element={<Welcome />}
          />
          <Route
            path='daily'
            element={<Daily />}
          />
          <Route
            path='history'
            element={<History />}
          />
          <Route
            path='students'
            element={<Students />}
          />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
)
