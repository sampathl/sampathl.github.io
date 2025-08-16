import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { getHeaderText } from '../../../lib/textConstants'

export default function HeaderSection() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-16 pb-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            {getHeaderText('title')}
          </h1>
          <p className="text-xl text-[rgb(var(--muted))]">
             {getHeaderText('role')}
          </p>
          <p className="text-lg text-[rgb(var(--muted))] max-w-2xl mx-auto">
            {getHeaderText('description')}
          </p>
          
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href={`mailto:${getHeaderText('email')}`}
              className="flex items-center gap-2 hover:text-[rgb(var(--accent))] transition-colors"
            >
              <MdEmail className="text-lg" />
              {getHeaderText('email')}
            </a>
            <a
              href={`https://${getHeaderText('linkedinUrl')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[rgb(var(--accent))] transition-colors"
            >
              <FaLinkedin className="text-lg" />
              {getHeaderText('linkedinUrl')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
