import { Helmet } from 'react-helmet-async'
import ProjectsSection from './components/ProjectsSection'

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects - Sampath Portfolio</title>
        <meta name="description" content="View my projects and work in data engineering, API development, and full-stack applications" />
      </Helmet>
      <ProjectsSection />
    </>
  )
}
