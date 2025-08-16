import { motion } from 'framer-motion'
import { MdLocationOn, MdWork, MdSchool, MdCode, MdDataUsage, MdApi, MdCloud, MdDesignServices } from 'react-icons/md'

export default function AboutSection() {
  const skills = [
    { name: 'Python', category: 'Backend', level: 'Expert' },
    { name: 'TypeScript', category: 'Frontend', level: 'Expert' },
    { name: 'React', category: 'Frontend', level: 'Expert' },
    { name: 'Node.js', category: 'Backend', level: 'Advanced' },
    { name: 'AWS', category: 'Cloud', level: 'Advanced' },
    { name: 'Docker', category: 'DevOps', level: 'Advanced' },
    { name: 'Kubernetes', category: 'DevOps', level: 'Intermediate' },
    { name: 'PostgreSQL', category: 'Database', level: 'Advanced' },
    { name: 'MongoDB', category: 'Database', level: 'Advanced' },
    { name: 'FastAPI', category: 'Backend', level: 'Expert' },
    { name: 'pandas', category: 'Data', level: 'Expert' },
    { name: 'Apache Spark', category: 'Data', level: 'Advanced' }
  ]

  const focusAreas = [
    { title: 'Data Engineering', description: 'Building scalable data pipelines and ETL processes', icon: MdDataUsage },
    { title: 'API Development', description: 'Creating robust and performant REST APIs', icon: MdApi },
    { title: 'Full-Stack Applications', description: 'End-to-end web application development', icon: MdCode },
    { title: 'System Design', description: 'Architecting scalable and maintainable systems', icon: MdDesignServices },
    { title: 'Performance Optimization', description: 'Optimizing applications for speed and efficiency', icon: MdCloud }
  ]

  const experience = [
    {
      year: '2022 - Present',
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      description: 'Leading development of scalable data pipelines and REST APIs. Mentoring junior developers and improving system performance.'
    },
    {
      year: '2020 - 2022',
      title: 'Software Engineer',
      company: 'StartupXYZ',
      description: 'Built full-stack web applications using React and Node.js. Implemented CI/CD pipelines and automated testing.'
    },
    {
      year: '2019 - 2020',
      title: 'Junior Developer',
      company: 'Digital Agency',
      description: 'Developed responsive websites and e-commerce solutions. Collaborated with design team on UX improvements.'
    }
  ]

  const education = [
    {
      year: '2018 - 2020',
      degree: 'Master of Computer Science',
      school: 'University of Technology',
      description: 'Specialized in software engineering and data structures. Graduated with honors and completed thesis on scalable architectures.'
    },
    {
      year: '2014 - 2018',
      degree: 'Bachelor of Computer Science',
      school: 'State University',
      description: 'Major in computer science with minor in mathematics. Active in programming competitions and hackathons.'
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
            About Me
          </h1>
          <p className="text-xl text-[rgb(var(--muted))] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            I'm a Senior Software Engineer passionate about building scalable data pipelines, reliable APIs, and polished user experiences. 
            With over 8 years of experience, I've worked across the full stack to deliver solutions that drive business impact.
          </p>
        </motion.div>

        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6 text-center">
            <MdLocationOn className="text-3xl text-[rgb(var(--accent))] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[rgb(var(--fg))] mb-2">Location</h3>
            <p className="text-[rgb(var(--muted))]">San Francisco, CA</p>
          </div>
          <div className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6 text-center">
            <MdWork className="text-3xl text-[rgb(var(--accent))] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[rgb(var(--fg))] mb-2">Experience</h3>
            <p className="text-[rgb(var(--muted))]">8+ years</p>
          </div>
          <div className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6 text-center">
            <MdSchool className="text-3xl text-[rgb(var(--accent))] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[rgb(var(--fg))] mb-2">Education</h3>
            <p className="text-[rgb(var(--muted))]">Master's Degree</p>
          </div>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8 text-center" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6 hover:border-[rgb(var(--accent))] transition-colors"
              >
                <div className="w-12 h-12 bg-[rgb(var(--accent))] rounded-lg flex items-center justify-center text-white mb-4">
                  <area.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mb-3">{area.title}</h3>
                <p className="text-[rgb(var(--muted))] leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8 text-center" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Technical Skills
          </h2>
          <div className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-[rgb(var(--hover))] rounded-lg">
                  <div>
                    <span className="font-medium text-[rgb(var(--fg))]">{skill.name}</span>
                    <span className="text-sm text-[rgb(var(--muted))] ml-2">({skill.category})</span>
                  </div>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    skill.level === 'Expert' ? 'bg-green-100 text-green-800' :
                    skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8 text-center" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[rgb(var(--fg))]">{exp.title}</h3>
                    <p className="text-[rgb(var(--accent))] font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-[rgb(var(--muted))] bg-[rgb(var(--hover))] px-3 py-1 rounded-full">
                    {exp.year}
                  </span>
                </div>
                <p className="text-[rgb(var(--muted))] leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8 text-center" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[rgb(var(--fg))]">{edu.degree}</h3>
                    <p className="text-[rgb(var(--accent))] font-medium">{edu.school}</p>
                  </div>
                  <span className="text-sm text-[rgb(var(--muted))] bg-[rgb(var(--hover))] px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <p className="text-[rgb(var(--muted))] leading-relaxed">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
