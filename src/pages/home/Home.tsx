import { Helmet } from 'react-helmet-async'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import { getPageMetadata } from '../../lib/textConstants'

export default function Home() {
  return (
    <div style={{ fontFamily: '"Work Sans", "Inter", sans-serif' }}>
      <Helmet>
        <title>{getPageMetadata('title')}</title>
        <meta name="description" content={getPageMetadata('metaDescription')} />
      </Helmet>

      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
