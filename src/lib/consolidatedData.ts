// Core consolidated data structures
// This file serves as a single source of truth for all portfolio data

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

// Skills section data
export const CORE_SKILLS_SECTION = {
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
} as const;

// Projects page section data
export const CORE_PROJECTS_SECTION = {
  pageTitle: "My Projects",
  pageDescription: "A collection of my work in data engineering, API development, and full-stack applications"
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

export const CORE_ABOUT_SECTION = {
  title: "Senior Software Engineer",
  description1: "I specialize in building scalable data pipelines, reliable APIs, and polished user experiences. With over 8 years of experience in software engineering, I've worked across the full stack to deliver solutions that drive business impact.",
  description2: "My expertise includes Python, TypeScript, React, AWS, and modern data technologies. I'm passionate about clean code, system design, and creating tools that developers love to use.",
  skills: ['Python', 'TypeScript', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'],
  focusAreas: ['Data Engineering', 'API Development', 'Full-Stack Applications', 'System Design', 'Performance Optimization'],
  // About page specific content
  pageTitle: "About Me",
  pageDescription: "I'm a Senior Software Engineer passionate about building scalable data pipelines, reliable APIs, and polished user experiences. With over 8 years of experience, I've worked across the full stack to deliver solutions that drive business impact.",
  personalInfo: {
    location: "San Francisco, CA",
    experience: "8+ years",
    education: "Master's Degree"
  },
  detailedFocusAreas: [
    {
      icon: "data_usage",
      title: "Data Engineering",
      description: "Building scalable data pipelines and ETL processes for large-scale data processing."
    },
    {
      icon: "code",
      title: "API Development",
      description: "Creating robust, high-performance REST APIs and microservices architecture."
    },
    {
      icon: "trending_up",
      title: "Full-Stack Applications",
      description: "Developing end-to-end solutions with modern frontend and backend technologies."
    },
    {
      icon: "data_usage",
      title: "System Design",
      description: "Architecting scalable systems and optimizing performance for production environments."
    },
    {
      icon: "trending_up",
      title: "Performance Optimization",
      description: "Improving application performance through code optimization and infrastructure tuning."
    }
  ],
  aboutExperience: [
    {
      year: "2023 - Present",
      title: "Senior Software Engineer",
      company: "Tech Company",
      description: "Leading development of data processing pipelines and API services. Mentoring junior developers and implementing best practices."
    },
    {
      year: "2021 - 2023",
      title: "Software Engineer",
      company: "Startup",
      description: "Built full-stack applications using React, Node.js, and cloud services. Contributed to system architecture decisions."
    },
    {
      year: "2019 - 2020",
      title: "Junior Developer",
      company: "Digital Agency",
      description: "Developed responsive websites and e-commerce solutions. Collaborated with design team on UX improvements."
    }
  ]
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
    title: "Data Pipeline Optimization",
    organization: "Professional Project",
    dates: "2023",
    description: "Built a high-performance ETL pipeline using Apache Kafka and Apache Spark, reducing data processing time by 70% and improving reliability through fault-tolerant design patterns.",
    skills: ["Python", "Apache Kafka", "Apache Spark", "AWS S3", "Docker"],
    technologies: ["Python", "Apache Kafka", "Apache Spark", "AWS S3", "Docker"],
    status: "completed" as const,
    icon: "data_usage",
    blurb: "Built a high-performance ETL pipeline using Apache Kafka and Apache Spark, reducing data processing time by 70% and improving reliability through fault-tolerant design patterns.",
    metric: "70% faster processing"
  },
  {
    id: "proj-2",
    title: "Real-time Analytics Dashboard",
    organization: "Personal Project",
    dates: "2024",
    description: "Developed a real-time analytics platform using React, Node.js, and WebSocket connections, providing live insights into system performance and user behavior metrics.",
    skills: ["React", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
    technologies: ["React", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
    status: "active" as const,
    icon: "analytics",
    blurb: "Developed a real-time analytics platform using React, Node.js, and WebSocket connections, providing live insights into system performance and user behavior metrics.",
    metric: "Real-time insights"
  },
  {
    id: "proj-3",
    title: "AI-Powered Recommendation Engine",
    organization: "Personal Project",
    dates: "2024",
    description: "Machine learning system for personalized content recommendations using collaborative filtering and deep learning models, currently in development phase.",
    skills: ["Python", "TensorFlow", "Scikit-learn", "FastAPI", "MongoDB"],
    technologies: ["Python", "TensorFlow", "Scikit-learn", "FastAPI", "MongoDB"],
    status: "active" as const,
    icon: "code",
    blurb: "Machine learning system for personalized content recommendations using collaborative filtering and deep learning models, currently in development phase.",
    metric: "ML-powered"
  },
  {
    id: "proj-4",
    title: "Microservices Architecture",
    organization: "Professional Project",
    dates: "2023",
    description: "Designed and implemented a scalable microservices architecture using Docker and Kubernetes, improving system reliability and deployment efficiency.",
    skills: ["Docker", "Kubernetes", "Node.js", "PostgreSQL", "Redis"],
    technologies: ["Docker", "Kubernetes", "Node.js", "PostgreSQL", "Redis"],
    status: "completed" as const,
    icon: "cloud",
    blurb: "Designed and implemented a scalable microservices architecture using Docker and Kubernetes, improving system reliability and deployment efficiency.",
    metric: "Scalable architecture"
  },
  {
    id: "proj-5",
    title: "REST API Development",
    organization: "Professional Project",
    dates: "2023",
    description: "Built robust REST APIs using FastAPI and Python, implementing authentication, rate limiting, and comprehensive documentation.",
    skills: ["Python", "FastAPI", "PostgreSQL", "JWT", "Swagger"],
    technologies: ["Python", "FastAPI", "PostgreSQL", "JWT", "Swagger"],
    status: "completed" as const,
    icon: "api",
    blurb: "Built robust REST APIs using FastAPI and Python, implementing authentication, rate limiting, and comprehensive documentation.",
    metric: "Production ready"
  },
  {
    id: "proj-6",
    title: "Full-Stack E-commerce",
    organization: "Personal Project",
    dates: "2024",
    description: "Developed a complete e-commerce solution with user authentication, payment processing, and admin dashboard.",
    skills: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    status: "active" as const,
    icon: "folder",
    blurb: "Developed a complete e-commerce solution with user authentication, payment processing, and admin dashboard.",
    metric: "Full-stack solution"
  }
] as const;

// Detailed project data for ProjectDetail component
export const CORE_PROJECT_DETAILS = {
  'data-pipeline': {
    title: 'Data Pipeline Optimization',
    description: 'Built a high-performance ETL pipeline using Apache Kafka and Apache Spark, reducing data processing time by 70% and improving reliability through fault-tolerant design patterns.',
    longDescription: `This project involved designing and implementing a robust data pipeline that processes millions of records daily. The system uses Apache Kafka for real-time data streaming, Apache Spark for distributed processing, and AWS S3 for data storage.

Key achievements include:
• Reduced data processing time by 70% through optimized Spark configurations
• Implemented fault-tolerant design patterns ensuring 99.9% uptime
• Added comprehensive monitoring and alerting using Prometheus and Grafana
• Automated deployment pipeline using Docker and Kubernetes`,
    technologies: ['Python', 'Apache Kafka', 'Apache Spark', 'AWS S3', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    status: 'completed',
    icon: 'data_usage',
    githubUrl: 'https://github.com/example/data-pipeline',
    liveUrl: 'https://example.com/data-pipeline',
    metrics: [
      { label: 'Processing Time', value: '70% reduction', color: 'text-green-600' },
      { label: 'Uptime', value: '99.9%', color: 'text-blue-600' },
      { label: 'Data Volume', value: '10M+ records/day', color: 'text-purple-600' }
    ]
  },
  'analytics-dashboard': {
    title: 'Real-time Analytics Dashboard',
    description: 'Developed a real-time analytics platform using React, Node.js, and WebSocket connections, providing live insights into system performance and user behavior metrics.',
    longDescription: `A comprehensive analytics platform that provides real-time insights into system performance, user behavior, and business metrics. The dashboard features interactive charts, real-time updates, and customizable widgets.

Features include:
• Real-time data visualization using WebSocket connections
• Interactive charts and graphs with D3.js
• Customizable dashboard layouts
• Role-based access control
• Export functionality for reports`,
    technologies: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis', 'D3.js', 'TypeScript'],
    status: 'active',
    icon: 'analytics',
    githubUrl: 'https://github.com/example/analytics-dashboard',
    liveUrl: 'https://analytics.example.com',
    metrics: [
      { label: 'Real-time Updates', value: '< 100ms latency', color: 'text-green-600' },
      { label: 'Active Users', value: '500+ daily', color: 'text-blue-600' },
      { label: 'Data Points', value: '1M+ processed', color: 'text-purple-600' }
    ]
  }
} as const;

// Profile data types
export type ProfileData = typeof CORE_PROFILE_DATA;

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
