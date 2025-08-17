// Profile, Experience, Education, and Project data getter functions
// Provides flexible access to profile, experience, education, and project data based on usage context

import { CORE_PROFILE_DATA, UI_STRINGS, CORE_EXPERIENCE_DATA, CORE_EDUCATION_DATA, CORE_PROJECTS_DATA, CORE_SKILLS_SECTION, ProfileData, SectionTitlesData, ExperienceItem, ExperienceFormat, EducationItem, EducationFormat, ProjectItem, ProjectFormat } from './consolidatedData';

// ============================================================================
// PROFILE GETTER FUNCTIONS
// ============================================================================

/**
 * Get profile data
 * @returns Complete profile data object
 */
export const getProfileData = (): ProfileData => {
  return CORE_PROFILE_DATA;
};

/**
 * Get profile data by context
 * @param context - 'hero' for hero section, 'header' for header, 'meta' for metadata, 'contact' for contact section
 * @returns Profile data subset appropriate for the context
 */
export const getProfileDataByContext = (context: 'hero' | 'header' | 'meta' | 'contact' | 'about') => {
  switch (context) {
    case 'hero':
      return {
        name: CORE_PROFILE_DATA.name,
        role: CORE_PROFILE_DATA.role,
        description: CORE_PROFILE_DATA.shortDescription,
        initials: CORE_PROFILE_DATA.initials
      };
    
    case 'header':
      return {
        name: CORE_PROFILE_DATA.name,
        role: CORE_PROFILE_DATA.role,
        description: CORE_PROFILE_DATA.shortDescription,
        email: CORE_PROFILE_DATA.contact.email,
        linkedinUrl: CORE_PROFILE_DATA.contact.linkedin
      };
    
    case 'meta':
      return {
        title: `${CORE_PROFILE_DATA.name} — ${CORE_PROFILE_DATA.role}`,
        metaDescription: CORE_PROFILE_DATA.shortDescription,
        nameSubtitle: CORE_PROFILE_DATA.role
      };
    
    case 'contact':
      return {
        email: CORE_PROFILE_DATA.contact.email,
        linkedinUrl: CORE_PROFILE_DATA.contact.linkedin,
        githubUrl: CORE_PROFILE_DATA.contact.github,
        availableStatus: CORE_PROFILE_DATA.contactSection.status.availableStatus,
        statusDescription: CORE_PROFILE_DATA.contactSection.status.statusDescription,
        responseTimeDescription: CORE_PROFILE_DATA.contactSection.status.responseTimeDescription
      };
    
    case 'about':
      return {
        location: CORE_PROFILE_DATA.contact.location,
        experience: CORE_PROFILE_DATA.experience,
        education: CORE_PROFILE_DATA.education
      };
    
    default:
      return CORE_PROFILE_DATA;
  }
};





// ============================================================================
// SKILLS AGGREGATION FUNCTIONS
// ============================================================================

/**
 * Get primary skills (core technologies with 5+ years experience)
 */
export const getPrimarySkills = () => {
  return Object.entries(CORE_SKILLS_SECTION.skills)
    .filter(([_, years]) => (years as number) >= 5)
    .map(([skill, years]) => ({ name: skill, years: years as number }))
    .sort((a, b) => b.years - a.years);
};

/**
 * Get secondary skills (technologies with 2-5 years experience)
 */
export const getSecondarySkills = () => {
  return Object.entries(CORE_SKILLS_SECTION.skills)
    .filter(([_, years]) => (years as number) >= 2 && (years as number) < 5)
    .map(([skill, years]) => ({ name: skill, years: years as number }))
    .sort((a, b) => b.years - a.years);
};

/**
 * Get worked with skills (technologies used but not primary focus)
 */
export const getWorkedWithSkills = () => {
  return Object.keys(CORE_SKILLS_SECTION.workedWith);
};

// ============================================================================
// SECTION TITLES GETTER FUNCTIONS
// ============================================================================

/**
 * Get section titles data
 * @returns Complete section titles data object
 */
export const getSectionTitlesData = (): SectionTitlesData => {
  return UI_STRINGS.sectionTitles;
};

/**
 * Get specific section title
 * @param section - Section name
 * @returns Title for the specified section
 */
export const getSectionTitle = (section: keyof SectionTitlesData): string => {
  return UI_STRINGS.sectionTitles[section];
};

// ============================================================================
// EXPERIENCE GETTER FUNCTIONS
// ============================================================================

/**
 * Get experience data in the specified format
 * @param format - 'detailed' for full details, 'summary' for condensed view, 'portfolio' for portfolio layout
 * @returns Array of experience items in the requested format
 */
export const getExperienceData = (format: ExperienceFormat = 'detailed'): readonly ExperienceItem[] => {
  switch (format) {
    case 'detailed':
      // Return full experience data with all fields
      return CORE_EXPERIENCE_DATA;
    
    case 'summary':
      // Return experience data optimized for summary views
      return CORE_EXPERIENCE_DATA.map(item => ({
        ...item,
        // Could add summary-specific modifications here if needed
      }));
    
    case 'portfolio':
      // Return experience data optimized for portfolio layouts
      return CORE_EXPERIENCE_DATA.map(item => ({
        ...item,
        // Could add portfolio-specific modifications here if needed
      }));
    
    default:
      return CORE_EXPERIENCE_DATA;
  }
};

/**
 * Get experience data by ID
 * @param id - Experience item ID
 * @returns Single experience item or undefined
 */
export const getExperienceById = (id: string): ExperienceItem | undefined => {
  return CORE_EXPERIENCE_DATA.find(item => item.id === id);
};

// ============================================================================
// EDUCATION GETTER FUNCTIONS
// ============================================================================

/**
 * Get education data in the specified format
 * @param format - 'detailed' for full details, 'summary' for condensed view, 'portfolio' for portfolio layout
 * @returns Array of education items in the requested format
 */
export const getEducationData = (format: EducationFormat = 'detailed'): readonly EducationItem[] => {
  switch (format) {
    case 'detailed':
      // Return full education data with all fields
      return CORE_EDUCATION_DATA;
    
    case 'summary':
      // Return education data optimized for summary views
      return CORE_EDUCATION_DATA.map(item => ({
        ...item,
        // Could add summary-specific modifications here if needed
      }));
    
    case 'portfolio':
      // Return education data optimized for portfolio layouts
      return CORE_EDUCATION_DATA.map(item => ({
        ...item,
        // Could add portfolio-specific modifications here if needed
      }));
    
    default:
      return CORE_EDUCATION_DATA;
  }
};

/**
 * Get education data by ID
 * @param id - Education item ID
 * @returns Single education item or undefined
 */
export const getEducationById = (id: string): EducationItem | undefined => {
  return CORE_EDUCATION_DATA.find(item => item.id === id);
};

// ============================================================================
// PROJECT GETTER FUNCTIONS
// ============================================================================

/**
 * Get project data in the specified format
 * @param format - 'detailed' for full details, 'summary' for condensed view, 'portfolio' for portfolio layout, 'featured' for featured projects
 * @returns Array of project items in the requested format
 */
export const getProjectData = (format: ProjectFormat = 'detailed'): readonly ProjectItem[] => {
  switch (format) {
    case 'detailed':
      // Return full project data with all fields
      return CORE_PROJECTS_DATA;
    
    case 'summary':
      // Return project data optimized for summary views
      return CORE_PROJECTS_DATA.map(item => ({
        ...item,
        // Could add summary-specific modifications here if needed
      }));
    
    case 'portfolio':
      // Return project data optimized for portfolio layouts
      return CORE_PROJECTS_DATA.map(item => ({
        ...item,
        // Could add portfolio-specific modifications here if needed
      }));
    
    case 'featured':
      // Return only featured projects
      return CORE_PROJECTS_DATA.filter(item => item.featured === true);
    
    default:
      return CORE_PROJECTS_DATA;
  }
};

/**
 * Get project data by ID
 * @param id - Project item ID
 * @returns Single project item or undefined
 */
export const getProjectById = (id: string): ProjectItem | undefined => {
  return CORE_PROJECTS_DATA.find(item => item.id === id);
};

/**
 * Get project data filtered by status
 * @param status - Project status to filter by
 * @returns Array of project items with the specified status
 */
export const getProjectByStatus = (status: 'completed' | 'active'): readonly ProjectItem[] => {
  return CORE_PROJECTS_DATA.filter(item => item.status === status);
};
