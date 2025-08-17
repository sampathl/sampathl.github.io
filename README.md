# Portfolio Template

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
- **React Router** - Client-side routing
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
- `npm run lint` - Run ESLint

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

---

Built with ❤️ by Sampath Lakkaraju
