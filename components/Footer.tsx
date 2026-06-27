export default function Footer() {
  return (
    <footer className="bg-slate-950/92 text-gray-300 py-8 border-t border-slate-800/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Naeem Rehman. All rights reserved.
            </p>
          </div>
          <div className="text-sm">
            <p>
              Built with <span className="text-brand font-semibold">Next.js</span> and{' '}
              <span className="text-brand font-semibold">React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
