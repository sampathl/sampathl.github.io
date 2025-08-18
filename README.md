# Portfolio Template

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features both multi-page and single-page layouts with smooth animations and a clean design.

## 🚀 Features

- **Dual Layout Modes**: Switch between multi-page navigation and single-page portfolio view
- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Smooth Animations**: Powered by Framer Motion
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean, professional design with Tailwind CSS
- **GitHub Pages Ready**: Configured for seamless deployment

## 🏗️ Project Structure

```
src/
├── components/                    # Reusable UI components
│   ├── Layout.tsx               # Main layout with navigation
│   ├── SinglePageLayout.tsx     # Single page layout wrapper
│   └── Theme.tsx                # Theme provider and toggle
│
├── pages/                        # Page components
│   ├── home/                    # Home page with multi-page layout
│   ├── projects/                # Projects page
│   ├── single-page/             # Single page portfolio layout
│   └── writing/                 # Writing page
│
├── lib/                         # Utility functions and data
│   ├── consolidatedData.ts      # All portfolio data
│   ├── dataAccess.ts            # Data access functions
│   ├── dataFormatters.ts        # Data formatting functions
│   ├── navigation.ts            # Navigation configuration
│   └── cn.ts                    # Class name utility
│
└── styles/                      # Global styles
    └── globals.css              # Global CSS and Tailwind imports
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **React Router** - Client-side routing (HashRouter for GitHub Pages compatibility)
- **React Icons** - Icon library
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
- `npm run deploy` - Deploy to GitHub Pages
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage

## 🎨 Customization

**📖 For detailed customization instructions, see [CUSTOMIZATION.md](./CUSTOMIZATION.md)**

### Quick Start
1. **Fork this repository**
2. **Update personal information** in `src/lib/consolidatedData.ts`
3. **Customize styling** in `src/styles/globals.css`
4. **Test and deploy**

### Key Files to Update
- `src/lib/consolidatedData.ts` - All your personal data
- `src/lib/navigation.ts` - Navigation labels
- `src/styles/globals.css` - Colors and styling
- `tailwind.config.js` - Theme configuration

## 🌟 Layout Modes

### Multi-Page Layout
- **Home**: Hero section, experience timeline, projects showcase, about, contact
- **Projects**: Projects grid with filtering
- **Writing**: Articles and blog posts

### Single-Page Layout
- **Portfolio View**: All content in one scrollable page
- **Skills Mapping**: Interactive skills visualization
- **Compact Navigation**: Header with essential links

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoint System**: Responsive design using Tailwind breakpoints
- **Touch Friendly**: Optimized for touch interactions

## 🚀 Deployment

### GitHub Pages Deployment (Recommended)

This portfolio is configured for GitHub Pages deployment with the following setup:

1. **Repository Configuration**
   - Repository name: `Portfolio` (or your preferred name)
   - GitHub Pages source: `gh-pages` branch
   - Base URL: `/Portfolio/` (configured in `vite.config.ts`)

2. **Deploy Command**
   ```bash
   npm run deploy
   ```
   This will:
   - Build the project for production
   - Deploy to the `gh-pages` branch
   - Make it available at `https://yourusername.github.io/Portfolio/`

3. **Manual Deployment Steps** (if needed)
   ```bash
   npm run build
   git checkout gh-pages
   rm -rf *
   cp -r dist/* .
   git add .
   git commit -m "Deploy portfolio"
   git push origin gh-pages
   git checkout main
   ```

### Other Hosting Services

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to your hosting service

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',  // Base path for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
```

### Package.json Scripts
- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Deploy**: `npm run deploy` (uses gh-pages package)

## 🐛 Troubleshooting

### Common Issues and Solutions

1. **MIME Type Errors on GitHub Pages**
   - **Cause**: GitHub Pages trying to serve source TypeScript files
   - **Solution**: Ensure you're using the built files from the `gh-pages` branch

2. **Routing Not Working on GitHub Pages**
   - **Cause**: `BrowserRouter` doesn't work on GitHub Pages
   - **Solution**: This portfolio uses `HashRouter` for GitHub Pages compatibility

3. **Assets Not Loading**
   - **Cause**: Incorrect base path configuration
   - **Solution**: Verify `base: '/Portfolio/'` in `vite.config.ts` matches your repository name

4. **Build Failures**
   - **Cause**: Missing dependencies
   - **Solution**: Run `npm install` to ensure all packages are installed

### Deployment Checklist

- [ ] Repository name matches the base path in `vite.config.ts`
- [ ] GitHub Pages is configured to serve from `gh-pages` branch
- [ ] All dependencies are installed (`npm install`)
- [ ] Build succeeds locally (`npm run build`)
- [ ] Deployment completes without errors (`npm run deploy`)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by Sampath Lakkaraju

## 📚 Additional Documentation

- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Detailed customization guide
- [TESTING.md](./TESTING.md) - Testing setup and guidelines
- [INTERNATIONALIZATION.md](./INTERNATIONALIZATION.md) - i18n support
- [LEARNING_JOURNEY.md](./LEARNING_JOURNEY.md) - Development journey and lessons learned
