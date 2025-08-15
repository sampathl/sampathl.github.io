import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function HeaderSection() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-16 pb-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Sampath Lakkaraju
          </h1>
          <p className="text-xl text-[rgb(var(--muted))]">
             Software Engineer
          </p>
          <p className="text-lg text-[rgb(var(--muted))] max-w-2xl mx-auto">
            Data pipelines, APIs, and polished UX
          </p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:sampath@example.com"
              className="flex items-center gap-2 hover:text-[rgb(var(--accent))] transition-colors"
            >
              <MdEmail className="text-lg" />
              sampath@example.com
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[rgb(var(--accent))] transition-colors"
            >
              <FaLinkedin className="text-lg" />
              linkedin.com/in/yourprofile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
