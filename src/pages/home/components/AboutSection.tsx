import { useLayout } from '../../../components/Layout'
import { cn } from '../../../lib/cn'
import { motion } from 'framer-motion'
import { MdLocationOn, MdWork, MdSchool, MdCode, MdDataUsage, MdTrendingUp } from 'react-icons/md'
import { CORE_PROFILE_DATA, UI_STRINGS, CORE_SKILLS_SECTION } from '../../../lib/consolidatedData'
import { getAboutProfileData } from '../../../lib/dataFormatters'

export default function AboutSection() {
  const { isCollapsed } = useLayout()
  
  // Get profile data for experience and education, contact info for location
  const { experience, education } = getAboutProfileData()
  const { location } = CORE_PROFILE_DATA.contact

  return (
    <section id="about" className="py-12">
      <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
        {UI_STRINGS.sectionTitles.about}
      </h2>
      <div className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-12 content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        <div>
          <h3 className="text-2xl font-semibold text-[rgb(var(--fg))] mb-4" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            {CORE_PROFILE_DATA.role}
          </h3>
          <div className="mb-6">
            {UI_STRINGS.about.description.split(';').map((part, index) => (
              <p key={index} className="text-[rgb(var(--muted))] mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
                {part.trim()}
              </p>
            ))}
          </div>
          
          {/* Hobbies Section */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              Hobbies & Interests
            </h4>
            <p className="text-[rgb(var(--muted))] leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              When I'm not working, I enjoy traveling especially by road, hiking and camping. Food, music and stories in any form are pleasures of life I actively seek. My latest relaxation is exploring generative AI and discovering use cases across different domains.
            </p>
          </div>
          
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
              {UI_STRINGS.sectionTitles.coreSkills}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {Object.keys(CORE_SKILLS_SECTION.skills).map((skill) => (
                <div key={skill} className="p-3 rounded-lg bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] text-center text-[rgb(var(--fg))] font-medium hover:bg-[rgb(var(--hover))] hover:border-[rgb(var(--accent))] transition-all duration-200">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              {UI_STRINGS.sectionTitles.focusAreas}
            </h4>
            <div className="space-y-2">
              {UI_STRINGS.about.focusAreas.map((area) => (
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
