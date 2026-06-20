import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiCode, FiGlobe, FiSmartphone, FiTablet, FiCoffee, FiTerminal, FiCpu, FiCloud,
  FiGitBranch, FiCheckCircle, FiPenTool, FiLayers, FiShoppingCart, FiBriefcase, FiUsers, FiArrowRight,
} from 'react-icons/fi'
import { SEO, Reveal } from '../components/ui'
import { services } from '../data'
import { CTASection } from '../components/home/HomeSections'
import { cn } from '../lib/utils'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  FiCode, FiGlobe, FiSmartphone, FiTablet, FiCoffee, FiTerminal, FiCpu, FiCloud,
  FiGitBranch, FiCheckCircle, FiPenTool, FiLayers, FiShoppingCart, FiBriefcase, FiUsers,
}

export default function Services() {
  const categories = useMemo(() => ['All', ...Array.from(new Set(services.map((s) => s.category)))], [])
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? services : services.filter((s) => s.category === active)

  return (
    <>
      <SEO title="Services" description="Custom software, web, mobile, AI, cloud, DevOps, QA, UI/UX, and IT consulting services from NextGen Technologies." />

      <section className="pt-28 pb-12">
        <div className="container-px max-w-2xl">
          <span className="eyebrow block mb-3">/ services</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-5">Every capability you need under one roof.</h1>
          <p className="text-slate-600 dark:text-slate-400 text-[15.5px]">
            From a first prototype to a system running at enterprise scale, our teams cover the full lifecycle of building software.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-px">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'text-sm px-4 py-2 rounded-lg border transition-colors',
                  active === cat
                    ? 'bg-primary text-white border-primary'
                    : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-accent'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((s, i) => {
              const Icon = iconMap[s.icon]
              return (
                <Reveal key={s.slug} delay={i * 0.04}>
                  <Link to={`/services/${s.slug}`} className="card p-7 block h-full hover:border-accent transition-colors group">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 flex items-center justify-center mb-5">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-500 uppercase">{s.category}</span>
                    <h3 className="font-medium text-[17px] my-2">{s.title}</h3>
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

      <CTASection />
    </>
  )
}
