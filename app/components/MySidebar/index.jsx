import { useRef } from 'react'
import useSidebar from './hooks/useSidebar'
import ButtonResize from './components/ButtonResize'

const MySidebar = () => {
  const sidebarRef = useRef(null)
  const { isSidebarOpen, resizeSidebar, openSidebar, closeSidebar } =
    useSidebar(sidebarRef)

  return (
    <aside ref={sidebarRef} className={`my-sidebar ${!isSidebarOpen ? 'closed' : ''}`}>
      <div className='resize-area' onMouseDown={resizeSidebar}>
        <div className='handle' />
      </div>
      <ButtonResize
        isSidebarOpen={isSidebarOpen}
        onClick={isSidebarOpen ? closeSidebar : openSidebar}
      />
    </aside>
  )
}

export default MySidebar
