export interface TranslationKeys {
  // Navigation
  portfolio: string;
  chronological: string;
  categorized: string;
  simplified: string;

  // Header Section
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;

  // Section Titles
  summary: string;
  skills: string;
  experience: string;
  education: string;
  projects: string;

  // Section Content
  summaryContent: string;
  skillsContent: string;
  experienceContent: string;
  educationContent: string;
  projectsContent: string;

  // Simplified View
  contactInformation: string;
  contactEmail: string;
  contactPhone: string;
  contactLocation: string;

  // Experience Details
  experienceSenior: string;
  experienceFullStack: string;
  experienceJunior: string;

  // Education Details
  educationMasters: string;
  educationBachelors: string;

  // Project Details
  projectEcommerce: string;
  projectPortfolio: string;
  projectTaskManagement: string;
}

export const translations: Record<string, TranslationKeys> = {
  en: {
    // Navigation
    portfolio: 'Portfolio',
    chronological: 'Chronological',
    categorized: 'Categorized',
    simplified: 'Simplified',

    // Header Section
    name: 'John Doe',
    title: 'Full Stack Software Developer',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',

    // Section Titles
    summary: 'Summary',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',

    // Section Content
    summaryContent: 'Experienced software developer with a passion for creating innovative solutions. Skilled in modern web technologies and committed to writing clean, maintainable code.',
    skillsContent: 'React, TypeScript, JavaScript, Node.js, Python, SQL, Git, Docker, AWS, Material-UI, Next.js, Express.js',
    experienceContent: 'Senior Software Developer at TechCorp (2022-Present)\nFull Stack Developer at WebSolutions (2020-2022)\nJunior Developer at StartupXYZ (2018-2020)',
    educationContent: 'Bachelor of Science in Computer Science\nUniversity of Technology (2014-2018)\n\nMaster of Science in Software Engineering\nTech University (2018-2020)',
    projectsContent: 'E-commerce Platform - Full-stack React application with Node.js backend\nPortfolio Website - Modern responsive design with dark/light themes\nTask Management App - Real-time collaboration tool with WebSocket integration',

    // Simplified View
    contactInformation: 'Contact Information',
    contactEmail: 'Email: john.doe@email.com',
    contactPhone: 'Phone: +1 (555) 123-4567',
    contactLocation: 'Location: San Francisco, CA',

    // Experience Details
    experienceSenior: 'Senior Software Developer at TechCorp (2022-Present)',
    experienceFullStack: 'Full Stack Developer at WebSolutions (2020-2022)',
    experienceJunior: 'Junior Developer at StartupXYZ (2018-2020)',

    // Education Details
    educationMasters: 'Master of Science in Software Engineering - Tech University (2018-2020)',
    educationBachelors: 'Bachelor of Science in Computer Science - University of Technology (2014-2018)',

    // Project Details
    projectEcommerce: 'E-commerce Platform - Full-stack React application with Node.js backend',
    projectPortfolio: 'Portfolio Website - Modern responsive design with dark/light themes',
    projectTaskManagement: 'Task Management App - Real-time collaboration tool with WebSocket integration',
  },
  te: {
    // Navigation
    portfolio: 'పోర్ట్‌ఫోలియో',
    chronological: 'కాలక్రమానుసారం',
    categorized: 'వర్గీకరించబడింది',
    simplified: 'సరళీకృతం',

    // Header Section
    name: 'జాన్ డో',
    title: 'ఫుల్ స్టాక్ సాఫ్ట్‌వేర్ డెవలపర్',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'సాన్ ఫ్రాన్సిస్కో, CA',

    // Section Titles
    summary: 'సారాంశం',
    skills: 'నైపుణ్యాలు',
    experience: 'అనుభవం',
    education: 'విద్య',
    projects: 'ప్రాజెక్టులు',

    // Section Content
    summaryContent: '[TELUGU] Experienced software developer with a passion for creating innovative solutions. Skilled in modern web technologies and committed to writing clean, maintainable code.',
    skillsContent: '[TELUGU] React, TypeScript, JavaScript, Node.js, Python, SQL, Git, Docker, AWS, Material-UI, Next.js, Express.js',
    experienceContent: '[TELUGU] Senior Software Developer at TechCorp (2022-Present)\n[TELUGU] Full Stack Developer at WebSolutions (2020-2022)\n[TELUGU] Junior Developer at StartupXYZ (2018-2020)',
    educationContent: '[TELUGU] Bachelor of Science in Computer Science\n[TELUGU] University of Technology (2014-2018)\n\n[TELUGU] Master of Science in Software Engineering\n[TELUGU] Tech University (2018-2020)',
    projectsContent: '[TELUGU] E-commerce Platform - Full-stack React application with Node.js backend\n[TELUGU] Portfolio Website - Modern responsive design with dark/light themes\n[TELUGU] Task Management App - Real-time collaboration tool with WebSocket integration',

    // Simplified View
    contactInformation: '[TELUGU] Contact Information',
    contactEmail: '[TELUGU] Email: john.doe@email.com',
    contactPhone: '[TELUGU] Phone: +1 (555) 123-4567',
    contactLocation: '[TELUGU] Location: San Francisco, CA',

    // Experience Details
    experienceSenior: '[TELUGU] Senior Software Developer at TechCorp (2022-Present)',
    experienceFullStack: '[TELUGU] Full Stack Developer at WebSolutions (2020-2022)',
    experienceJunior: '[TELUGU] Junior Developer at StartupXYZ (2018-2020)',

    // Education Details
    educationMasters: '[TELUGU] Master of Science in Software Engineering - Tech University (2018-2020)',
    educationBachelors: '[TELUGU] Bachelor of Science in Computer Science - University of Technology (2014-2018)',

    // Project Details
    projectEcommerce: '[TELUGU] E-commerce Platform - Full-stack React application with Node.js backend',
    projectPortfolio: '[TELUGU] Portfolio Website - Modern responsive design with dark/light themes',
    projectTaskManagement: '[TELUGU] Task Management App - Real-time collaboration tool with WebSocket integration',
  },
  // Add other languages here later
  // es: { ... },
  // fr: { ... },
  // de: { ... },
};

export const getTranslation = (language: string, key: keyof TranslationKeys): string => {
  const translation = translations[language];
  if (!translation) {
    console.warn(`Translation not found for language: ${language}`);
    return translations.en[key] || key;
  }
  return translation[key] || translations.en[key] || key;
}; 