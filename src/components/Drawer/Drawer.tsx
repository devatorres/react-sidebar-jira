import { useRef } from 'react'
import { useSidebar } from './hooks'
import './Drawer.css'

export const Drawer = () => {
  const sidebarRef = useRef(null)
  const { isSidebarOpen, resizeSidebar, openSidebar, closeSidebar } =
    useSidebar(sidebarRef)

  return (
    <aside ref={sidebarRef} className={`drawer ${!isSidebarOpen ? 'closed' : ''}`}>
      <div className='resize-area' onMouseDown={resizeSidebar}>
        <div className='handle' />
      </div>
    </aside>
  )
}
