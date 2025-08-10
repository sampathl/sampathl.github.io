import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import MaterialIcon from './MaterialIcon'

type ExperienceItem = {
  id: string
  title: string
  metric: string
  blurb: string
  category: string
  icon: string
}

type Props = {
  experiences: ExperienceItem[]
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
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[rgb(var(--accent))] rounded-lg flex items-center justify-center text-white">
                  <MaterialIcon name={experience.icon} className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[rgb(var(--fg))] text-left">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-[rgb(var(--muted))] mt-1">
                    {experience.metric}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[rgb(var(--accent))] font-medium">
                  {experience.category}
                </span>
                <motion.div
                  animate={{ rotate: expandedId === experience.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MaterialIcon name="expand_more" className="text-2xl text-[rgb(var(--muted))]" />
                </motion.div>
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
                      <MaterialIcon name="info" className="text-sm" />
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
