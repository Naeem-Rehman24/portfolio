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
} from 'react-icons/si'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#000000' },
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
        { name: 'Express.js', icon: SiExpress, level: 90, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
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
      className="py-20 bg-gradient-to-b from-gray-50 to-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            My <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 p-4 sm:p-6 rounded-lg hover:bg-gray-200 transition-all duration-200 border border-gray-300 hover:border-primary-300 shadow-lg hover:shadow-xl"
                  >
                    <skill.icon className="text-4xl sm:text-5xl mb-3 sm:mb-4 mx-auto" style={{ color: skill.color }} />
                    <h4 className="text-base sm:text-lg font-semibold mb-2 text-center text-gray-900">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 h-2.5 rounded-full shadow-lg"
                      ></motion.div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 text-center font-medium">
                      {skill.level}%
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* MERN Stack Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 bg-gray-100 p-6 sm:p-8 rounded-xl border border-gray-300 shadow-professional"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            MERN Stack Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {[
              { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
              { name: 'Express.js', icon: SiExpress, color: '#000000' },
              { name: 'React', icon: SiReact, color: '#61DAFB' },
              { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            ].map((tech) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <tech.icon className="text-4xl sm:text-5xl md:text-6xl" style={{ color: tech.color }} />
                <span className="text-gray-700 font-medium text-sm sm:text-base">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
