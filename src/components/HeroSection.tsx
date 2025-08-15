import { useLayout } from './Layout'
import { cn } from '../lib/cn'
import { motion } from 'framer-motion'
import { 
  MdFolder, 
  MdDownload, 
  MdEmail, 
  MdCode, 
  MdDataUsage, 
  MdApi 
} from 'react-icons/md'

// Scroll to section function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const elementTop = rect.top + scrollTop
    
    window.scrollTo({
      top: elementTop - 80, // Offset for better positioning
      behavior: 'smooth'
    })
  }
}

export default function HeroSection() {
  const { isCollapsed } = useLayout()
  
  return (
    <section id="hero" className="pt-8 pb-32 min-h-screen flex flex-col justify-center">
      {/* Hero Pane with Images and Overlay */}
      <div className={cn(
        "hero-pane relative h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-[rgb(var(--surface))] to-[rgb(var(--hover))] border border-[rgb(var(--secondary))] shadow-2xl content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        {/* Light Theme Image */}
        <div className="absolute inset-0 transition-opacity duration-500" data-theme="light">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=face&auto=format" 
            alt="Sampath Lakkaraju - Light Theme" 
            className="w-full h-full object-cover opacity-100"
          />
        </div>
        
        {/* Dark Theme Image */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0" data-theme="dark">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=600&fit=crop&crop=face&auto=format" 
            alt="Sampath Lakkaraju - Dark Theme" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/40"></div>
        
        {/* Content Overlay - Right Side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right max-w-md">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Sampath Lakkaraju
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 drop-shadow-lg" style={{ fontFamily: '"Inter", sans-serif' }}>
            Senior Software Engineer—data pipelines, APIs, and polished UX.
          </p>
          <div className="flex gap-4 flex-wrap justify-end">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-white/30"
              style={{ fontFamily: '"Work Sans", sans-serif' }}
            >
              <div className="flex items-center gap-2 text-[rgb(var(--muted))]">
                <MdFolder className="text-lg" />
                <span>View Projects</span>
              </div>
            </button>
            <a 
              href="/cv/Sampath_Lakkaraju_CV.pdf" 
              className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-white/30"
              style={{ fontFamily: '"Work Sans", sans-serif' }}
            >
              <div className="flex items-center gap-2 text-[rgb(var(--muted))]">
                <MdDownload className="text-lg" />
                <span>Download CV</span>
              </div>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-white/30"
              style={{ fontFamily: '"Work Sans", sans-serif' }}
            >
              <div className="flex items-center gap-2 text-[rgb(var(--muted))]">
                <MdEmail className="text-lg" />
                <span>Get in Touch</span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-6 left-6 w-16 h-16 bg-[rgb(var(--accent))]/80 rounded-full flex items-center justify-center text-white font-bold text-xl backdrop-blur-sm">
          SL
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute bottom-6 left-6 flex gap-3">
          <div className="tech-icon w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
            <MdCode className="text-lg" />
          </div>
          <div className="tech-icon w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
            <MdDataUsage className="text-lg" />
          </div>
          <div className="tech-icon w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
            <MdApi className="text-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
