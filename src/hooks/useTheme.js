import { useContext } from 'react'
import { ThemeContext } from '../contexts'

const useTheme = () => {
  const { theme, isDark, toggleTheme } = useContext(ThemeContext)

  return { theme, isDark, toggleTheme }
}

export default useTheme
