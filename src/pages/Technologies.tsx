import { SEO, SectionHeading, Reveal } from '../components/ui'
import { technologies } from '../data'
import { CTASection } from '../components/home/HomeSections'

export default function Technologies() {
  return (
    <>
      <SEO title="Technologies" description="The frontend, backend, mobile, database, cloud, and DevOps technologies NextGen Technologies builds with." />

      <section className="pt-28 pb-12">
        <div className="container-px max-w-2xl">
          <span className="eyebrow block mb-3">/ technologies</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-5">The stack we work in.</h1>
          <p className="text-slate-600 dark:text-slate-400 text-[15.5px]">
            We pick the right tool for the problem, not the trend — and we stay current across the stacks our clients actually run on.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-px grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 0.05} className="card p-7">
              <h3 className="font-display font-semibold text-lg mb-5">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
