import React from 'react'
import { motion } from 'framer-motion'
import { MdLocationOn, MdWork, MdSchool, MdCode, MdDataUsage, MdTrendingUp } from 'react-icons/md'
import { getMultiPageAboutEducationData } from '../../../lib/dataFormatters'
import { CORE_ABOUT_SECTION } from '../../../lib/consolidatedData'
import type { EducationItem } from '../../../lib/consolidatedData'

export default function AboutSection() {
  // Helper function to get icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'data_usage': return MdDataUsage
      case 'code': return MdCode
      case 'trending_up': return MdTrendingUp
      default: return MdDataUsage
    }
  }

  // Get education data from consolidated source
  const { education } = getMultiPageAboutEducationData()

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
            {CORE_ABOUT_SECTION.pageTitle}
          </h1>
          <p className="text-xl text-[rgb(var(--muted))] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            {CORE_ABOUT_SECTION.pageDescription}
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
            <p className="text-[rgb(var(--muted))]">{CORE_ABOUT_SECTION.personalInfo.location}</p>
          </div>
          <div className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6 text-center">
            <MdWork className="text-3xl text-[rgb(var(--accent))] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[rgb(var(--fg))] mb-2">Experience</h3>
            <p className="text-[rgb(var(--muted))]">{CORE_ABOUT_SECTION.personalInfo.experience}</p>
          </div>
          <div className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6 text-center">
            <MdSchool className="text-3xl text-[rgb(var(--accent))] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[rgb(var(--fg))] mb-2">Education</h3>
            <p className="text-[rgb(var(--muted))]">{CORE_ABOUT_SECTION.personalInfo.education}</p>
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
            {CORE_ABOUT_SECTION.detailedFocusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6 hover:border-[rgb(var(--accent))] transition-colors"
              >
                <div className="w-12 h-12 bg-[rgb(var(--accent))] rounded-lg flex items-center justify-center text-white mb-4">
                  {React.createElement(getIconComponent(area.icon), { className: "text-2xl" })}
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8 text-center" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Core Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CORE_ABOUT_SECTION.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-lg p-4 text-center hover:border-[rgb(var(--accent))] transition-colors"
              >
                <span className="text-[rgb(var(--fg))] font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8 text-center" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Experience
          </h2>
          <div className="space-y-6">
            {CORE_ABOUT_SECTION.aboutExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6 hover:border-[rgb(var(--accent))] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mb-2">{exp.title}</h3>
                    <p className="text-[rgb(var(--accent))] font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-[rgb(var(--muted))] bg-[rgb(var(--accent))] px-3 py-1 rounded-full">
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8 text-center" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu: EducationItem, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6 hover:border-[rgb(var(--accent))] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[rgb(var(--fg))] mb-2">{edu.title}</h3>
                    <p className="text-[rgb(var(--accent))] font-medium">{edu.organization}</p>
                  </div>
                  <span className="text-sm text-[rgb(var(--muted))] bg-[rgb(var(--accent))] px-3 py-1 rounded-full">
                    {edu.dates}
                  </span>
                </div>
                <p className="text-[rgb(var(--muted))] leading-relaxed mb-4">{edu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill: string, skillIndex: number) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-[rgb(var(--accent))] text-[rgb(var(--bg))] rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

