import { useParams, Link, Navigate } from 'react-router-dom'
import { FiArrowLeft, FiClock, FiUser } from 'react-icons/fi'
import { SEO } from '../components/ui'
import { blogPosts } from '../data'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return <Navigate to="/blog" replace />

  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <SEO title={post.title} description={post.excerpt} />

      <article className="pt-28 pb-20">
        <div className="container-px max-w-2xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-accent mb-8">
            <FiArrowLeft size={14} /> All articles
          </Link>
          <span className="font-mono text-xs text-accent uppercase">{post.category}</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold my-5 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-5 text-xs text-slate-500 dark:text-slate-500 mb-10 pb-8 border-b border-slate-200 dark:border-white/10">
            <span className="flex items-center gap-1.5"><FiUser size={12} /> {post.author} &middot; {post.authorRole}</span>
            <span className="flex items-center gap-1.5"><FiClock size={12} /> {post.readTime}</span>
            <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>

          <div className="prose-content space-y-5">
            {post.content.map((para, i) => (
              <p key={i} className="text-[15.5px] leading-relaxed text-slate-700 dark:text-slate-300">{para}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-200 dark:border-white/10">
            {post.tags.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-lg font-semibold mb-5">More on {post.category}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="card p-5 hover:border-accent transition-colors">
                    <h3 className="font-medium text-sm mb-1.5">{p.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-500">{p.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
