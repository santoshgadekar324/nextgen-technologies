import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { services } from '../../data'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubscribed(true)
    setTimeout(() => setSubscribed(false), 2500)
  }

  return (
    <footer className="bg-slate-50 dark:bg-[#0B1326] border-t border-slate-200 dark:border-white/10 pt-16 pb-8">
      <div className="container-px">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 font-display font-bold text-lg mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-mono text-[13px]">NG</span>
              NextGen Technologies
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs mb-5">
              Transforming ideas into digital solutions — software, mobile, AI, and cloud engineering based in Maharashtra, India.
            </p>
            <div className="flex gap-2.5">
              {[FiLinkedin, FiTwitter, FiGithub, FiInstagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link" className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-accent hover:text-accent transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">Quick links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-accent">About us</Link></li>
              <li><Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-accent">Services</Link></li>
              <li><Link to="/portfolio" className="text-slate-600 dark:text-slate-400 hover:text-accent">Portfolio</Link></li>
              <li><Link to="/careers" className="text-slate-600 dark:text-slate-400 hover:text-accent">Careers</Link></li>
              <li><Link to="/blog" className="text-slate-600 dark:text-slate-400 hover:text-accent">Blog</Link></li>
              <li><Link to="/faq" className="text-slate-600 dark:text-slate-400 hover:text-accent">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">Services</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-slate-600 dark:text-slate-400 hover:text-accent">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">Get in touch</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-400 mb-5">
              <li className="flex items-center gap-2"><FiPhone size={14} /> +91 9022539573</li>
              <li className="flex items-center gap-2"><FiMail size={14} /> info@nextgentechnologies.in</li>
              <li className="flex items-center gap-2"><FiMapPin size={14} /> Maharashtra, India</li>
            </ul>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1A33] placeholder:text-slate-400 outline-none focus:border-accent"
              />
              <button type="submit" className="btn-primary py-2.5 px-4 text-sm">{subscribed ? 'Joined' : 'Join'}</button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
          <span>© 2026 NextGen Technologies. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy policy</a>
            <a href="#" className="hover:text-accent">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
