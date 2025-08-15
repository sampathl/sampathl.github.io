import { motion, AnimatePresence } from 'framer-motion'
import { MdExpandMore, MdInfo, MdDataUsage, MdPhone, MdStream, MdApi, MdDesignServices, MdCloud } from 'react-icons/md'
import { useState } from 'react'

type ExperienceItem = {
  id: string
  title: string
  metric: string
  blurb: string
  category: string
  icon: string
  fromDate: string
  toDate: string
}

type Props = {
  experiences: ExperienceItem[]
}

// Function to map icon names to React Icons components
const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    'data_usage': MdDataUsage,
    'phone': MdPhone,
    'stream': MdStream,
    'api': MdApi,
    'design_services': MdDesignServices,
    'cloud': MdCloud,
    'analytics': MdDataUsage,
    'psychology': MdDesignServices,
    // Add more mappings as needed
  }
  
  return iconMap[iconName] || MdDataUsage // Default fallback
}

export default function ExpandableExperience({ experiences }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {experiences.map((experience) => (
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border border-[rgb(var(--secondary))] bg-[rgb(var(--surface))] overflow-hidden shadow-lg"
        >
          {/* Header - Always visible */}
          <button
            onClick={() => toggleExpanded(experience.id)}
            className="w-full p-6 text-left hover:bg-[rgb(var(--hover))] transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              {/* Left side - Icon */}
              <div className="w-12 h-12 bg-[rgb(var(--accent))] rounded-lg flex items-center justify-center text-white mr-4">
                {(() => {
                  const IconComponent = getIconComponent(experience.icon)
                  return <IconComponent className="text-xl" />
                })()}
              </div>
              
              {/* Content area with grid layout */}
              <div className="flex-1">
                {/* Top row: Title and Date */}
                <div className="flex items-end justify-between mb-2">
                  <h3 className="text-xl font-semibold text-[rgb(var(--fg))] text-left">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-[rgb(var(--muted))] text-right">
                    {experience.fromDate} - {experience.toDate}
                  </p>
                </div>
                
                {/* Bottom row: Metric and Category */}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[rgb(var(--muted))] text-left">
                    {experience.metric}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[rgb(var(--accent))] font-medium">
                      {experience.category}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedId === experience.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MdExpandMore className="text-2xl text-[rgb(var(--muted))]" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Expandable Content */}
          <AnimatePresence>
            {expandedId === experience.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-[rgb(var(--secondary))] bg-[rgb(var(--hover))]/30">
                  <div className="pt-4">
                    <p className="text-[rgb(var(--fg))] leading-relaxed">
                      {experience.blurb}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm text-[rgb(var(--muted))]">
                      <MdInfo className="text-sm" />
                      <span>Click to collapse</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
