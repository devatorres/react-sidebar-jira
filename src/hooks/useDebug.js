import { useContext } from 'react'
import { DebugContext } from '../contexts'

const useDebug = () => {
  const { debug, isVisible, toggleVisibility } = useContext(DebugContext)

  return { debug, isVisible, toggleVisibility }
}

export default useDebug
