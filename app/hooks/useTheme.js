import { useContext } from 'react'
import { ThemeContext } from '../contexts'

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const changeTheme = () => {}

  return { theme, changeTheme }
}

export default useTheme
