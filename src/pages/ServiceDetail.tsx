import { useParams, Link, Navigate } from 'react-router-dom'
import {
  FiCode, FiGlobe, FiSmartphone, FiTablet, FiCoffee, FiTerminal, FiCpu, FiCloud,
  FiGitBranch, FiCheckCircle, FiPenTool, FiLayers, FiShoppingCart, FiBriefcase, FiUsers, FiArrowRight, FiArrowLeft,
} from 'react-icons/fi'
import { SEO, Reveal, PrimaryButton } from '../components/ui'
import { services } from '../data'
import { CTASection } from '../components/home/HomeSections'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  FiCode, FiGlobe, FiSmartphone, FiTablet, FiCoffee, FiTerminal, FiCpu, FiCloud,
  FiGitBranch, FiCheckCircle, FiPenTool, FiLayers, FiShoppingCart, FiBriefcase, FiUsers,
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const Icon = iconMap[service.icon]
  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <SEO title={service.title} description={service.shortDescription} />

      <section className="pt-28 pb-16 border-b border-slate-200 dark:border-white/10">
        <div className="container-px max-w-3xl">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-accent mb-8">
            <FiArrowLeft size={14} /> All services
          </Link>
          <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 flex items-center justify-center mb-6">
            <Icon size={26} />
          </div>
          <span className="font-mono text-xs text-accent uppercase">{service.category}</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold my-4">{service.title}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-[15.5px] leading-relaxed">{service.overview}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-px grid lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-xl font-semibold mb-5">Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <FiCheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-xl font-semibold mb-5">Features</h2>
            <ul className="space-y-3">
              {service.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <FiCheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-[#0B1326] border-y border-slate-200 dark:border-white/10">
        <div className="container-px">
          <h2 className="font-display text-xl font-semibold mb-6">Technologies we use</h2>
          <div className="flex flex-wrap gap-2.5">
            {service.technologies.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px">
          <h2 className="font-display text-xl font-semibold mb-10">How we work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflow.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06} className="relative">
                <div className="font-mono text-3xl text-slate-200 dark:text-white/10 font-semibold mb-3">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-medium text-[15px] mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-px">
          <div className="card p-10 sm:p-14 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl font-semibold mb-4">{service.cta}</h2>
            <PrimaryButton to="/contact">Talk to our team <FiArrowRight size={16} /></PrimaryButton>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-slate-50 dark:bg-[#0B1326] border-t border-slate-200 dark:border-white/10">
          <div className="container-px">
            <h2 className="font-display text-xl font-semibold mb-8">Related services</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((s) => {
                const RIcon = iconMap[s.icon]
                return (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="card p-6 hover:border-accent transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 flex items-center justify-center mb-4">
                      <RIcon size={18} />
                    </div>
                    <h3 className="font-medium text-[15px] mb-1.5">{s.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{s.shortDescription}</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
