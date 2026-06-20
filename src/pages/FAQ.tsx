import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { SEO } from '../components/ui'
import { faqs } from '../data'
import { CTASection } from '../components/home/HomeSections'
import { cn } from '../lib/utils'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <SEO title="FAQ" description="Frequently asked questions about working with NextGen Technologies." />

      <section className="pt-28 pb-16">
        <div className="container-px max-w-2xl mx-auto">
          <span className="eyebrow block mb-3 text-center">/ faq</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-12 text-center">Frequently asked questions.</h1>

          <div className="space-y-3">
            {faqs.map((f, i) => {
              const open = openIndex === i
              return (
                <div key={f.question} className="card overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-[15px]">{f.question}</span>
                    <FiChevronDown className={cn('shrink-0 text-slate-400 transition-transform', open && 'rotate-180')} size={18} />
                  </button>
                  {open && (
                    <div className="px-6 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {f.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
