import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../../data'
import { ThemeToggle, PrimaryButton } from '../ui'
import { cn } from '../../lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-white/85 dark:bg-bg-dark/85 backdrop-blur-md border-b border-slate-200 dark:border-white/10'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="container-px h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-lg">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-mono text-[13px]">NG</span>
          NextGen Technologies
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-sm transition-colors',
                    isActive ? 'text-primary font-medium' : 'text-slate-600 dark:text-slate-300 hover:text-secondary dark:hover:text-white'
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <PrimaryButton to="/contact" className="py-2.5">Get a quote</PrimaryButton>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" className="w-9 h-9 flex items-center justify-center">
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-slate-200 dark:border-white/10 bg-white dark:bg-bg-dark">
          <ul className="container-px py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn('block py-2.5 text-sm', isActive ? 'text-primary font-medium' : 'text-slate-600 dark:text-slate-300')
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <PrimaryButton to="/contact" className="w-full">Get a quote</PrimaryButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
