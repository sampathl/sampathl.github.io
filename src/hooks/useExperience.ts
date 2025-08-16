import { useState, useMemo } from 'react'

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | null
  current: boolean
  description: string
  achievements: string[]
  technologies: string[]
  category: 'work' | 'education' | 'volunteer'
}

export const useExperience = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      location: 'San Francisco, CA',
      startDate: '2022-01',
      endDate: null,
      current: true,
      description: 'Leading development of scalable data pipelines and REST APIs. Mentoring junior developers and improving system performance.',
      achievements: [
        'Reduced data processing time by 70% through optimized Apache Spark configurations',
        'Implemented fault-tolerant design patterns ensuring 99.9% uptime',
        'Mentored 5 junior developers and established best practices',
        'Led migration from monolithic to microservices architecture'
      ],
      technologies: ['Python', 'Apache Kafka', 'Apache Spark', 'AWS', 'Docker', 'Kubernetes'],
      category: 'work'
    },
    {
      id: '2',
      title: 'Software Engineer',
      company: 'StartupXYZ',
      location: 'Remote',
      startDate: '2020-03',
      endDate: '2021-12',
      current: false,
      description: 'Built full-stack web applications using React and Node.js. Implemented CI/CD pipelines and automated testing.',
      achievements: [
        'Developed 3 full-stack applications serving 10,000+ users',
        'Implemented CI/CD pipeline reducing deployment time by 80%',
        'Added comprehensive test coverage improving reliability by 95%',
        'Optimized database queries reducing response time by 60%'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Jenkins'],
      category: 'work'
    },
    {
      id: '3',
      title: 'Junior Developer',
      company: 'Digital Agency',
      location: 'New York, NY',
      startDate: '2019-06',
      endDate: '2020-02',
      current: false,
      description: 'Developed responsive websites and e-commerce solutions. Collaborated with design team on UX improvements.',
      achievements: [
        'Built 15+ responsive websites for various clients',
        'Implemented e-commerce solutions with payment processing',
        'Improved page load times by 40% through optimization',
        'Collaborated with design team on user experience improvements'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      category: 'work'
    },
    {
      id: '4',
      title: 'Master of Computer Science',
      company: 'University of Technology',
      location: 'Boston, MA',
      startDate: '2018-09',
      endDate: '2020-05',
      current: false,
      description: 'Specialized in software engineering and data structures. Graduated with honors and completed thesis on scalable architectures.',
      achievements: [
        'Graduated with honors (GPA: 3.9/4.0)',
        'Completed thesis on "Scalable Microservices Architecture"',
        'Teaching assistant for Data Structures course',
        'Published 2 research papers on distributed systems'
      ],
      technologies: ['Java', 'Python', 'C++', 'Machine Learning', 'Distributed Systems'],
      category: 'education'
    },
    {
      id: '5',
      title: 'Bachelor of Computer Science',
      company: 'State University',
      location: 'Chicago, IL',
      startDate: '2014-09',
      endDate: '2018-05',
      current: false,
      description: 'Major in computer science with minor in mathematics. Active in programming competitions and hackathons.',
      achievements: [
        'Dean\'s List for 6 consecutive semesters',
        '1st place in ACM Programming Competition',
        'Founded University Coding Club',
        'Completed 3 internships in software development'
      ],
      technologies: ['Java', 'C++', 'Python', 'Data Structures', 'Algorithms'],
      category: 'education'
    },
    {
      id: '6',
      title: 'Open Source Contributor',
      company: 'Various Projects',
      location: 'Remote',
      startDate: '2019-01',
      endDate: null,
      current: true,
      description: 'Contributing to open source projects in data engineering and web development. Maintaining several popular libraries.',
      achievements: [
        'Contributed to 20+ open source projects',
        'Maintained 3 popular Python libraries',
        'Helped 100+ developers through code reviews',
        'Organized local hackathons and coding meetups'
      ],
      technologies: ['Python', 'JavaScript', 'Git', 'Docker', 'CI/CD'],
      category: 'volunteer'
    }
  ]

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(experiences.map(exp => exp.category))]
    return cats.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))
  }, [])

  const filteredExperiences = useMemo(() => {
    if (activeCategory === 'All') return experiences
    const category = activeCategory.toLowerCase()
    return experiences.filter(exp => exp.category === category)
  }, [activeCategory])

  const experiencesByCategory = useMemo(() => {
    const grouped = experiences.reduce((acc, exp) => {
      if (!acc[exp.category]) {
        acc[exp.category] = []
      }
      acc[exp.category].push(exp)
      return acc
    }, {} as Record<string, Experience[]>)

    // Sort experiences within each category by date (most recent first)
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => {
        const dateA = new Date(a.startDate)
        const dateB = new Date(b.startDate)
        return dateB.getTime() - dateA.getTime()
      })
    })

    return grouped
  }, [])

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedItems(newExpanded)
  }

  const experienceStats = useMemo(() => {
    const totalExperience = experiences.filter(exp => exp.category === 'work').length
    const totalEducation = experiences.filter(exp => exp.category === 'education').length
    const totalVolunteer = experiences.filter(exp => exp.category === 'volunteer').length
    const currentRoles = experiences.filter(exp => exp.current).length
    const totalTechnologies = new Set(experiences.flatMap(exp => exp.technologies)).size

    return {
      totalExperience,
      totalEducation,
      totalVolunteer,
      currentRoles,
      totalTechnologies
    }
  }, [])

  return {
    experiences: filteredExperiences,
    experiencesByCategory,
    categories,
    activeCategory,
    setActiveCategory,
    expandedItems,
    toggleExpanded,
    experienceStats
  }
}
