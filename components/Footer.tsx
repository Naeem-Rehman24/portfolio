import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="bg-slate-950/92 text-gray-300 py-16 md:py-20 border-t border-slate-800/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xl font-bold text-white mb-3">
              <span className="text-brand">N</span>aeem <span className="text-brand">R</span>ehman
            </p>
            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Full-Stack Developer building scalable web applications with modern tools and thoughtful design.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-y-2 text-sm">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 transition-colors hover:text-brand">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">Connect</h3>
            <div className="flex gap-4 text-xl">
              <a href="mailto:naeemshar127@gmail.com" aria-label="Email Naeem Rehman" className="text-slate-400 transition-opacity hover:opacity-75" style={{ color: '#ea4335' }}>
                <FaEnvelope />
              </a>
              <a href="https://github.com/Naeem-Rehman24" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-slate-400 transition-opacity hover:opacity-75" style={{ color: '#ffffff' }}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/naeem-rehman-98nt/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-slate-400 transition-opacity hover:opacity-75" style={{ color: '#0077b5' }}>
                <FaLinkedin />
              </a>
              <a href="https://www.upwork.com/freelancers/~01381976791d5dacc9" target="_blank" rel="noopener noreferrer" aria-label="Upwork profile" className="text-slate-400 transition-opacity hover:opacity-75" style={{ color: '#6FDA44' }}>
                <SiUpwork />
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Built with <span className="font-semibold text-brand">Next.js</span> and <span className="font-semibold text-brand">React</span>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800/60 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-brand">Naeem Rehman</span>. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
