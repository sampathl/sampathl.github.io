import { getNavigationText } from './textConstants'

// Navigation configuration
export const NAV_ITEMS = [
  { to: '/', label: getNavigationText('home'), icon: 'home', section: 'hero' },
  { to: '/', label: getNavigationText('experience'), icon: 'work', section: 'experience' },
  { to: '/', label: getNavigationText('projects'), icon: 'folder', section: 'projects' },
  // { to: '/', label: getNavigationText('writing'), icon: 'edit', section: 'writing' },
  { to: '/', label: getNavigationText('about'), icon: 'person', section: 'about' },
  { to: '/', label: getNavigationText('contact'), icon: 'email', section: 'contact' },
] as const;

// Breakpoint constants
export const BREAKPOINTS = {
  MOBILE: 640,
  DESKTOP: 1024,
} as const;

// Scroll offset for better positioning
export const SCROLL_OFFSET = 80;
