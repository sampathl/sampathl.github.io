import { UI_STRINGS } from './consolidatedData'

// Navigation configuration
export const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: 'home', section: 'hero' },
  { to: '/', label: UI_STRINGS.sectionTitles.experience, icon: 'work', section: 'experience' },
  { to: '/', label: UI_STRINGS.sectionTitles.projects, icon: 'folder', section: 'projects' },
  // { to: '/', label: 'Writing', icon: 'edit', section: 'writing' },
  { to: '/', label: UI_STRINGS.sectionTitles.about, icon: 'person', section: 'about' },
  { to: '/', label: 'Get In Touch', icon: 'email', section: 'contact' },
] as const;

// Breakpoint constants
export const BREAKPOINTS = {
  MOBILE: 640,
  DESKTOP: 1024,
} as const;

// Scroll offset for better positioning
export const SCROLL_OFFSET = 80;
