import { MdPsychology, MdCode, MdBuild, MdDataObject } from 'react-icons/md'
import { UI_STRINGS } from '../../../lib/consolidatedData'
import { getPrimarySkills, getSecondarySkills, getWorkedWithSkills } from '../../../lib/dataAccess'

interface SkillsSectionProps {
  onShowMe: () => void
  isActive: boolean
}

export default function SkillsSection({ onShowMe, isActive }: SkillsSectionProps) {
  const primarySkills = getPrimarySkills()
  const secondarySkills = getSecondarySkills()
  const workedWithSkills = getWorkedWithSkills()

  return (
    <div className="lg:sticky lg:top-24">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <MdPsychology className="text-xl text-[rgb(var(--accent))]" />
          {UI_STRINGS.sectionTitles.skills}
        </h2>
        <div className="relative group">
          <button 
            onClick={onShowMe}
            className={`relative bg-[rgb(var(--accent))] text-[rgb(var(--bg))] px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300 z-10 ${
              isActive ? 'shadow-lg' : ''
            }`}
          >
            {isActive ? 'Hide Skills' : 'Show Me'}
          </button>
          
          {/* Pin animation */}
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-black dark:bg-white shadow-lg shadow-black/50 dark:shadow-white/50 animate-ping"></div>
          
          {/* Tooltip hint */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[rgb(var(--fg))] text-[rgb(var(--bg))] px-3 py-2 rounded-lg text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
            {isActive ? 'Hide skill mapping' : 'Map skills to portfolio items'}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-[rgb(var(--fg))]"></div>
          </div>
        </div>
      </div>
      
      {/* Primary Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[rgb(var(--accent))]">
          <MdCode className="text-lg" />
                      {UI_STRINGS.sectionTitles.primary}
        </h3>
        <div className="space-y-2">
          {primarySkills.map((skill: any, index: number) => (
            <div key={index} className="flex justify-between items-center p-2 rounded-lg">
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="text-xs text-[rgb(var(--muted-foreground))]">{skill.years} years</span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[rgb(var(--accent))]">
          <MdBuild className="text-lg" />
                      {UI_STRINGS.sectionTitles.secondary}
        </h3>
        <div className="space-y-2">
          {secondarySkills.map((skill: any, index: number) => (
            <div key={index} className="flex justify-between items-center p-2 rounded-lg">
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="text-xs text-[rgb(var(--muted-foreground))]">{skill.years} years</span>
            </div>
          ))}
        </div>
      </div>

      {/* Worked With Skills */}
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[rgb(var(--accent))]">
          <MdDataObject className="text-lg" />
                      {UI_STRINGS.sectionTitles.workedWith}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {workedWithSkills.map((skill: string, index: number) => (
            <span 
              key={index}
              className="px-2 py-1 text-[rgb(var(--foreground))] rounded text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
