export interface PortfolioItem {
  id: string
  title: string
  organization: string
  dates: string
  category: 'experience' | 'education' | 'project'
  description: string
  skills: readonly string[]
  focusAreas: readonly string[]
}

export interface PortfolioSectionProps {
  showSkillMapping?: boolean
}
