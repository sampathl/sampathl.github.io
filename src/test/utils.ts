import { CORE_PROFILE_DATA, CORE_EXPERIENCE_DATA, CORE_EDUCATION_DATA, CORE_PROJECTS_DATA } from '../lib/consolidatedData'

// Test utilities for common operations
export const testUtils = {
  // Mock data for testing
  mockData: {
    profile: { ...CORE_PROFILE_DATA },
    experience: [...CORE_EXPERIENCE_DATA],
    education: [...CORE_EDUCATION_DATA],
    projects: [...CORE_PROJECTS_DATA]
  },

  // Helper to create test IDs
  createTestId: (prefix: string, index: number) => `${prefix}-${index}`,

  // Helper to validate required fields
  validateRequiredFields: (obj: any, requiredFields: string[]) => {
    requiredFields.forEach(field => {
      expect(obj[field]).toBeDefined()
    })
  },

  // Helper to validate array structure
  validateArrayStructure: (arr: any[], expectedLength: number, validator: (item: any) => void) => {
    expect(arr).toHaveLength(expectedLength)
    arr.forEach(validator)
  },

  // Helper to validate date formats
  validateDateFormat: (date: string, pattern: RegExp) => {
    expect(date).toMatch(pattern)
  },

  // Helper to validate email format
  validateEmail: (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    expect(email).toMatch(emailRegex)
  },

  // Helper to validate URL format
  validateUrl: (url: string) => {
    try {
      new URL(url)
    } catch {
      throw new Error(`Invalid URL: ${url}`)
    }
  },

  // Helper to validate phone format
  validatePhone: (phone: string) => {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/
    expect(phone).toMatch(phoneRegex)
  }
}

// Test data generators
export const testDataGenerators = {
  // Generate mock experience item
  createMockExperience: (overrides: Partial<typeof CORE_EXPERIENCE_DATA[0]> = {}) => ({
    id: 'test-exp-1',
    title: 'Test Software Engineer',
    company: 'Test Company',
    details: 'Test details for experience',
    fields: 'Test Field',
    logo: '/test-logo.svg',
    fromDate: 'January 2020',
    toDate: 'December 2020',
    technologies: ['Python', 'React'],
    focusAreas: ['Test Focus'],
    ...overrides
  }),

  // Generate mock education item
  createMockEducation: (overrides: Partial<typeof CORE_EDUCATION_DATA[0]> = {}) => ({
    id: 'test-edu-1',
    title: 'Test Degree',
    organization: 'Test University',
    dates: '2020 - 2024',
    description: 'Test description',
    technologies: ['Test Tech'],
    focusAreas: ['Test Focus'],
    ...overrides
  }),

  // Generate mock project item
  createMockProject: (overrides: Partial<typeof CORE_PROJECTS_DATA[0]> = {}) => ({
    id: 'test-proj-1',
    title: 'Test Project',
    organization: 'Test Org',
    dates: '2024',
    description: 'Test project description',
    technologies: ['Test Tech'],
    status: 'completed' as const,
    icon: 'test',
    metric: 'Test metric',
    focusAreas: ['Test Focus'],
    featured: true,
    ...overrides
  })
}

// Test assertions helpers
export const testAssertions = {
  // Assert that an object has all required properties
  assertHasProperties: (obj: any, properties: string[]) => {
    properties.forEach(prop => {
      expect(obj).toHaveProperty(prop)
    })
  },

  // Assert that an array contains items with specific properties
  assertArrayItemsHaveProperties: (arr: any[], properties: string[]) => {
    arr.forEach(item => {
      testAssertions.assertHasProperties(item, properties)
    })
  },

  // Assert that a string matches a pattern
  assertStringPattern: (str: string, pattern: RegExp, description?: string) => {
    expect(str).toMatch(pattern)
  },

  // Assert that a number is within a range
  assertNumberRange: (num: number, min: number, max: number) => {
    expect(num).toBeGreaterThanOrEqual(min)
    expect(num).toBeLessThanOrEqual(max)
  },

  // Assert that an array is sorted by a specific property
  assertArraySorted: <T>(arr: T[], property: keyof T, ascending: boolean = true) => {
    for (let i = 0; i < arr.length - 1; i++) {
      const current = arr[i][property]
      const next = arr[i + 1][property]
      
      if (ascending) {
        expect(current <= next).toBe(true)
      } else {
        expect(current >= next).toBe(true)
      }
    }
  }
}

// Export all utilities
export default {
  testUtils,
  testDataGenerators,
  testAssertions
}
