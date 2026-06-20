import { useParams, Link, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiMapPin, FiClock, FiBriefcase, FiCheckCircle } from 'react-icons/fi'
import { SEO, SectionHeading } from '../components/ui'
import { jobs } from '../data'
import ApplicationForm from '../components/contact/ApplicationForm'

export default function JobDetail() {
  const { slug } = useParams()
  const job = jobs.find((j) => j.slug === slug)
  if (!job) return <Navigate to="/careers" replace />

  return (
    <>
      <SEO title={job.title} description={job.description} />

      <section className="pt-28 pb-12 border-b border-slate-200 dark:border-white/10">
        <div className="container-px max-w-3xl">
          <Link to="/careers" className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-accent mb-8">
            <FiArrowLeft size={14} /> All open roles
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-5">{job.title}</h1>
          <div className="flex flex-wrap gap-5 text-sm text-slate-500 dark:text-slate-500 mb-6">
            <span className="flex items-center gap-1.5"><FiBriefcase size={14} /> {job.department}</span>
            <span className="flex items-center gap-1.5"><FiMapPin size={14} /> {job.location}</span>
            <span className="flex items-center gap-1.5"><FiClock size={14} /> {job.type} · {job.experience}</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-[15.5px] leading-relaxed">{job.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-px max-w-3xl grid sm:grid-cols-1 gap-12">
          <div>
            <h2 className="font-display text-xl font-semibold mb-5">Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <FiCheckCircle className="text-accent shrink-0 mt-0.5" size={16} /> {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold mb-5">Requirements</h2>
            <ul className="space-y-3">
              {job.requirements.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <FiCheckCircle className="text-accent shrink-0 mt-0.5" size={16} /> {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold mb-5">Nice to have</h2>
            <ul className="space-y-3">
              {job.niceToHave.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <FiCheckCircle className="text-accent shrink-0 mt-0.5" size={16} /> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50 dark:bg-[#0B1326] border-t border-slate-200 dark:border-white/10">
        <div className="container-px max-w-2xl mx-auto">
          <SectionHeading eyebrow="apply now" title={`Apply for ${job.title}`} center />
          <ApplicationForm jobTitle={job.title} />
        </div>
      </section>
    </>
  )
}
