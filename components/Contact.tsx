'use client'

import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import Reveal from './Reveal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [formError, setFormError] = useState<string | null>(null)

  const sanitizeInput = (value: string) => {
    return value.replace(/<[^>]*>/g, '').trim()
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    }

    if (!sanitizedData.name || !sanitizedData.email || !sanitizedData.subject || !sanitizedData.message) {
      setFormError('Please fill in all fields before submitting.')
      return
    }

    if (!isValidEmail(sanitizedData.email)) {
      setFormError('Please enter a valid email address.')
      return
    }

    setFormError(null)
    console.log('Sanitized form submitted:', sanitizedData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const sanitizedValue = sanitizeInput(e.target.value)
    setFormData({
      ...formData,
      [e.target.name]: sanitizedValue,
    })
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'naeemshar127@gmail.com',
      link: 'mailto:naeemshar127@gmail.com',
      iconColor: 'text-red-600',
      iconBg: 'bg-red-50',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+92 3043444434',
      link: 'tel:+923043444434',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Available remotely',
      link: '#',
      iconColor: 'text-slate-600',
      iconBg: 'bg-slate-100',
    },
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/Naeem-Rehman24',
      label: 'GitHub',
      iconColor: '#000000',
      bgColor: '#ffffff',
      borderColor: '#d1d5db',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/naeem-rehman-98nt/',
      label: 'LinkedIn',
      iconColor: '#ffffff',
      bgColor: '#0077b5',
      borderColor: '#0a66c2',
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-slate-950/94 via-slate-900/90 to-slate-950/94 text-white backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-brand">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-brand mx-auto mb-6"></div>
          <p className="text-lg text-slate-100 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <Reveal>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Contact Information
            </h3>
            <p className="text-slate-100 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out
              through any of the following channels.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Reveal
                  key={info.label}
                  delay={index * 0.04}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg transition-colors duration-150 border border-slate-200 hover:border-slate-300 shadow-lg shadow-slate-950/20"
                >
                  <a href={info.link} className="flex items-center gap-3 sm:gap-4 w-full">
                    <div className={`${info.iconBg} w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shadow-md flex-shrink-0`}>
                      <info.icon className={`text-lg sm:text-xl ${info.iconColor}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm text-slate-500 font-medium">{info.label}</div>
                      <div className="text-sm sm:text-base text-slate-900 font-semibold truncate">{info.value}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg flex items-center justify-center hover:brightness-95 transition-all duration-200 shadow-md"
                    style={{ backgroundColor: social.bgColor, borderColor: social.borderColor }}
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" style={{ color: social.iconColor }} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-950/20 sm:p-6">
              {formError ? (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {formError}
                </div>
              ) : null}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-slate-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-400/30 transition-all duration-200 text-slate-900 placeholder-slate-500 text-sm sm:text-base"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-slate-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-400/30 transition-all duration-200 text-slate-900 placeholder-slate-500 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-slate-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-400/30 transition-all duration-200 text-slate-900 placeholder-slate-500 text-sm sm:text-base"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-slate-500 focus:ring-2 focus:ring-slate-400/30 transition-all duration-200 resize-none text-slate-900 placeholder-slate-500 text-sm sm:text-base"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-brand text-white rounded-lg font-semibold hover:bg-brand/90 transition-colors duration-150 shadow-lg shadow-brand/50 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
