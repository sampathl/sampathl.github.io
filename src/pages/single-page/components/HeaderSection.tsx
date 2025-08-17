import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { CORE_PROFILE_DATA } from '../../../lib/consolidatedData'

export default function HeaderSection() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-16 pb-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            {CORE_PROFILE_DATA.name}
          </h1>
          <p className="text-xl text-[rgb(var(--muted))]">
             {CORE_PROFILE_DATA.role}
          </p>
          <p className="text-lg text-[rgb(var(--muted))] max-w-2xl mx-auto">
            {CORE_PROFILE_DATA.shortDescription}
          </p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={`mailto:${CORE_PROFILE_DATA.contact.email}`}
              className="flex items-center gap-2 hover:text-[rgb(var(--accent))] transition-colors"
            >
              <MdEmail className="text-lg" />
              {CORE_PROFILE_DATA.contact.email}
            </a>
            <a
              href={CORE_PROFILE_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[rgb(var(--accent))] transition-colors"
            >
              <FaLinkedin className="text-lg" />
              {CORE_PROFILE_DATA.contact.linkedin}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
