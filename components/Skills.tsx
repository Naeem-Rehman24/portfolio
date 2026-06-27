'use client'

import { motion } from 'framer-motion'
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiRedux,
  SiNextdotjs,
  SiPostgresql,
} from 'react-icons/si'
import Reveal from './Reveal'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#111827' },
        { name: 'JavaScript', icon: SiJavascript, level: 95, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, level: 80, color: '#3178C6' },
        { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, level: 90, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: '#06B6D4' },
        { name: 'Redux', icon: SiRedux, level: 75, color: '#764ABC' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, level: 90, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, level: 90, color: '#111827' },
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
        { name: 'SQL', icon: SiPostgresql, level: 80, color: '#336791' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: SiGit, level: 85, color: '#F05032' },
        { name: 'Postman', icon: SiPostman, level: 80, color: '#FF6C37' },
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-slate-950/94 via-slate-900/90 to-slate-950/94 text-white backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-brand">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
          <p className="text-lg text-slate-100 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </Reveal>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={categoryIndex * 0.05}>
              <h3 className="text-2xl font-bold mb-6 text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {category.skills.map((skill, index) => (
                  <Reveal
                    key={skill.name}
                    delay={index * 0.03}
                    className="bg-white p-4 sm:p-6 rounded-lg transition-colors duration-150 border border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-950/20"
                  >
                    <skill.icon className="text-4xl sm:text-5xl mb-3 sm:mb-4 mx-auto" style={{ color: skill.color }} />
                    <h4 className="text-base sm:text-lg font-semibold mb-2 text-center text-slate-900">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.8, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                        className="h-2.5 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      ></motion.div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 text-center font-medium">
                      {skill.level}%
                    </p>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <Reveal className="mt-12 sm:mt-16 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-lg shadow-slate-950/20">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-slate-900">
            MERN Stack Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {[
              { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
              { name: 'SQL', icon: SiPostgresql, color: '#336791' },
              { name: 'Express.js', icon: SiExpress, color: '#111827' },
              { name: 'React', icon: SiReact, color: '#61DAFB' },
              { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2"
              >
                <tech.icon className="text-4xl sm:text-5xl md:text-6xl" style={{ color: tech.color }} />
                <span className="text-slate-700 font-medium text-sm sm:text-base">{tech.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
