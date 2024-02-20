import { useRef } from 'react'
import { useSidebar } from './hooks'
import './Drawer.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Drawer = ({ children }: any) => {
  const drawerRef = useRef(null)
  const { resize } = useSidebar(drawerRef)

  return (
    <section role='dialog' className='backdrop'>
      <aside ref={drawerRef} className='drawer'>
        <div className='resize-area' onMouseDown={resize}>
          <div className='handle' />
        </div>
        {children}
      </aside>
    </section>
  )
}
