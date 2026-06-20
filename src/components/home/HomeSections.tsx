import { Link } from 'react-router-dom'
import {
  FiCode, FiGlobe, FiSmartphone, FiTablet, FiCoffee, FiTerminal, FiCpu, FiCloud,
  FiGitBranch, FiCheckCircle, FiPenTool, FiLayers, FiShoppingCart, FiBriefcase, FiUsers,
  FiArrowRight, FiStar,
} from 'react-icons/fi'
import { services, technologies, projects, testimonials, stats, team } from '../../data'
import { SectionHeading, Reveal, OutlineButton, PrimaryButton } from '../ui'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  FiCode, FiGlobe, FiSmartphone, FiTablet, FiCoffee, FiTerminal, FiCpu, FiCloud,
  FiGitBranch, FiCheckCircle, FiPenTool, FiLayers, FiShoppingCart, FiBriefcase, FiUsers,
}

export function Stats() {
  return (
    <section className="bg-slate-50 dark:bg-[#0B1326] border-y border-slate-200 dark:border-white/10 py-10">
      <div className="container-px grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-mono text-2xl sm:text-3xl font-medium text-accent">{s.value}</div>
            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ServicesOverview() {
  return (
    <section className="section">
      <div className="container-px">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <SectionHeading eyebrow="services" title="What we build" description="From a first prototype to a system running at enterprise scale." />
          <OutlineButton to="/services" className="shrink-0">View all services <FiArrowRight className="ml-1" size={15} /></OutlineButton>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link to={`/services/${s.slug}`} className="card p-7 block h-full hover:border-accent transition-colors group">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 flex items-center justify-center mb-5">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-medium text-[17px] mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{s.shortDescription}</p>
                  <span className="text-sm text-accent inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Learn more <FiArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function TechShowcase() {
  return (
    <section className="section bg-slate-50 dark:bg-[#0B1326] border-y border-slate-200 dark:border-white/10">
      <div className="container-px">
        <SectionHeading eyebrow="technologies" title="The stack we work in" description="We pick the right tool for the problem, not the trend." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((cat) => (
            <div key={cat.name}>
              <h4 className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-500 mb-4">{cat.name}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PortfolioPreview() {
  return (
    <section className="section">
      <div className="container-px">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <SectionHeading eyebrow="portfolio" title="Recent work" description="A few of the products we've shipped." />
          <OutlineButton to="/portfolio" className="shrink-0">View full portfolio <FiArrowRight className="ml-1" size={15} /></OutlineButton>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link to={`/portfolio/${p.slug}`} className="card overflow-hidden block h-full hover:border-accent transition-colors">
                <div className="h-36 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0E1A33] dark:to-[#0B1326] relative flex items-center justify-center border-b border-slate-200 dark:border-white/10">
                  <span className="absolute top-3 left-3 font-mono text-[11px] px-2.5 py-1 bg-accent/15 text-accent rounded">{p.category.toUpperCase()}</span>
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-600">{p.title.toUpperCase()}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-base mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{p.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.techStack.slice(0, 3).map((t) => (
                      <span key={t} className="text-[11px] font-mono text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsPreview() {
  return (
    <section className="section bg-slate-50 dark:bg-[#0B1326] border-y border-slate-200 dark:border-white/10">
      <div className="container-px">
        <SectionHeading eyebrow="testimonials" title="What clients say" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06} className="card p-6">
              <div className="flex gap-0.5 text-amber-500 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => <FiStar key={idx} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-xs font-mono shrink-0">{t.initials}</div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TeamPreview() {
  return (
    <section className="section">
      <div className="container-px">
        <SectionHeading eyebrow="team" title="The people behind the work" description="A senior team, not a rotating cast of contractors." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.04} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-base font-mono mb-3">{m.initials}</div>
              <div className="text-sm font-medium">{m.name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-500">{m.role}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-px">
        <div className="relative max-w-3xl mx-auto card p-12 sm:p-16 text-center overflow-hidden">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Have a project in mind?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Tell us what you're building and we'll get back to you within one business day.</p>
          <PrimaryButton to="/contact">Start a conversation <FiArrowRight size={16} /></PrimaryButton>
        </div>
      </div>
    </section>
  )
}
