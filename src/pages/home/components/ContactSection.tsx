import { useLayout } from '../../../components/layout/Layout'
import { cn } from '../../../lib/cn'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { getContactText } from '../../../lib/textConstants'

export default function ContactSection() {
  const { isCollapsed } = useLayout()
  
  return (
    <section id="contact" className="py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
        {getContactText('title')}
      </h2>
      <div className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-12 content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        <div>
          <h3 className="text-2xl font-semibold text-[rgb(var(--fg))] mb-4" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            {getContactText('subtitle')}
          </h3>
          <p className="text-[rgb(var(--muted))] mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            {getContactText('description1')}
          </p>
          <p className="text-[rgb(var(--muted))] mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            {getContactText('description2')}
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-[rgb(var(--hover))]">
              <MdEmail className="text-[rgb(var(--accent))] text-xl" />
              <div>
                <div className="font-medium text-[rgb(var(--fg))]" style={{ fontFamily: '"Work Sans", sans-serif' }}>{getContactText('email')}</div>
                <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>{getContactText('emailAddress')}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-[rgb(var(--hover))]">
              <FaLinkedin className="text-[rgb(var(--accent))] text-xl" />
              <div>
                <div className="font-medium text-[rgb(var(--fg))]" style={{ fontFamily: '"Work Sans", sans-serif' }}>{getContactText('linkedin')}</div>
                <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>{getContactText('linkedinUrl')}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-[rgb(var(--hover))]">
              <FaGithub className="text-[rgb(var(--accent))] text-xl" />
              <div>
                <div className="font-medium text-[rgb(var(--fg))]" style={{ fontFamily: '"Work Sans", sans-serif' }}>{getContactText('github')}</div>
                <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>{getContactText('githubUrl')}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))]">
            <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              {getContactText('currentStatusTitle')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-[rgb(var(--fg))]" style={{ fontFamily: '"Inter", sans-serif' }}>{getContactText('availableStatus')}</span>
              </div>
              <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>
                {getContactText('statusDescription')}
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))]">
            <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              {getContactText('responseTimeTitle')}
            </h4>
            <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>
              {getContactText('responseTimeDescription')}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
