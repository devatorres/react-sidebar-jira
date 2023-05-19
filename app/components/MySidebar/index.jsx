import { useRef } from 'react'
import useSidebar from './hooks/useSidebar'

const MySidebar = () => {
  const sidebarRef = useRef(null)
  const handleRef = useRef(null)
  const { isSidebarOpen, closeSidebar, resizeSidebar } = useSidebar(sidebarRef)

  return (
    <aside
      ref={sidebarRef}
      className={`my-sidebar ${!isSidebarOpen ? 'closed' : 'opened'}`}
    >
      <div
        ref={handleRef}
        className='handle'
        onMouseDown={resizeSidebar}
        onClick={closeSidebar}
      />
    </aside>
  )
}

export default MySidebar
