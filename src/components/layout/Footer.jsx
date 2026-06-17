import { motion } from 'framer-motion'
import { personal, navLinks } from '@/data/portfolio'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span className="gradient-text-purple font-semibold font-display">{personal.name}</span>
          <span>·</span>
          <span>{personal.role} @ {personal.company}</span>
        </div>
        <nav className="flex items-center gap-5">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => {
                const id = href.replace('#', '')
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>
        <p className="text-xs text-gray-600">
          Built with React + Framer Motion · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
