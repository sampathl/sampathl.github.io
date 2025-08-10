import { Helmet } from 'react-helmet-async'
import ExpandableExperience from '../components/ExpandableExperience'
import ScrollScrubVideo from '../components/ScrollScrubVideo'
import { useLayout } from '../components/Layout'
import { cn } from '../lib/cn'
import MaterialIcon from '../components/MaterialIcon'
import { SCROLL_OFFSET } from '../lib/constants'

// Scroll to section function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const elementTop = rect.top + scrollTop
    
    window.scrollTo({
      top: elementTop - SCROLL_OFFSET, // Offset for better positioning
      behavior: 'smooth'
    })
  }
}

export default function Home() {
  const { isCollapsed } = useLayout()
  
  return (
    <div style={{ fontFamily: '"Work Sans", "Inter", sans-serif' }}>
      <Helmet>
        <title>Sampath Lakkaraju — Senior Software Engineer</title>
        <meta name="description" content="Data pipelines, reliable APIs, and clean UIs." />
      </Helmet>

      {/* Hero Section */}
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
                <MaterialIcon name="folder" className="text-lg" />
                See Projects
              </button>
              <a 
                href="/cv/Sampath_Lakkaraju_CV.pdf" 
                className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-white/30"
                style={{ fontFamily: '"Work Sans", sans-serif' }}
              >
                <MaterialIcon name="download" className="text-lg" />
                Download CV
              </a>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white font-medium hover:bg-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-white/30"
                style={{ fontFamily: '"Work Sans", sans-serif' }}
              >
                <MaterialIcon name="email" className="text-lg" />
                Contact Me
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
              <MaterialIcon name="code" className="text-lg" />
            </div>
            <div className="tech-icon w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <MaterialIcon name="data_usage" className="text-lg" />
            </div>
            <div className="tech-icon w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <MaterialIcon name="api" className="text-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 min-h-screen">
        <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
          Impact & Experience
        </h2>
        <div className={cn(
          "content-pane",
          isCollapsed ? "data-sidebar-collapsed" : ""
        )} data-sidebar-collapsed={isCollapsed.toString()}>
          <ExpandableExperience experiences={[
            {
              id: "1",
              title: "Model retraining 90% faster",
              metric: "PySpark tuning & query refactors",
              blurb: "Cut retraining query time with optimized SQL and configuration; improved iteration speed for DS teams.",
              category: "Data Engineering",
              icon: "data_usage"
            },
            {
              id: "2",
              title: "Support ops cost ↓ ~24%",
              metric: "AWS Connect phone infra revamp",
              blurb: "Rationalized IVR flows and observability; reduced vendor usage and idle time.",
              category: "Infrastructure",
              icon: "phone"
            },
            {
              id: "3",
              title: "Data pipeline latency ↓ 70%",
              metric: "Kafka to S3 streaming optimization",
              blurb: "Implemented efficient data serialization and batching for real-time analytics.",
              category: "Data Engineering",
              icon: "stream"
            },
            {
              id: "4",
              title: "API response time ↓ 50%",
              metric: "FastAPI & async processing",
              blurb: "Optimized backend endpoints with asynchronous operations and caching strategies.",
              category: "Performance",
              icon: "api"
            },
            {
              id: "5",
              title: "User engagement ↑ 15%",
              metric: "Redesigned UI/UX for internal tools",
              blurb: "Improved usability and visual appeal of internal dashboards and reporting tools.",
              category: "User Experience",
              icon: "design_services"
            },
            {
              id: "6",
              title: "Infrastructure cost ↓ 10%",
              metric: "Serverless architecture adoption",
              blurb: "Migrated monolithic services to AWS Lambda, reducing operational overhead.",
              category: "Infrastructure",
              icon: "cloud"
            }
          ]} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 min-h-screen">
        <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
          Featured Projects
        </h2>
        <div className={cn(
          "content-pane",
          isCollapsed ? "data-sidebar-collapsed" : ""
        )} data-sidebar-collapsed={isCollapsed.toString()}>
          <ScrollScrubVideo />
        </div>
        <div className="mt-8">
          <p className="text-[rgb(var(--muted))] mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
            Explore my latest work in data engineering, API development, and full-stack applications.
          </p>
          <button 
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 text-[rgb(var(--accent))] font-medium hover:underline hover:scale-105 transition-all duration-300"
            style={{ fontFamily: '"Work Sans", sans-serif' }}
          >
            <MaterialIcon name="arrow_forward" className="text-lg" />
            View All Projects →
          </button>
        </div>
      </section>

      {/* Writing Section - Hidden for now */}
      {/* 
      <section id="writing" className="py-16 min-h-screen">
        <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
          Latest Writing
        </h2>
        <div className={cn(
          "space-y-6 content-pane",
          isCollapsed ? "data-sidebar-collapsed" : ""
        )} data-sidebar-collapsed={isCollapsed.toString()}>
          Article content here...
        </div>
        
        <div className="mt-8">
          <button 
            onClick={() => scrollToSection('writing')}
            className="inline-flex items-center gap-2 text-[rgb(var(--accent))] font-medium hover:underline hover:scale-105 transition-all duration-300"
            style={{ fontFamily: '"Work Sans", sans-serif' }}
          >
            <MaterialIcon name="library_books" className="text-lg" />
            Explore All Articles →
          </button>
        </div>
      </section>
      */}

      {/* About Section */}
      <section id="about" className="py-16 min-h-screen">
        <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
          About Me
        </h2>
        <div className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 content-pane",
          isCollapsed ? "data-sidebar-collapsed" : ""
        )} data-sidebar-collapsed={isCollapsed.toString()}>
          <div>
            <h3 className="text-2xl font-semibold text-[rgb(var(--fg))] mb-4" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              Senior Software Engineer
            </h3>
            <p className="text-[rgb(var(--muted))] mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              I specialize in building scalable data pipelines, reliable APIs, and polished user experiences. 
              With over 8 years of experience in software engineering, I've worked across the full stack 
              to deliver solutions that drive business impact.
            </p>
            <p className="text-[rgb(var(--muted))] mb-6 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              My expertise includes Python, TypeScript, React, AWS, and modern data technologies. 
              I'm passionate about clean code, system design, and creating tools that developers love to use.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MaterialIcon name="location_on" className="text-[rgb(var(--accent))]" />
                <span className="text-[rgb(var(--fg))]" style={{ fontFamily: '"Inter", sans-serif' }}>San Francisco Bay Area</span>
              </div>
              <div className="flex items-center gap-3">
                <MaterialIcon name="work" className="text-[rgb(var(--accent))]" />
                <span className="text-[rgb(var(--fg))]" style={{ fontFamily: '"Inter", sans-serif' }}>Available for new opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <MaterialIcon name="school" className="text-[rgb(var(--accent))]" />
                <span className="text-[rgb(var(--fg))]" style={{ fontFamily: '"Inter", sans-serif' }}>B.S. Computer Science, UC Berkeley</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                Core Skills
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {['Python', 'TypeScript', 'React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL'].map((skill) => (
                  <div key={skill} className="p-3 rounded-lg bg-[rgb(var(--hover))] text-center text-[rgb(var(--fg))] font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                Focus Areas
              </h4>
              <div className="space-y-2">
                {['Data Engineering', 'API Development', 'Full-Stack Applications', 'System Design', 'Performance Optimization'].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[rgb(var(--accent))] rounded-full"></div>
                    <span className="text-[rgb(var(--muted))]" style={{ fontFamily: '"Inter", sans-serif' }}>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
    </div>
  )
}
