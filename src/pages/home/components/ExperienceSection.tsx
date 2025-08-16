import { useLayout } from '../../../components/layout/Layout'
import { cn } from '../../../lib/cn'
import ExpandableExperience from './ExpandableExperience'
import { getExperienceText } from '../../../lib/textConstants'

export default function ExperienceSection() {
  const { isCollapsed } = useLayout()
  
  const experiences = getExperienceText('experiences') as any[]

  return (
    <section id="experience" className="py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
        {getExperienceText('title')}
      </h2>
      <div className={cn(
        "content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        <ExpandableExperience experiences={experiences} />
      </div>
    </section>
  )
}
