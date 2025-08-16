// Text constants for the portfolio application
// This file contains all text content that will be used for internationalization

export const HERO_SECTION = {
  title: "Sampath Lakkaraju",
  subtitle: "Senior Software Engineer \n Building applications",
  lightThemeAlt: "Sampath Lakkaraju - Light Theme",
  darkThemeAlt: "Sampath Lakkaraju - Dark Theme",
  initials: "SL"
} as const;

export const ABOUT_SECTION = {
  title: "About Me",
  role: "Senior Software Engineer",
  description1: "I specialize in building scalable data pipelines, reliable APIs, and polished user experiences. With over 8 years of experience in software engineering, I've worked across the full stack to deliver solutions that drive business impact.",
  description2: "My expertise includes Python, TypeScript, React, AWS, and modern data technologies. I'm passionate about clean code, system design, and creating tools that developers love to use.",
  location: "San Francisco, CA",
  experience: "5+ years experience",
  education: "Computer Science Degree",
  coreSkillsTitle: "Core Skills",
  focusAreasTitle: "Focus Areas",
  skills: ['Python', 'TypeScript', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
  focusAreas: ['Data Engineering', 'API Development', 'Full-Stack Applications', 'System Design', 'Performance Optimization']
} as const;

export const EXPERIENCE_SECTION = {
  title: "Impact & Experience",
  experiences: [
    {
      id: "1",
      title: "Model retraining 90% faster",
      metric: "PySpark tuning & query refactors",
      blurb: "Cut retraining query time with optimized SQL and configuration; improved iteration speed for DS teams.",
      category: "Data Engineering",
      icon: "data_usage",
      fromDate: "Jan 2024",
      toDate: "Present"
    },
    {
      id: "2",
      title: "Support ops cost ↓ ~24%",
      metric: "AWS Connect phone infra revamp",
      blurb: "Rationalized IVR flows and observability; reduced vendor usage and idle time.",
      category: "Infrastructure",
      icon: "phone",
      fromDate: "Sep 2023",
      toDate: "Dec 2023"
    },
    {
      id: "3",
      title: "Data pipeline latency ↓ 70%",
      metric: "Kafka to S3 streaming optimization",
      blurb: "Implemented efficient data serialization and batching for real-time analytics.",
      category: "Data Engineering",
      icon: "stream",
      fromDate: "Jun 2023",
      toDate: "Aug 2023"
    },
    {
      id: "4",
      title: "API response time ↓ 50%",
      metric: "FastAPI & async processing",
      blurb: "Optimized backend endpoints with asynchronous operations and caching strategies.",
      category: "Performance",
      icon: "api",
      fromDate: "Mar 2023",
      toDate: "May 2023"
    },
    {
      id: "5",
      title: "User engagement ↑ 15%",
      metric: "Redesigned UI/UX for internal tools",
      blurb: "Improved usability and visual appeal of internal dashboards and reporting tools.",
      category: "User Experience",
      icon: "design_services",
      fromDate: "Jan 2023",
      toDate: "Feb 2023"
    },
    {
      id: "6",
      title: "Infrastructure cost ↓ 10%",
      metric: "Serverless architecture adoption",
      blurb: "Migrated monolithic services to AWS Lambda, reducing operational overhead.",
      category: "Infrastructure",
      icon: "cloud",
      fromDate: "Oct 2022",
      toDate: "Dec 2022"
    }
  ]
} as const;

export const PROJECTS_SECTION = {
  title: "Featured Projects",
  description: "Explore my latest work in data engineering, API development, and full-stack applications.",
  viewAllButton: "View All Projects →",
  projects: [
    {
      id: "1",
      title: "Data Pipeline Optimization",
      description: "Built a high-performance ETL pipeline using Apache Kafka and Apache Spark, reducing data processing time by 70% and improving reliability through fault-tolerant design patterns.",
      technologies: ["Python", "Apache Kafka", "Apache Spark", "AWS S3", "Docker"],
      status: "completed" as const,
      icon: "data_usage"
    },
    {
      id: "2",
      title: "Real-time Analytics Dashboard",
      description: "Developed a real-time analytics platform using React, Node.js, and WebSocket connections, providing live insights into system performance and user behavior metrics.",
      technologies: ["React", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
      status: "active" as const,
      icon: "analytics"
    },
    {
      id: "3",
      title: "AI-Powered Recommendation Engine",
      description: "Machine learning system for personalized content recommendations using collaborative filtering and deep learning models, currently in development phase.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "FastAPI", "MongoDB"],
      status: "disabled" as const,
      icon: "psychology"
    }
  ]
} as const;

export const CONTACT_SECTION = {
  title: "Get In Touch",
  subtitle: "Let's Work Together",
  description1: "I'm always interested in hearing about new opportunities, interesting projects, or just connecting with fellow developers and designers.",
  description2: "Whether you have a question about my work, want to collaborate on something, or just want to say hello, feel free to reach out.",
  email: "Email",
  emailAddress: "sampath@example.com",
  linkedin: "LinkedIn",
  linkedinUrl: "linkedin.com/in/sampath",
  github: "GitHub",
  githubUrl: "github.com/sampath",
  currentStatusTitle: "Current Status",
  availableStatus: "Available for new opportunities",
  statusDescription: "Open to full-time roles, contract work, and interesting side projects.",
  responseTimeTitle: "Response Time",
  responseTimeDescription: "I typically respond to messages within 24 hours during weekdays. For urgent matters, feel free to reach out on LinkedIn."
} as const;

export const HEADER_SECTION = {
  title: "Sampath Lakkaraju",
  role: "Software Engineer",
  description: "Data pipelines, APIs, and polished UX",
  email: "sampath@example.com",
  linkedinUrl: "linkedin.com/in/yourprofile"
} as const;

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

// Helper function to get text by key (for future internationalization)
export const getText = (section: string, key: string, locale: string = 'en'): string => {
  // For now, return the English text
  // In the future, this can be expanded to support multiple locales
  const sections: Record<string, any> = {
    HERO_SECTION,
    ABOUT_SECTION,
    EXPERIENCE_SECTION,
    PROJECTS_SECTION,
    CONTACT_SECTION,
    HEADER_SECTION,
    NAVIGATION,
    SKILLS_SECTION,
    PORTFOLIO_SECTION,
    WRITING_SECTION
  };
  
  const sectionData = sections[section];
  if (!sectionData) {
    console.warn(`Section ${section} not found in text constants`);
    return key;
  }
  
  const value = sectionData[key];
  if (value === undefined) {
    console.warn(`Key ${key} not found in section ${section}`);
    return key;
  }
  
  return value;
};

// Type-safe text getters for each section
export const getHeroText = (key: keyof typeof HERO_SECTION, locale: string = 'en'): string => {
  return getText('HERO_SECTION', key, locale);
};

export const getAboutText = (key: keyof typeof ABOUT_SECTION, locale: string = 'en'): string => {
  return getText('ABOUT_SECTION', key, locale);
};

export const getExperienceText = (key: keyof typeof EXPERIENCE_SECTION, locale: string = 'en'): string => {
  return getText('EXPERIENCE_SECTION', key, locale);
};

export const getProjectsText = (key: keyof typeof PROJECTS_SECTION, locale: string = 'en'): string => {
  return getText('PROJECTS_SECTION', key, locale);
};

export const getContactText = (key: keyof typeof CONTACT_SECTION, locale: string = 'en'): string => {
  return getText('CONTACT_SECTION', key, locale);
};

export const getHeaderText = (key: keyof typeof HEADER_SECTION, locale: string = 'en' ): string => {
  return getText('HEADER_SECTION', key, locale);
};

export const getSkillsText = (key: keyof typeof SKILLS_SECTION, locale: string = 'en'): string => {
  return getText('SKILLS_SECTION', key, locale);
};

export const getPortfolioText = (key: keyof typeof PORTFOLIO_SECTION, locale: string = 'en'): string => {
  return getText('PORTFOLIO_SECTION', key, locale);
};

export const getWritingText = (key: keyof typeof WRITING_SECTION, locale: string = 'en'): string => {
  return getText('WRITING_SECTION', key, locale);
};

export const getNavigationText = (key: keyof typeof NAVIGATION, locale: string = 'en'): string => {
  return getText('NAVIGATION', key, locale);
};
