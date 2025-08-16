import { CORE_SECTION_TITLES } from './consolidatedData'

// Navigation configuration
export const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: 'home', section: 'hero' },
  { to: '/', label: CORE_SECTION_TITLES.experience, icon: 'work', section: 'experience' },
  { to: '/', label: CORE_SECTION_TITLES.projects, icon: 'folder', section: 'projects' },
  // { to: '/', label: 'Writing', icon: 'edit', section: 'writing' },
  { to: '/', label: CORE_SECTION_TITLES.about, icon: 'person', section: 'about' },
  { to: '/', label: CORE_SECTION_TITLES.contact, icon: 'email', section: 'contact' },
] as const;

// Breakpoint constants
export const BREAKPOINTS = {
  MOBILE: 640,
  DESKTOP: 1024,
} as const;

// Scroll offset for better positioning
export const SCROLL_OFFSET = 80;
