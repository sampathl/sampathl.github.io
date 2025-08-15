import { useLayout } from './Layout'
import { cn } from '../lib/cn'
import MaterialIcon from './MaterialIcon'

export default function ContactSection() {
  const { isCollapsed } = useLayout()
  
  return (
    <section id="contact" className="py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
        Get In Touch
      </h2>
      <div className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-12 content-pane",
        isCollapsed ? "data-sidebar-collapsed" : ""
      )} data-sidebar-collapsed={isCollapsed.toString()}>
        <div>
          <h3 className="text-2xl font-semibold text-[rgb(var(--fg))] mb-4" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Let's Work Together
          </h3>
          <p className="text-[rgb(var(--muted))] mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            I'm always interested in hearing about new opportunities, interesting projects, 
            or just connecting with fellow developers and designers.
          </p>
          <p className="text-[rgb(var(--muted))] mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            Whether you have a question about my work, want to collaborate on something, 
            or just want to say hello, feel free to reach out.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-[rgb(var(--hover))]">
              <MaterialIcon name="email" className="text-[rgb(var(--accent))] text-xl" />
              <div>
                <div className="font-medium text-[rgb(var(--fg))]" style={{ fontFamily: '"Work Sans", sans-serif' }}>Email</div>
                <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>sampath@example.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-[rgb(var(--hover))]">
              <MaterialIcon name="linkedin" className="text-[rgb(var(--accent))] text-xl" />
              <div>
                <div className="font-medium text-[rgb(var(--fg))]" style={{ fontFamily: '"Work Sans", sans-serif' }}>LinkedIn</div>
                <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>linkedin.com/in/sampath</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-[rgb(var(--hover))]">
              <MaterialIcon name="github" className="text-[rgb(var(--accent))] text-xl" />
              <div>
                <div className="font-medium text-[rgb(var(--fg))]" style={{ fontFamily: '"Work Sans", sans-serif' }}>GitHub</div>
                <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>github.com/sampath</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))]">
            <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              Current Status
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-[rgb(var(--fg))]" style={{ fontFamily: '"Inter", sans-serif' }}>Available for new opportunities</span>
              </div>
              <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>
                Open to full-time roles, contract work, and interesting side projects.
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-xl bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))]">
            <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              Response Time
            </h4>
            <div className="text-sm text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>
              I typically respond to messages within 24 hours during weekdays. 
              For urgent matters, feel free to reach out on LinkedIn.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
