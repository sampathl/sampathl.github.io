// Usage functions for different page types
// Provides context-specific data access for multi-page and single-page layouts

import { getProfileData, getProfileDataByContext, getSectionTitlesData as getSectionTitles, getExperienceData, getExperienceById, getEducationData, getEducationById, getProjectData, getProjectById } from './dataAccess';
import { CORE_PROFILE_DATA, UI_STRINGS, ProfileData, SectionTitlesData, ExperienceFormat, EducationFormat, ProjectFormat } from './consolidatedData';

// ============================================================================
// PROFILE USAGE FUNCTIONS
// ============================================================================

/**
 * Get profile data for about section
 * Returns profile data formatted for about sections
 */
export const getAboutProfileData = () => {
  return getProfileDataByContext('about');
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

// ============================================================================
// MULTI-PAGE USAGE FUNCTIONS
// ============================================================================

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
 * Multi-page home page usage for education
 * Returns education data formatted for home page education section
 */
export const getMultiPageHomeEducationData = () => {
  return {
    education: getEducationData('summary'),
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







