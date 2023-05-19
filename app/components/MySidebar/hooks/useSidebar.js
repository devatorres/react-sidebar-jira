import { useContext, useEffect } from 'react'
import { SIDEBAR, STORAGE } from '../constants'
import { SidebarContext } from '../contexts'
import { getSidebarDataStorage, setSidebarDataStorage } from '../utils'

const useSidebar = (sidebarRef) => {
  const { sidebarData, setSidebarData } = useContext(SidebarContext)

  const openSidebar = async () => {
    const newSidebarData = { isSidebarOpen: true, size: SIDEBAR.SIZE_DEFAULT }
    setSidebarData(newSidebarData)
    setSidebarDataStorage(newSidebarData)
    _putWidth(SIDEBAR.SIZE_DEFAULT)
    await _removeAnimable()
  }

  const closeSidebar = async () => {
    const newSidebarData = { isSidebarOpen: false, size: SIDEBAR.SIZE_MIN }

    _stopResize()
    setSidebarData(newSidebarData)
    setSidebarDataStorage(newSidebarData)
    await _addAnimable()
  }

  const resizeSidebar = () => {
    window.addEventListener('mousemove', _resizing)
    window.addEventListener('mouseup', _stopResize)
  }

  const _stopResize = () => {
    window.removeEventListener('mousemove', _resizing)
    window.removeEventListener('mouseup', _stopResize)
  }

  const _resizing = (e) => {
    let newWidth = e.clientX - sidebarRef.current.offsetLeft

    if (!sidebarData.isSidebarOpen) return undefined
    if (newWidth < SIDEBAR.SIZE_MIN) return closeSidebar()
    if (newWidth > SIDEBAR.SIZE_MAX) newWidth = SIDEBAR.SIZE_MAX

    _putWidth(newWidth)
    setSidebarData((prevSidebarData) => {
      const newSidebarData = { ...prevSidebarData, size: newWidth }
      setSidebarDataStorage(newSidebarData)
      return newSidebarData
    })
  }

  const _putWidth = (newWidth) => {
    sidebarRef.current.style.width = `${newWidth}px`
  }

  const init = async () => {
    const storage = await getSidebarDataStorage()
    storage ? _putState(storage) : _putDefaultStorage()
  }

  const _putState = async (storage) => {
    if (!storage.isSidebarOpen) await _addAnimable()
    setSidebarData({ ...storage })
    _putWidth(storage.size)
  }

  const _putDefaultStorage = () => {
    setSidebarDataStorage(STORAGE.VALUE_DEFAULT)
    _putWidth(STORAGE.VALUE_DEFAULT.size)
  }

  const _addAnimable = () => {
    return Promise.resolve(
      setTimeout(() => {
        sidebarRef.current.classList.add('animable')
      }, 100)
    )
  }

  const _removeAnimable = () => {
    return Promise.resolve(sidebarRef.current.classList.remove('animable'))
  }

  useEffect(() => {
    init()
    return () => _stopResize()
  }, [])

  return {
    isSidebarOpen: sidebarData.isSidebarOpen,
    size: sidebarData.size,
    openSidebar,
    closeSidebar,
    resizeSidebar,
  }
}

export default useSidebar
