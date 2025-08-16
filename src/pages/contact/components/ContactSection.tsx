import { motion } from 'framer-motion'
import { useState } from 'react'
import { MdEmail, MdLocationOn, MdPhone, MdAccessTime, MdSend, MdCheckCircle } from 'react-icons/md'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MdEmail,
      title: 'Email',
      value: 'sampath@example.com',
      link: 'mailto:sampath@example.com',
      description: 'Send me an email anytime'
    },
    {
      icon: MdLocationOn,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null,
      description: 'Available for remote and local opportunities'
    },
    {
      icon: MdPhone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Call me during business hours'
    },
    {
      icon: MdAccessTime,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null,
      description: 'I typically respond quickly'
    }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/sampath',
      color: 'hover:text-blue-600'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/sampath',
      color: 'hover:text-gray-800'
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/sampath',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[rgb(var(--fg))] mb-6" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Get In Touch
          </h1>
          <p className="text-xl text-[rgb(var(--muted))] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            I'm always interested in hearing about new opportunities, interesting projects, 
            or just connecting with fellow developers and designers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              Let's Work Together
            </h2>
            <p className="text-[rgb(var(--muted))] mb-8 leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
              Whether you have a question about my work, want to collaborate on something, 
              or just want to say hello, feel free to reach out.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-[rgb(var(--accent))] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <info.icon className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[rgb(var(--fg))] mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[rgb(var(--accent))] hover:underline font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[rgb(var(--fg))] font-medium">{info.value}</p>
                    )}
                    <p className="text-sm text-[rgb(var(--muted))] mt-1">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className={`w-12 h-12 bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-lg flex items-center justify-center text-[rgb(var(--fg))] hover:border-[rgb(var(--accent))] transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Current Status */}
            <div className="mt-8 p-6 bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl">
              <h3 className="text-lg font-semibold text-[rgb(var(--fg))] mb-3">Current Status</h3>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-[rgb(var(--fg))] font-medium">Available for new opportunities</span>
              </div>
              <p className="text-sm text-[rgb(var(--muted))]">
                Open to full-time roles, contract work, and interesting side projects.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              Send a Message
            </h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
              >
                <MdCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[rgb(var(--fg))] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-lg focus:border-[rgb(var(--accent))] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[rgb(var(--fg))] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-lg focus:border-[rgb(var(--accent))] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[rgb(var(--fg))] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-lg focus:border-[rgb(var(--accent))] focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[rgb(var(--fg))] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full p-4 bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-lg focus:border-[rgb(var(--accent))] focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[rgb(var(--accent))] text-[rgb(var(--bg))] py-4 px-6 rounded-lg font-semibold hover:bg-[rgb(var(--accent))]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[rgb(var(--bg))] border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <MdSend className="text-lg" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
