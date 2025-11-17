import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500" />
          <span className="font-semibold tracking-tight text-slate-900">Lindberg AI</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="text-sm font-medium px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors">
            Book a call
          </a>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block text-slate-700 py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block text-center font-medium px-4 py-2 rounded-md bg-slate-900 text-white">
              Book a call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
