import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'
import { SEO } from '../components/ui'
import ContactForm from '../components/contact/ContactForm'

export default function Contact() {
  return (
    <>
      <SEO title="Contact" description="Get in touch with NextGen Technologies — phone, email, location, and a project inquiry form." />

      <section className="pt-28 pb-16">
        <div className="container-px max-w-2xl">
          <span className="eyebrow block mb-3">/ contact</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-5">Let's talk about your project.</h1>
          <p className="text-slate-600 dark:text-slate-400 text-[15.5px]">
            Tell us what you're building and we'll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-px grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="card p-7 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 flex items-center justify-center shrink-0">
                  <FiPhone size={16} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mb-0.5">Phone</div>
                  <a href="tel:+919022539573" className="text-sm font-medium hover:text-accent">+91 9022539573</a>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 flex items-center justify-center shrink-0">
                  <FiMail size={16} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mb-0.5">Email</div>
                  <a href="mailto:info@nextgentechnologies.in" className="text-sm font-medium hover:text-accent">info@nextgentechnologies.in</a>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-300 flex items-center justify-center shrink-0">
                  <FiMapPin size={16} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mb-0.5">Location</div>
                  <span className="text-sm font-medium">Maharashtra, India</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919022539573"
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center gap-3.5 hover:border-accent transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.3 9 9.8 7.8 9.6 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .9.9-2.9-.2-.3A8.2 8.2 0 1112 20.2z"/></svg>
              </div>
              <div>
                <div className="text-sm font-medium">Chat on WhatsApp</div>
                <div className="text-xs text-slate-500 dark:text-slate-500">Usually replies within an hour</div>
              </div>
            </a>

            <div className="card p-5">
              <div className="text-xs text-slate-500 dark:text-slate-500 mb-3">Follow us</div>
              <div className="flex gap-2.5">
                {[FiLinkedin, FiTwitter, FiGithub, FiInstagram].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social link" className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-accent hover:text-accent transition-colors">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div className="card overflow-hidden h-56">
              <iframe
                title="NextGen Technologies location"
                src="https://maps.google.com/maps?q=Maharashtra,India&t=&z=8&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale dark:invert dark:opacity-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
