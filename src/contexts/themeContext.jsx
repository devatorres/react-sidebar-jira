import { useState, createContext, useEffect } from 'react'
import { STORAGE, THEME } from '../constants'
import { getThemeDataStorage, setThemeDataStorage } from '../utils'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME.DARK)

  const isDark = () => theme === THEME.DARK

  const toggleTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    setTheme(newTheme)
    setThemeDataStorage(newTheme)
    _putTheme(newTheme)
  }

  const init = async () => {
    const theme = await getThemeDataStorage()
    theme ? _putState(theme) : _putDefaultStorage()
  }

  const _putState = (theme) => {
    setTheme(theme)
    setThemeDataStorage(theme)
    _putTheme(theme)
  }

  const _putDefaultStorage = () => {
    setTheme(STORAGE.VALUE_DEFAULT)
    setThemeDataStorage(STORAGE.VALUE_DEFAULT)
    _putTheme(STORAGE.VALUE_DEFAULT)
  }

  const _putTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme)
  }

  useEffect(() => {
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
