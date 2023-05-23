import { useRef } from 'react'
import useSidebar from './hooks/useSidebar'
import ButtonResize from './components/ButtonResize'
import './assets/styles/mySidebar.css'

//? Remove
import useDebug from '../../hooks/useDebug'

const MySidebar = () => {
  const sidebarRef = useRef(null)
  const { isSidebarOpen, resizeSidebar, openSidebar, closeSidebar } =
    useSidebar(sidebarRef)

  //? Remove
  const { isVisible } = useDebug()

  return (
    <aside
      ref={sidebarRef}
      className={`my-sidebar ${!isSidebarOpen ? 'closed' : ''}`}>
      <div
        className={`resize-area ${isVisible() ? 'debug-visible' : ''}`}
        onMouseDown={resizeSidebar}>
        <div className="handle" />
      </div>
      <ButtonResize
        isSidebarOpen={isSidebarOpen}
        onClick={isSidebarOpen ? closeSidebar : openSidebar}
      />
    </aside>
  )
}

export default MySidebar
