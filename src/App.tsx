import { Routes, Route } from 'react-router-dom'
import { Layout, useLayout } from './components/layout/Layout'
import SinglePageLayout from './components/layout/SinglePageLayout'
import Home from './pages/home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Writing from './pages/Writing'
import About from './pages/About'
import Contact from './pages/Contact'
import SinglePage from './pages/single-page'

function AppContent() {
  const { isSinglePageMode } = useLayout()

  if (isSinglePageMode) {
    return <SinglePageLayout />
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<Project />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default function App() {
  return (
    <Layout>
      <AppContent />
    </Layout>
  )
}
