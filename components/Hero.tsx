'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import ProfilePicture from './ProfilePicture'

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Naeem-Rehman24', label: 'GitHub', color: '#ffffff' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/naeem-rehman-98nt/', label: 'LinkedIn', color: '#0077b5' },
    { icon: FaEnvelope, href: 'mailto:naeemshar127@gmail.com', label: 'Email', color: '#ea4335' },
    { icon: FaWhatsapp, href: 'https://wa.me/923043444434', label: 'WhatsApp', color: '#25D366' },
    { icon: SiUpwork, href: 'https://www.upwork.com/freelancers/~01381976791d5dacc9', label: 'Upwork', color: '#6FDA44' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24"
    >
      {/* Live tech industry background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="tech-industry-image absolute -inset-8 opacity-[0.55]"></div>
        <div className="absolute inset-0 bg-slate-950/55"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.25),transparent_34%),radial-gradient(circle_at_78%_72%,rgba(14,165,233,0.18),transparent_30%)]"></div>
        <div className="tech-grid absolute inset-0 opacity-[0.45]"></div>
        <div className="tech-circuit absolute inset-0 opacity-75"></div>
        <div className="tech-orb absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-brand/20 blur-3xl"></div>
        <div className="tech-orb absolute right-[10%] bottom-[14%] h-56 w-56 rounded-full blur-3xl [animation-delay:-5s]" style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)' }}></div>
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="tech-chip absolute left-[8%] top-[34%] hidden rounded-full bg-slate-950/60 px-4 py-2 text-xs font-semibold text-brand shadow-lg shadow-brand/10 backdrop-blur-md sm:block" style={{ borderColor: 'rgba(56, 189, 248, 0.3)', borderWidth: 1 }}>
          {'<React />'}
        </div>
        <div className="tech-chip tech-chip-delay-1 absolute right-[9%] top-[28%] hidden rounded-full bg-slate-950/60 px-4 py-2 text-xs font-semibold text-brand shadow-lg shadow-brand/10 backdrop-blur-md md:block" style={{ borderColor: 'rgba(56, 189, 248, 0.3)', borderWidth: 1 }}>
          Node.js
        </div>
        <div className="tech-chip tech-chip-delay-2 absolute bottom-[26%] left-[16%] hidden rounded-full bg-slate-950/60 px-4 py-2 text-xs font-semibold text-brand shadow-lg shadow-brand/10 backdrop-blur-md lg:block" style={{ borderColor: 'rgba(56, 189, 248, 0.3)', borderWidth: 1 }}>
          MERN Stack
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="will-change-transform"
          >
            <div className="inline-block mb-6">
              <ProfilePicture
                size="large"
                isEditable={false}
                defaultImage="/hero-profile.png" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 px-4">
              Hi, I'm <span className="text-brand">Naeem Rehman</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-100 mb-6 px-4">
              <span className="inline-block">MERN Stack Developer</span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-8 px-4">
              Crafting beautiful and functional web applications with
              MongoDB, Express, React, and Node.js
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 px-4">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-500 hover:to-secondary-500 transition-colors duration-150 shadow-lg shadow-primary-500/50 text-center"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 bg-slate-950/45 text-brand rounded-lg font-semibold hover:bg-brand hover:text-slate-950 transition-colors duration-150 backdrop-blur-sm text-center"
                style={{ borderColor: 'rgba(56, 189, 248, 0.7)', borderWidth: 2 }}
              >
                View My Work
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-6 sm:px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-150 shadow-lg text-center"
              >
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl transition-colors duration-150 bg-slate-800/50 p-2.5 sm:p-3 rounded-full backdrop-blur-sm hover:bg-slate-700/50"
                  style={{ color: social.color }}
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-brand/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
