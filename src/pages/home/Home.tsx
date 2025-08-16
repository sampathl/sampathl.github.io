import { Helmet } from 'react-helmet-async'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import { CORE_PROFILE_DATA } from '../../lib/consolidatedData'

export default function Home() {
  return (
    <div style={{ fontFamily: '"Work Sans", "Inter", sans-serif' }}>
      <Helmet>
        <title>{`${CORE_PROFILE_DATA.name} — ${CORE_PROFILE_DATA.role}`}</title>
        <meta name="description" content={CORE_PROFILE_DATA.metaDescription} />
      </Helmet>

      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
