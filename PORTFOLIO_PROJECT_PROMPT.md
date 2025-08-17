# Portfolio Project Creation Prompt for Cursor

## Detailed Prompt for Creating Portfolio Project from Scratch

**Create a modern, responsive portfolio website using React, TypeScript, and Tailwind CSS with the following specifications:**

### Project Setup & Dependencies
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with React plugin
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion for smooth transitions
- **Icons**: React Icons (Material Design icons)
- **State Management**: React Context API for layout state
- **Additional**: React Helmet Async for SEO, React Query for data fetching

### Project Structure
```
src/
├── components/
│   ├── Layout.tsx (Main layout with sidebar navigation)
│   ├── SinglePageLayout.tsx (Alternative single-page layout)
│   └── Theme.tsx (Theme toggle and provider)
├── lib/
│   ├── cn.ts (Utility for conditional CSS classes)
│   ├── consolidatedData.ts (Centralized data source)
│   ├── dataAccess.ts (Data fetching logic)
│   ├── dataFormatters.ts (Data formatting utilities)
│   └── navigation.ts (Navigation constants and logic)
├── pages/
│   ├── home/ (Home page with multiple sections)
│   ├── projects/ (Projects showcase page)
│   ├── writing/ (Writing and articles page)
│   └── single-page/ (Alternative single-page view)
├── styles/
│   └── globals.css (Global styles and CSS variables)
├── App.tsx (Main app with routing)
└── main.tsx (Entry point)
```

### Core Features

#### 1. **Responsive Layout System**
- Collapsible sidebar navigation (320px expanded, 80px collapsed)
- Grid-based layout that adapts to mobile/tablet/desktop
- Breakpoint detection: Mobile (<640px), Tablet (640-1024px), Desktop (>1024px)
- Local storage persistence for layout preferences

#### 2. **Theme System**
- Light/Dark theme toggle with smooth transitions
- CSS custom properties for color schemes
- Theme-aware images (different images for light/dark modes)
- Persistent theme preference

#### 3. **Navigation & Routing**
- Multi-page routing: Home, Projects, Writing
- Single-page mode toggle for alternative viewing experience
- Active section detection based on scroll position
- Smooth scrolling between sections

#### 4. **Home Page Sections**
- **Hero Section**: Full-screen hero with profile image, name, role, and description
- **About Section**: Personal information and background
- **Experience Section**: Expandable work experience timeline
- **Projects Section**: Featured projects with accordion layout
- **Contact Section**: Contact form and information

#### 5. **Data Architecture**
- Centralized data in `consolidatedData.ts` with TypeScript interfaces
- Profile data: Name, role, contact info, social links
- Experience data: Work history with companies and roles
- Projects data: Portfolio projects with descriptions and tech stacks
- UI strings and section titles for internationalization support

#### 6. **Styling & Design**
- Custom Tailwind configuration with CSS variable integration
- Modern design with rounded corners, shadows, and gradients
- Responsive typography using Work Sans and Inter fonts
- Smooth animations and transitions using Framer Motion
- CSS Grid and Flexbox for responsive layouts

#### 7. **Component Features**
- **Layout**: Responsive sidebar with navigation items and profile info
- **HeroSection**: Dynamic hero with theme-aware images and overlay text
- **ExperienceSection**: Expandable experience cards with company logos
- **ProjectsSection**: Project showcase with filtering and detailed views
- **ContactSection**: Contact form with validation and status display

### Technical Requirements

#### **CSS Architecture**
- CSS custom properties for theming and layout variables
- Responsive breakpoints and mobile-first approach
- Custom animations and transitions
- CSS Grid for main layout, Flexbox for component layouts

#### **TypeScript Implementation**
- Strict type checking with proper interfaces
- Context providers with typed state
- Component props with proper typing
- Utility functions with type safety

#### **Performance Features**
- Lazy loading for images and components
- Optimized animations with Framer Motion
- Responsive image handling
- Efficient re-renders with React.memo where appropriate

#### **Accessibility**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility

### Build & Development
- **Dev Server**: `npm run dev` (Vite dev server)
- **Build**: `npm run build` (TypeScript compilation + Vite build)
- **Preview**: `npm run preview` (Local build preview)

### Key Implementation Details

1. **Layout Context**: Manage sidebar state, viewport info, and single-page mode
2. **Theme Provider**: Handle theme switching with CSS variable updates
3. **Responsive Design**: Mobile-first approach with progressive enhancement
4. **Data Management**: Centralized data structure with TypeScript interfaces
5. **Animation System**: Framer Motion for smooth, performant animations
6. **CSS Variables**: Dynamic theming and responsive layout adjustments

### Package.json Dependencies

```json
{
  "dependencies": {
    "@tanstack/react-query": "^5.84.2",
    "framer-motion": "^12.23.12",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.8.0"
  },
  "devDependencies": {
    "@types/node": "^22.5.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@types/react-router-dom": "^5.3.3",
    "@vitejs/plugin-react": "^5.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10",
    "typescript": "^5.5.4",
    "vite": "^5.4.2"
  }
}
```

### Tailwind Configuration

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1rem"
      }
    },
  },
  plugins: [],
}
```

### CSS Variables for Theming

```css
:root {
  /* Light Theme Colors */
  --bg: 253 247 228;
  --fg: 44 44 44;
  --muted: 95 99 104;
  --accent: 187 171 140;
  --surface: 250 238 209;
  --hover: 248 248 240;
  --secondary: 222 208 182;
  --navbar: 187 171 140;
  --hover-border: 222 208 182;
  
  /* Layout Variables */
  --sidebar-width: 320px;
  --sidebar-collapsed-width: 80px;
  --main-padding-x: 2rem;
  --main-padding-y: 3rem;
  --content-max-width: 1200px;
  --section-spacing: 4rem;
  
  /* Responsive Breakpoints */
  --mobile: 640px;
  --tablet: 768px;
  --desktop: 1024px;
  --wide: 1280px;
}

[data-theme="dark"] {
  --bg: 26 26 26;
  --fg: 223 208 184;
  --muted: 176 176 176;
  --accent: 148 137 121;
  --surface: 40 44 52;
  --hover: 57 62 70;
  --secondary: 57 62 70;
  --navbar: 57 62 70;
  --hover-border: 148 137 121;
}
```

This portfolio showcases modern web development practices with a focus on performance, accessibility, and maintainable code architecture. The project demonstrates advanced React patterns, responsive design principles, and professional-grade component organization.
