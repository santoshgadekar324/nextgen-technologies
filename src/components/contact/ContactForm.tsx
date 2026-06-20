import { useState, FormEvent } from 'react'
import { FiSend, FiCheck } from 'react-icons/fi'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      ;(e.target as HTMLFormElement).reset()
    }, 900)
  }

  if (submitted) {
    return (
      <div className="card p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-green-500/15 text-green-500 flex items-center justify-center mx-auto mb-4">
          <FiCheck size={22} />
        </div>
        <h3 className="font-display text-xl font-semibold mb-2">Message sent</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Thanks for reaching out — we'll get back to you within one business day.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-outline text-sm">Send another message</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Company" name="company" />
      </div>
      <Field label="Subject" name="subject" required />
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className="w-full text-sm px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1A33] placeholder:text-slate-400 outline-none focus:border-accent resize-none"
        />
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto">
        {loading ? 'Sending...' : <>Send message <FiSend size={15} /></>}
      </button>
    </form>
  )
}

function Field({ label, name, type = 'text', required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}{required && <span className="text-accent"> *</span>}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full text-sm px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0E1A33] placeholder:text-slate-400 outline-none focus:border-accent"
      />
    </div>
  )
}
