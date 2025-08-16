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
    details: "Refactored microservice read/write operations into modular handlers; Designed and deployed Airflow DAGs for daily data extraction from Snowflake to S3 and Postgres; Built backend microservices using Python and FastAPI to expose RESTful APIs",
    fields: "Fullstack & Data ",
    logo: "/images/companies/franklin-templeton.svg",
    fromDate: "June 2025",
    toDate: "Present",
    technologies: ["Python", "FastAPI", "Airflow", "Snowflake", "S3", "Postgres", "AWS", "React", "TypeScript"]
  },
  {
    id: "2",
    title: "Software Engineer",
    company: "FINRA",
    details: "Migrated CAIS applications to AWS serverless architecture using Lambda, S3, SQS, Step Functions; Redesigned data pipelines for serverless execution; Developed service APIs with idempotency and function chaining; Used CloudWatch and Splunk for monitoring and on-call investigations",
    fields: "Application Development",
    logo: "/images/companies/finra.svg",
    fromDate: "April 2024",
    toDate: "February 2025",
    technologies: ["Python", "AWS Lambda", "S3", "SQS", "Step Functions", "EMR", "Splunk", "CloudWatch"]
  },
  {
    id: "3",
    title: "Senior Software Engineer",
    company: "Dropbox",
    details:  "Built data pipelines with Python, Airflow, Hive, HDFS, and MySQL for multi-vendor data ingestion; Developed PySpark SQL pipelines with tuning and refactoring; Built microservices and APIs in Python to power help article recommendations; Created reusable React and TypeScript UI components including support widgets and dashboards; Automated phone support infrastructure using AWS Connect, Lambda, DynamoDB; Implemented observability with CloudWatch and Grafana",
    fields: "Fullstack & Data",
    logo: "/images/companies/dropbox.svg",
    fromDate: "February 2024",
    toDate: "September 2024",
    technologies: ["Python", "React", "TypeScript", "Airflow", "Hive", "HDFS", "MySQL", "PySpark", "AWS Lambda", "AWS Connect", "DynamoDB", "REST", "gRPC", "CloudWatch", "Grafana"]
  },
  {
    id: "4",
    title: "Software Engineer",
    company: "Tech Mahindra",
    details:"Automated Medicaid and Managed Care rebate data pipelines using Python and SQL; Built dashboards for contracts and sales using Python, JavaScript, AWS EC2, RDS, S3; Developed MVPs for validation of sales processes; Created support dashboards and data monitoring tools for transparency", fields: "Data Engineering & Automation",
    logo: "/images/companies/tech-mahindra.svg",
    fromDate: "January 2014",
    toDate: "June 2017",
    technologies: ["Python", "SQL", "JavaScript", "AWS EC2", "AWS RDS", "AWS S3"]
  }
] as const;

export const CORE_EDUCATION_DATA = [
  {
    id: "edu-1",
    title: "Master of Science in Software Engineering",
    organization: "San Jose State University ",
    dates: "2017 - 2019",
    description: "Corse Work: Cloud Computing, UI-UX engineering, Virtualization, Distributed Systems, Object Oriented Programming and Data Structures, Autonomous Cars, Machine learning, Software Quality Assurance and Testing",
    skills: ["Python"]
  },
  {
    id: "edu-2",
    title: "Bachelor of Technology in Electrical Engineering ",
    organization: "Jawaharlal Nehru Technological University",
    dates: "2009 - 2013",
    description: "Corse Work: Control Systems, Electrical Machines, Neural Networks and Fuzzy Logics, Electro magnetic fields, Power systems, Power electronics",
    skills: ["Matlab"]
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
