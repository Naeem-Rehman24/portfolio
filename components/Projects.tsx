'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si'

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Only 4 projects for horizontal scrolling
  const projects = [
    {
      title: 'Zaikest Paste Selling Website',
      description:
        'An e-commerce website for Zaikest paste products with catalog browsing, cart, and fast checkout flow.',
      image: '/project-ecommerce.jpg',
      gradient: 'gradient-bg-1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com',
      live: 'https://zaikest.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration, and project tracking features.',
      image: '/project-task.jpg',
      gradient: 'gradient-bg-2',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A comprehensive social media analytics dashboard with data visualization, user insights, and engagement metrics.',
      image: '/project-dashboard.jpg',
      gradient: 'gradient-bg-3',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Blog Platform',
      description:
        'A modern blog platform with rich text editor, comment system, and admin panel for content management.',
      image: '/project-blog.jpg',
      gradient: 'gradient-bg-4',
      technologies: ['React', 'Express', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })
    }
  }

  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: any } = {
      React: SiReact,
      'Node.js': SiNodedotjs,
      MongoDB: SiMongodb,
      Express: SiExpress,
    }
    return icons[tech] || SiReact
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A collection of projects showcasing my skills and experience with
            the MERN stack
          </p>
        </motion.div>

        {/* Horizontal Scrollable Projects Container */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 text-white p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hidden sm:block"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-lg sm:text-xl" />
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-slate-800/80 hover:bg-slate-700 text-white p-2 sm:p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hidden sm:block"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-lg sm:text-xl" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth px-2 sm:px-0"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-[86vw] max-w-[360px] xs:w-[280px] sm:w-80 bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-700/80 transition-all duration-300 border border-gray-700/50 hover:border-primary-500/50 shadow-lg hover:shadow-2xl hover:shadow-primary-500/20 flex flex-col"
              >
                <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative aspect-[4/3] sm:aspect-[16/9] ${project.gradient} overflow-hidden flex-shrink-0 group focus:outline-none focus:ring-2 focus:ring-primary-400 rounded-xl`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain bg-slate-900/70 opacity-95"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </a>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => {
                      const Icon = getTechIcon(tech)
                      return (
                        <span
                          key={tech}
                          className="flex items-center gap-1.5 bg-slate-700/50 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm border border-slate-600/50 hover:border-primary-500/50 transition-colors duration-200"
                        >
                          <Icon className="text-primary-400 text-xs sm:text-sm" />
                          <span className="text-gray-300">{tech}</span>
                        </span>
                      )
                    })}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-200 font-medium hover:scale-105 text-sm sm:text-base"
                    >
                      <FaGithub className="text-base sm:text-lg" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-gray-300 hover:text-secondary-400 transition-colors duration-200 font-medium hover:scale-105 text-sm sm:text-base"
                    >
                      <FaExternalLinkAlt className="text-base sm:text-lg" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
