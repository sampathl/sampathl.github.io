import { MdPsychology, MdCode, MdBuild, MdDataObject } from 'react-icons/md'

interface SkillsSectionProps {
  onShowMe: () => void
  isActive: boolean
}

export default function SkillsSection({ onShowMe, isActive }: SkillsSectionProps) {
  // Skills data with years of experience based on user's actual stack
  const skillsData = {
    primary: [
      { name: 'Python', years: 5 },
      { name: 'TypeScript', years: 4 },
      { name: 'React', years: 4 },
      { name: 'pandas', years: 4 },
      { name: 'FastAPI', years: 3 },
    ],
    secondary: [
      { name: 'Microservices', years: 3 },
      { name: 'Data Pipelines', years: 3 },
      { name: 'AWS', years: 3 },
      { name: 'Node.js', years: 3 },
      { name: 'GCP', years: 2 },
    ],
    workedWith: [
      'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis',
      'GraphQL', 'REST APIs', 'CI/CD', 'Terraform', 'Airflow',
      'Jupyter', 'Scikit-learn', 'Tailwind CSS', 'Material-UI'
    ]
  };

  return (
    <div className="lg:sticky lg:top-24">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <MdPsychology className="text-xl text-[rgb(var(--accent))]" />
          Skills
        </h2>
        <button 
          onClick={onShowMe}
          className="bg-[rgb(var(--accent))] text-[rgb(var(--bg))] px-3 py-1.5 rounded text-sm font-medium hover:opacity-80 transition-all duration-200"
        >
          {isActive ? 'Hide Skills' : 'Show Me'}
        </button>
      </div>
      
      {/* Primary Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-[rgb(var(--accent))]">
          <MdCode className="text-lg" />
          Primary
        </h3>
        <div className="space-y-2">
          {skillsData.primary.map((skill, index) => (
            <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-[rgb(var(--card))]">
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
          Secondary
        </h3>
        <div className="space-y-2">
          {skillsData.secondary.map((skill, index) => (
            <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-[rgb(var(--card))]">
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
          Worked With
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {skillsData.workedWith.map((skill, index) => (
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
