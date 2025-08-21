import { motion } from 'framer-motion'
import { MdViewList } from 'react-icons/md'
import { usePortfolio } from './usePortfolio'
import type { PortfolioSectionProps, PortfolioItem } from './portfolio'
import { UI_STRINGS } from '../../../lib/consolidatedData'

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
  showSkillMapping = false
}: { 
  item: PortfolioItem
  showSkillMapping?: boolean
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
      case 'experience': return UI_STRINGS.sectionTitles.experience
      case 'education': return UI_STRINGS.sectionTitles.education
      case 'project': return 'Project'
      default: return category
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-lg p-6 mb-4 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex-1">
        {/* Top row: Title and Category */}
        <div className="flex items-end justify-between mb-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-[rgb(var(--fg))] text-left">
              {item.title}
            </h3>
          </div>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
            {getCategoryLabel(item.category)}
          </span>
        </div>
        
        {/* Bottom row: Organization, Focus Areas, and Date */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm text-[rgb(var(--muted))] text-left">
              {item.organization}
            </p>
            {/* Focus Areas tags - only show when skill mapping is active */}
            {showSkillMapping && (
              <div className="flex gap-1">
                {item.focusAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded text-xs font-medium bg-[rgb(var(--accent))] text-[rgb(var(--bg))] opacity-80"
                  >
                    {area}
                  </span>
                ))}
              </div>
            )}
          </div>
          <p className="text-sm text-[rgb(var(--muted))] text-right">
            {item.dates}
          </p>
        </div>
        
        <div className="mt-3">
          {item.description.split(';').map((part, index) => (
            <div key={index} className="flex items-start gap-2 mb-2">
              <div className="w-2 h-2 bg-[rgb(var(--accent))] rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-[rgb(var(--fg))] leading-relaxed">{part.trim()}</p>
            </div>
          ))}
        </div>
        
        {/* Technologies tags - only show when skill mapping is active */}
        {showSkillMapping && (
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
  showSkillMapping = false
}: PortfolioSectionProps) {
  const { activeFilter, setActiveFilter, sortedItems } = usePortfolio(showSkillMapping)

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
              showSkillMapping={showSkillMapping}
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
