import { motion } from 'framer-motion'
import { MdViewList } from 'react-icons/md'
import { useState } from 'react'

// Types
interface PortfolioItem {
  id: string
  title: string
  organization: string
  dates: string
  category: 'experience' | 'education' | 'project'
  description: string
  skills: string[] // Add skills array for mapping
}

// Data - TODO: Replace with real portfolio information
const portfolioData: PortfolioItem[] = [
  {
    id: 'exp-1',
    title: 'Senior Software Engineer',
    organization: 'Tech Company Inc.',
    dates: '2022 - Present',
    category: 'experience',
    description: 'Led development of scalable data pipelines and REST APIs. Mentored junior developers and improved system performance by 40%.',
    skills: ['Python', 'pandas', 'FastAPI', 'Microservices', 'Data Pipelines', 'AWS', 'Docker', 'CI/CD']
  },
  {
    id: 'exp-2',
    title: 'Software Engineer',
    organization: 'StartupXYZ',
    dates: '2020 - 2022',
    category: 'experience',
    description: 'Built full-stack web applications using React and Node.js. Implemented CI/CD pipelines and automated testing.',
    skills: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'REST APIs', 'CI/CD', 'Docker']
  },
  {
    id: 'exp-3',
    title: 'Junior Developer',
    organization: 'Digital Agency',
    dates: '2019 - 2020',
    category: 'experience',
    description: 'Developed responsive websites and e-commerce solutions. Collaborated with design team on UX improvements.',
    skills: ['React', 'JavaScript', 'Tailwind CSS', 'Material-UI', 'REST APIs']
  },
  {
    id: 'exp-4',
    title: 'Intern Developer',
    organization: 'Software Corp',
    dates: '2018 - 2019',
    category: 'experience',
    description: 'Assisted in frontend development and bug fixes. Participated in code reviews and team meetings.',
    skills: ['JavaScript', 'HTML', 'CSS', 'Git']
  },
  {
    id: 'edu-1',
    title: 'Master of Computer Science',
    organization: 'University of Technology',
    dates: '2018 - 2020',
    category: 'education',
    description: 'Specialized in software engineering and data structures. Graduated with honors and completed thesis on scalable architectures.',
    skills: ['Python', 'Data Structures', 'Algorithms', 'Architecture']
  },
  {
    id: 'edu-2',
    title: 'Bachelor of Computer Science',
    organization: 'State University',
    dates: '2014 - 2018',
    category: 'education',
    description: 'Major in computer science with minor in mathematics. Active in programming competitions and hackathons.',
    skills: ['Java', 'C++', 'Mathematics', 'Problem Solving']
  },
  {
    id: 'proj-1',
    title: 'E-commerce Platform',
    organization: 'Personal Project',
    dates: '2023',
    category: 'project',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.',
    skills: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'REST APIs', 'Authentication']
  },
  {
    id: 'proj-2',
    title: 'Data Visualization Dashboard',
    organization: 'Open Source',
    dates: '2022',
    category: 'project',
    description: 'Interactive dashboard for analyzing large datasets. Built with D3.js, React, and Python backend. Used by 100+ data scientists.',
    skills: ['Python', 'pandas', 'React', 'D3.js', 'Data Analysis', 'REST APIs']
  }
]

// Sub-components
function SegmentedControl({ 
  activeFilter, 
  onFilterChange 
}: { 
  activeFilter: string
  onFilterChange: (filter: string) => void 
}) {
  const filters = ['All', 'Experience', 'Education', 'Projects']
  
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeFilter === filter
              ? 'bg-[rgb(var(--fg))] text-[rgb(var(--bg))] shadow-lg'
              : 'bg-[rgb(var(--accent))] text-[rgb(var(--bg))] hover:bg-[rgb(var(--fg))] hover:shadow-md'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

function ListItem({ 
  item, 
  highlightedSkills = [] 
}: { 
  item: PortfolioItem
  highlightedSkills?: string[]
}) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'experience': return 'bg-orange-500/20 text-[rgb(var(--fg))]'
      case 'education': return 'bg-emerald-500/20 text-[rgb(var(--fg))]'
      case 'project': return 'bg-indigo-500/20 text-[rgb(var(--fg))]'
      default: return 'bg-slate-500/20 text-[rgb(var(--fg))]'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'experience': return 'Experience'
      case 'education': return 'Education'
      case 'project': return 'Project'
      default: return category
    }
  }

  const isHighlighted = highlightedSkills.length > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[rgb(var(--card))] rounded-lg p-6 mb-4 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex-1">
        {/* Top row: Title and Category */}
        <div className="flex items-end justify-between mb-2">
          <h3 className="text-xl font-semibold text-[rgb(var(--fg))] text-left">
            {item.title}
          </h3>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
            {getCategoryLabel(item.category)}
          </span>
        </div>
        
        {/* Bottom row: Organization and Date */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-[rgb(var(--muted))] text-left">
            {item.organization}
          </p>
          <p className="text-sm text-[rgb(var(--muted))] text-right">
            {item.dates}
          </p>
        </div>
        
        <p className="text-[rgb(var(--fg))] leading-relaxed mt-3">{item.description}</p>
        
        {/* Skills tags - only show when skill mapping is active */}
        {highlightedSkills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded text-xs font-medium bg-[rgb(var(--accent))] text-[rgb(var(--bg))] transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

// Main PortfolioSection component
export default function PortfolioSection({ 
  highlightedSkills = [],
  showSkillMapping = false
}: {
  highlightedSkills?: string[]
  showSkillMapping?: boolean
}) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = portfolioData.filter(item => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Experience') return item.category === 'experience'
    if (activeFilter === 'Education') return item.category === 'education'
    if (activeFilter === 'Projects') return item.category === 'project'
    return true
  })

  // Filter by highlighted skills if skill mapping is active
  const skillFilteredItems = showSkillMapping && highlightedSkills.length > 0
    ? filteredItems.filter(item => 
        item.skills.some(skill => highlightedSkills.includes(skill))
      )
    : filteredItems

  const sortedItems = [...skillFilteredItems].sort((a, b) => {
    const order = { 'experience': 0, 'education': 1, 'project': 2 }
    return order[a.category] - order[b.category]
  })

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <MdViewList className="text-2xl text-[rgb(var(--accent))]" />
        Portfolio
      </h2>
      
      <SegmentedControl 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />
      
      <div className="space-y-4">
        {sortedItems.length > 0 ? (
          sortedItems.map((item) => (
            <ListItem 
              key={item.id} 
              item={item} 
              highlightedSkills={highlightedSkills}
            />
          ))
        ) : (
          <div className="text-center py-12 text-[rgb(var(--muted))]">
            <p>No items found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
