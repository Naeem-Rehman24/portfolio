'use client'

import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPostgresql } from 'react-icons/si'
import Reveal from './Reveal'

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' })
    }
  }

  // Featured projects
  const projects = [
    {
      title: 'Zaikest Paste Selling Website',
      description:
        'An e-commerce website for Zaikest paste products with catalog browsing, cart, and fast checkout flow.',
      image: '/project-ecommerce.jpg',
      gradient: 'gradient-bg-1',
      technologies: ['React', 'Node.js', 'MongoDB', 'SQL', 'Express'],
      github: 'https://github.com',
      live: 'https://zaikest.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration, and project tracking features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&fm=jpg&q=80&w=1200',
      gradient: 'gradient-bg-2',
      technologies: ['React', 'Node.js', 'MongoDB', 'SQL', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A comprehensive social media analytics dashboard with data visualization, user insights, and engagement metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&q=80&w=1200',
      gradient: 'gradient-bg-3',
      technologies: ['React', 'Node.js', 'MongoDB', 'SQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Blog Platform',
      description:
        'A modern blog platform with rich text editor, comment system, and admin panel for content management.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&fm=jpg&q=80&w=1200',
      gradient: 'gradient-bg-4',
      technologies: ['React', 'Express', 'MongoDB', 'SQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ]

  const getTechMeta = (tech: string) => {
    const icons: { [key: string]: { icon: any; color: string } } = {
      React: { icon: SiReact, color: '#61DAFB' },
      'Node.js': { icon: SiNodedotjs, color: '#339933' },
      MongoDB: { icon: SiMongodb, color: '#47A248' },
      SQL: { icon: SiPostgresql, color: '#336791' },
      Express: { icon: SiExpress, color: '#4B5563' },
    }
    return icons[tech] || { icon: SiReact, color: '#61DAFB' }
  }

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-950/94 via-slate-900/90 to-slate-950/94 text-white backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-brand">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills and experience with
            the MERN stack
          </p>
        </Reveal>

        <div className="relative">
          <button
            type="button"
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-slate-900/90 text-white shadow-lg shadow-slate-950/40 transition hover:bg-slate-800"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 items-center justify-center rounded-full bg-slate-900/90 text-white shadow-lg shadow-slate-950/40 transition hover:bg-slate-800"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-lg" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory px-4 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 0.05}
                className="snap-start flex-shrink-0 w-[85vw] max-w-[320px] sm:w-[320px] bg-white rounded-xl overflow-hidden transition-colors duration-150 border border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-950/20 flex flex-col"
              >
                <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative aspect-[4/3] sm:aspect-[16/9] ${project.gradient} overflow-hidden group focus:outline-none focus:ring-2 focus:ring-brand/50 rounded-xl`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover bg-slate-900/70 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-150" />
              </a>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed flex-grow text-sm sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => {
                      const techMeta = getTechMeta(tech)
                      const Icon = techMeta.icon
                      return (
                        <span
                          key={tech}
                          className="flex items-center gap-1.5 bg-slate-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm border border-slate-200 hover:border-slate-300 transition-colors duration-150"
                        >
                          <Icon className="text-xs sm:text-sm" style={{ color: techMeta.color }} />
                          <span className="text-slate-700">{tech}</span>
                        </span>
                      )
                    })}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-slate-700 hover:text-slate-950 transition-colors duration-150 font-medium text-sm sm:text-base"
                    >
                      <FaGithub className="text-base sm:text-lg" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-slate-700 hover:text-slate-950 transition-colors duration-150 font-medium text-sm sm:text-base"
                    >
                      <FaExternalLinkAlt className="text-base sm:text-lg" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
