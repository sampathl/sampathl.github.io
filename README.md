# Sampath Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features both multi-page and single-page layouts with smooth animations and a clean design.

## 🚀 Features

- **Dual Layout Modes**: Switch between multi-page navigation and single-page portfolio view
- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Smooth Animations**: Powered by Framer Motion
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean, professional design with Tailwind CSS

## 🏗️ Project Structure

```
src/
├── components/                    # Reusable UI components
│   ├── common/                   # Shared components used across pages
│   │   └── ImpactCard.tsx       # Card component for displaying metrics
│   ├── layout/                   # Layout and navigation components
│   │   ├── Layout.tsx           # Main layout with navigation
│   │   ├── SinglePageLayout.tsx # Single page layout wrapper
│   │   └── Theme.tsx            # Theme provider and toggle
│   └── ui/                      # Basic UI components
│       ├── MaterialIcon.tsx     # Material Design icon wrapper
│       └── ScrollScrubVideo.tsx # Video scrubbing component
│
├── pages/                        # Page components organized by feature
│   ├── home/                    # Home page with multi-page layout
│   │   ├── components/          # Home-specific components
│   │   │   ├── HeroSection.tsx      # Hero section
│   │   │   ├── ExperienceSection.tsx # Experience timeline
│   │   │   ├── ProjectsSection.tsx   # Projects showcase
│   │   │   ├── AboutSection.tsx      # About information
│   │   │   ├── ContactSection.tsx    # Contact form
│   │   │   ├── ExpandableExperience.tsx # Expandable experience items
│   │   │   └── ProjectAccordion.tsx  # Project accordion
│   │   ├── Home.tsx             # Home page component
│   │   └── index.ts             # Export file
│   │
│   ├── single-page/             # Single page portfolio layout
│   │   ├── components/          # Single page components
│   │   │   ├── HeaderSection.tsx    # Header with navigation
│   │   │   ├── PortfolioSection.tsx # Portfolio items
│   │   │   └── SkillsSection.tsx    # Skills showcase
│   │   ├── SinglePage.tsx       # Single page component
│   │   └── index.ts             # Export file
│   │
│   ├── projects/                # Projects page
│   │   ├── components/          # Project components
│   │   │   ├── ProjectsSection.tsx  # Projects grid
│   │   │   └── ProjectDetail.tsx    # Individual project view
│   │   ├── Projects.tsx         # Projects listing page
│   │   ├── Project.tsx          # Individual project page
│   │   └── index.ts             # Export file
│   │
│   ├── about/                   # About page
│   │   ├── components/          # About components
│   │   │   └── AboutSection.tsx     # About information
│   │   ├── About.tsx            # About page
│   │   └── index.ts             # Export file
│   │
│   ├── contact/                 # Contact page
│   │   ├── components/          # Contact components
│   │   │   └── ContactSection.tsx   # Contact form and info

│   │   └── index.ts             # Export file
│   │
│   └── writing/                 # Writing page
│       ├── components/          # Writing components
│       │   └── WritingSection.tsx   # Articles and blog posts
│       ├── Writing.tsx          # Writing page
│       └── index.ts             # Export file
│
├── hooks/                       # Custom React hooks
│   ├── usePortfolio.ts          # Portfolio filtering and sorting
│   ├── useSkills.ts             # Skills management
│   └── useExperience.ts         # Experience management
│
├── types/                       # TypeScript type definitions
│   ├── portfolio.ts             # Portfolio-related types
│   └── index.ts                 # Type exports
│
├── data/                        # Static data
│   └── portfolio.ts             # Portfolio data
│
├── lib/                         # Utility functions
│   ├── cn.ts                    # Class name utility
│   └── constants.ts             # Application constants
│
└── styles/                      # Global styles
    └── globals.css              # Global CSS and Tailwind imports
```

## 🎯 Key Benefits of New Structure

1. **Better Organization**: Each page has its own directory with related components
2. **Easier Maintenance**: Components are grouped by functionality and page
3. **Improved Scalability**: Easy to add new pages and features
4. **Better Separation of Concerns**: Data, types, and business logic are separated
5. **Enhanced Developer Experience**: Easier to find and work with specific features
6. **Reusable Components**: Common components can be shared across pages
7. **Custom Hooks**: Business logic extracted into reusable hooks

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **React Router** - Client-side routing
- **React Icons** - Icon library
- **React Helmet Async** - Document head management
- **Vite** - Fast build tool and development server

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npx tsc --noEmit` - Type check without emitting files

## 🎨 Customization

### Adding New Pages

1. Create a new directory in `src/pages/`
2. Add your page component and any sub-components
3. Create an `index.ts` file for exports
4. Update `src/App.tsx` with the new route

### Adding New Components

1. Place in appropriate directory (`common/`, `ui/`, or page-specific `components/`)
2. Export from the component file
3. Import where needed

### Custom Hooks

1. Create new hook in `src/hooks/`
2. Export types if needed
3. Import and use in components

## 🌟 Features

### Multi-Page Layout
- **Home**: Hero section, experience timeline, projects showcase, about, contact
- **Projects**: Comprehensive projects grid with filtering
- **About**: Detailed skills, experience, and education
- **Contact**: Contact form with social links
- **Writing**: Articles and blog posts with category filtering

### Single-Page Layout
- **Portfolio View**: All content in one scrollable page
- **Skills Mapping**: Interactive skills visualization
- **Compact Navigation**: Header with essential links

### Interactive Elements
- **Theme Toggle**: Switch between light and dark themes
- **Responsive Navigation**: Mobile-friendly navigation menu
- **Smooth Animations**: Page transitions and component animations
- **Form Handling**: Contact form with validation
- **Filtering**: Projects and articles filtering by category

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoint System**: Responsive design using Tailwind breakpoints
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized loading and rendering

## 🔧 Development

### Code Style
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Component Structure**: Consistent component organization

### State Management
- **React Hooks**: Local state management
- **Context API**: Theme and layout state
- **Custom Hooks**: Reusable business logic

### Performance
- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Responsive image handling
- **Bundle Optimization**: Efficient bundling with Vite

## 🚀 Deployment

The application can be deployed to any static hosting service:

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **React Icons** for the icon library
- **Vite** for the fast build tool

---

Built with ❤️ by Sampath Lakkaraju
