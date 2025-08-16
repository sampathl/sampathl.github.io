// Core consolidated data structures
// This file serves as a single source of truth for all portfolio data

export const CORE_PROFILE_DATA = {
  // Basic identity
  name: "Sampath Lakkaraju",
  role: "Senior Software Engineer",
  initials: "SL",
  
  // Descriptions
  shortDescription: "Building Fullstack applications",
  longDescription: "Senior Software Engineer \n Building applications",
  metaDescription: "Building Fullstack applications",
  
  // Contact information
  email: "sampath@example.com",
  linkedinUrl: "linkedin.com/in/sampath",
  githubUrl: "github.com/sampath",
  
  // Location and status
  location: "San Francisco, CA",
  experience: "5+ years experience",
  education: "Computer Science Degree",
  
  // Current status
  availableStatus: "Available for new opportunities",
  statusDescription: "Open to full-time roles, contract work, and interesting side projects.",
  responseTimeDescription: "I typically respond to messages within 24 hours during weekdays. For urgent matters, feel free to reach out on LinkedIn."
} as const;

export const CORE_CONTACT_SECTION = {
  title: "Get In Touch",
  subtitle: "Let's Work Together",
  description1: "I'm always interested in hearing about new opportunities, interesting projects, or just connecting with fellow developers and designers.",
  description2: "Whether you have a question about my work, want to collaborate on something, or just want to say hello, feel free to reach out.",
  email: "Email",
  linkedin: "LinkedIn",
  github: "GitHub",
  currentStatusTitle: "Current Status",
  responseTimeTitle: "Response Time"
} as const;

export const CORE_SECTION_TITLES = {
  // Main section titles
  about: "About Me",
  experience: "Experience",
  education: "Education",
  projects: "Featured Projects",
  skills: "Skills",
  portfolio: "Portfolio",
  writing: "Writing & Articles",
  contact: "Get In Touch",
  
  // Subsection titles
  coreSkills: "Core Skills",
  focusAreas: "Focus Areas",
  primary: "Primary",
  secondary: "Secondary",
  workedWith: "Worked With",
  featuredArticles: "Featured Articles",
  allArticles: "All Articles",
  stayUpdated: "Stay Updated"
} as const;

export const CORE_EXPERIENCE_DATA = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Franklin Templeton",
    details: "Cut retraining query time with optimized SQL and configuration; improved iteration speed for DS teams.",
    fields: "Fullstack & Data ",
    logo: "/images/companies/franklin-templeton.svg",
    fromDate: "June 2025",
    toDate: "Present",
    technologies: ["Python", "SQL", "AWS", "Docker", "Kubernetes", "FastAPI"]
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "FINRA",
    details: "Rationalized IVR flows and observability; reduced vendor usage and idle time.",
    fields: "Application Development",
    logo: "/images/companies/finra.svg",
    fromDate: "April 2024",
    toDate: "February 2025",
    technologies: ["Java", "Spring Boot", "Microservices", "Docker", "PostgreSQL", "Redis"]
  },
  {
    id: "3",
    title: "Senior Software Engineer",
    company: "Dropbox",
    details: "Implemented efficient data serialization and batching for real-time analytics.",
    fields: "Fullstack & Data",
    logo: "/images/companies/dropbox.svg",
    fromDate: "February 2024",
    toDate: "September 2024",
    technologies: ["Python", "Apache Kafka", "Apache Spark", "React", "TypeScript", "AWS S3"]
  },
  {
    id: "4",
    title: "Software Engineer",
    company: "Tech Mahindra",
    details: "Optimized backend endpoints with asynchronous operations and caching strategies.",
    fields: "Data Engineering & Automation",
    logo: "/images/companies/tech-mahindra.svg",
    fromDate: "January 2014",
    toDate: "June 2017",
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "Docker"]
  }
] as const;

export const CORE_EDUCATION_DATA = [
  {
    id: "edu-1",
    title: "Master of Computer Science",
    organization: "University of Technology",
    dates: "2018 - 2020",
    description: "Specialized in software engineering and data structures. Graduated with honors and completed thesis on scalable architectures.",
    skills: ["Python", "Data Structures", "Algorithms", "Architecture"]
  },
  {
    id: "edu-2",
    title: "Bachelor of Computer Science",
    organization: "State University",
    dates: "2014 - 2018",
    description: "Major in computer science with minor in mathematics. Active in programming competitions and hackathons.",
    skills: ["Java", "C++", "Mathematics", "Problem Solving"]
  }
] as const;

export const CORE_PROJECTS_DATA = [
  {
    id: "proj-1",
    title: "E-commerce Platform",
    organization: "Personal Project",
    dates: "2023",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.",
    skills: ["TypeScript", "React", "Node.js", "MongoDB", "REST APIs", "Authentication"],
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "REST APIs", "Authentication"],
    status: "completed" as const,
    icon: "data_usage"
  },
  {
    id: "proj-2",
    title: "Data Visualization Dashboard",
    organization: "Open Source",
    dates: "2022",
    description: "Interactive dashboard for analyzing large datasets. Built with D3.js, React, and Python backend. Used by 100+ data scientists.",
    skills: ["Python", "pandas", "React", "D3.js", "Data Analysis", "REST APIs"],
    technologies: ["Python", "pandas", "React", "D3.js", "Data Analysis", "REST APIs"],
    status: "completed" as const,
    icon: "analytics"
  },
  {
    id: "proj-3",
    title: "Data Pipeline Optimization",
    organization: "Professional Project",
    dates: "2023",
    description: "Built a high-performance ETL pipeline using Apache Kafka and Apache Spark, reducing data processing time by 70% and improving reliability through fault-tolerant design patterns.",
    skills: ["Python", "Apache Kafka", "Apache Spark", "AWS S3", "Docker"],
    technologies: ["Python", "Apache Kafka", "Apache Spark", "AWS S3", "Docker"],
    status: "completed" as const,
    icon: "data_usage"
  },
  {
    id: "proj-4",
    title: "Real-time Analytics Dashboard",
    organization: "Personal Project",
    dates: "2024",
    description: "Developed a real-time analytics platform using React, Node.js, and WebSocket connections, providing live insights into system performance and user behavior metrics.",
    skills: ["React", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
    technologies: ["React", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
    status: "active" as const,
    icon: "analytics"
  }
] as const;

// Profile data types
export type ProfileData = typeof CORE_PROFILE_DATA;

// Contact section types
export type ContactSectionData = typeof CORE_CONTACT_SECTION;

// Section titles types
export type SectionTitlesData = typeof CORE_SECTION_TITLES;

// Experience data types
export type ExperienceItem = typeof CORE_EXPERIENCE_DATA[number];
export type ExperienceFormat = 'detailed' | 'summary' | 'portfolio';

// Education data types
export type EducationItem = typeof CORE_EDUCATION_DATA[number];
export type EducationFormat = 'detailed' | 'summary' | 'portfolio';

// Project data types
export type ProjectItem = typeof CORE_PROJECTS_DATA[number];
export type ProjectFormat = 'detailed' | 'summary' | 'portfolio' | 'featured';
