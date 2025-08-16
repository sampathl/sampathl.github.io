import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import HeaderSection from './components/HeaderSection'
import PortfolioSection from './components/PortfolioSection'
import SkillsSection from './components/SkillsSection'
import { CORE_PROFILE_DATA } from '../../lib/consolidatedData'

export default function SinglePage() {
  const [highlightedSkills, setHighlightedSkills] = useState<string[]>([])
  const [showSkillMapping, setShowSkillMapping] = useState(false)

  const handleShowMe = () => {
    if (showSkillMapping) {
      // Turn off skill mapping
      setHighlightedSkills([])
      setShowSkillMapping(false)
    } else {
      // Turn on skill mapping
      const allSkills = [
        // Primary skills
        'TypeScript', 'React', 'Python', 'pandas', 'FastAPI',
        // Secondary skills  
        'Microservices', 'Data Pipelines', 'AWS', 'GCP', 'Node.js',
        // Worked with skills
        'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis',
        'GraphQL', 'REST APIs', 'CI/CD', 'Terraform', 'Airflow',
        'Jupyter', 'Scikit-learn', 'Tailwind CSS', 'Material-UI',
        // Education skills
        'Matlab'
      ]
      
      setHighlightedSkills(allSkills)
      setShowSkillMapping(true)
    }
  }

  return (
    <div style={{ fontFamily: '"Work Sans", "Inter", sans-serif' }}>
      <Helmet>
        <title>Sampath Lakkaraju — Portfolio</title>
        <meta name="description" content={CORE_PROFILE_DATA.metaDescription} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]"
      >
        <HeaderSection />
        
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto px-6 py-12 gap-8">
          <div className="lg:w-4/5">
            <PortfolioSection 
              highlightedSkills={highlightedSkills}
              showSkillMapping={showSkillMapping}
            />
          </div>
          <div className="lg:w-1/5">
            <SkillsSection onShowMe={handleShowMe} isActive={showSkillMapping} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
