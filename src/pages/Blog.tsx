import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiClock } from 'react-icons/fi'
import { SEO, Reveal } from '../components/ui'
import { blogPosts } from '../data'
import { cn } from '../lib/utils'

export default function Blog() {
  const categories = useMemo(() => ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))], [])
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? blogPosts : blogPosts.filter((p) => p.category === active)

  return (
    <>
      <SEO title="Blog" description="Engineering notes from NextGen Technologies on Java, Python, React, AI, Cloud, DevOps, and Testing." />

      <section className="pt-28 pb-12">
        <div className="container-px max-w-2xl">
          <span className="eyebrow block mb-3">/ blog</span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold mb-5">Notes from the engineering team.</h1>
          <p className="text-slate-600 dark:text-slate-400 text-[15.5px]">What we're learning while building for clients across Java, Python, React, AI, cloud, DevOps, and testing.</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-px">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)} className={cn('text-sm px-4 py-2 rounded-lg border transition-colors', active === cat ? 'bg-primary text-white border-primary' : 'border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-accent')}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.04}>
                <Link to={`/blog/${post.slug}`} className="card p-7 block h-full hover:border-accent transition-colors group">
                  <span className="font-mono text-[11px] text-accent uppercase">{post.category}</span>
                  <h3 className="font-medium text-[16.5px] my-3 leading-snug">{post.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                    <span className="flex items-center gap-1.5"><FiClock size={12} /> {post.readTime}</span>
                    <span className="text-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read <FiArrowRight size={13} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
