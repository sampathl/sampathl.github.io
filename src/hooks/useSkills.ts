import { useState, useMemo } from 'react'

export interface Skill {
  name: string
  category: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  yearsOfExperience?: number
  projects?: number
}

export const useSkills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')

  const skills: Skill[] = [
    { name: 'Python', category: 'Backend', level: 'Expert', yearsOfExperience: 8, projects: 25 },
    { name: 'TypeScript', category: 'Frontend', level: 'Expert', yearsOfExperience: 6, projects: 20 },
    { name: 'React', category: 'Frontend', level: 'Expert', yearsOfExperience: 6, projects: 18 },
    { name: 'Node.js', category: 'Backend', level: 'Advanced', yearsOfExperience: 5, projects: 15 },
    { name: 'AWS', category: 'Cloud', level: 'Advanced', yearsOfExperience: 4, projects: 12 },
    { name: 'Docker', category: 'DevOps', level: 'Advanced', yearsOfExperience: 4, projects: 10 },
    { name: 'Kubernetes', category: 'DevOps', level: 'Intermediate', yearsOfExperience: 2, projects: 5 },
    { name: 'PostgreSQL', category: 'Database', level: 'Advanced', yearsOfExperience: 5, projects: 15 },
    { name: 'MongoDB', category: 'Database', level: 'Advanced', yearsOfExperience: 4, projects: 12 },
    { name: 'FastAPI', category: 'Backend', level: 'Expert', yearsOfExperience: 3, projects: 8 },
    { name: 'pandas', category: 'Data', level: 'Expert', yearsOfExperience: 6, projects: 20 },
    { name: 'Apache Spark', category: 'Data', level: 'Advanced', yearsOfExperience: 3, projects: 8 },
    { name: 'GraphQL', category: 'Backend', level: 'Intermediate', yearsOfExperience: 2, projects: 6 },
    { name: 'Redis', category: 'Database', level: 'Advanced', yearsOfExperience: 3, projects: 10 },
    { name: 'Elasticsearch', category: 'Search', level: 'Intermediate', yearsOfExperience: 2, projects: 4 },
    { name: 'Terraform', category: 'DevOps', level: 'Intermediate', yearsOfExperience: 2, projects: 5 },
    { name: 'Jenkins', category: 'DevOps', level: 'Advanced', yearsOfExperience: 3, projects: 8 },
    { name: 'Git', category: 'Version Control', level: 'Expert', yearsOfExperience: 8, projects: 50 },
    { name: 'Linux', category: 'Operating System', level: 'Advanced', yearsOfExperience: 6, projects: 20 },
    { name: 'Machine Learning', category: 'AI/ML', level: 'Intermediate', yearsOfExperience: 2, projects: 6 }
  ]

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(skills.map(skill => skill.category))]
    return cats.sort()
  }, [])

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const matchesCategory = activeCategory === 'All' || skill.category === activeCategory
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           skill.category.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchTerm])

  const skillsByCategory = useMemo(() => {
    const grouped = skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    }, {} as Record<string, Skill[]>)

    // Sort skills within each category by level
    Object.keys(grouped).forEach(category => {
      grouped[category].sort((a, b) => {
        const levelOrder = { 'Expert': 4, 'Advanced': 3, 'Intermediate': 2, 'Beginner': 1 }
        return levelOrder[b.level] - levelOrder[a.level]
      })
    })

    return grouped
  }, [])

  const skillStats = useMemo(() => {
    const totalSkills = skills.length
    const expertSkills = skills.filter(s => s.level === 'Expert').length
    const advancedSkills = skills.filter(s => s.level === 'Advanced').length
    const totalProjects = skills.reduce((sum, skill) => sum + (skill.projects || 0), 0)
    const totalExperience = skills.reduce((sum, skill) => sum + (skill.yearsOfExperience || 0), 0)

    return {
      totalSkills,
      expertSkills,
      advancedSkills,
      totalProjects,
      totalExperience,
      averageExperience: totalExperience / totalSkills
    }
  }, [])

  return {
    skills: filteredSkills,
    skillsByCategory,
    categories,
    activeCategory,
    setActiveCategory,
    searchTerm,
    setSearchTerm,
    skillStats
  }
}
