import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import { PrimaryButton, OutlineButton } from '../ui'

function MeshCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lineColor = theme === 'dark' ? '6,182,212' : '37,99,235'
    const baseAlpha = theme === 'dark' ? 0.5 : 0.14
    let w = 0
    let h = 0
    let nodes: { x: number; y: number; vx: number; vy: number }[] = []
    let frameId = 0

    function resize() {
      const parent = canvas!.parentElement
      if (!parent) return
      w = canvas!.width = parent.offsetWidth
      h = canvas!.height = parent.offsetHeight
      const count = Math.max(16, Math.floor(w / 95))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)
      const maxDist = 150
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (!reduceMotion) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > w) n.vx *= -1
          if (n.y < 0 || n.y > h) n.vy *= -1
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j]
          const dx = n.x - m.x
          const dy = n.y - m.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            ctx!.strokeStyle = `rgba(${lineColor}, ${baseAlpha * (1 - dist / maxDist)})`
            ctx!.lineWidth = 1
            ctx!.beginPath()
            ctx!.moveTo(n.x, n.y)
            ctx!.lineTo(m.x, m.y)
            ctx!.stroke()
          }
        }
      }
      for (const n of nodes) {
        ctx!.fillStyle = `rgba(${lineColor}, 0.85)`
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, 1.6, 0, Math.PI * 2)
        ctx!.fill()
      }
      if (!reduceMotion) frameId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-light dark:bg-bg-dark pt-24 pb-16 sm:pt-32 sm:pb-20">
      <MeshCanvas />
      <div className="container-px relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" />
            Available for new projects — Pune Maharashtra, India
          </span>
          <h1 className="font-display font-semibold text-[2.2rem] leading-[1.1] sm:text-5xl lg:text-6xl mb-6">
            Transforming ideas into <span className="text-accent">digital solutions.</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-9">
            NextGen Technologies designs, builds, and ships software, mobile apps, AI systems, and cloud infrastructure for companies that can't afford to get it wrong.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <PrimaryButton to="/contact">
              Start a project <FiArrowRight size={16} />
            </PrimaryButton>
            <OutlineButton to="/portfolio">See our work</OutlineButton>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Trusted by teams across fintech, healthcare, Businesss, retail, and logistics
          </p>
        </motion.div>
      </div>
    </section>
  )
}
