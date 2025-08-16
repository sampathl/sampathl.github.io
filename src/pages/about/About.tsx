import { Helmet } from 'react-helmet-async'
import AboutSection from './components/AboutSection'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - Sampath Portfolio</title>
        <meta name="description" content="Learn more about Sampath Lakkaraju - Senior Software Engineer specializing in data engineering, API development, and full-stack applications" />
      </Helmet>
      <AboutSection />
    </>
  )
}
