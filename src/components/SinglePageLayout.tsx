import { motion } from 'framer-motion'
import { useLayout } from './Layout'
import { ThemeToggle } from './Theme'
import { MdViewList } from 'react-icons/md'
import SinglePage from '../pages/single-page'

function FloatingControls() {
  const { setIsSinglePageMode } = useLayout()

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-4">
      <div className="bg-[rgb(var(--accent))] text-black px-4 py-2 rounded-full shadow-lg border-2 border-[rgb(var(--accent))] hover:border-black transition-all duration-300 hover:scale-105">
        <button
          onClick={() => setIsSinglePageMode(false)}
          className="flex items-center gap-2 font-semibold text-sm"
        >
          <MdViewList className="text-lg" />
          Multi-Page
        </button>
      </div>
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
