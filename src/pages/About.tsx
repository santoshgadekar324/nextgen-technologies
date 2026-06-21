import { FiZap, FiAward, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi'
import { SEO, SectionHeading, Reveal } from '../components/ui'
import { coreValues, team, stats } from '../data'
import { CTASection } from '../components/home/HomeSections'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  FiZap, FiAward, FiShield, FiTrendingUp, FiUsers,
}

export default function About() {
  return (
    <>
      <SEO title="About us" description="Learn about NextGen Technologies — our mission, vision, core values, and the team building enterprise software, mobile apps, AI, and cloud solutions." />

      <section className="section pt-28">
        <div className="container-px max-w-3xl">
          <span className="eyebrow block mb-3">/ about us</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-6">Building technology partners stay with.</h1>
          <p className="text-slate-600 dark:text-slate-400 text-[15.5px] leading-relaxed">
            NextGen Technologies is a software, mobile, AI, and cloud engineering company based in Maharashtra, India. We work with
            startups and enterprises who need a technology partner that can own a problem end-to-end — not just fill a staffing gap.
            Since taking on our first client projects, we've grown into a team that designs, builds, ships, and supports software
            across a wide range of industries, from fintech to healthcare to retail.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-px grid sm:grid-cols-2 gap-6">
          <div className="card p-8">
            <span className="eyebrow block mb-3">mission</span>
            <p className="text-lg font-display font-medium">Provide innovative, scalable, and reliable technology solutions.</p>
          </div>
          <div className="card p-8">
            <span className="eyebrow block mb-3">vision</span>
            <p className="text-lg font-display font-medium">Become a globally recognized technology partner.</p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-[#0B1326] border-y border-slate-200 dark:border-white/10">
        <div className="container-px">
          <SectionHeading eyebrow="core values" title="What guides how we work" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {coreValues.map((v, i) => {
              const Icon = iconMap[v.icon]
              return (
                <Reveal key={v.title} delay={i * 0.05} className="card p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-medium text-[15px] mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{v.description}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-20">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-mono text-2xl sm:text-3xl font-medium text-accent">{s.value}</div>
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>

        <SectionHeading eyebrow="leadership" title="The team behind NextGen" description="A senior team, not a rotating cast of contractors." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.04} className="text-center">
<img
  src="/team/dnyaneshwari.jpeg"
  alt="Dnyaneshwari"
  className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
/>
              <div className="text-sm font-medium">{m.name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-500">{m.role}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
