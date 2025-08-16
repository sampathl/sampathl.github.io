import { useState, useMemo } from 'react'
import { getLegacyPortfolioExperienceItems, getLegacyPortfolioEducationItems, getLegacyPortfolioProjectItems } from '../lib/usageFunctions'
import type { PortfolioItem } from '../types/portfolio'

export const usePortfolio = (highlightedSkills: string[] = [], showSkillMapping: boolean = false) => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = useMemo(() => {
    // Get experience items from consolidated data
    const experienceItems = getLegacyPortfolioExperienceItems()
    
    // Get education items from consolidated data
    const educationItems = getLegacyPortfolioEducationItems()
    
    // Get project items from consolidated data
    const projectItems = getLegacyPortfolioProjectItems()
    
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

    // Filter by highlighted skills if skill mapping is active
    if (showSkillMapping && highlightedSkills.length > 0) {
      filtered = filtered.filter(item => 
        item.skills.some(skill => highlightedSkills.includes(skill))
      )
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
