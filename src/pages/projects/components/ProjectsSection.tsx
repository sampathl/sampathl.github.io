import React from 'react'
import { motion } from 'framer-motion'
import { MdFolder, MdCode, MdDataUsage, MdApi, MdCloud, MdAnalytics } from 'react-icons/md'
import ImpactCard from './ImpactCard'
import { CORE_PROJECTS_DATA, UI_STRINGS } from '../../../lib/consolidatedData'

export default function ProjectsSection() {
  // Helper function to get icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'data_usage': return MdDataUsage
      case 'analytics': return MdAnalytics
      case 'code': return MdCode
      case 'api': return MdApi
      case 'cloud': return MdCloud
      case 'folder': return MdFolder
      default: return MdDataUsage
    }
  }

  const projects = CORE_PROJECTS_DATA

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'active': return 'bg-blue-100 text-blue-800'
      case 'development': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'active': return 'Active'
      case 'disabled': return 'Coming Soon'
      default: return 'Unknown'
    }
  }

  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[rgb(var(--fg))] mb-4" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            {UI_STRINGS.projects.pageTitle}
          </h1>
          <p className="text-xl text-[rgb(var(--muted))] max-w-3xl mx-auto" style={{ fontFamily: '"Inter", sans-serif' }}>
            {UI_STRINGS.projects.pageDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[rgb(var(--accent))]">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[rgb(var(--accent))] rounded-lg flex items-center justify-center text-white">
                    {React.createElement(getIconComponent(project.icon), { className: "text-xl" })}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mb-2 group-hover:text-[rgb(var(--accent))] transition-colors">
                  {project.title}
                </h3>
                
                {project.metric && (
                  <p className="text-sm text-[rgb(var(--accent))] font-medium mb-3">
                    {project.metric}
                  </p>
                )}
                
                <p className="text-[rgb(var(--muted))] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-[rgb(var(--hover))] text-[rgb(var(--fg))] rounded text-xs font-medium border border-[rgb(var(--secondary))]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
