import { useLayout } from '../../../components/Layout'
import { cn } from '../../../lib/cn'
import { motion } from 'framer-motion'
import { CORE_PROFILE_DATA } from '../../../lib/consolidatedData'

export default function HeroSection() {
  const { isCollapsed } = useLayout()
  
  return (
    <section id="hero" className="pt-8 pb-16 flex flex-col justify-center">
      {/* Hero Pane with Images and Overlay */}
      <div className={cn(
        "hero-pane relative h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-[rgb(var(--surface))] to-[rgb(var(--hover))] border border-[rgb(var(--secondary))] shadow-2xl content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        {/* Light Theme Image */}
        <div className="absolute inset-0 transition-opacity duration-500" data-theme="light">
          <img 
            src="/images/hero-placeholder.svg" 
            alt={`${CORE_PROFILE_DATA.name} - Light Theme`}
            className="w-full h-full object-cover opacity-100"
          />
        </div>
        
        {/* Dark Theme Image */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0" data-theme="dark">
          <img 
            src="/images/hero-placeholder.svg" 
            alt={`${CORE_PROFILE_DATA.name} - Dark Theme`}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/40"></div>
        
        {/* Content Overlay - Right Side */}
        <div className="absolute right-8 bottom-8 text-right max-w-md">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            {CORE_PROFILE_DATA.name}
          </h1>
          <div className="text-xl lg:text-2xl text-white/90 mb-8 drop-shadow-lg" style={{ fontFamily: '"Inter", sans-serif' }}>
                    <div>{CORE_PROFILE_DATA.role}</div>
        <div>{CORE_PROFILE_DATA.shortDescription}</div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-6 left-6 w-16 h-16 bg-[rgb(var(--accent))]/80 rounded-full flex items-center justify-center text-white font-bold text-xl backdrop-blur-sm">
          {CORE_PROFILE_DATA.initials}
        </div>
      </div>
    </section>
  )
}
