import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ProjectItem, UI_STRINGS } from '../../../lib/consolidatedData'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface AnimatedProjectCardProps {
  project: ProjectItem
  index: number
}

const AnimatedProjectCard = ({ project, index }: AnimatedProjectCardProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 })
  const [isExpanded, setIsExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Debug effect to monitor state changes
  useEffect(() => {
    console.log(`Card ${project.id} (${project.title}) state changed - isExpanded: ${isExpanded}`)
  }, [isExpanded, project.id, project.title])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20
    
    setTilt({ x: rotateX, y: rotateY })
    setShine({ 
      x: (x / rect.width) * 100, 
      y: (y / rect.height) * 100, 
      opacity: 0.15 
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setShine({ x: 50, y: 50, opacity: 0 })
  }

  // Status configuration for easy maintenance
  const STATUS_CONFIG = {
    active: {
      color: 'text-green-600 dark:text-green-400',
      icon: '🟢',
      text: UI_STRINGS.animatedProjectCards.status.active
    },
    completed: {
      color: 'text-blue-600 dark:text-blue-400',
      icon: '✅',
      text: UI_STRINGS.animatedProjectCards.status.completed
    },
    'coming-soon': {
      color: 'text-orange-500 dark:text-orange-400',
      icon: '🚀',
      text: UI_STRINGS.animatedProjectCards.status.comingSoon
    }
  } as const

  const getStatusColor = (status: string) => {
    return STATUS_CONFIG[status as keyof typeof STATUS_CONFIG]?.color || 'text-gray-600 dark:text-gray-400'
  }

  const getStatusIcon = (status: string) => {
    return STATUS_CONFIG[status as keyof typeof STATUS_CONFIG]?.icon || '📋'
  }

  const getStatusText = (status: string) => {
    return STATUS_CONFIG[status as keyof typeof STATUS_CONFIG]?.text || status.charAt(0).toUpperCase() + status.slice(1)
  }

  const toggleExpanded = () => {
    const newState = !isExpanded
    console.log(`Card ${project.id}: Toggling expanded from ${isExpanded} to ${newState}`)
    setIsExpanded(newState)
  }

  return (
    <div data-project-id={project.id} data-project-index={index}>
      <motion.div
        ref={cardRef}
        className="tilt-wrapper relative"
        style={{ 
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="bg-[rgb(var(--surface))] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-[rgb(var(--secondary))] hover:border-[rgb(var(--accent))] hover:bg-[rgb(var(--hover))] relative"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Shine effect */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)`,
              borderRadius: 'inherit',
              opacity: shine.opacity
            }}
          />

          <div className="flex flex-col">
            {/* Header Section - Fixed height */}
            <div className="text-center mb-4">
              {/* Project Title */}
              <h3 className="text-xl font-bold text-[rgb(var(--fg))] mb-2 line-clamp-2">
                {project.title}
              </h3>

              {/* Organization and Dates */}
              <p className="text-[rgb(var(--accent))] font-semibold mb-2">
                {project.organization}
              </p>
              <p className="text-[rgb(var(--muted))] text-sm mb-3">
                {project.dates}
              </p>
            </div>

            {/* Focus Areas - Fixed height */}
            <div className="mb-4 flex-shrink-0">
              <div className="flex flex-wrap justify-center gap-1">
                {project.focusAreas.slice(0, 3).map((area, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[rgb(var(--accent))]/10 text-[rgb(var(--fg))] px-2 py-1 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Expandable Content - Flexible height */}
            <div className={`flex flex-col ${isExpanded ? 'flex-grow' : 'flex-shrink-0'}`}>
              {/* Metric - Always Visible and Clickable */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  console.log(`Button clicked for project: ${project.id}, title: ${project.title}`)
                  toggleExpanded()
                }}
                className={`w-full p-3 rounded-lg bg-[rgb(var(--muted))]/20 hover:bg-[rgb(var(--muted))]/30 transition-colors duration-200 group flex-shrink-0 ${isExpanded ? 'mb-4' : 'mb-2'}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-[rgb(var(--fg))] text-left">
                    {project.metric}
                  </p>
                  <div
                    className="text-[rgb(var(--accent))] group-hover:scale-110 transition-transform duration-200 flex-shrink-0"
                    style={{
                      transform: `rotate(${isExpanded ? 180 : 0}deg)`,
                      transition: 'transform 0.2s ease-in-out'
                    }}
                  >
                     <MdKeyboardArrowDown size={20} />
                  </div>
                </div>
              </button>

              {/* Expandable Details */}
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {isExpanded && (
                  <div className="mb-4 pt-2">
                    {/* Description */}
                    <div className="mb-4 text-left">
                      <p className="text-sm text-[rgb(var(--muted))] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-[rgb(var(--fg))] mb-2 text-left">{UI_STRINGS.animatedProjectCards.labels.technologies}</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-[rgb(var(--accent))]/20 text-[rgb(var(--fg))] px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Project Status - Fixed at bottom */}
            <div className={`flex items-center justify-center gap-2 border-t border-[rgb(var(--border))] flex-shrink-0 ${isExpanded ? 'mt-4 pt-4' : 'mt-2 pt-3'}`}>
              <span className="text-2xl">{getStatusIcon(project.status)}</span>
              <span className={`text-sm font-medium ${getStatusColor(project.status)}`}>
                {getStatusText(project.status)}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

interface AnimatedProjectCardsProps {
  projects: ProjectItem[]
}

export default function AnimatedProjectCards({ projects }: AnimatedProjectCardsProps) {
  return (
    <section >

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <AnimatedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
    </section>
  )
}
