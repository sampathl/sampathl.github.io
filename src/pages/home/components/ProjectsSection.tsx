import { useLayout } from '../../../components/Layout'
import { cn } from '../../../lib/cn'
import { motion } from 'framer-motion'
import { MdArrowForward } from 'react-icons/md'
import ProjectAccordion from './ProjectAccordion'
import { getMultiPageHomeProjectsData } from '../../../lib/dataFormatters'

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
  
  const { title, description, viewAllButton, projects } = getMultiPageHomeProjectsData()

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
        {title}
      </h2>
      <div className={cn(
        "content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        <ProjectAccordion projects={[...projects]} />
      </div>
      <div className="mt-8">
        <p className="text-[rgb(var(--muted))] mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
          {description}
        </p>
        {/* 
          TODO: switch it once the projects page is done
          <button 
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 text-[rgb(var(--accent))] font-medium hover:underline hover:scale-105 transition-all duration-300"
            style={{ fontFamily: '"Work Sans", sans-serif' }}
          >
            <MdArrowForward className="text-lg" />
            {viewAllButton}
          </button>
        */}
      </div>
    </section>
  )
}
