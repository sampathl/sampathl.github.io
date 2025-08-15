import { useLayout } from '../../../components/layout/Layout'
import { cn } from '../../../lib/cn'
import { motion } from 'framer-motion'
import { MdArrowForward } from 'react-icons/md'
import ProjectAccordion from './ProjectAccordion'

// Scroll to section function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const elementTop = rect.top + scrollTop
    
    window.scrollTo({
      top: elementTop - 80, // Offset for better positioning
      behavior: 'smooth'
    })
  }
}

export default function ProjectsSection() {
  const { isCollapsed } = useLayout()
  
  const projects: {
    id: string
    title: string
    description: string
    technologies: string[]
    status: 'active' | 'completed' | 'disabled'
    icon: string
  }[] = [
    {
      id: "1",
      title: "Data Pipeline Optimization",
      description: "Built a high-performance ETL pipeline using Apache Kafka and Apache Spark, reducing data processing time by 70% and improving reliability through fault-tolerant design patterns.",
      technologies: ["Python", "Apache Kafka", "Apache Spark", "AWS S3", "Docker"],
      status: "completed" as const,
      icon: "data_usage"
    },
    {
      id: "2",
      title: "Real-time Analytics Dashboard",
      description: "Developed a real-time analytics platform using React, Node.js, and WebSocket connections, providing live insights into system performance and user behavior metrics.",
      technologies: ["React", "Node.js", "WebSocket", "PostgreSQL", "Redis"],
      status: "active" as const,
      icon: "analytics"
    },
    {
      id: "3",
      title: "AI-Powered Recommendation Engine",
      description: "Machine learning system for personalized content recommendations using collaborative filtering and deep learning models, currently in development phase.",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "FastAPI", "MongoDB"],
      status: "disabled" as const,
      icon: "psychology"
    }
  ]

  return (
    <section id="projects" className="py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
        Featured Projects
      </h2>
      <div className={cn(
        "content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        <ProjectAccordion projects={projects} />
      </div>
      <div className="mt-8">
        <p className="text-[rgb(var(--muted))] mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
          Explore my latest work in data engineering, API development, and full-stack applications.
        </p>
        <button 
          onClick={() => scrollToSection('projects')}
          className="inline-flex items-center gap-2 text-[rgb(var(--accent))] font-medium hover:underline hover:scale-105 transition-all duration-300"
          style={{ fontFamily: '"Work Sans", sans-serif' }}
        >
          <MdArrowForward className="text-lg" />
          View All Projects →
        </button>
      </div>
    </section>
  )
}
