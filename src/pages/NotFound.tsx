import { SEO, PrimaryButton } from '../components/ui'

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" description="The page you're looking for doesn't exist." />
      <section className="min-h-[70vh] flex items-center justify-center pt-20">
        <div className="text-center container-px">
          <div className="font-mono text-7xl font-semibold text-accent mb-4">404</div>
          <h1 className="font-display text-2xl font-semibold mb-4">This page doesn't exist.</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">The link might be broken, or the page may have moved.</p>
          <PrimaryButton to="/">Back to home</PrimaryButton>
        </div>
      </section>
    </>
  )
}
