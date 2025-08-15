import React, { createContext, useContext, useEffect, useState } from 'react'

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

// Material Icons
const MaterialIcon = ({ name, className = "" }: { name: string; className?: string }) => (
  <span className={`material-icons ${className}`}>{name}</span>
)

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      className="p-3 rounded-full bg-[rgb(var(--surface))]/80 backdrop-blur-sm border border-[rgb(var(--secondary))] text-[rgb(var(--fg))] hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--bg))] hover:border-[rgb(var(--accent))] hover:scale-110 shadow-lg transition-all duration-300"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <MaterialIcon name={theme === 'light' ? 'dark_mode' : 'light_mode'} className="text-lg" />
    </button>
  )
}
