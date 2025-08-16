import { useLayout } from '../../../components/layout/Layout'
import { cn } from '../../../lib/cn'
import ExpandableExperience from './ExpandableExperience'
import { getMultiPageHomeExperienceData } from '../../../lib/usageFunctions'

export default function ExperienceSection() {
  const { isCollapsed } = useLayout()
  
  const { experiences } = getMultiPageHomeExperienceData()
  
  return (
    <section id="experience" className="py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
        Experience
      </h2>
      <div className={cn(
        "content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        <ExpandableExperience experiences={[...experiences]} />
      </div>
    </section>
  )
}
