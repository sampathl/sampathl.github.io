import React, { createContext, useContext, useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

type Theme = 'light' | 'dark'
type Ctx = { theme: Theme, toggle: () => void }

const ThemeCtx = createContext<Ctx | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is already set by the HTML script
    const currentTheme = document.documentElement.getAttribute('data-theme') as Theme
    if (currentTheme) return currentTheme
    
    // Fallback to localStorage or default
    const saved = localStorage.getItem('theme') as Theme | null
    if (saved) return saved
    return 'dark' // Default to dark theme
  })

  useEffect(() => {
    // Only update if the theme has actually changed
    const currentTheme = document.documentElement.getAttribute('data-theme')
    if (currentTheme !== theme) {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <ThemeCtx.Provider value={{ theme, toggle: () => setTheme(t => t === 'light' ? 'dark' : 'light') }}>
      {children}
    </ThemeCtx.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeCtx)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-[rgb(var(--fg))] text-[rgb(var(--bg))] hover:bg-[rgb(var(--muted))] transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <MdDarkMode className="text-lg" /> : <MdLightMode className="text-lg" />}
    </button>
  )
}
