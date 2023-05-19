import { useState, createContext, useEffect } from 'react'
import { getThemeDataStorage, setThemeDataStorage } from '@/utils'
import { STORAGE, THEME } from '@/constants'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME.LIGHT)

  const init = async () => {
    const theme = await getThemeDataStorage()
    theme ? _putState(theme) : _putDefaultStorage()
  }

  const _putState = (theme) => {
    setTheme(theme)
    _putTheme(theme)
  }

  const _putDefaultStorage = () => {
    setThemeDataStorage(STORAGE.VALUE_DEFAULT)
    _putTheme(STORAGE.VALUE_DEFAULT)
  }

  const _putTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  )
}
