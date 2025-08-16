import { MdPsychology, MdCode, MdBuild, MdDataObject } from 'react-icons/md'
import { getSkillsText } from '../../../lib/textConstants'

interface SkillsSectionProps {
  onShowMe: () => void
  isActive: boolean
}

export default function SkillsSection({ onShowMe, isActive }: SkillsSectionProps) {
  // Skills data with years of experience based on user's actual stack
  const skillsData = getSkillsText('skillsData') as any

  return (
    <div className="lg:sticky lg:top-24">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <MdPsychology className="text-xl text-[rgb(var(--accent))]" />
          {getSkillsText('title')}
        </h2>
        <button 
          onClick={onShowMe}
          className="bg-[rgb(var(--accent))] text-[rgb(var(--bg))] px-3 py-1.5 rounded text-sm font-medium hover:opacity-80 transition-all duration-200"
        >
          {isActive ? getSkillsText('hideSkillsButton') : getSkillsText('showMeButton')}
        </button>
      </div>
      
      {/* Primary Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[rgb(var(--accent))]">
          <MdCode className="text-lg" />
          {getSkillsText('primaryTitle')}
        </h3>
        <div className="space-y-2">
          {skillsData.primary.map((skill: any, index: number) => (
            <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-[rgb(var(--card))]">
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="text-xs text-[rgb(var(--muted-foreground))]">{skill.years} {getSkillsText('yearsSuffix')}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[rgb(var(--accent))]">
          <MdBuild className="text-lg" />
          {getSkillsText('secondaryTitle')}
        </h3>
        <div className="space-y-2">
          {skillsData.secondary.map((skill: any, index: number) => (
            <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-[rgb(var(--card))]">
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="text-xs text-[rgb(var(--muted-foreground))]">{skill.years} {getSkillsText('yearsSuffix')}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Worked With Skills */}
      <div>
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[rgb(var(--accent))]">
          <MdDataObject className="text-lg" />
          {getSkillsText('workedWithTitle')}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {skillsData.workedWith.map((skill: string, index: number) => (
            <span 
              key={index}
              className="px-2 py-1 bg-[rgb(var(--card))] text-[rgb(var(--foreground))] rounded text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
