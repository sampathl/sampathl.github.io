# Internationalization (i18n) System

This document explains how to use the internationalization system implemented in the portfolio application.

## Overview

All text content has been moved to a centralized constants file (`src/lib/textConstants.ts`) and components now use functional calls to retrieve text. This makes it easy to implement multiple language support in the future.

## File Structure

- **`src/lib/textConstants.ts`** - Main constants file containing all text content
- **Components** - Updated to use text constants instead of hardcoded strings

## How It Works

### 1. Text Constants

Text is organized into logical sections:

```typescript
export const HERO_SECTION = {
  title: "Sampath Lakkaraju",
  subtitle: "Senior Software Engineer—data pipelines, APIs, and polished UX.",
  lightThemeAlt: "Sampath Lakkaraju - Light Theme",
  darkThemeAlt: "Sampath Lakkaraju - Dark Theme",
  initials: "SL"
} as const;
```

### 2. Functional Calls

Components use type-safe getter functions to retrieve text:

```typescript
import { getHeroText } from '../../../lib/textConstants'

// In your component
<h1>{getHeroText('title')}</h1>
<p>{getHeroText('subtitle')}</p>
```

### 3. Available Getters

- `getHeroText(key)` - Hero section text
- `getAboutText(key)` - About section text
- `getExperienceText(key)` - Experience section text
- `getProjectsText(key)` - Projects section text
- `getContactText(key)` - Contact section text
- `getHeaderText(key)` - Header section text
- `getSkillsText(key)` - Skills section text
- `getPortfolioText(key)` - Portfolio section text
- `getWritingText(key)` - Writing section text
- `getNavigationText(key)` - Navigation text

## Adding New Text

### 1. Add to Constants File

```typescript
export const NEW_SECTION = {
  title: "New Section Title",
  description: "Section description",
  buttonText: "Click Me"
} as const;
```

### 2. Add to Helper Function

```typescript
export const getNewSectionText = (key: keyof typeof NEW_SECTION, locale: string = 'en'): string => {
  return getText('NEW_SECTION', key, locale);
};
```

### 3. Add to Sections Object

```typescript
const sections: Record<string, any> = {
  HERO_SECTION,
  ABOUT_SECTION,
  // ... other sections
  NEW_SECTION
};
```

### 4. Use in Component

```typescript
import { getNewSectionText } from '../../../lib/textConstants'

<h2>{getNewSectionText('title')}</h2>
<p>{getNewSectionText('description')}</p>
<button>{getNewSectionText('buttonText')}</button>
```

## Implementing Multiple Languages

### 1. Create Language Files

Create separate files for each language:

```typescript
// src/lib/locales/en.ts
export const EN = {
  HERO_SECTION: {
    title: "Sampath Lakkaraju",
    subtitle: "Senior Software Engineer—data pipelines, APIs, and polished UX."
  }
  // ... other sections
}

// src/lib/locales/es.ts
export const ES = {
  HERO_SECTION: {
    title: "Sampath Lakkaraju",
    subtitle: "Ingeniero de Software Senior—tuberías de datos, APIs y UX pulida."
  }
  // ... other sections
}
```

### 2. Update Text Constants

```typescript
import { EN } from './locales/en'
import { ES } from './locales/es'

const locales = {
  en: EN,
  es: ES
}

export const getText = (section: string, key: string, locale: string = 'en'): string => {
  const localeData = locales[locale] || locales.en
  const sectionData = localeData[section]
  
  if (!sectionData) {
    console.warn(`Section ${section} not found in locale ${locale}`)
    return key
  }
  
  const value = sectionData[key]
  if (value === undefined) {
    console.warn(`Key ${key} not found in section ${section}`)
    return key
  }
  
  return value
}
```

### 3. Add Language Switcher

```typescript
const [currentLocale, setCurrentLocale] = useState('en')

const switchLanguage = (locale: string) => {
  setCurrentLocale(locale)
  // You might want to store this in localStorage or context
}

// Pass locale to getter functions
<h1>{getHeroText('title', currentLocale)}</h1>
```

## Benefits

1. **Centralized Management** - All text in one place
2. **Type Safety** - TypeScript ensures correct key usage
3. **Easy Translation** - Simple to add new languages
4. **Consistent API** - All components use the same pattern
5. **Maintainable** - Easy to update text across the application

## Best Practices

1. **Use Descriptive Keys** - Keys should clearly indicate what the text represents
2. **Group Related Text** - Organize text into logical sections
3. **Avoid Hardcoded Strings** - Always use the getter functions
4. **Handle Missing Keys** - The system provides fallbacks for missing text
5. **Document Changes** - Update this document when adding new sections

## Example Component

```typescript
import { getHeroText } from '../../../lib/textConstants'

export default function HeroSection() {
  return (
    <section>
      <h1>{getHeroText('title')}</h1>
      <p>{getHeroText('subtitle')}</p>
      <img alt={getHeroText('lightThemeAlt')} />
    </section>
  )
}
```

## Troubleshooting

### Text Not Displaying

1. Check that the key exists in the constants file
2. Verify the import path is correct
3. Ensure the getter function is being called with the right key

### TypeScript Errors

1. Make sure the key exists in the section type
2. Check that the getter function is imported correctly
3. Verify the section name matches the constants

### Performance

The current implementation is lightweight and doesn't impact performance. For larger applications, consider:
- Memoizing text values
- Lazy loading language files
- Using React Context for locale state
