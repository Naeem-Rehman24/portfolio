'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import ProfilePicture from './ProfilePicture'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: '#ffffff' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0077b5' },
    { icon: FaEnvelope, href: 'mailto:naeemshar127@gmail.com', label: 'Email', color: '#ea4335' },
    { icon: FaWhatsapp, href: 'https://wa.me/923043444434', label: 'WhatsApp', color: '#25D366' },
    { icon: SiUpwork, href: 'https://www.upwork.com/freelancers/~yourprofile', label: 'Upwork', color: '#6FDA44' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-block mb-6"
              >
                <ProfilePicture size="large" isEditable={false} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 px-4"
              >
                Hi, I'm <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Naeem Rehman</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6 px-4"
              >
                <span className="inline-block">MERN Stack Developer</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 px-4"
              >
                Crafting beautiful and functional web applications with
                MongoDB, Express, React, and Node.js
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8 px-4"
              >
                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-500 hover:to-secondary-500 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-primary-500/50 text-center"
                >
                  Get In Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 sm:px-8 py-3 bg-transparent border-2 border-primary-500 text-primary-400 rounded-lg font-semibold hover:bg-primary-500 hover:text-white transition-all duration-200 transform hover:scale-105 backdrop-blur-sm text-center"
                >
                  View My Work
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-xl sm:text-2xl transition-colors duration-200 bg-slate-800/50 p-2.5 sm:p-3 rounded-full backdrop-blur-sm hover:bg-slate-700/50"
                    style={{ color: social.color }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}
