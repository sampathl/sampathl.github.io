import { motion } from 'framer-motion'
import { MdArticle, MdCode, MdDataUsage, MdTrendingUp, MdAccessTime, MdReadMore } from 'react-icons/md'
import { useState } from 'react'
import { CORE_SECTION_TITLES } from '../../../lib/consolidatedData'

export default function WritingSection() {
  const articles = [
    {
      id: '1',
      title: 'Building Scalable Data Pipelines with Apache Kafka',
      excerpt: 'A comprehensive guide to designing and implementing robust data pipelines using Apache Kafka, Apache Spark, and modern cloud infrastructure. Learn best practices for handling millions of records daily while maintaining data quality and system reliability.',
      category: 'Data Engineering',
      readTime: '8 min read',
      publishDate: '2024-01-15',
      tags: ['Apache Kafka', 'Data Pipelines', 'Apache Spark', 'AWS'],
      icon: 'MdDataUsage',
      featured: true
    },
    {
      id: '2',
      title: 'Designing REST APIs for Performance and Scalability',
      excerpt: 'Explore advanced techniques for building high-performance REST APIs that can handle thousands of concurrent requests. Covering caching strategies, database optimization, rate limiting, and monitoring best practices.',
      category: 'API Development',
      readTime: '12 min read',
      publishDate: '2024-01-10',
      tags: ['REST API', 'Performance', 'Caching', 'Monitoring'],
      icon: 'MdCode',
      featured: true
    },
    {
      id: '3',
      title: 'The Future of Full-Stack Development',
      excerpt: 'An analysis of emerging trends in full-stack development, including the rise of TypeScript, the evolution of React patterns, and the growing importance of developer experience in modern web applications.',
      category: 'Full-Stack',
      readTime: '6 min read',
      publishDate: '2024-01-05',
      tags: ['TypeScript', 'React', 'Developer Experience', 'Trends'],
      icon: 'MdTrendingUp',
      featured: false
    },
    {
      id: '4',
      title: 'Optimizing React Applications for Production',
      excerpt: 'Practical strategies for improving React application performance, including code splitting, lazy loading, memoization techniques, and bundle optimization strategies that can significantly improve user experience.',
      category: 'Frontend',
      readTime: '10 min read',
      publishDate: '2023-12-28',
      tags: ['React', 'Performance', 'Optimization', 'Bundle Size'],
      icon: 'MdCode',
      featured: false
    },
    {
      id: '5',
      title: 'Microservices Architecture: Lessons Learned',
      excerpt: 'Real-world insights from implementing microservices at scale, including service discovery, inter-service communication, monitoring, and the challenges of maintaining distributed systems in production environments.',
      category: 'Architecture',
      readTime: '15 min read',
      publishDate: '2023-12-20',
      tags: ['Microservices', 'Architecture', 'Distributed Systems', 'Monitoring'],
      icon: 'MdTrendingUp',
      featured: false
    },
    {
      id: '6',
      title: 'Data-Driven Decision Making in Software Development',
      excerpt: 'How to leverage analytics and metrics to make informed decisions about software architecture, feature development, and technical debt management. Includes practical examples and measurement strategies.',
      category: 'Data Science',
      readTime: '9 min read',
      publishDate: '2023-12-15',
      tags: ['Analytics', 'Metrics', 'Decision Making', 'Data Science'],
      icon: 'MdDataUsage',
      featured: false
    }
  ]
  const categories = ['All', 'Data Engineering', 'API Development', 'Full-Stack', 'Frontend', 'Architecture', 'Data Science']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredArticles = articles.filter(article => 
    activeCategory === 'All' || article.category === activeCategory
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'MdDataUsage': return MdDataUsage
      case 'MdCode': return MdCode
      case 'MdTrendingUp': return MdTrendingUp
      default: return MdArticle
    }
  }

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
            {CORE_SECTION_TITLES.writing}
          </h1>
          <p className="text-xl text-[rgb(var(--muted))] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
            Thoughts on software engineering, data architecture, and the future of technology. Sharing knowledge and experiences from building systems at scale.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[rgb(var(--accent))] text-[rgb(var(--bg))]'
                    : 'bg-[rgb(var(--surface))] text-[rgb(var(--fg))] border border-[rgb(var(--secondary))] hover:border-[rgb(var(--accent))]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Articles */}
        {activeCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8 text-center" style={{ fontFamily: '"Work Sans", sans-serif' }}>
              {CORE_SECTION_TITLES.featuredArticles}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {articles.filter(article => article.featured).map((article, index) => {
                const IconComponent = getIconComponent(article.icon)
                return (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-8 hover:border-[rgb(var(--accent))] transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[rgb(var(--accent))] rounded-lg flex items-center justify-center text-white">
                        <IconComponent className="text-xl" />
                      </div>
                      <span className="text-sm text-[rgb(var(--accent))] font-medium bg-[rgb(var(--accent))]/10 px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[rgb(var(--fg))] mb-4 group-hover:text-[rgb(var(--accent))] transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-[rgb(var(--muted))] leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-[rgb(var(--muted))]">
                        <span className="flex items-center gap-1">
                          <MdAccessTime className="text-lg" />
                          {article.readTime}
                        </span>
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                      <button className="flex items-center gap-2 text-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]/80 transition-colors font-medium">
                        Read More
                        <MdReadMore className="text-lg" />
                      </button>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* All Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-[rgb(var(--fg))] mb-8 text-center" style={{ fontFamily: '"Work Sans", sans-serif' }}>
            {activeCategory === 'All' ? 'All Articles' : `${activeCategory} Articles`}
          </h2>
          <div className="space-y-6">
            {filteredArticles.map((article, index) => {
              const IconComponent = getIconComponent(article.icon)
              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-6 hover:border-[rgb(var(--accent))] transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[rgb(var(--accent))] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <IconComponent className="text-xl" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm text-[rgb(var(--accent))] font-medium bg-[rgb(var(--accent))]/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-sm text-[rgb(var(--muted))] flex items-center gap-1">
                          <MdAccessTime className="text-lg" />
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[rgb(var(--fg))] mb-3 group-hover:text-[rgb(var(--accent))] transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-[rgb(var(--muted))] leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag: string, tagIndex: number) => (
                            <span
                              key={tagIndex}
                              className="text-xs bg-[rgb(var(--hover))] text-[rgb(var(--fg))] px-2 py-1 rounded border border-[rgb(var(--secondary))]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-[rgb(var(--muted))]">
                            {formatDate(article.publishDate)}
                          </span>
                          <button className="flex items-center gap-2 text-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]/80 transition-colors font-medium">
                            Read More
                            <MdReadMore className="text-lg" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-[rgb(var(--surface))] border border-[rgb(var(--secondary))] rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[rgb(var(--fg))] mb-4">Stay Updated</h3>
            <p className="text-[rgb(var(--muted))] mb-6">
              Get notified when I publish new articles about software engineering, data architecture, and technology trends.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-[rgb(var(--bg))] border border-[rgb(var(--secondary))] rounded-lg focus:border-[rgb(var(--accent))] focus:outline-none"
              />
              <button className="px-6 py-3 bg-[rgb(var(--accent))] text-[rgb(var(--bg))] rounded-lg font-medium hover:bg-[rgb(var(--accent))]/80 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
