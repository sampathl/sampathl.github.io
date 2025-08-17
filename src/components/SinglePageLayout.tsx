import { motion } from 'framer-motion'
import { ThemeToggle } from './Theme'
import SinglePage from '../pages/single-page'

function FloatingControls() {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
      <ThemeToggle />
    </div>
  )
}

// Main Layout Component
export default function SinglePageLayout() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]"
    >
      <FloatingControls />
      <SinglePage />
    </motion.div>
  )
}
