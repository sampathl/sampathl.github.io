# Testing Documentation

This document describes the testing setup for the Portfolio project, including how to run tests, what's being tested, and how to add new tests.

## Testing Framework

The project uses **Vitest** as the testing framework, which is optimized for Vite projects and provides excellent TypeScript support.

### Dependencies

- `vitest` - Core testing framework
- `@vitest/ui` - Visual test runner interface
- `jsdom` - DOM environment for testing
- `@testing-library/react` - React testing utilities (for future component tests)
- `@testing-library/jest-dom` - Additional DOM matchers

## Test Structure

```
src/
├── lib/
│   ├── __tests__/           # Test files for lib functions
│   │   ├── consolidatedData.test.ts
│   │   ├── dataAccess.test.ts
│   │   ├── dataFormatters.test.ts
│   │   ├── navigation.test.ts
│   │   └── cn.test.ts
│   ├── consolidatedData.ts  # Core data structures
│   ├── dataAccess.ts        # Data getter functions
│   ├── dataFormatters.ts    # Data formatting functions
│   ├── navigation.ts        # Navigation configuration
│   └── cn.ts               # Utility functions
└── test/
    ├── setup.ts             # Test environment setup
    └── utils.ts             # Test utilities and helpers
```

## Running Tests

### Available Scripts

```bash
# Run tests in watch mode (development)
npm run test

# Run tests with UI interface
npm run test:ui

# Run tests once and exit
npm run test:run

# Run tests with coverage report
npm run test:coverage
```

### Test Commands

```bash
# Run all tests
npm run test:run

# Run specific test file
npx vitest run src/lib/__tests__/consolidatedData.test.ts

# Run tests matching a pattern
npx vitest run --reporter=verbose --grep="consolidatedData"

# Run tests in watch mode
npm run test
```

## What's Being Tested

### 1. Data Structures (`consolidatedData.test.ts`)

Tests the core data structures and constants:

- **UI_STRINGS**: UI text and section titles
- **CORE_PROFILE_DATA**: Profile information and contact details
- **CORE_SKILLS_SECTION**: Skills with experience levels
- **CORE_EXPERIENCE_DATA**: Work experience entries
- **CORE_EDUCATION_DATA**: Educational background
- **CORE_PROJECTS_DATA**: Project portfolio
- **CORE_WRITING_SECTION**: Articles and writing content

**Test Coverage**: 32 tests covering data structure validation, content verification, and type safety.

### 2. Data Access Functions (`dataAccess.test.ts`)

Tests the data getter functions:

- **Profile Functions**: `getProfileData()`, `getProfileDataByContext()`
- **Skills Functions**: `getPrimarySkills()`, `getSecondarySkills()`, `getWorkedWithSkills()`
- **Section Titles**: `getSectionTitlesData()`, `getSectionTitle()`
- **Experience Functions**: `getExperienceData()`, `getExperienceById()`
- **Education Functions**: `getEducationData()`, `getEducationById()`
- **Project Functions**: `getProjectData()`, `getProjectById()`, `getProjectByStatus()`

**Test Coverage**: 35 tests covering function return values, parameter handling, and edge cases.

### 3. Data Formatters (`dataFormatters.test.ts`)

Tests the data formatting and usage functions:

- **Profile Usage**: `getAboutProfileData()`
- **Section Titles**: `getSectionTitlesData()`, `getSectionTitle()`
- **Multi-page Functions**: Home page data formatting for experience, education, and projects

**Test Coverage**: 20 tests covering data consistency and formatting logic.

### 4. Navigation (`navigation.test.ts`)

Tests navigation configuration and constants:

- **NAV_ITEMS**: Navigation structure and properties
- **BREAKPOINTS**: Responsive breakpoint values
- **SCROLL_OFFSET**: Scroll positioning constants
- **Integration**: Navigation with UI strings

**Test Coverage**: 15 tests covering navigation structure and configuration.

### 5. Utility Functions (`cn.test.ts`)

Tests the class name utility function:

- **Basic Functionality**: String concatenation and filtering
- **Falsy Value Handling**: Filtering false, null, undefined values
- **Complex Scenarios**: Conditional class names and edge cases
- **Real-world Patterns**: Tailwind CSS and responsive classes

**Test Coverage**: 21 tests covering utility function behavior and edge cases.

## Test Utilities

### Test Setup (`src/test/setup.ts`)

- Configures DOM environment with jsdom
- Sets up testing-library matchers
- Mocks browser APIs like `window.matchMedia`

### Test Utilities (`src/test/utils.ts`)

Provides reusable testing helpers:

- **testUtils**: Common validation and helper functions
- **testDataGenerators**: Mock data creation functions
- **testAssertions**: Custom assertion helpers

## Adding New Tests

### 1. Create Test File

Create a new test file in the appropriate `__tests__` directory:

```typescript
// src/lib/__tests__/newFunction.test.ts
import { describe, it, expect } from 'vitest'
import { newFunction } from '../newFunction'

describe('newFunction', () => {
  it('should work correctly', () => {
    const result = newFunction()
    expect(result).toBeDefined()
  })
})
```

### 2. Test Structure

Follow the established pattern:

```typescript
describe('FunctionName', () => {
  describe('Specific Behavior', () => {
    it('should do something specific', () => {
      // Arrange
      const input = 'test'
      
      // Act
      const result = functionToTest(input)
      
      // Assert
      expect(result).toBe('expected')
    })
  })
})
```

### 3. Test Categories

Organize tests by functionality:

- **Basic Functionality**: Core behavior
- **Edge Cases**: Boundary conditions and error handling
- **Integration**: How functions work together
- **Performance**: Large data sets and efficiency

## Test Best Practices

### 1. Descriptive Test Names

```typescript
// Good
it('should return featured projects only when format is featured', () => {
  // test implementation
})

// Avoid
it('should work', () => {
  // test implementation
})
```

### 2. Test Isolation

Each test should be independent and not rely on other tests:

```typescript
// Good - each test is independent
it('should handle empty array', () => {
  const result = processArray([])
  expect(result).toEqual([])
})

it('should handle single item', () => {
  const result = processArray(['item'])
  expect(result).toEqual(['processed-item'])
})
```

### 3. Use Test Utilities

Leverage the provided test utilities:

```typescript
import { testAssertions, testDataGenerators } from '../../test/utils'

it('should validate experience data structure', () => {
  const mockExperience = testDataGenerators.createMockExperience()
  testAssertions.assertHasProperties(mockExperience, ['id', 'title', 'company'])
})
```

### 4. Test Data Validation

Test both valid and invalid inputs:

```typescript
it('should handle valid input', () => {
  const result = validateInput('valid-data')
  expect(result).toBe(true)
})

it('should handle invalid input', () => {
  const result = validateInput('')
  expect(result).toBe(false)
})
```

## Coverage Goals

Current test coverage targets:

- **Data Functions**: 100% (all functions tested)
- **Data Structures**: 100% (all constants validated)
- **Edge Cases**: 90%+ (comprehensive error handling)
- **Integration**: 85%+ (function interactions)

## Continuous Integration

Tests are designed to run in CI/CD pipelines:

- Fast execution (< 1 second for all tests)
- No external dependencies
- Deterministic results
- Clear error reporting

## Troubleshooting

### Common Issues

1. **Test Environment**: Ensure jsdom is properly configured
2. **Import Paths**: Use relative paths from test files
3. **Type Errors**: Check TypeScript configuration
4. **Async Tests**: Use proper async/await patterns

### Debug Mode

Run tests with verbose output:

```bash
npx vitest run --reporter=verbose
```

### Watch Mode Issues

If watch mode doesn't work properly:

```bash
# Clear cache and restart
rm -rf node_modules/.vite
npm run test
```

## Future Enhancements

### Planned Testing Improvements

1. **Component Testing**: Add tests for React components
2. **Integration Tests**: Test page-level functionality
3. **E2E Tests**: Add Playwright or Cypress tests
4. **Performance Tests**: Benchmark critical functions
5. **Accessibility Tests**: Ensure WCAG compliance

### Test Automation

- Pre-commit hooks for test validation
- Automated test runs on pull requests
- Coverage reporting in CI/CD
- Test result notifications

## Contributing

When adding new functionality:

1. **Write Tests First**: Follow TDD principles
2. **Maintain Coverage**: Keep test coverage high
3. **Update Documentation**: Document new test patterns
4. **Review Test Quality**: Ensure tests are meaningful

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Best Practices](https://testing-library.com/docs/guiding-principles)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [TypeScript Testing](https://www.typescriptlang.org/docs/handbook/testing.html)
