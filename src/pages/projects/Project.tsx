import { Helmet } from 'react-helmet-async'
import ProjectDetail from './components/ProjectDetail'

export default function Project() {
  return (
    <>
      <Helmet>
        <title>Project Details - Sampath Portfolio</title>
        <meta name="description" content="Detailed view of a specific project" />
      </Helmet>
      <ProjectDetail />
    </>
  )
}
