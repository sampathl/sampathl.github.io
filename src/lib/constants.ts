// Navigation configuration
export const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: 'home', section: 'hero' },
  { to: '/', label: 'Experience', icon: 'work', section: 'experience' },
  { to: '/', label: 'Projects', icon: 'folder', section: 'projects' },
  // { to: '/', label: 'Writing', icon: 'edit', section: 'writing' },
  { to: '/', label: 'About', icon: 'person', section: 'about' },
  { to: '/', label: 'Contact', icon: 'email', section: 'contact' },
] as const;

// Breakpoint constants
export const BREAKPOINTS = {
  MOBILE: 640,
  DESKTOP: 1024,
} as const;

// Scroll offset for better positioning
export const SCROLL_OFFSET = 80;
