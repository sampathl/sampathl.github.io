# Portfolio Website

A professional portfolio website built with React, TypeScript, and Material-UI.

## Features

- 🌙 **Dark/Light Theme Toggle** - Switch between dark and light modes
- 🌍 **Internationalization** - Support for English and Telugu (Telugu disabled for now)
- 📱 **Responsive Design** - Optimized for mobile and desktop
- 📋 **Multiple View Modes** - Chronological, Categorized, and Simplified views
- 🎨 **Modern UI** - Clean Material-UI design with custom theming

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`.

### Available Scripts

- `npm start` - Start the development server
- `npm build` - Build the application for production
- `npm test` - **Temporarily disabled** (shows message and exits)
- `npm run test:run` - Run tests (if you want to run them)
- `npm run eject` - Eject from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── ProfileHeader.tsx
│   ├── MobileContactDropdown.tsx
│   └── ContentSections.tsx
├── i18n/               # Internationalization
│   └── translations.ts
├── theme.ts            # Material-UI theme configuration
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

## Testing Status

⚠️ **Tests are temporarily disabled** due to configuration issues. The test files are present but not being run by default.

- Test files are located in `src/components/__tests__/` and other test directories
- To run tests manually, use `npm run test:run`
- Tests will be re-enabled once configuration issues are resolved

## Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Material-UI (MUI)** - UI component library
- **Emotion** - CSS-in-JS styling
- **React Testing Library** - Testing framework (temporarily disabled)

## Customization

### Adding Content

Update the translations in `src/i18n/translations.ts` to modify the displayed content.

### Styling

Modify the theme configuration in `src/theme.ts` to change colors, typography, and component styles.

### Adding Languages

1. Add new language translations to `src/i18n/translations.ts`
2. Update the language switcher in `src/components/Header.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes (when tests are re-enabled)
5. Submit a pull request

## License

This project is licensed under the MIT License. 