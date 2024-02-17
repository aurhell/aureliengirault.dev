import { createContext, useState } from 'react'

import { THEME } from '@/constants'

export const ThemeContext = createContext({ theme: THEME.dark, toggleTheme: () => {} })

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(THEME.dark)

  function toggleTheme() {
    setTheme(theme === THEME.dark ? THEME.light : THEME.dark)
  }

  return (
    <ThemeContext.Provider
      value={ { theme, toggleTheme } }>
      {children}
    </ThemeContext.Provider>
  )
}
