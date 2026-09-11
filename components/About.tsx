'use client'

import { FaCode, FaDatabase, FaServer, FaMobile } from 'react-icons/fa'
import ProfilePicture from './ProfilePicture'
import Reveal from './Reveal'

export default function About() {
  const services = [
    {
      icon: FaCode,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React',
      iconColor: 'text-sky-600',
      iconBg: 'bg-sky-50',
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Creating robust APIs and server-side logic with Node.js & Express',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
    },
    {
      icon: FaDatabase,
      title: 'Database Design',
      description: 'Designing and managing MongoDB and SQL databases for optimal performance',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-50',
    },
    {
      icon: FaMobile,
      title: 'Full Stack Solutions',
      description: 'End-to-end web application development with MERN stack',
      iconColor: 'text-violet-600',
      iconBg: 'bg-violet-50',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-950/94 via-slate-900/90 to-slate-950/94 text-white backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-brand">Me</span>
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
          <p className="text-lg text-slate-100 max-w-3xl mx-auto">
            Passionate MERN Stack Developer dedicated to creating exceptional
            digital experiences
          </p>
        </Reveal>

        {/* Profile Picture and Stats Section */}
        <div className="mb-20">
          <div className="flex flex-col items-center mb-12">
            <Reveal>
              <ProfilePicture
                size="xlarge"
                isEditable={false}
                defaultImage="/about-profile.png"
              />
            </Reveal>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
            {[
              { label: 'Projects Completed', value: '50+' },
              { label: 'Years Experience', value: '3+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Technologies', value: '15+' },
            ].map((stat) => (
              <Reveal
                key={stat.label}
                delay={0.05}
                className="bg-white p-4 sm:p-6 rounded-xl text-center transition-colors duration-150 border border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-950/20"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-xs sm:text-sm md:text-base font-medium">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* About Content Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Reveal className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Who I Am
            </h3>
            <div className="w-20 h-1 bg-brand mx-auto mb-8"></div>
          </Reveal>

          <Reveal className="space-y-6" delay={0.08}>
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-lg shadow-slate-950/20">
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                I'm <strong className="text-brand text-lg sm:text-xl">Naeem Rehman</strong>, a <strong className="text-brand">MERN Stack Developer</strong>
                who builds scalable, user-focused web applications. I combine
                clean code, thoughtful architecture, and modern design to create
                seamless digital experiences.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                I work across <strong className="text-brand">MongoDB</strong>, <strong className="text-brand">SQL</strong>, <strong className="text-brand">Express.js</strong>, <strong className="text-brand">React</strong>, and <strong className="text-brand">Node.js</strong> to turn ideas into
                reliable products. From robust backend systems to intuitive
                interfaces, I deliver practical solutions built around real
                business needs.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed">
                I continuously sharpen my skills and explore emerging technologies
                so every project benefits from current, effective development
                practices.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              What I Do
            </h3>
            <div className="w-20 h-1 bg-brand mx-auto mb-6"></div>
            <p className="text-slate-100 text-lg max-w-2xl mx-auto">
              Comprehensive web development services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Reveal
                key={service.title}
                delay={0.05}
                className="bg-white p-6 sm:p-8 rounded-xl transition-colors duration-150 border border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-950/20 group"
              >
                <div className={`${service.iconBg} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-150`}>
                  <service.icon className={`text-2xl sm:text-3xl ${service.iconColor}`} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-900">{service.title}</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
