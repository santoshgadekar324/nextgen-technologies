import { useState, FormEvent } from 'react'
import { FiUpload, FiCheck, FiFile } from 'react-icons/fi'
import { jobs } from '../../data'

export default function ApplicationForm({ jobTitle }: { jobTitle?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      ;(e.target as HTMLFormElement).reset()
      setFileName('')
    }, 900)
  }

  if (submitted) {
    return (
      <div className="card p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-green-500/15 text-green-500 flex items-center justify-center mx-auto mb-4">
          <FiCheck size={22} />
        </div>
        <h3 className="font-display text-xl font-semibold mb-2">Application received</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Thanks for applying — our recruiting team reviews every application and will be in touch if there's a fit.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-outline text-sm">Submit another application</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">Full name <span className="text-accent">*</span></label>
          <input required name="name" className="w-full text-sm px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1A33] outline-none focus:border-accent" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email <span className="text-accent">*</span></label>
          <input required type="email" name="email" className="w-full text-sm px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1A33] outline-none focus:border-accent" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input type="tel" name="phone" className="w-full text-sm px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1A33] outline-none focus:border-accent" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Position <span className="text-accent">*</span></label>
          <select
            required
            name="position"
            defaultValue={jobTitle || ''}
            className="w-full text-sm px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1A33] outline-none focus:border-accent"
          >
            <option value="" disabled>Select a role</option>
            {jobs.map((j) => (
              <option key={j.slug} value={j.title}>{j.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Resume / CV <span className="text-accent">*</span></label>
        <label className="flex items-center gap-3 text-sm px-4 py-3.5 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 cursor-pointer hover:border-accent transition-colors">
          {fileName ? <FiFile className="text-accent shrink-0" size={16} /> : <FiUpload className="text-slate-400 shrink-0" size={16} />}
          <span className="text-slate-600 dark:text-slate-400 truncate">{fileName || 'Click to upload your resume (PDF, DOC — max 5MB)'}</span>
          <input
            required
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Cover note</label>
        <textarea
          name="note"
          rows={4}
          placeholder="Anything you'd like us to know..."
          className="w-full text-sm px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1A33] placeholder:text-slate-400 outline-none focus:border-accent resize-none"
        />
      </div>

      <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto">
        {loading ? 'Submitting...' : 'Submit application'}
      </button>
    </form>
  )
}
