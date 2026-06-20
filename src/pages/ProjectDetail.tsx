import { useParams, Link, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi'
import { SEO, Reveal, OutlineButton } from '../components/ui'
import { projects } from '../data'
import { CTASection } from '../components/home/HomeSections'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <Navigate to="/portfolio" replace />

  return (
    <>
      <SEO title={project.title} description={project.summary} />

      <section className="pt-28 pb-12 border-b border-slate-200 dark:border-white/10">
        <div className="container-px max-w-3xl">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-accent mb-8">
            <FiArrowLeft size={14} /> All projects
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[11px] px-2.5 py-1 bg-accent/15 text-accent rounded">{project.category.toUpperCase()}</span>
            <span className="font-mono text-[11px] px-2.5 py-1 border border-slate-300 dark:border-slate-700 rounded text-slate-500">{project.status}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-5">{project.title}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-[15.5px] leading-relaxed mb-8">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            <OutlineButton href={project.githubUrl}><FiGithub size={15} /> View on GitHub</OutlineButton>
            <OutlineButton href={project.demoUrl}><FiExternalLink size={15} /> Live demo</OutlineButton>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px grid lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-xl font-semibold mb-5">Key features</h2>
            <ul className="space-y-3">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <FiCheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-xl font-semibold mb-5">Technology stack</h2>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>
            <div className="mt-8 h-48 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#0E1A33] dark:to-[#0B1326] border border-slate-200 dark:border-white/10 flex items-center justify-center">
              <span className="font-mono text-xs text-slate-400 dark:text-slate-600">SCREENSHOT PLACEHOLDER</span>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
