export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-8 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Naeem Rehman. All rights reserved.
            </p>
          </div>
          <div className="text-sm">
            <p>
              Built with <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent font-semibold">Next.js</span> and{' '}
              <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent font-semibold">React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
