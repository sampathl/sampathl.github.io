import { Helmet } from 'react-helmet-async'
import WritingSection from './components/WritingSection'

export default function Writing() {
  return (
    <>
      <Helmet>
        <title>Writing - Sampath Portfolio</title>
        <meta name="description" content="Articles and writing samples on software engineering, data architecture, and technology trends" />
      </Helmet>
      <WritingSection />
    </>
  )
}
