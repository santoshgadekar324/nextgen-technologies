import { FiStar } from 'react-icons/fi'
import { SEO, Reveal } from '../components/ui'
import { testimonials } from '../data'
import { CTASection } from '../components/home/HomeSections'

export default function Testimonials() {
  return (
    <>
      <SEO title="Testimonials" description="What clients say about working with NextGen Technologies." />

      <section className="pt-28 pb-12">
        <div className="container-px max-w-2xl">
          <span className="eyebrow block mb-3">/ testimonials</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-5">What clients say.</h1>
          <p className="text-slate-600 dark:text-slate-400 text-[15.5px]">We measure success by outcomes, not just delivery.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-px grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05} className="card p-7">
              <div className="flex gap-0.5 text-amber-500 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => <FiStar key={idx} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center text-xs font-mono shrink-0">{t.initials}</div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
