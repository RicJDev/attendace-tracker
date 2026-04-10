import { RouteLayout } from '../layouts/RouteLayout'
import './Debug.css'

export function Debug() {
  return (
    <div className='debug-container'>
      <header>
        <h1>Debug Page</h1>
        <small>Deja la curiosidad, mijo</small>
      </header>

      <main>
        <RouteLayout />
      </main>
    </div>
  )
}
