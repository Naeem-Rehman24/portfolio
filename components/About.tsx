'use client'

import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaServer, FaMobile } from 'react-icons/fa'
import ProfilePicture from './ProfilePicture'

export default function About() {
  const services = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React',
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side logic with Node.js & Express',
    },
    {
      icon: FaDatabase,
      title: 'Database Design',
      description: 'Designing and managing MongoDB databases for optimal performance',
    },
    {
      icon: FaMobile,
      title: 'Full Stack Solutions',
      description: 'End-to-end web application development with MERN stack',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-white text-gray-900"
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
            About <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate MERN Stack Developer dedicated to creating exceptional
            digital experiences
          </p>
        </motion.div>

        {/* Profile Picture and Stats Section */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ProfilePicture size="xlarge" isEditable={false} />
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16"
          >
            {[
              { label: 'Projects Completed', value: '50+' },
              { label: 'Years Experience', value: '3+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Technologies', value: '15+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 p-4 sm:p-6 rounded-xl text-center hover:bg-gray-200 transition-all duration-200 border border-gray-300 hover:border-primary-400 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* About Content Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Who I Am
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-100 p-6 sm:p-8 rounded-2xl border border-gray-300 shadow-lg">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                I'm <strong className="text-primary-600 text-lg sm:text-xl">Naeem Rehman</strong>, a dedicated <strong className="text-primary-600">MERN Stack Developer</strong>
                with a passion for building scalable web applications. I specialize
                in creating seamless user experiences through clean code and
                modern design principles.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                With expertise in <strong className="text-primary-600">MongoDB</strong>, <strong className="text-primary-600">Express.js</strong>, <strong className="text-primary-600">React</strong>, and <strong className="text-primary-600">Node.js</strong>, I bring
                ideas to life by combining robust backend architecture with
                intuitive frontend interfaces. My goal is to deliver high-quality
                solutions that not only meet but exceed client expectations.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                When I'm not coding, I'm constantly learning new technologies and
                staying updated with the latest trends in web development to ensure
                I'm always delivering cutting-edge solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              What I Do
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive web development services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 p-6 sm:p-8 rounded-xl hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 border border-gray-300 hover:border-primary-300 shadow-lg hover:shadow-2xl group"
              >
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300">
                  <service.icon className="text-2xl sm:text-3xl text-primary-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{service.title}</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
