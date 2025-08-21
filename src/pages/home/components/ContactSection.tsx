import { useLayout } from '../../../components/Layout'
import { cn } from '../../../lib/cn'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { CORE_PROFILE_DATA, UI_STRINGS } from '../../../lib/consolidatedData'

export default function ContactSection() {
  const { isCollapsed } = useLayout()
  
  return (
    <section id="contact" className="py-12">
              <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
          {UI_STRINGS.contactSection.ui.title}
        </h2>
      <div className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-12 content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        <div>

          <p className="text-[rgb(var(--muted))] mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            {UI_STRINGS.contactSection.ui.description1}
          </p>
          <p className="text-[rgb(var(--muted))] mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            {UI_STRINGS.contactSection.ui.description2}
          </p>
          <div className="space-y-4">
            <a 
              href={`mailto:${CORE_PROFILE_DATA.contact.email}`}
              className="flex items-center gap-3 p-4 rounded-lg bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] hover:bg-[rgb(var(--hover))] hover:border-[rgb(var(--accent))] hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <MdEmail className="text-[rgb(var(--accent))] text-xl group-hover:scale-110 transition-transform duration-200" />
              <div>
                <div className="font-medium text-[rgb(var(--fg))]" style={{ fontFamily: '"Work Sans", sans-serif' }}>{UI_STRINGS.contactSection.labels.email}</div>
                <div className="text-sm text-[rgb(var(--muted))] group-hover:text-[rgb(var(--accent))] transition-colors duration-200" style={{ fontFamily: '"Inter", sans-serif' }}>{CORE_PROFILE_DATA.contact.email}</div>
              </div>
            </a>
            <a 
              href={CORE_PROFILE_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] hover:bg-[rgb(var(--hover))] hover:border-[rgb(var(--accent))] hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <FaLinkedin className="text-[rgb(var(--accent))] text-xl group-hover:scale-110 transition-transform duration-200" />
              <div>
                <div className="font-medium text-[rgb(var(--fg))]" style={{ fontFamily: '"Work Sans", sans-serif' }}>{UI_STRINGS.contactSection.labels.linkedin}</div>
                <div className="text-sm text-[rgb(var(--muted))] group-hover:text-[rgb(var(--accent))] transition-colors duration-200" style={{ fontFamily: '"Inter", sans-serif' }}>{CORE_PROFILE_DATA.contact.linkedin}</div>
              </div>
            </a>
            <a 
              href={CORE_PROFILE_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] hover:bg-[rgb(var(--hover))] hover:border-[rgb(var(--accent))] hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <FaGithub className="text-[rgb(var(--accent))] text-xl group-hover:scale-110 transition-transform duration-200" />
              <div>
                <div className="font-medium text-[rgb(var(--fg))]" style={{ fontFamily: '"Work Sans", sans-serif' }}>{UI_STRINGS.contactSection.labels.github}</div>
                <div className="text-sm text-[rgb(var(--muted))] group-hover:text-[rgb(var(--accent))] transition-colors duration-200" style={{ fontFamily: '"Inter", sans-serif' }}>{CORE_PROFILE_DATA.contact.github}</div>
              </div>
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))]">
                          <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                {UI_STRINGS.contactSection.labels.currentStatus}
              </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-[rgb(var(--fg))]" style={{ fontFamily: '"Inter", sans-serif' }}>{UI_STRINGS.contactSection.status.availableStatus}</span>
              </div>
                              <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>
                  {UI_STRINGS.contactSection.status.statusDescription}
                </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))]">
                          <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                {UI_STRINGS.contactSection.labels.responseTime}
              </h4>
              <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>
                {UI_STRINGS.contactSection.status.responseTimeDescription}
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
