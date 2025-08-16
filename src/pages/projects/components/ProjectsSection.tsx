import { motion } from 'framer-motion'
import { MdFolder, MdCode, MdDataUsage, MdApi, MdCloud, MdAnalytics } from 'react-icons/md'
import ImpactCard from '../../../components/common/ImpactCard'

export default function ProjectsSection() {
  const projects = [
    {
      id: '1',
      title: 'Data Pipeline Optimization',
      blurb: 'Built a high-performance ETL pipeline using Apache Kafka and Apache Spark, reducing data processing time by 70% and improving reliability through fault-tolerant design patterns.',
      metric: '70% faster processing',
      icon: MdDataUsage,
      technologies: ['Python', 'Apache Kafka', 'Apache Spark', 'AWS S3', 'Docker'],
      status: 'completed'
    },
    {
      id: '2',
      title: 'Real-time Analytics Dashboard',
      blurb: 'Developed a real-time analytics platform using React, Node.js, and WebSocket connections, providing live insights into system performance and user behavior metrics.',
      metric: 'Real-time insights',
      icon: MdAnalytics,
      technologies: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis'],
      status: 'active'
    },
    {
      id: '3',
      title: 'AI-Powered Recommendation Engine',
      blurb: 'Machine learning system for personalized content recommendations using collaborative filtering and deep learning models, currently in development phase.',
      metric: 'ML-powered',
      icon: MdCode,
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'FastAPI', 'MongoDB'],
      status: 'development'
    },
    {
      id: '4',
      title: 'Microservices Architecture',
      blurb: 'Designed and implemented a scalable microservices architecture using Docker and Kubernetes, improving system reliability and deployment efficiency.',
      metric: 'Scalable architecture',
      icon: MdCloud,
      technologies: ['Docker', 'Kubernetes', 'Node.js', 'PostgreSQL', 'Redis'],
      status: 'completed'
    },
    {
      id: '5',
      title: 'REST API Development',
      blurb: 'Built robust REST APIs using FastAPI and Python, implementing authentication, rate limiting, and comprehensive documentation.',
      metric: 'Production ready',
      icon: MdApi,
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'Swagger'],
      status: 'completed'
    },
    {
      id: '6',
      title: 'Full-Stack E-commerce',
      blurb: 'Developed a complete e-commerce solution with user authentication, payment processing, and admin dashboard.',
      metric: 'Full-stack solution',
      icon: MdFolder,
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      status: 'active'
    }
  ]

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
      case 'development': return 'In Development'
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
            My Projects
          </h1>
          <p className="text-xl text-[rgb(var(--muted))] max-w-3xl mx-auto" style={{ fontFamily: '"Inter", sans-serif' }}>
            A collection of my work in data engineering, API development, and full-stack applications
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
                    <project.icon className="text-xl" />
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
                  {project.blurb}
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
