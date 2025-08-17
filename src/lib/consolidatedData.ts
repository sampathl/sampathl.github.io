// Core consolidated data structures
// This file serves as a single source of truth for all portfolio data

// UI Strings and Headers - Centralized UI text used once or twice across the application
export const UI_STRINGS = {
  // Projects Section
  projects: {
    pageTitle: "My Projects",
    pageDescription: "A collection of my work in data engineering, API development, and full-stack applications"
  },

  // Section Titles
  sectionTitles: {
    // Main section titles
    about: "About Me",
    experience: "Experience",
    education: "Education",
    projects: "Featured Projects",
    skills: "Skills",
    portfolio: "Portfolio",
    writing: "Writing & Articles",
    
    // Subsection titles
    coreSkills: "Core Skills",
    focusAreas: "Focus Areas",
    primary: "Primary",
    secondary: "Secondary",
    workedWith: "Worked With",
    featuredArticles: "Featured Articles",
    allArticles: "All Articles",
    stayUpdated: "Stay Updated"
  },

  // Navigation
  navigation: {
    summary: "Summary",
    detailed: "Detailed"
  },


} as const;

// UI Strings types
export type UIStrings = typeof UI_STRINGS;

export const CORE_PROFILE_DATA = {
  // Basic identity
  name: "Sampath Lakkaraju",
  role: "Senior Software Engineer",
  initials: "SL",
  
  // Descriptions
  shortDescription: "Building Fullstack applications",
  
  // Experience and education
  experience: "Over 9 years of experience",
  education: "Computer Science Degree",
  
  // Contact information
  contact: {
    // Personal contact details
    email: "lakkaraju.sampath@outlook.com",
    phone: "+1 (408) 693-6142",
    phoneDisplay: "(408) 693-6142",
    location: "San Francisco Bay Area",
    
    // Social media profiles
    linkedin: "https://www.linkedin.com/in/lakkaraju-sampath/",
    github: "https://github.com/sampathl"
  },
  
  // Contact section UI content
  contactSection: {
    // Basic UI elements
    ui: {
      title: "Get In Touch",
      subtitle: "Let's Work Together",
      description1: "I'm always interested in hearing about new opportunities, interesting projects, or just connecting with fellow developers and designers.",
      description2: "Whether you have a question about my work, want to collaborate on something, or just want to say hello, feel free to reach out."
    },
    
    // Form labels
    labels: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      currentStatus: "Current Status",
      responseTime: "Response Time"
    },
    
    // Status information
    status: {
      availableStatus: "Available for new opportunities",
      statusDescription: "Open to full-time roles and interesting side projects.",
      responseTimeDescription: "I typically respond to messages within 48 hours during weekdays. For urgent matters, feel free to reach out on LinkedIn."
    }
  }
} as const;

// Profile data types
export type ProfileData = typeof CORE_PROFILE_DATA;

// Skills section data - Consolidated key-value structure
export const CORE_SKILLS_SECTION = {
  // Core skills with years of experience
  skills: {
    // Primary technologies
    'Python': 7,
    'TypeScript': 4,
    'React': 4,
    'AWS': 7,
    'SQL': 6,
    'REST APIs': 6,
    'GCP': 2,
  },
  
  // Worked with skills (technologies used but not primary focus)  
  //TODO: make it better along with the technologies stack. 
  workedWith: {
    'Docker': 3,
    'Kubernetes': 3,
    'PostgreSQL': 3,
    'MongoDB': 3,
    'Redis': 3,
    'GraphQL': 2,
    
    'CI/CD': 2,
    'Terraform': 2,
    'Airflow': 2,
    'Jupyter': 2,
    'Scikit-learn': 2,
    'Tailwind CSS': 2,
    'Material-UI': 2,
    'Apache Kafka': 2,
    'Apache Spark': 2,
    'PySpark': 2,
    'Hive': 2,
    'HDFS': 2,
    'MySQL': 2,
    'Snowflake': 2,
    'S3': 2,
    'Lambda': 2,
    'SQS': 2,
    'Step Functions': 2,
    'EMR': 2,
    'WebSocket': 2,
    'TensorFlow': 2,
    'JWT': 2,
    'Swagger': 2,
    'Stripe': 2,
    'Redux': 2,
    'Matlab': 1
  }
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
    technologies: ["Python", "FastAPI", "Airflow", "Snowflake", "S3", "Postgres", "AWS", "React", "TypeScript"],
    focusAreas: ["Data Engineering", "API Development", "System Design"]
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
    technologies: ["Python", "AWS Lambda", "S3", "SQS", "Step Functions", "EMR", "Splunk", "CloudWatch"],
    focusAreas: ["System Design", "Performance Optimization", "API Development"]
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
    technologies: ["Python", "React", "TypeScript", "Airflow", "Hive", "HDFS", "MySQL", "PySpark", "AWS Lambda", "AWS Connect", "DynamoDB", "REST", "gRPC", "CloudWatch", "Grafana"],
    focusAreas: ["Data Engineering", "Full-Stack Applications", "Performance Optimization"]
  },
  {
    id: "4",
    title: "Software Engineer",
    company: "Tech Mahindra",
    details:"Automated Medicaid and Managed Care rebate data pipelines using Python and SQL; Built dashboards for contracts and sales using Python, JavaScript, AWS EC2, RDS, S3; Developed MVPs for validation of sales processes; Created support dashboards and data monitoring tools for transparency", fields: "Data Engineering & Automation",
    logo: "/images/companies/tech-mahindra.svg",
    fromDate: "January 2014",
    toDate: "June 2017",
    technologies: ["Python", "SQL", "JavaScript", "AWS EC2", "AWS RDS", "AWS S3"],
    focusAreas: ["Data Engineering", "Automation", "Performance Optimization"]
  }
] as const;

// Experience data types
export type ExperienceItem = typeof CORE_EXPERIENCE_DATA[number];
export type ExperienceFormat = 'detailed' | 'summary' | 'portfolio';

export const CORE_EDUCATION_DATA = [
  {
    id: "edu-1",
    title: "Master of Science in Software Engineering",
    organization: "San Jose State University ",
    dates: "2017 - 2019",
    description: "Corse Work: Cloud Computing, UI-UX engineering, Virtualization, Distributed Systems, Object Oriented Programming and Data Structures, Autonomous Cars, Machine learning, Software Quality Assurance and Testing",
    technologies: ["Python"],
    focusAreas: ["System Design", "UI-UX Engineering", "Machine Learning", "Software Quality Assurance"]
  },
  {
    id: "edu-2",
    title: "Bachelor of Technology in Electrical Engineering ",
    organization: "Jawaharlal Nehru Technological University",
    dates: "2009 - 2013",
    description: "Corse Work: Control Systems, Electrical Machines, Neural Networks and Fuzzy Logics, Electro magnetic fields, Power systems, Power electronics",
    technologies: ["Matlab"],
    focusAreas: ["Control Systems", "Neural Networks", "Power Systems", "Electronics"]
  }
] as const;

// Education data types
export type EducationItem = typeof CORE_EDUCATION_DATA[number];
export type EducationFormat = 'detailed' | 'summary' | 'portfolio';

export const CORE_PROJECTS_DATA = [
  {
    id: "proj-1",
    title: "Data Pipeline Optimization",
    organization: "Professional Project",
    dates: "2023",
    description: "Built a high-performance ETL pipeline using Apache Kafka and Apache Spark, reducing data processing time by 70% and improving reliability through fault-tolerant design patterns.",
    technologies: ["Python", "Apache Kafka", "Apache Spark", "AWS S3", "Docker"],
    status: "completed" as const,
    icon: "data_usage",
    metric: "70% faster processing",
    focusAreas: ["Data Engineering", "Performance Optimization", "System Design"]
  },
  {
    id: "proj-2",
    title: "Real-time Analytics Dashboard",
    organization: "Personal Project",
    dates: "2024",
    description: "Developed a real-time analytics platform using React, Node.js, and WebSocket connections, providing live insights into system performance and user behavior metrics.",
    technologies: ["React", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
    status: "active" as const,
    icon: "analytics",
    metric: "Real-time insights",
    focusAreas: ["Full-Stack Applications", "Performance Optimization", "Real-time Systems"]
  },
  {
    id: "proj-3",
    title: "AI-Powered Recommendation Engine",
    organization: "Personal Project",
    dates: "2024",
    description: "Machine learning system for personalized content recommendations using collaborative filtering and deep learning models, currently in development phase.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "FastAPI", "MongoDB"],
    status: "active" as const,
    icon: "code",
    metric: "ML-powered",
    focusAreas: ["Machine Learning", "API Development", "Data Science"]
  },
  {
    id: "proj-4",
    title: "Microservices Architecture",
    organization: "Professional Project",
    dates: "2023",
    description: "Designed and implemented a scalable microservices architecture using Docker and Kubernetes, improving system reliability and deployment efficiency.",
    technologies: ["Docker", "Kubernetes", "Node.js", "PostgreSQL", "Redis"],
    status: "completed" as const,
    icon: "cloud",
    metric: "Scalable architecture",
    focusAreas: ["System Design", "Performance Optimization", "Architecture"]
  },
  {
    id: "proj-5",
    title: "REST API Development",
    organization: "Professional Project",
    dates: "2023",
    description: "Built robust REST APIs using FastAPI and Python, implementing authentication, rate limiting, and comprehensive documentation.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "JWT", "Swagger"],
    status: "completed" as const,
    icon: "api",
    metric: "Production ready",
    focusAreas: ["API Development", "System Design", "Performance Optimization"]
  },
  {
    id: "proj-6",
    title: "Full-Stack E-commerce",
    organization: "Personal Project",
    dates: "2024",
    description: "Developed a complete e-commerce solution with user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    status: "active" as const,
    icon: "folder",
    metric: "Full-stack solution",
    focusAreas: ["Full-Stack Applications", "API Development", "System Design"]
  }
] as const;

// Project data types
export type ProjectItem = typeof CORE_PROJECTS_DATA[number];
export type ProjectFormat = 'detailed' | 'summary' | 'portfolio' | 'featured';

// Section titles types
export type SectionTitlesData = typeof UI_STRINGS.sectionTitles;



// ============================================================================
// WRITING SECTION DATA (Currently Unused - Moved to Bottom)
// ============================================================================

// Writing section data
export const CORE_WRITING_SECTION = {
  pageDescription: "Thoughts on software engineering, data architecture, and the future of technology. Sharing knowledge and experiences from building systems at scale.",
  categories: ['All', 'Data Engineering', 'API Development', 'Full-Stack', 'Frontend', 'Architecture', 'Data Science'],
  newsletter: {
    title: "Stay Updated",
    description: "Get notified when I publish new articles about software engineering, data architecture, and technology trends.",
    placeholder: "Enter your email",
    button: "Subscribe"
  },
  readMoreButton: "Read More",
  allArticlesTitle: "All Articles",
  categoryArticlesTitle: "Articles",
  articles: [
    {
      id: '1',
      title: 'Building Scalable Data Pipelines with Apache Kafka',
      excerpt: 'A comprehensive guide to designing and implementing robust data pipelines using Apache Kafka, Apache Spark, and modern cloud infrastructure. Learn best practices for handling millions of records daily while maintaining data quality and system reliability.',
      category: 'Data Engineering',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      tags: ['Apache Kafka', 'Data Pipelines', 'Apache Spark', 'AWS'],
      icon: 'data_usage',
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
      icon: 'code',
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
      icon: 'trending_up',
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
      icon: 'code',
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
      icon: 'trending_up',
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
      icon: 'data_usage',
      featured: false
    }
  ]
} as const;

// ============================================================================
// FUTURE ENHANCEMENT IDEAS - ADVANCED SKILLS MAPPING SYSTEM
// ============================================================================

// ENHANCED SKILLS MAPPING SYSTEM - IMPLEMENTATION ROADMAP
//
// Current Implementation:
// - Simple key-value structure: skills: { 'Python': 5, 'React': 4, ... }
// - Basic categorization: primary (3+ years), secondary (2-3 years)
// - Year-based filtering for skill mapping
//
// Future Enhancement Vision:
// Create a sophisticated, data-driven skills mapping system that provides intelligent
// categorization, relationship mapping, and better project matching.
//
// PHASE 1: Enhanced Data Structure & Metadata
// ===========================================
// Extend CORE_SKILLS_SECTION with rich metadata for each skill:
//
// skills: {
//   'Python': {
//     years: 5,
//     lastUsed: '2024-12',           // When last used professionally
//     projectCount: 8,               // How many projects use this skill
//     domain: 'core',                // core, data, frontend, backend, infra
//     proficiency: 'expert',         // beginner, intermediate, expert
//     trending: 'stable',            // growing, stable, declining
//     impact: 'high'                 // high, medium, low business impact
//   }
// }
//
// PHASE 2: Smart Categorization Logic
// ===================================
// Replace fixed primary/secondary with dynamic, intelligent categories:
//
// 1. Core Skills: Always relevant, used across multiple domains
//    - High usage + high recency + cross-domain application
//    - Example: Python, TypeScript, React
//
// 2. Domain Skills: Specialized skills for specific areas
//    - Data Engineering: Kafka, Spark, Airflow, Snowflake
//    - Frontend: React, TypeScript, Tailwind, Material-UI
//    - Backend: FastAPI, Node.js, PostgreSQL, Redis
//    - Infrastructure: AWS, Docker, Kubernetes, Terraform
//
// 3. Emerging Skills: New skills gaining prominence
//    - Growing usage + recent adoption + high potential
//    - Example: New ML frameworks, emerging cloud services
//
// 4. Contextual Skills: Skills relevant to specific project types
//    - High impact in specific contexts
//    - Example: Specialized tools for data pipelines
//
// PHASE 3: Skill Relationship Mapping
// ==================================
// Build intelligent skill networks and dependencies:
//
// 1. Co-occurrence Matrix: Which skills frequently appear together
//    - Python + FastAPI + PostgreSQL (Backend stack)
//    - React + TypeScript + Tailwind (Frontend stack)
//    - AWS + Docker + Kubernetes (Infrastructure stack)
//
// 2. Skill Dependencies: Which skills build on others
//    - React → JavaScript → HTML/CSS
//    - FastAPI → Python → General programming
//    - Kubernetes → Docker → Containerization
//
// 3. Technology Stack Groups: Logical groupings
//    - Data Engineering Stack: Python, Kafka, Spark, Airflow, Snowflake
//    - Full-Stack Web: React, TypeScript, Node.js, PostgreSQL
//    - Cloud Native: AWS, Docker, Kubernetes, Terraform
//
// PHASE 4: Intelligent Project Matching
// ====================================
// Enhanced algorithm for highlighting relevant projects:
//
// 1. Skill Relevance Score: Multi-factor calculation
//    - Skill usage in project (weight: 40%)
//    - Project recency (weight: 30%)
//    - Project success/impact (weight: 20%)
//    - Skill recency (weight: 10%)
//
// 2. Context-Aware Matching: Consider project context
//    - Data projects: Highlight data engineering skills
//    - Web projects: Highlight full-stack skills
//    - Infrastructure: Highlight DevOps skills
//
// 3. Skill Learning Path: Suggest skill development
//    - Based on current skills and project requirements
//    - Identify skill gaps and learning opportunities
//
// IMPLEMENTATION APPROACH:
// ========================
// 1. Start with Phase 1: Enhanced data structure
// 2. Build analysis functions to parse existing project/experience data
// 3. Implement smart categorization logic
// 4. Create enhanced project matching algorithms
// 5. Update UI components to use new system
//
// BENEFITS:
// =========
// ✅ Data-Driven: Categories based on actual usage, not assumptions
// ✅ Dynamic: Skills evolve based on recent activity and project success
// ✅ Intelligent: Better project matching and skill relationship insights
// ✅ Scalable: Easy to add new skills and see their impact
// ✅ Insightful: Provides valuable insights about skill development and trends
// ✅ Professional: More sophisticated and useful for portfolio visitors
//
// TECHNICAL CONSIDERATIONS:
// =========================
// - Maintain backward compatibility during transition
// - Use computed properties for dynamic categorization
// - Cache skill analysis results for performance
// - Consider skill data versioning for tracking changes over time
// - Implement skill insights dashboard for portfolio visitors
//
// This enhancement will transform the skills section from a simple list into an
// intelligent, dynamic system that provides real value to portfolio visitors
// and better represents professional skill development over time.
