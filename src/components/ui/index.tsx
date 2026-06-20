import { ReactNode, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiArrowUp, FiMessageCircle, FiX } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import { cn } from '../../lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow: string
  title: string
  description?: string
  center?: boolean
}) {
  return (
    <div className={cn('max-w-2xl mb-14', center && 'mx-auto text-center')}>
      <span className="eyebrow block mb-3">/ {eyebrow}</span>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">{title}</h2>
      {description && <p className="text-slate-600 dark:text-slate-400 text-[15.5px]">{description}</p>}
    </div>
  )
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function PrimaryButton({
  to,
  href,
  children,
  type = 'button',
  onClick,
  className,
}: {
  to?: string
  href?: string
  children: ReactNode
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
}) {
  const classes = cn('btn-primary', className)
  if (to) return <Link to={to} className={classes}>{children}</Link>
  if (href) return <a href={href} className={classes}>{children}</a>
  return <button type={type} onClick={onClick} className={classes}>{children}</button>
}

export function OutlineButton({
  to,
  href,
  children,
  onClick,
  className,
}: {
  to?: string
  href?: string
  children: ReactNode
  onClick?: () => void
  className?: string
}) {
  const classes = cn('btn-outline', className)
  if (to) return <Link to={to} className={classes}>{children}</Link>
  if (href) return <a href={href} className={classes}>{children}</a>
  return <button onClick={onClick} className={classes}>{children}</button>
}

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300', className)}>
      {children}
    </span>
  )
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark or light theme"
      className={cn('w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-700 flex items-center justify-center text-secondary dark:text-white hover:border-accent transition-colors', className)}
    >
      {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 700)
    return () => clearTimeout(t)
  }, [])
  if (hidden) return null
  return (
    <div className="fixed inset-0 z-[999] bg-bg-dark flex items-center justify-center transition-opacity duration-500">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent animate-pulse" />
        <span className="font-mono text-sm text-slate-400">loading nextgen.io</span>
      </div>
    </div>
  )
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(t)
  }, [])
  if (dismissed || !visible) return null
  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 card p-5 shadow-lg animate-fade-up">
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
        We use cookies to improve your experience on this site. By continuing, you agree to our use of cookies.
      </p>
      <div className="flex gap-3">
        <button onClick={() => setDismissed(true)} className="btn-primary text-xs py-2 px-4">Accept</button>
        <button onClick={() => setDismissed(true)} className="btn-outline text-xs py-2 px-4">Decline</button>
      </div>
    </div>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-hover transition-colors"
    >
      <FiArrowUp size={18} />
    </button>
  )
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919022539573"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.3 9 9.8 7.8 9.6 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .9.9-2.9-.2-.3A8.2 8.2 0 1112 20.2z"/></svg>
    </a>
  )
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<{ from: 'bot' | 'user'; text: string }[]>([
    { from: 'bot', text: 'Hi! I\u2019m the NextGen assistant. Ask me about our services, or tell me what you\u2019re building.' },
  ])
  const [input, setInput] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  function send() {
    if (!input.trim()) return
    const userText = input.trim()
    setMessages((m) => [...m, { from: 'user', text: userText }])
    setInput('')
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: 'bot',
          text: 'Thanks — a member of our team will follow up by email shortly. For a faster response, use the contact form or call +91 9022539573.',
        },
      ])
    }, 600)
  }

  return (
    <div className="fixed bottom-24 right-6 z-40 sm:bottom-6 sm:right-24">
      {open && (
        <div className="absolute bottom-16 right-0 w-[320px] max-w-[88vw] card shadow-xl flex flex-col overflow-hidden">
          <div className="bg-secondary text-white px-4 py-3 flex items-center justify-between">
            <span className="text-sm font-medium">NextGen Assistant</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat"><FiX size={16} /></button>
          </div>
          <div className="flex-1 max-h-72 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={cn('text-sm max-w-[85%] px-3 py-2 rounded-lg', m.from === 'bot' ? 'bg-slate-100 dark:bg-white/5 text-secondary dark:text-slate-200' : 'bg-primary text-white ml-auto')}>
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>
          <div className="flex items-center gap-2 border-t border-slate-200 dark:border-white/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Type a message..."
              className="flex-1 text-sm bg-transparent outline-none placeholder:text-slate-400"
            />
            <button onClick={send} className="text-primary text-sm font-medium">Send</button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat assistant"
        className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-hover transition-colors"
      >
        {open ? <FiX size={20} /> : <FiMessageCircle size={20} />}
      </button>
    </div>
  )
}

export function SEO({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} | NextGen Technologies`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', description)
    window.scrollTo(0, 0)
  }, [title, description])
  return null
}
