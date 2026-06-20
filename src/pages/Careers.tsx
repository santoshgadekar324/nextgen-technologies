import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi'
import { SEO, SectionHeading, Reveal } from '../components/ui'
import { jobs } from '../data'
import ApplicationForm from '../components/contact/ApplicationForm'
import { cn } from '../lib/utils'

export default function Careers() {
  const departments = useMemo(() => ['All', ...Array.from(new Set(jobs.map((j) => j.department)))], [])
  const [dept, setDept] = useState('All')
  const [type, setType] = useState('All')
  const types = useMemo(() => ['All', ...Array.from(new Set(jobs.map((j) => j.type)))], [])

  const filtered = jobs.filter((j) => (dept === 'All' || j.department === dept) && (type === 'All' || j.type === type))

  return (
    <>
      <SEO title="Careers" description="Open roles at NextGen Technologies — Java, Python, React, Android, QA, UI/UX, DevOps, and internship positions." />

      <section className="pt-28 pb-12">
        <div className="container-px max-w-2xl">
          <span className="eyebrow block mb-3">/ careers</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-5">Build with a team that ships.</h1>
          <p className="text-slate-600 dark:text-slate-400 text-[15.5px]">
            We're a small, senior team working on real client problems — not a rotating cast of contractors. Here's what's open right now.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-px">
          <div className="flex flex-wrap gap-6 mb-10">
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-500 block mb-2">Department</span>
              <div className="flex flex-wrap gap-2">
                {departments.map((d) => (
                  <button key={d} onClick={() => setDept(d)} className={cn('text-sm px-3.5 py-1.5 rounded-lg border transition-colors', dept === d ? 'bg-primary text-white border-primary' : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-accent')}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs text-slate-500 dark:text-slate-500 block mb-2">Type</span>
              <div className="flex flex-wrap gap-2">
                {types.map((t) => (
                  <button key={t} onClick={() => setType(t)} className={cn('text-sm px-3.5 py-1.5 rounded-lg border transition-colors', type === t ? 'bg-primary text-white border-primary' : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-accent')}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-20">
            {filtered.map((j, i) => (
              <Reveal key={j.slug} delay={i * 0.03}>
                <Link to={`/careers/${j.slug}`} className="card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-accent transition-colors">
                  <div>
                    <h3 className="font-medium text-base mb-1.5">{j.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                      <span>{j.department}</span>
                      <span className="flex items-center gap-1.5"><FiMapPin size={12} /> {j.location}</span>
                      <span className="flex items-center gap-1.5"><FiClock size={12} /> {j.type}</span>
                    </div>
                  </div>
                  <span className="text-sm text-accent inline-flex items-center gap-1.5 shrink-0">
                    View role <FiArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <p className="text-sm text-slate-500 dark:text-slate-500 py-10 text-center">No roles match those filters right now.</p>
            )}
          </div>

          <div id="apply" className="max-w-2xl mx-auto">
            <SectionHeading eyebrow="general application" title="Don't see the right role?" description="Send us your resume anyway — we'll reach out when something fits." center />
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  )
}
