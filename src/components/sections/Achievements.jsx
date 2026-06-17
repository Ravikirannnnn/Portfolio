import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { achievements } from '@/data/portfolio'
import { fadeUp, stagger } from '@/utils/animations'
import SpotlightCard from './Bits/SpotlightCard'

function AchievementCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden border glass glass-hover rounded-2xl p-7 border-white/5 group"
      whileHover={{ y: -6 }}
      style={{ willChange: 'transform' }}
    >
      {/* Corner glow */}
      <motion.div
        className="absolute w-32 h-32 transition-opacity duration-500 rounded-full opacity-0 -top-12 -right-12 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle, ${item.color}30 0%, transparent 70%)` }}
      />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 h-px rounded-full"
        style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
        initial={{ width: 0 }}
        animate={isInView ? { width: '60%' } : {}}
        transition={{ duration: 0.8, delay: index * 0.07 + 0.3 }}
      />

      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{item.icon}</span>
        <motion.span
          className="px-3 py-1 font-mono text-sm font-bold rounded-full"
          style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
          whileHover={{ scale: 1.05 }}
        >
          {item.metric}
        </motion.span>
      </div>

      <h3 className="mb-3 text-lg font-bold leading-tight text-white font-display">{item.title}</h3>
      <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
    </motion.div>
  )
}

export default function Achievements() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px' })

  return (
    <section id="achievements" ref={sectionRef} className="relative px-6 py-32 overflow-hidden">
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-8 -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }} />
      </div> */}

      <div className="relative z-10 mx-50 max-[1000px]:mx-5">
        {/* <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4">
            Achievements
          </motion.p>
          <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-black leading-tight text-white font-display md:text-5xl lg:text-6xl">
            Impact that{' '}
            <span className="gradient-text">ships to production</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl mt-4 text-lg text-gray-400">
            Every metric here is real, every achievement earned in production environments with real users.
          </motion.p>
        </motion.div> */}

        {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div> */}

        {/* CTA banner */}
        <SpotlightCard
             spotlightColor="rgba(59, 130, 246, 0.25)"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.6 }}
          className="relative mt-16 overflow-hidden rounded-3xl"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(59,130,246,0.15) 100%)', border: '1px solid rgba(139,92,246,0.2)' }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 w-64 h-64 rounded-full left-1/4 opacity-20"
              style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 w-64 h-64 rounded-full right-1/4 opacity-20"
              style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
          </div>
          <div className="relative z-10 px-10 py-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-3">Ready to collaborate</p>
            <h3 className="mb-4 text-3xl font-black text-white font-display md:text-4xl">
              Let's build something{' '}
              <span className="gradient-text">extraordinary together</span>
            </h3>
            <p className="max-w-xl mx-auto mb-8 text-gray-400">
              Open to impactful frontend engineering opportunities where I can contribute to products that millions of people use.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-900/40 transition-colors"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch ✦
              </motion.button>
              <motion.a
                href="mailto:ravikiranrta@gmail.com"
                className="px-8 py-3.5 rounded-xl glass border border-white/10 text-gray-300 hover:text-white font-semibold transition-colors"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                ravikiranrta@gmail.com
              </motion.a>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
