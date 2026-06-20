import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SEO, Reveal } from '../components/ui'
import { projects } from '../data'
import { CTASection } from '../components/home/HomeSections'
import { cn } from '../lib/utils'

export default function Portfolio() {
  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((p) => p.category)))], [])
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <SEO title="Portfolio" description="Featured projects built by NextGen Technologies, including web, mobile, AI, and Java applications." />

      <section className="pt-28 pb-12">
        <div className="container-px max-w-2xl">
          <span className="eyebrow block mb-3">/ portfolio</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-5">Products we've shipped.</h1>
          <p className="text-slate-600 dark:text-slate-400 text-[15.5px]">A selection of recent work across web, mobile, and AI.</p>
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
                  active === cat ? 'bg-primary text-white border-primary' : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-accent'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link to={`/portfolio/${p.slug}`} className="card overflow-hidden block h-full hover:border-accent transition-colors">
                  <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0E1A33] dark:to-[#0B1326] relative flex items-center justify-center border-b border-slate-200 dark:border-white/10">
                    <span className="absolute top-3 left-3 font-mono text-[11px] px-2.5 py-1 bg-accent/15 text-accent rounded">{p.category.toUpperCase()}</span>
                    <span className="absolute top-3 right-3 font-mono text-[10px] px-2 py-1 border border-slate-300 dark:border-slate-700 rounded text-slate-500">{p.status}</span>
                    <span className="font-mono text-xs text-slate-400 dark:text-slate-600">{p.title.toUpperCase()}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-base mb-2">{p.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{p.summary}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.techStack.map((t) => (
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

      <CTASection />
    </>
  )
}
