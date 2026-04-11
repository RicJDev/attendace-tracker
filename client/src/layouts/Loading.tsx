import './Loading.css'

interface LoadingProps {
  message?: string
}

export function Loading({ message = 'Cargando...' }: LoadingProps) {
  return (
    <div className='loading-container'>
      <p>{message}</p>
    </div>
  )
}
