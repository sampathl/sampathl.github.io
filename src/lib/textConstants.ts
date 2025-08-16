// Text constants for the portfolio application
// This file contains UI text content and constants that are not part of the core data
// Core data has been moved to consolidatedData.ts

// ============================================================================
// UI TEXT CONSTANTS
// ============================================================================

export const NAVIGATION = {
  home: "Home",
  experience: "Experience",
  projects: "Projects",
  writing: "Writing",
  about: "About",
  contact: "Contact"
} as const;

export const SKILLS_SECTION = {
  title: "Skills",
  showMeButton: "Show Me",
  hideSkillsButton: "Hide Skills",
  primaryTitle: "Primary",
  secondaryTitle: "Secondary",
  workedWithTitle: "Worked With",
  yearsSuffix: "years",
  skillsData: {
    primary: [
      { name: 'Python', years: 5 },
      { name: 'TypeScript', years: 4 },
      { name: 'React', years: 4 },
      { name: 'pandas', years: 4 },
      { name: 'FastAPI', years: 3 },
    ],
    secondary: [
      { name: 'Microservices', years: 3 },
      { name: 'Data Pipelines', years: 3 },
      { name: 'AWS', years: 3 },
      { name: 'Node.js', years: 3 },
      { name: 'GCP', years: 2 },
    ],
    workedWith: [
      'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis',
      'GraphQL', 'REST APIs', 'CI/CD', 'Terraform', 'Airflow',
      'Jupyter', 'Scikit-learn', 'Tailwind CSS', 'Material-UI'
    ]
  }
} as const;

export const PORTFOLIO_SECTION = {
  title: "Portfolio",
  filters: ['All', 'Experience', 'Education', 'Projects'],
  noItemsFound: "No items found for the selected filter.",
  categories: {
    experience: "Experience",
    education: "Education",
    project: "Project"
  }
} as const;

export const WRITING_SECTION = {
  title: "Writing & Articles",
  description: "Thoughts on software engineering, data architecture, and the future of technology. Sharing knowledge and experiences from building systems at scale.",
  featuredArticlesTitle: "Featured Articles",
  allArticlesTitle: "All Articles",
  categoryArticlesTitle: "Articles",
  readMoreButton: "Read More",
  stayUpdatedTitle: "Stay Updated",
  stayUpdatedDescription: "Get notified when I publish new articles about software engineering, data architecture, and technology trends.",
  emailPlaceholder: "Enter your email",
  subscribeButton: "Subscribe",
  categories: ['All', 'Data Engineering', 'API Development', 'Full-Stack', 'Frontend', 'Architecture', 'Data Science'],
  articles: [
    {
      id: '1',
      title: 'Building Scalable Data Pipelines with Apache Kafka',
      excerpt: 'A comprehensive guide to designing and implementing robust data pipelines using Apache Kafka, Apache Spark, and modern cloud infrastructure. Learn best practices for handling millions of records daily while maintaining data quality and system reliability.',
      category: 'Data Engineering',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      tags: ['Apache Kafka', 'Data Pipelines', 'Apache Spark', 'AWS'],
      icon: 'MdDataUsage',
      featured: true
    },
    {
      id: '2',
      title: 'Designing REST APIs for Performance and Scalability',
      excerpt: 'Explore advanced techniques for building high-performance REST APIs that can handle thousands of concurrent requests. Covering caching strategies, database optimization, rate limiting, and monitoring best practices.',
      category: 'API Development',
      readTime: '12 min read',
      publishDate: '2024-01-10',
      tags: ['REST API', 'Performance', 'Caching', 'Monitoring'],
      icon: 'MdCode',
      featured: true
    },
    {
      id: '3',
      title: 'The Future of Full-Stack Development',
      excerpt: 'An analysis of emerging trends in full-stack development, including the rise of TypeScript, the evolution of React patterns, and the growing importance of developer experience in modern web applications.',
      category: 'Full-Stack',
      readTime: '6 min read',
      publishDate: '2024-01-05',
      tags: ['TypeScript', 'React', 'Developer Experience', 'Trends'],
      icon: 'MdTrendingUp',
      featured: false
    },
    {
      id: '4',
      title: 'Optimizing React Applications for Production',
      excerpt: 'Practical strategies for improving React application performance, including code splitting, lazy loading, memoization techniques, and bundle optimization strategies that can significantly improve user experience.',
      category: 'Frontend',
      readTime: '10 min read',
      publishDate: '2023-12-28',
      tags: ['React', 'Performance', 'Optimization', 'Bundle Size'],
      icon: 'MdCode',
      featured: false
    },
    {
      id: '5',
      title: 'Microservices Architecture: Lessons Learned',
      excerpt: 'Real-world insights from implementing microservices at scale, including service discovery, inter-service communication, monitoring, and the challenges of maintaining distributed systems in production environments.',
      category: 'Architecture',
      readTime: '15 min read',
      publishDate: '2023-12-20',
      tags: ['Microservices', 'Architecture', 'Distributed Systems', 'Monitoring'],
      icon: 'MdTrendingUp',
      featured: false
    },
    {
      id: '6',
      title: 'Data-Driven Decision Making in Software Development',
      excerpt: 'How to leverage analytics and metrics to make informed decisions about software architecture, feature development, and technical debt management. Includes practical examples and measurement strategies.',
      category: 'Data Science',
      readTime: '9 min read',
      publishDate: '2023-12-15',
      tags: ['Analytics', 'Metrics', 'Decision Making', 'Data Science'],
      icon: 'MdDataUsage',
      featured: false
    }
  ]
} as const;

export const ABOUT_SECTION = {
  title: "About Me",
  coreSkillsTitle: "Core Skills",
  focusAreasTitle: "Focus Areas",
  skills: ['Python', 'TypeScript', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
  focusAreas: ['Data Engineering', 'API Development', 'Full-Stack Applications', 'System Design', 'Performance Optimization']
} as const;

// ============================================================================
// LEGACY COMPATIBILITY FUNCTIONS
// ============================================================================
// These functions maintain backward compatibility for components that haven't migrated yet
// They now route to the consolidated data structure

import { getLegacyPageMetadata, getLegacyHeroSection, getLegacyHeaderSection, getLegacyContactSection, getLegacyExperienceSection, getLegacyEducationSection, getLegacyProjectsSection } from './usageFunctions';

// Legacy profile getters
export const getPageMetadata = (key: keyof ReturnType<typeof getLegacyPageMetadata>, locale: string = 'en'): string => {
  const data = getLegacyPageMetadata();
  return data[key as keyof typeof data] as string;
};

export const getHeroText = (key: keyof ReturnType<typeof getLegacyHeroSection>, locale: string = 'en'): string => {
  const data = getLegacyHeroSection();
  return data[key as keyof typeof data] as string;
};

export const getHeaderText = (key: keyof ReturnType<typeof getLegacyHeaderSection>, locale: string = 'en'): string => {
  const data = getLegacyHeaderSection();
  return data[key as keyof typeof data] as string;
};

export const getContactText = (key: keyof ReturnType<typeof getLegacyContactSection>, locale: string = 'en'): string => {
  const data = getLegacyContactSection();
  return data[key as keyof typeof data] as string;
};

// Legacy experience getters
export const getExperienceText = (key: keyof ReturnType<typeof getLegacyExperienceSection>, locale: string = 'en'): any => {
  const data = getLegacyExperienceSection();
  if (key === 'experiences') {
    return data.experiences;
  }
  return data[key as keyof typeof data];
};

// Legacy education getters
export const getEducationText = (key: keyof ReturnType<typeof getLegacyEducationSection>, locale: string = 'en'): any => {
  const data = getLegacyEducationSection();
  if (key === 'education') {
    return data.education;
  }
  return data[key as keyof typeof data];
};

// Legacy project getters
export function getProjectsText(key: 'projects', locale?: string): any
export function getProjectsText(key: 'title' | 'description' | 'viewAllButton', locale?: string): string
export function getProjectsText(key: keyof ReturnType<typeof getLegacyProjectsSection>, locale?: string): any {
  const data = getLegacyProjectsSection();
  if (key === 'projects') {
    return data.projects;
  }
  return data[key as keyof typeof data];
}

// Legacy about section getters
export const getAboutText = (key: keyof typeof ABOUT_SECTION, locale: string = 'en'): string | readonly string[] => {
  if (key === 'skills' || key === 'focusAreas') {
    return ABOUT_SECTION[key];
  }
  return ABOUT_SECTION[key] as string;
};

// Legacy portfolio data getters
export const getPortfolioDataText = (key: 'allItems', locale?: string): any => {
  // This is now handled by the usePortfolio hook using consolidated data
  console.warn('getPortfolioDataText is deprecated. Use usePortfolio hook instead.');
  return [];
};

// Legacy skills getters
export const getSkillsText = (key: keyof typeof SKILLS_SECTION, locale: string = 'en'): string | any => {
  if (key === 'skillsData') {
    return SKILLS_SECTION.skillsData;
  }
  return SKILLS_SECTION[key];
};

// Legacy portfolio getters
export const getPortfolioText = (key: keyof typeof PORTFOLIO_SECTION, locale: string = 'en'): string | readonly string[] => {
  if (key === 'filters') {
    return PORTFOLIO_SECTION.filters;
  }
  if (key === 'categories') {
    return Object.values(PORTFOLIO_SECTION.categories);
  }
  return PORTFOLIO_SECTION[key] as string;
};

// Legacy writing getters
export const getWritingText = (key: keyof typeof WRITING_SECTION, locale: string = 'en'): string | readonly string[] | any => {
  if (key === 'articles') {
    return WRITING_SECTION.articles;
  }
  if (key === 'categories') {
    return WRITING_SECTION.categories;
  }
  return WRITING_SECTION[key];
};

// Legacy navigation getters
export const getNavigationText = (key: keyof typeof NAVIGATION, locale: string = 'en'): string => {
  return NAVIGATION[key];
};
