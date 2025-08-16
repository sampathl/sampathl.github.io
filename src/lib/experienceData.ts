// Profile, Experience, Education, and Project data getter functions
// Provides flexible access to profile, experience, education, and project data based on usage context

import { CORE_PROFILE_DATA, CORE_CONTACT_SECTION, CORE_SECTION_TITLES, CORE_EXPERIENCE_DATA, CORE_EDUCATION_DATA, CORE_PROJECTS_DATA, ProfileData, ContactSectionData, SectionTitlesData, ExperienceItem, ExperienceFormat, EducationItem, EducationFormat, ProjectItem, ProjectFormat } from './consolidatedData';

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
        description: CORE_PROFILE_DATA.longDescription,
        initials: CORE_PROFILE_DATA.initials
      };
    
    case 'header':
      return {
        name: CORE_PROFILE_DATA.name,
        role: CORE_PROFILE_DATA.role,
        description: CORE_PROFILE_DATA.shortDescription,
        email: CORE_PROFILE_DATA.email,
        linkedinUrl: CORE_PROFILE_DATA.linkedinUrl
      };
    
    case 'meta':
      return {
        title: `${CORE_PROFILE_DATA.name} — ${CORE_PROFILE_DATA.role}`,
        metaDescription: CORE_PROFILE_DATA.metaDescription,
        nameSubtitle: CORE_PROFILE_DATA.longDescription
      };
    
    case 'contact':
      return {
        email: CORE_PROFILE_DATA.email,
        linkedinUrl: CORE_PROFILE_DATA.linkedinUrl,
        githubUrl: CORE_PROFILE_DATA.githubUrl,
        availableStatus: CORE_PROFILE_DATA.availableStatus,
        statusDescription: CORE_PROFILE_DATA.statusDescription,
        responseTimeDescription: CORE_PROFILE_DATA.responseTimeDescription
      };
    
    case 'about':
      return {
        location: CORE_PROFILE_DATA.location,
        experience: CORE_PROFILE_DATA.experience,
        education: CORE_PROFILE_DATA.education
      };
    
    default:
      return CORE_PROFILE_DATA;
  }
};

/**
 * Get specific profile field
 * @param field - Profile field name
 * @returns Value of the specified profile field
 */
export const getProfileField = <K extends keyof ProfileData>(field: K): ProfileData[K] => {
  return CORE_PROFILE_DATA[field];
};

// ============================================================================
// CONTACT SECTION GETTER FUNCTIONS
// ============================================================================

/**
 * Get contact section data
 * @returns Complete contact section data object
 */
export const getContactSectionData = (): ContactSectionData => {
  return CORE_CONTACT_SECTION;
};

/**
 * Get specific contact section field
 * @param field - Contact section field name
 * @returns Value of the specified contact section field
 */
export const getContactSectionField = <K extends keyof ContactSectionData>(field: K): ContactSectionData[K] => {
  return CORE_CONTACT_SECTION[field];
};

// ============================================================================
// SECTION TITLES GETTER FUNCTIONS
// ============================================================================

/**
 * Get section titles data
 * @returns Complete section titles data object
 */
export const getSectionTitlesData = (): SectionTitlesData => {
  return CORE_SECTION_TITLES;
};

/**
 * Get specific section title
 * @param section - Section name
 * @returns Title for the specified section
 */
export const getSectionTitle = (section: keyof SectionTitlesData): string => {
  return CORE_SECTION_TITLES[section];
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

/**
 * Get experience data filtered by company
 * @param company - Company name to filter by
 * @returns Array of experience items for the specified company
 */
export const getExperienceByCompany = (company: string): readonly ExperienceItem[] => {
  return CORE_EXPERIENCE_DATA.filter(item => 
    item.company.toLowerCase().includes(company.toLowerCase())
  );
};

/**
 * Get experience data filtered by technology
 * @param technology - Technology to filter by
 * @returns Array of experience items that use the specified technology
 */
export const getExperienceByTechnology = (technology: string): readonly ExperienceItem[] => {
  return CORE_EXPERIENCE_DATA.filter(item => 
    item.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

/**
 * Get all unique technologies used across all experiences
 * @returns Array of unique technology strings
 */
export const getAllTechnologies = (): readonly string[] => {
  const allTechs = CORE_EXPERIENCE_DATA.flatMap(item => item.technologies);
  return [...new Set(allTechs)];
};

/**
 * Get experience data for a specific date range
 * @param startDate - Start date (YYYY-MM format)
 * @param endDate - End date (YYYY-MM format)
 * @returns Array of experience items within the date range
 */
export const getExperienceByDateRange = (startDate: string, endDate: string): readonly ExperienceItem[] => {
  // This is a placeholder - would need date parsing logic for actual implementation
  return CORE_EXPERIENCE_DATA;
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

/**
 * Get education data filtered by organization
 * @param organization - Organization name to filter by
 * @returns Array of education items for the specified organization
 */
export const getEducationByOrganization = (organization: string): readonly EducationItem[] => {
  return CORE_EDUCATION_DATA.filter(item => 
    item.organization.toLowerCase().includes(organization.toLowerCase())
  );
};

/**
 * Get education data filtered by skill
 * @param skill - Skill to filter by
 * @returns Array of education items that include the specified skill
 */
export const getEducationBySkill = (skill: string): readonly EducationItem[] => {
  return CORE_EDUCATION_DATA.filter(item => 
    item.skills.some(s => 
      s.toLowerCase().includes(skill.toLowerCase())
    )
  );
};

/**
 * Get all unique skills from education
 * @returns Array of unique skill strings
 */
export const getAllEducationSkills = (): readonly string[] => {
  const allSkills = CORE_EDUCATION_DATA.flatMap(item => item.skills);
  return [...new Set(allSkills)];
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
      // Return only featured projects (completed projects)
      return CORE_PROJECTS_DATA.filter(item => item.status === 'completed');
    
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
 * Get project data filtered by organization
 * @param organization - Organization name to filter by
 * @returns Array of project items for the specified organization
 */
export const getProjectByOrganization = (organization: string): readonly ProjectItem[] => {
  return CORE_PROJECTS_DATA.filter(item => 
    item.organization.toLowerCase().includes(organization.toLowerCase())
  );
};

/**
 * Get project data filtered by skill
 * @param skill - Skill to filter by
 * @returns Array of project items that include the specified skill
 */
export const getProjectBySkill = (skill: string): readonly ProjectItem[] => {
  return CORE_PROJECTS_DATA.filter(item => 
    item.skills.some(s => 
      s.toLowerCase().includes(skill.toLowerCase())
    )
  );
};

/**
 * Get project data filtered by status
 * @param status - Project status to filter by
 * @returns Array of project items with the specified status
 */
export const getProjectByStatus = (status: 'completed' | 'active'): readonly ProjectItem[] => {
  return CORE_PROJECTS_DATA.filter(item => item.status === status);
};

/**
 * Get all unique skills from projects
 * @returns Array of unique skill strings
 */
export const getAllProjectSkills = (): readonly string[] => {
  const allSkills = CORE_PROJECTS_DATA.flatMap(item => item.skills);
  return [...new Set(allSkills)];
};

/**
 * Get all unique technologies from projects
 * @returns Array of unique technology strings
 */
export const getAllProjectTechnologies = (): readonly string[] => {
  const allTechs = CORE_PROJECTS_DATA.flatMap(item => item.technologies);
  return [...new Set(allTechs)];
};
