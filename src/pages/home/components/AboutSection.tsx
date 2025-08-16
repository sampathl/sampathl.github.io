import { useLayout } from '../../../components/layout/Layout'
import { cn } from '../../../lib/cn'
import { motion } from 'framer-motion'
import { MdLocationOn, MdWork, MdSchool, MdCode, MdDataUsage, MdTrendingUp } from 'react-icons/md'
import { getAboutText } from '../../../lib/textConstants'
import { getAboutProfileData } from '../../../lib/usageFunctions'

export default function AboutSection() {
  const { isCollapsed } = useLayout()
  
  const skills = getAboutText('skills') as string[]
  const focusAreas = getAboutText('focusAreas') as string[]
  
  // Get profile data for location, experience, and education
  const { location, experience, education } = getAboutProfileData()

  return (
    <section id="about" className="py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
        {getAboutText('title')}
      </h2>
      <div className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-12 content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        <div>
          <h3 className="text-2xl font-semibold text-[rgb(var(--fg))] mb-4" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Senior Software Engineer
          </h3>
          <p className="text-[rgb(var(--muted))] mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            I specialize in building scalable data pipelines, reliable APIs, and polished user experiences. With over 8 years of experience in software engineering, I've worked across the full stack to deliver solutions that drive business impact.
          </p>
          <p className="text-[rgb(var(--muted))] mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            My expertise includes Python, TypeScript, React, AWS, and modern data technologies. I'm passionate about clean code, system design, and creating tools that developers love to use.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[rgb(var(--muted))]">
              <MdLocationOn className="text-[rgb(var(--accent))]" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-2 text-[rgb(var(--muted))]">
              <MdWork className="text-[rgb(var(--accent))]" />
              <span>{experience}</span>
            </div>
            <div className="flex items-center gap-2 text-[rgb(var(--muted))]">
              <MdSchool className="text-[rgb(var(--accent))]" />
              <span>{education}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              {getAboutText('coreSkillsTitle')}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill} className="p-3 rounded-lg bg-[rgb(var(--hover))] text-center text-[rgb(var(--fg))] font-medium">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              {getAboutText('focusAreasTitle')}
            </h4>
            <div className="space-y-2">
              {focusAreas.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[rgb(var(--accent))] rounded-full"></div>
                  <span className="text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
