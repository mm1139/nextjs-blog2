import { useCallback, useEffect, useState } from 'react'

type useColorMode = (isDark?: boolean) => {
  isDarkMode: boolean
  toggle: (isDark?: boolean) => void
}

export const useToggleColoerMode: useColorMode = (isInitDark = false) => {
  const [isDarkMode, toggleTheme] = useState<boolean>(isInitDark)

  const toggle = useCallback((isDark?) => {
    if (typeof isDark === undefined) {
      toggleTheme((state) => !state)
      return
    }
    toggleTheme(isDark)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])
  return { isDarkMode, toggle }
}
