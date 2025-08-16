import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { MdArrowBack, MdCode, MdDataUsage, MdApi, MdCloud, MdAnalytics, MdFolder, MdLink } from 'react-icons/md'
import { SlSocialGithub } from 'react-icons/sl'

export default function ProjectDetail() {
  const { slug } = useParams()

  // Mock project data - in a real app, this would come from an API or data file
  const projectData = {
    'data-pipeline': {
      title: 'Data Pipeline Optimization',
      description: 'Built a high-performance ETL pipeline using Apache Kafka and Apache Spark, reducing data processing time by 70% and improving reliability through fault-tolerant design patterns.',
      longDescription: `This project involved designing and implementing a robust data pipeline that processes millions of records daily. The system uses Apache Kafka for real-time data streaming, Apache Spark for distributed processing, and AWS S3 for data storage.

Key achievements include:
• Reduced data processing time by 70% through optimized Spark configurations
• Implemented fault-tolerant design patterns ensuring 99.9% uptime
• Added comprehensive monitoring and alerting using Prometheus and Grafana
• Automated deployment pipeline using Docker and Kubernetes`,
      technologies: ['Python', 'Apache Kafka', 'Apache Spark', 'AWS S3', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
      status: 'completed',
      icon: MdDataUsage,
      githubUrl: 'https://github.com/example/data-pipeline',
      liveUrl: 'https://example.com/data-pipeline',
      metrics: [
        { label: 'Processing Time', value: '70% reduction', color: 'text-green-600' },
        { label: 'Uptime', value: '99.9%', color: 'text-blue-600' },
        { label: 'Data Volume', value: '10M+ records/day', color: 'text-purple-600' }
      ]
    },
    'analytics-dashboard': {
      title: 'Real-time Analytics Dashboard',
      description: 'Developed a real-time analytics platform using React, Node.js, and WebSocket connections, providing live insights into system performance and user behavior metrics.',
      longDescription: `A comprehensive analytics platform that provides real-time insights into system performance, user behavior, and business metrics. The dashboard features interactive charts, real-time updates, and customizable widgets.

Features include:
• Real-time data visualization using WebSocket connections
• Interactive charts and graphs with D3.js
• Customizable dashboard layouts
• Role-based access control
• Export functionality for reports`,
      technologies: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis', 'D3.js', 'TypeScript'],
      status: 'active',
      icon: MdAnalytics,
      githubUrl: 'https://github.com/example/analytics-dashboard',
      liveUrl: 'https://analytics.example.com',
      metrics: [
        { label: 'Real-time Updates', value: '< 100ms latency', color: 'text-green-600' },
        { label: 'Active Users', value: '500+ daily', color: 'text-blue-600' },
        { label: 'Data Points', value: '1M+ processed', color: 'text-purple-600' }
      ]
    }
  }

  const project = projectData[slug as keyof typeof projectData]

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
              <project.icon className="text-3xl" />
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
