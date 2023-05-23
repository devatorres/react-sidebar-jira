import { useState, createContext } from 'react'

export const DebugContext = createContext()

export const DebugProvider = ({ children }) => {
  const [debug, setDebug] = useState(false)

  const isVisible = () => debug

  const toggleVisibility = () => {
    setDebug(!debug)
  }

  return (
    <DebugContext.Provider value={{ debug, isVisible, toggleVisibility }}>
      {children}
    </DebugContext.Provider>
  )
}
