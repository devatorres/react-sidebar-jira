import { STORAGE } from '../constants'

export const getThemeDataStorage = () => {
  const theme = window.localStorage.getItem(STORAGE.NAME)
  return Promise.resolve(theme ? theme : undefined)
}

export const setThemeDataStorage = (theme) => {
  window.localStorage.setItem(STORAGE.NAME, theme)
}
