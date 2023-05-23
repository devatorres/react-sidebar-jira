import { STORAGE } from '../constants'

export const getSidebarDataStorage = () => {
  const sidebarData = window.localStorage.getItem(STORAGE.NAME)
  return Promise.resolve(sidebarData ? JSON.parse(sidebarData) : undefined)
}

export const setSidebarDataStorage = (sidebarData) => {
  window.localStorage.setItem(STORAGE.NAME, JSON.stringify(sidebarData))
}
