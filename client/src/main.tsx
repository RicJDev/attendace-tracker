import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import { Daily } from './pages/Daily.tsx'
import { History } from './pages/History.tsx'
import { Students } from './pages/Students.tsx'
import { BasicLayout } from './layouts/BasicLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route
          index
          element={<App />}
        />

        <Route element={<BasicLayout />}>
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
