import { useState, useMemo } from 'react'
import { getExperienceData, getEducationData, getProjectData } from '../../../lib/dataAccess'
import type { PortfolioItem } from './portfolio'

export const usePortfolio = (highlightedSkills: string[] = [], showSkillMapping: boolean = false) => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = useMemo(() => {
    // Get experience items from consolidated data
    const experienceItems = getExperienceData('portfolio').map(item => ({
      id: item.id,
      title: item.title,
      organization: item.company,
      dates: `${item.fromDate} - ${item.toDate}`,
      category: 'experience' as const,
      description: item.details,
      skills: item.technologies
    }))
    
    // Get education items from consolidated data
    const educationItems = getEducationData('portfolio').map(item => ({
      id: item.id,
      title: item.title,
      organization: item.organization,
      dates: item.dates,
      category: 'education' as const,
      description: item.description,
      skills: item.skills
    }))
    
    // Get project items from consolidated data
    const projectItems = getProjectData('portfolio').map(item => ({
      id: item.id,
      title: item.title,
      organization: item.organization,
      dates: item.dates,
      category: 'project' as const,
      description: item.description,
      skills: item.skills
    }))
    
    // Combine all consolidated data
    const portfolioData = [
      ...experienceItems,
      ...educationItems,
      ...projectItems,
    ] as readonly PortfolioItem[]
    
    let filtered = portfolioData.filter(item => {
      if (activeFilter === 'All') return true
      if (activeFilter === 'Experience') return item.category === 'experience'
      if (activeFilter === 'Education') return item.category === 'education'
      if (activeFilter === 'Projects') return item.category === 'project'
      return true
    })

    // Add skill mapping info to items when skill mapping is active
    if (showSkillMapping && highlightedSkills.length > 0) {
      filtered = filtered.map(item => ({
        ...item,
        hasMatchingSkills: item.skills.some(skill => highlightedSkills.includes(skill))
      }))
    } else {
      filtered = filtered.map(item => ({
        ...item,
        hasMatchingSkills: false
      }))
    }

    return filtered
  }, [activeFilter, highlightedSkills, showSkillMapping])

  const sortedItems = useMemo(() => {
    return [...filteredItems].sort((a, b) => {
      const order = { 'experience': 0, 'education': 1, 'project': 2 }
      return order[a.category] - order[b.category]
    })
  }, [filteredItems])

  return {
    activeFilter,
    setActiveFilter,
    filteredItems,
    sortedItems
  }
}
