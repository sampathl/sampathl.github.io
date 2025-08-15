import { Helmet } from 'react-helmet-async'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <div style={{ fontFamily: '"Work Sans", "Inter", sans-serif' }}>
      <Helmet>
        <title>Sampath Lakkaraju — Senior Software Engineer</title>
        <meta name="description" content="Data pipelines, reliable APIs, and clean UIs." />
      </Helmet>

      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
