import type { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
  title?: string
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null

  return createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/50' onClick={onClose} />

      <div className='relative bg-gray-800 border border-gray-700 rounded-sm p-4 min-w-80 max-w-lg w-full mx-2 shadow-lg'>
        {title && (
          <div className='flex justify-between items-center border-b border-gray-600 pb-2 mb-3'>
            <h3 className='text-lg font-bold text-gray-100'>{title}</h3>

            <button
              onClick={onClose}
              className='text-gray-400 hover:text-gray-200 text-xl leading-none border'
            >
              &times;
            </button>
          </div>
        )}

        <div className='text-gray-300'>{children}</div>
      </div>
    </div>,
    document.body,
  )
}
