import { useEffect } from 'react'
import { SIDEBAR } from '../constants'

export const useSidebar = (sidebarRef = undefined) => {
  const resize = () => {
    window.addEventListener('mousemove', _resizing)
    window.addEventListener('mouseup', _stopResize)
  }

  const _stopResize = () => {
    window.removeEventListener('mousemove', _resizing)
    window.removeEventListener('mouseup', _stopResize)
  }

  const _resizing = (e) => {
    if (!sidebarRef) return undefined

    const currentWidth = sidebarRef.current.offsetWidth
    let newWidth = currentWidth + (sidebarRef.current.offsetLeft - e.clientX)

    if (newWidth < SIDEBAR.SIZE_MIN) newWidth = SIDEBAR.SIZE_MIN
    if (newWidth > SIDEBAR.SIZE_MAX) newWidth = SIDEBAR.SIZE_MAX

    sidebarRef.current.style.width = `${newWidth}px`
  }

  useEffect(() => {
    return () => _stopResize()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    resize,
  }
}
