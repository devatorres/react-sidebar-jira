import { useState, createContext } from 'react'
import { STORAGE } from '../constants'

export const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  /**
   * interface ISidebarData {
   *  isSidebarOpen: boolean
   *  size: number
   * }
   */
  const [sidebarData, setSidebarData] = useState(STORAGE.VALUE_DEFAULT)

  return (
    <SidebarContext.Provider value={{ sidebarData, setSidebarData }}>
      {children}
    </SidebarContext.Provider>
  )
}
