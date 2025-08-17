// Usage functions for different page types
// Provides context-specific data access for multi-page and single-page layouts

import { getProfileData, getProfileDataByContext, getSectionTitlesData as getSectionTitles, getExperienceData, getExperienceById, getEducationData, getEducationById, getProjectData, getProjectById } from './dataAccess';
import { CORE_PROFILE_DATA, CORE_SECTION_TITLES, ProfileData, SectionTitlesData, ExperienceFormat, EducationFormat, ProjectFormat } from './consolidatedData';

// ============================================================================
// PROFILE USAGE FUNCTIONS
// ============================================================================

/**
 * Get profile data for hero section
 * Returns profile data formatted for hero sections
 */
export const getHeroProfileData = () => {
  return getProfileDataByContext('hero');
};

/**
 * Get profile data for header section
 * Returns profile data formatted for header sections
 */
export const getHeaderProfileData = () => {
  return getProfileDataByContext('header');
};

/**
 * Get profile data for page metadata
 * Returns profile data formatted for page metadata (title, meta description, etc.)
 */
export const getMetaProfileData = () => {
  return getProfileDataByContext('meta');
};

/**
 * Get profile data for contact section
 * Returns profile data formatted for contact sections
 */
export const getContactProfileData = () => {
  return getProfileDataByContext('contact');
};

/**
 * Get profile data for about section
 * Returns profile data formatted for about sections
 */
export const getAboutProfileData = () => {
  return getProfileDataByContext('about');
};

/**
 * Universal profile data access
 * Can be used by any component regardless of page type
 */
export const getUniversalProfileData = (): ProfileData => {
  return getProfileData();
};

// ============================================================================
// CONTACT SECTION USAGE FUNCTIONS
// ============================================================================



/**
 * Get contact section data for multi-page layouts
 * Returns contact section data formatted for multi-page usage
 */
export const getMultiPageContactData = () => {
  return {
    title: CORE_PROFILE_DATA.contactSection.ui.title,
    subtitle: CORE_PROFILE_DATA.contactSection.ui.subtitle,
    description1: CORE_PROFILE_DATA.contactSection.ui.description1,
    description2: CORE_PROFILE_DATA.contactSection.ui.description2,
    email: CORE_PROFILE_DATA.contactSection.labels.email,
    emailAddress: CORE_PROFILE_DATA.contact.email,
    linkedin: CORE_PROFILE_DATA.contactSection.labels.linkedin,
    linkedinUrl: CORE_PROFILE_DATA.contact.linkedin,
    github: CORE_PROFILE_DATA.contactSection.labels.github,
    githubUrl: CORE_PROFILE_DATA.contact.github,
    currentStatusTitle: CORE_PROFILE_DATA.contactSection.labels.currentStatus,
    availableStatus: CORE_PROFILE_DATA.contactSection.status.availableStatus,
    statusDescription: CORE_PROFILE_DATA.contactSection.status.statusDescription,
    responseTimeTitle: CORE_PROFILE_DATA.contactSection.labels.responseTime,
    responseTimeDescription: CORE_PROFILE_DATA.contactSection.status.responseTimeDescription
  };
};

/**
 * Get contact section data for single-page layouts
 * Returns contact section data formatted for single-page usage
 */
export const getSinglePageContactData = () => {
  return getMultiPageContactData();
};

// ============================================================================
// SECTION TITLES USAGE FUNCTIONS
// ============================================================================

/**
 * Get section titles data
 * Returns all section titles in a single object
 */
export const getSectionTitlesData = (): SectionTitlesData => {
  return getSectionTitles();
};

/**
 * Get specific section title
 * @param section - Section name
 * @returns Title for the specified section
 */
export const getSectionTitle = (section: keyof SectionTitlesData): string => {
  return getSectionTitles()[section];
};

/**
 * Get multiple section titles
 * @param sections - Array of section names
 * @returns Object with requested section titles
 */
export const getMultipleSectionTitles = (sections: (keyof SectionTitlesData)[]) => {
  const titles: Record<string, string> = {};
  sections.forEach(section => {
    titles[section] = getSectionTitles()[section];
  });
  return titles;
};

// ============================================================================
// MULTI-PAGE USAGE FUNCTIONS
// ============================================================================

/**
 * Multi-page experience section usage
 * Returns experience data formatted for dedicated experience pages
 */
export const getMultiPageExperienceData = () => {
  return {
    title: "Experience",
    experiences: getExperienceData('detailed'),
    // Could add multi-page specific metadata here
  };
};

/**
 * Multi-page about section usage
 * Returns experience data formatted for about page summaries
 */
export const getMultiPageAboutExperienceData = () => {
  return {
    experiences: getExperienceData('summary'),
    // Could add about page specific formatting here
  };
};

/**
 * Multi-page home page usage
 * Returns experience data formatted for home page experience section
 */
export const getMultiPageHomeExperienceData = () => {
  return {
    experiences: getExperienceData('summary'),
    // Could add home page specific formatting here
  };
};

/**
 * Multi-page education section usage
 * Returns education data formatted for dedicated education pages
 */
export const getMultiPageEducationData = () => {
  return {
    title: "Education",
    description: "Academic background and specialized training in computer science and software engineering.",
    education: getEducationData('detailed'),
  };
};

/**
 * Multi-page about section usage for education
 * Returns education data formatted for about page summaries
 */
export const getMultiPageAboutEducationData = () => {
  return {
    education: getEducationData('summary'),
  };
};

/**
 * Multi-page home page usage for education
 * Returns education data formatted for home page education section
 */
export const getMultiPageHomeEducationData = () => {
  return {
    education: getEducationData('summary'),
  };
};

/**
 * Multi-page projects section usage
 * Returns project data formatted for dedicated projects pages
 */
export const getMultiPageProjectsData = () => {
  return {
    title: "Featured Projects",
    description: "Explore my latest work in data engineering, API development, and full-stack applications.",
    viewAllButton: "View All Projects →",
    projects: getProjectData('featured'),
  };
};

/**
 * Multi-page about section usage for projects
 * Returns project data formatted for about page summaries
 */
export const getMultiPageAboutProjectsData = () => {
  return {
    projects: getProjectData('summary'),
  };
};

/**
 * Multi-page home page usage for projects
 * Returns project data formatted for home page projects section
 */
export const getMultiPageHomeProjectsData = () => {
  return {
    title: "Featured Projects",
    description: "Explore my latest work in data engineering, API development, and full-stack applications.",
    viewAllButton: "View All Projects →",
    projects: getProjectData('featured'),
  };
};

// ============================================================================
// SINGLE-PAGE USAGE FUNCTIONS
// ============================================================================

/**
 * Single-page experience section usage
 * Returns experience data formatted for single-page layouts
 */
export const getSinglePageExperienceData = () => {
  return {
    title: "Experience",
    experiences: getExperienceData('detailed'),
    // Could add single-page specific metadata here
  };
};

/**
 * Single-page portfolio section usage
 * Returns experience data formatted for portfolio layouts
 */
export const getSinglePagePortfolioExperienceData = () => {
  return {
    experiences: getExperienceData('portfolio'),
    // Could add portfolio specific formatting here
  };
};

/**
 * Single-page header section usage
 * Returns experience data formatted for header sections
 */
export const getSinglePageHeaderExperienceData = () => {
  return {
    experiences: getExperienceData('summary'),
    // Could add header specific formatting here
  };
};

/**
 * Single-page education section usage
 * Returns education data formatted for single-page layouts
 */
export const getSinglePageEducationData = () => {
  return {
    title: "Education",
    description: "Academic background and specialized training in computer science and software engineering.",
    education: getEducationData('detailed'),
  };
};

/**
 * Single-page portfolio section usage for education
 * Returns education data formatted for portfolio layouts
 */
export const getSinglePagePortfolioEducationData = () => {
  return {
    education: getEducationData('portfolio'),
  };
};

/**
 * Single-page projects section usage
 * Returns project data formatted for single-page layouts
 */
export const getSinglePageProjectsData = () => {
  return {
    title: "Featured Projects",
    description: "Explore my latest work in data engineering, API development, and full-stack applications.",
    viewAllButton: "View All Projects →",
    projects: getProjectData('detailed'),
  };
};

/**
 * Single-page portfolio section usage for projects
 * Returns project data formatted for portfolio layouts
 */
export const getSinglePagePortfolioProjectsData = () => {
  return {
    projects: getProjectData('portfolio'),
  };
};

// ============================================================================
// UNIVERSAL USAGE FUNCTIONS
// ============================================================================

/**
 * Universal experience data access
 * Can be used by any component regardless of page type
 */
export const getUniversalExperienceData = (format: ExperienceFormat = 'detailed') => {
  return getExperienceData(format);
};

/**
 * Universal experience by ID access
 * Useful for modals, detail views, etc.
 */
export const getUniversalExperienceById = (id: string) => {
  return getExperienceById(id);
};

/**
 * Universal education data access
 * Can be used by any component regardless of page type
 */
export const getUniversalEducationData = (format: EducationFormat = 'detailed') => {
  return getEducationData(format);
};

/**
 * Universal education by ID access
 * Useful for modals, detail views, etc.
 */
export const getUniversalEducationById = (id: string) => {
  return getEducationById(id);
};

/**
 * Universal project data access
 * Can be used by any component regardless of page type
 */
export const getUniversalProjectData = (format: ProjectFormat = 'detailed') => {
  return getProjectData(format);
};

/**
 * Universal project by ID access
 * Useful for modals, detail views, etc.
 */
export const getUniversalProjectById = (id: string) => {
  return getProjectById(id);
};

// ============================================================================
// LEGACY COMPATIBILITY FUNCTIONS
// ============================================================================

/**
 * Legacy compatibility function that mimics the old PAGE_METADATA structure
 * This allows gradual migration without breaking existing components
 */
export const getLegacyPageMetadata = () => {
  return {
    title: `${CORE_PROFILE_DATA.name} — ${CORE_PROFILE_DATA.role}`,
            metaDescription: CORE_PROFILE_DATA.shortDescription,
        nameSubtitle: CORE_PROFILE_DATA.role
  };
};

/**
 * Legacy compatibility function that mimics the old HERO_SECTION structure
 * This allows gradual migration without breaking existing components
 */
export const getLegacyHeroSection = () => {
  return {
    title: CORE_PROFILE_DATA.name,
            subtitle: CORE_PROFILE_DATA.role,
    lightThemeAlt: `${CORE_PROFILE_DATA.name} - Light Theme`,
    darkThemeAlt: `${CORE_PROFILE_DATA.name} - Dark Theme`,
    initials: CORE_PROFILE_DATA.initials
  };
};

/**
 * Legacy compatibility function that mimics the old HEADER_SECTION structure
 * This allows gradual migration without breaking existing components
 */
export const getLegacyHeaderSection = () => {
  return {
    title: CORE_PROFILE_DATA.name,
    role: CORE_PROFILE_DATA.role,
    description: CORE_PROFILE_DATA.shortDescription,
    email: CORE_PROFILE_DATA.contact.email,
    linkedinUrl: CORE_PROFILE_DATA.contact.linkedin
  };
};

/**
 * Legacy compatibility function that mimics the old CONTACT_SECTION structure
 * This allows gradual migration without breaking existing components
 */
export const getLegacyContactSection = () => {
  return {
    title: CORE_PROFILE_DATA.contactSection.ui.title,
    subtitle: CORE_PROFILE_DATA.contactSection.ui.subtitle,
    description1: CORE_PROFILE_DATA.contactSection.ui.description1,
    description2: CORE_PROFILE_DATA.contactSection.ui.description2,
    email: CORE_PROFILE_DATA.contactSection.labels.email,
    emailAddress: CORE_PROFILE_DATA.contact.email,
    linkedin: CORE_PROFILE_DATA.contactSection.labels.linkedin,
    linkedinUrl: CORE_PROFILE_DATA.contact.linkedin,
    github: CORE_PROFILE_DATA.contactSection.labels.github,
    githubUrl: CORE_PROFILE_DATA.contact.github,
    currentStatusTitle: CORE_PROFILE_DATA.contactSection.labels.currentStatus,
    availableStatus: CORE_PROFILE_DATA.contactSection.status.availableStatus,
    statusDescription: CORE_PROFILE_DATA.contactSection.status.statusDescription,
    responseTimeTitle: CORE_PROFILE_DATA.contactSection.labels.responseTime,
    responseTimeDescription: CORE_PROFILE_DATA.contactSection.status.responseTimeDescription
  };
};

/**
 * Legacy compatibility function that mimics the old EXPERIENCE_SECTION structure
 * This allows gradual migration without breaking existing components
 */
export const getLegacyExperienceSection = () => {
  return {
    title: CORE_SECTION_TITLES.experience,
    experiences: getExperienceData('detailed'),
  };
};

/**
 * Legacy compatibility function for portfolio data
 * Mimics the old PORTFOLIO_DATA_SECTION experience items
 */
export const getLegacyPortfolioExperienceItems = () => {
  return getExperienceData('portfolio').map(item => ({
    id: item.id,
    title: item.title,
    organization: item.company,
    dates: `${item.fromDate} - ${item.toDate}`,
    category: 'experience' as const,
    description: item.details,
    skills: item.technologies
  }));
};

/**
 * Legacy compatibility function that mimics the old EDUCATION_SECTION structure
 * This allows gradual migration without breaking existing components
 */
export const getLegacyEducationSection = () => {
  return {
    title: CORE_SECTION_TITLES.education,
    description: "Academic background and specialized training in computer science and software engineering.",
    education: getEducationData('detailed'),
  };
};

/**
 * Legacy compatibility function for portfolio data
 * Mimics the old PORTFOLIO_DATA_SECTION education items
 */
export const getLegacyPortfolioEducationItems = () => {
  return getEducationData('portfolio').map(item => ({
    id: item.id,
    title: item.title,
    organization: item.organization,
    dates: item.dates,
    category: 'education' as const,
    description: item.description,
    skills: item.skills
  }));
};

/**
 * Legacy compatibility function that mimics the old PROJECTS_SECTION structure
 * This allows gradual migration without breaking existing components
 */
export const getLegacyProjectsSection = () => {
  return {
    title: CORE_SECTION_TITLES.projects,
    description: "Explore my latest work in data engineering, API development, and full-stack applications.",
    viewAllButton: "View All Projects →",
    projects: getProjectData('featured'),
  };
};

/**
 * Legacy compatibility function for portfolio data
 * Mimics the old PORTFOLIO_DATA_SECTION project items
 */
export const getLegacyPortfolioProjectItems = () => {
  return getProjectData('portfolio').map(item => ({
    id: item.id,
    title: item.title,
    organization: item.organization,
    dates: item.dates,
    category: 'project' as const,
    description: item.description,
    skills: item.skills
  }));
};
