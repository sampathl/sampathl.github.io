import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { MdArrowBack, MdCode, MdDataUsage, MdApi, MdCloud, MdAnalytics, MdFolder, MdLink } from 'react-icons/md'
import { SlSocialGithub } from 'react-icons/sl'
import { CORE_PROJECT_DETAILS } from '../../../lib/consolidatedData'

export default function ProjectDetail() {
  const { slug } = useParams()

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

  const project = CORE_PROJECT_DETAILS[slug as keyof typeof CORE_PROJECT_DETAILS]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[rgb(var(--fg))] mb-4">Project Not Found</h1>
          <p className="text-[rgb(var(--muted))] mb-6">The project you're looking for doesn't exist.</p>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(var(--accent))] text-[rgb(var(--bg))] rounded-lg hover:bg-[rgb(var(--accent))]/80 transition-colors"
          >
            <MdArrowBack className="text-lg" />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]/80 transition-colors"
          >
            <MdArrowBack className="text-lg" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[rgb(var(--accent))] rounded-xl flex items-center justify-center text-white">
              {React.createElement(getIconComponent(project.icon), { className: "text-3xl" })}
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[rgb(var(--fg))]" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                {project.title}
              </h1>
              <p className="text-lg text-[rgb(var(--muted))] mt-2">
                {project.description}
              </p>
            </div>
          </div>

          {/* Project Links */}
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-lg hover:border-[rgb(var(--accent))] transition-colors"
              >
                <SlSocialGithub className="text-lg" />
                View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(var(--accent))] text-[rgb(var(--bg))] rounded-lg hover:bg-[rgb(var(--accent))]/80 transition-colors"
              >
                <MdLink className="text-lg" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[rgb(var(--fg))] mb-6">Key Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-lg p-6 text-center"
              >
                <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                  {metric.value}
                </div>
                <div className="text-[rgb(var(--muted))] font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-[rgb(var(--fg))] mb-6">About This Project</h2>
          <div className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-lg p-8">
            <p className="text-[rgb(var(--fg))] leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-[rgb(var(--fg))] mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[rgb(var(--hover))] text-[rgb(var(--fg))] rounded-full font-medium border border-[rgb(var(--secondary))]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
