import React, { useContext, useEffect, useState } from "react"

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme")
    if (typeof storedPrefs === "string") {
      return storedPrefs
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    if (userMedia.matches) return "dark"
  }
  return "dark"
}

interface themeProps {
  initialTheme?: string
  children: React.ReactNode
}

type ThemeContextType = {
  theme?: string
  toggleTheme?: () => void
}

export const ThemeContext = React.createContext<ThemeContextType>({})

export const ThemeProvider = ({ initialTheme, children }: themeProps) => {
  const [theme, setTheme] = useState(getInitialTheme)

  const rawSetTheme = (theme: string) => {
    const root = window.document.documentElement
    const isDark = theme === "dark"

    root.classList.remove(isDark ? "light" : "dark")
    root.classList.add(theme)

    localStorage.setItem("color-theme", theme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useColorMode = () => useContext(ThemeContext)
