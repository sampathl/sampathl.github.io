import { Link, NavLink } from 'react-router-dom'
import { ThemeProvider, ThemeToggle } from './Theme'
import { useState, useEffect, createContext, useContext } from 'react'
import { cn } from '../lib/cn'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { MdViewList, MdFullscreen, MdMenu, MdChevronRight, MdChevronLeft, MdHome, MdWork, MdFolder, MdPerson, MdEmail } from 'react-icons/md'
import { NAV_ITEMS, BREAKPOINTS, SCROLL_OFFSET } from '../lib/constants'

// Enhanced context for layout state
interface LayoutContextType {
  isCollapsed: boolean
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isSinglePageMode: boolean
  setIsSinglePageMode: (mode: boolean) => void
}

const LayoutContext = createContext<LayoutContextType>({
  isCollapsed: false,
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  isSinglePageMode: false,
  setIsSinglePageMode: () => {}
})

export const useLayout = () => useContext(LayoutContext)

export function Layout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('hero')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isSinglePageMode, setIsSinglePageMode] = useState(() => {
    // Initialize from localStorage if available
    const saved = localStorage.getItem('portfolio-single-page-mode')
    return saved ? JSON.parse(saved) : false
  })
  const [viewportInfo, setViewportInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  })



  // Save single-page mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('portfolio-single-page-mode', JSON.stringify(isSinglePageMode))
  }, [isSinglePageMode])

  // Responsive breakpoint detection
  useEffect(() => {
    const updateViewportInfo = () => {
      const width = window.innerWidth
      setViewportInfo({
        isMobile: width < BREAKPOINTS.MOBILE,
        isTablet: width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.DESKTOP,
        isDesktop: width >= BREAKPOINTS.DESKTOP
      })
    }

    updateViewportInfo()
    window.addEventListener('resize', updateViewportInfo)
    return () => window.removeEventListener('resize', updateViewportInfo)
  }, [])

  // Scroll detection for active section - Fixed logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'projects', 'about', 'contact']
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      let currentSection = 'hero'

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + scrollTop
          
          // Check if we're past the middle of the section
          if (scrollTop + window.innerHeight / 2 >= elementTop) {
            currentSection = sectionId
            break
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check after a short delay to ensure DOM is ready
    setTimeout(handleScroll, 100)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    
    if (element) {
      const rect = element.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const elementTop = rect.top + scrollTop
      
      window.scrollTo({
        top: elementTop - SCROLL_OFFSET,
        behavior: 'smooth'
      })
      
      setActiveSection(sectionId)
    }
  }

  // Update document attribute for CSS variables
  useEffect(() => {
    document.documentElement.setAttribute('data-sidebar-collapsed', isSidebarCollapsed.toString())
  }, [isSidebarCollapsed])

  const layoutContextValue: LayoutContextType = {
    isCollapsed: isSidebarCollapsed,
    ...viewportInfo,
    isSinglePageMode,
    setIsSinglePageMode
  }

  return (
    <ThemeProvider>
      <LayoutContext.Provider value={layoutContextValue}>
        <div className="min-h-screen" style={{ fontFamily: '"Work Sans", "Inter", sans-serif' }}>
          {isSinglePageMode ? (
            // Single Page Mode - No sidebar, no navigation, just content
            <main className="w-full bg-[rgb(var(--bg))] relative">
              {/* Floating Theme Toggle and Layout Mode Toggle - Top Right Corner */}
              <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
                {/* Layout Mode Toggle */}
                <div className="bg-[rgb(var(--accent))] text-[rgb(var(--bg))] px-4 py-2 rounded-full shadow-lg border-2 border-[rgb(var(--accent))] hover:border-[rgb(var(--bg))] transition-all duration-300 hover:scale-105">
                  <button
                    onClick={() => setIsSinglePageMode(false)}
                    className="flex items-center gap-2 font-semibold text-sm"
                  >
                    <MdViewList className="text-lg" />
                    Multi-Page
                  </button>
                </div>
                
                {/* Theme Toggle */}
                <ThemeToggle />
              </div>
              
              {children}
            </main>
          ) : (
            // Normal Layout with Sidebar
            <div className={cn(
              "layout-container",
              isSidebarCollapsed && "data-sidebar-collapsed"
            )}>
              <Sidebar 
                activeSection={activeSection} 
                scrollToSection={scrollToSection}
                onCollapseChange={setIsSidebarCollapsed}
                isMobile={viewportInfo.isMobile}
                isTablet={viewportInfo.isTablet}
                isCollapsed={isSidebarCollapsed}
              />
              <main className="main-content bg-[rgb(var(--bg))] relative">
                {/* Floating Theme Toggle and Layout Mode Toggle - Top Right Corner */}
                <div className="fixed top-6 right-6 z-50 flex items-center gap-4">

                  
                  {/* Single Page Mode Toggle */}
                  <div className="bg-[rgb(var(--accent))] text-[rgb(var(--bg))] px-4 py-2 rounded-full shadow-lg border-2 border-[rgb(var(--accent))] hover:border-[rgb(var(--bg))] transition-all duration-300 hover:scale-105">
                    <button
                      onClick={() => setIsSinglePageMode(true)}
                      className="flex items-center gap-2 font-semibold text-sm"
                    >
                      <MdFullscreen className="text-lg" />
                      Single-Page
                    </button>
                  </div>
                  
                  {/* Theme Toggle */}
                  <ThemeToggle />
                </div>
                
                {children}
              </main>
            </div>
          )}
        </div>
      </LayoutContext.Provider>
    </ThemeProvider>
  )
}

function Sidebar({ 
  activeSection, 
  scrollToSection, 
  onCollapseChange,
  isMobile,
  isTablet,
  isCollapsed
}: { 
  activeSection: string; 
  scrollToSection: (sectionId: string) => void;
  onCollapseChange: (collapsed: boolean) => void;
  isMobile: boolean;
  isTablet: boolean;
  isCollapsed: boolean;
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleNavClick = (item: (typeof NAV_ITEMS)[number]) => {
    if (item.section) {
      scrollToSection(item.section)
      setIsMobileOpen(false)
    }
  }

  // Auto-collapse on mobile/tablet
  useEffect(() => {
    if (isMobile || isTablet) {
      onCollapseChange(true)
    }
  }, [isMobile, isTablet, onCollapseChange])

  // Function to map icon names to React Icons components
  const getNavIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'home': MdHome,
      'work': MdWork,
      'folder': MdFolder,
      'person': MdPerson,
      'email': MdEmail,
    }
    
    return iconMap[iconName] || MdHome
  }

  return (
    <>
      {/* Mobile Menu Button */}
      {(isMobile || isTablet) && (
        <button 
          className="lg:hidden fixed top-4 left-4 z-50 p-3 rounded-xl bg-[rgb(var(--surface))] backdrop-blur-sm border border-[rgb(var(--hover-border))] shadow-lg hover:border-[rgb(var(--accent))] transition-all duration-300"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <MdMenu className="text-lg" />
        </button>
      )}

      {/* Mobile Overlay */}
      {isMobileOpen && (isMobile || isTablet) && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "bg-[rgb(var(--navbar))] text-[rgb(var(--fg))] transition-all duration-300 z-40",
        "border-r border-[rgb(var(--hover-border))]",
        "flex flex-col h-screen", // Ensure full height
        isCollapsed ? "w-20" : "w-80",
        (isMobile || isTablet) && "fixed top-0 left-0",
        (isMobile || isTablet) && (isMobileOpen ? "translate-x-0" : "-translate-x-full"),
        !(isMobile || isTablet) && "relative sticky top-0" // Sticky positioning for desktop
      )}>
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              to="/" 
              className={cn(
                "flex items-center gap-3 font-bold text-xl transition-all text-[rgb(var(--fg))]",
                isCollapsed && "justify-center"
              )}
              onClick={() => setIsMobileOpen(false)}
              style={{ fontFamily: '"Work Sans", sans-serif' }}
            >
              {/* Avatar - Shows image when not on home, initials when on home */}
              <div className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 overflow-hidden",
                activeSection === 'hero' 
                  ? "bg-[rgb(var(--accent))] text-[rgb(var(--bg))]" 
                  : "bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))]"
              )}>
                {activeSection === 'hero' ? (
                  'SL'
                ) : (
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format" 
                    alt="Sampath Lakkaraju" 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {!isCollapsed && <span>Sampath Lakkaraju</span>}
            </Link>
      
            {/* Collapse Toggle - Only show on desktop */}
            {!(isMobile || isTablet) && (
              <button 
                onClick={() => onCollapseChange(!isCollapsed)}
                className="p-2 rounded-lg hover:bg-[rgb(var(--hover))] transition-colors"
              >
                {isCollapsed ? <MdChevronRight className="text-lg" /> : <MdChevronLeft className="text-lg" />}
              </button>
            )}
          </div>

          {/* User Info */}
          {!isCollapsed && (
            <div className="mb-8 p-4 rounded-xl bg-[rgb(var(--hover))]">
              <div className="text-sm font-medium text-[rgb(var(--fg))]" style={{ fontFamily: '"Work Sans", sans-serif' }}>Senior Software Engineer</div>
              <div className="text-xs text-[rgb(var(--muted))] mt-1" style={{ fontFamily: '"Inter", sans-serif' }}>Data pipelines, APIs, and polished UX</div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 space-y-3">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.section
              
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group text-left relative overflow-hidden",
                    "hover:bg-[rgb(var(--hover))] hover:scale-105 hover:shadow-lg",
                    "transform-gpu will-change-transform",
                    isActive 
                      ? "bg-[rgb(var(--accent))] text-[rgb(var(--bg))] font-semibold shadow-lg scale-105" 
                      : "text-[rgb(var(--fg))] hover:text-[rgb(var(--accent))]",
                    isCollapsed && "justify-center px-3"
                  )}
                >
                  {/* Active indicator line */}
                  <div className={cn(
                    "absolute left-0 top-0 bottom-0 w-1 bg-[rgb(var(--bg))] transition-all duration-300",
                    isActive ? "opacity-100" : "opacity-0"
                  )} />
                  
                  {/* Icon with animation */}
                  <div className={cn(
                    "flex items-center justify-center transition-all duration-300",
                    isActive && "animate-pulse"
                  )}>
                    {(() => {
                      const IconComponent = getNavIcon(item.icon)
                      return (
                        <IconComponent 
                          className={cn(
                            "text-lg flex-shrink-0 transition-all duration-300",
                            isActive ? "scale-110" : "group-hover:scale-110"
                          )} 
                        />
                      )
                    })()}
                  </div>
                  
                  {!isCollapsed && (
                    <>
                      <span 
                        className={cn(
                          "font-medium transition-all duration-300",
                          isActive && "tracking-wide"
                        )} 
                        style={{ fontFamily: '"Work Sans", sans-serif' }}
                      >
                        {item.label}
                      </span>
                      
                      {/* Animated dot indicator */}
                      <div className={cn(
                        "ml-auto w-2 h-2 rounded-full transition-all duration-300",
                        isActive 
                          ? "bg-[rgb(var(--bg))] opacity-100 scale-125" 
                          : "bg-[rgb(var(--accent))] opacity-0 group-hover:opacity-100 group-hover:scale-110"
                      )} />
                      
                      {/* Ripple effect background */}
                      <div className={cn(
                        "absolute inset-0 rounded-xl transition-all duration-500 opacity-0",
                        "bg-gradient-to-r from-transparent via-white/10 to-transparent",
                        "group-hover:opacity-100 group-hover:translate-x-full",
                        "-translate-x-full"
                      )} />
                    </>
                  )}
                </button>
              )
            })}
          </nav>

          {/* Theme Toggle moved to top right corner */}
        </div>
      </aside>
    </>
  )
}
