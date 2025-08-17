import { Routes, Route } from 'react-router-dom'
import { Layout, useLayout } from './components/Layout'
import SinglePageLayout from './components/SinglePageLayout'
import Home from './pages/home'
import Projects from './pages/projects'
import Writing from './pages/writing'
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
      <Route path="/writing" element={<Writing />} />


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
