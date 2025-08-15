import { useState } from 'react'
import MaterialIcon from './MaterialIcon'
import { cn } from '../lib/cn'

interface ProjectAccordionProps {
  projects: {
    id: string
    title: string
    description: string
    technologies: string[]
    status: 'active' | 'completed' | 'disabled'
    icon: string
  }[]
}

export default function ProjectAccordion({ projects }: ProjectAccordionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handleToggle = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null)
    } else {
      setExpandedId(id)
    }
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className={cn(
            "border border-[rgb(var(--secondary))] rounded-xl overflow-hidden transition-all duration-300",
            project.status === 'disabled' 
              ? "opacity-50 cursor-not-allowed bg-[rgb(var(--muted))]/20" 
              : "bg-[rgb(var(--surface))] hover:border-[rgb(var(--accent))] hover:shadow-lg"
          )}
        >
          <button
            onClick={() => project.status !== 'disabled' && handleToggle(project.id)}
            disabled={project.status === 'disabled'}
            className={cn(
              "w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-200",
              project.status === 'disabled' 
                ? "cursor-not-allowed" 
                : "hover:bg-[rgb(var(--hover))] cursor-pointer"
            )}
          >
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center",
                project.status === 'disabled' 
                  ? "bg-[rgb(var(--muted))]" 
                  : "bg-[rgb(var(--accent))]"
              )}>
                <MaterialIcon 
                  name={project.icon} 
                  className={cn(
                    "text-lg",
                    project.status === 'disabled' 
                      ? "text-[rgb(var(--muted))]" 
                      : "text-white"
                  )} 
                />
              </div>
              <div>
                <h3 className={cn(
                  "text-lg font-semibold",
                  project.status === 'disabled' 
                    ? "text-[rgb(var(--muted))]" 
                    : "text-[rgb(var(--fg))]"
                )}>
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={cn(
                    "text-sm px-2 py-1 rounded-full",
                    project.status === 'active' && "bg-green-100 text-green-800",
                    project.status === 'completed' && "bg-blue-100 text-blue-800",
                    project.status === 'disabled' && "bg-gray-100 text-gray-600"
                  )}>
                    {project.status === 'active' && 'Active'}
                    {project.status === 'completed' && 'Completed'}
                    {project.status === 'disabled' && 'Coming Soon'}
                  </span>
                </div>
              </div>
            </div>
            
            {project.status !== 'disabled' && (
              <MaterialIcon 
                name={expandedId === project.id ? "expand_less" : "expand_more"} 
                className="text-[rgb(var(--accent))] text-xl transition-transform duration-200" 
              />
            )}
          </button>
          
          {expandedId === project.id && project.status !== 'disabled' && (
            <div className="px-6 pb-6 border-t border-[rgb(var(--secondary))] bg-[rgb(var(--hover))]/30">
              <p className="text-[rgb(var(--muted))] mt-4 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-[rgb(var(--surface))] text-[rgb(var(--fg))] rounded-full border border-[rgb(var(--secondary))]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
