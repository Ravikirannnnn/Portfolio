import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { experience } from '@/data/portfolio'
import { fadeUp, slideLeft, stagger } from '@/utils/animations'
import SpotlightCard from './Bits/SpotlightCard'

function ExperienceCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  return (
    <SpotlightCard
             spotlightColor="rgba(59, 130, 246, 0.25)"
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={stagger(0.07)}
      className="relative grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-12"
    >
      {/* Year/period column */}
      <motion.div variants={slideLeft} className="lg:text-right lg:pt-6">
        <p className="mb-1 font-mono text-xs tracking-widest text-gray-500 uppercase">{item.location}</p>
        <p className="font-semibold text-gray-300 font-display">{item.period}</p>
        {item.current && (
          <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Current
          </span>
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        variants={fadeUp}
        className="relative overflow-hidden border glass glass-hover rounded-2xl p-7 border-white/5 group"
      >
        {/* Glow accent */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
          style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3 className="mb-1 text-xl font-bold text-white font-display">{item.role}</h3>
            <p className="font-medium text-gray-400">{item.company}</p>
          </div>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-gray-400">{item.description}</p>

        {/* Achievements */}
        <ul className="mb-5 space-y-2">
          {item.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="flex items-start gap-2.5 text-sm text-gray-400"
            >
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
              {achievement}
            </motion.li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium glass border border-white/8 text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </SpotlightCard>
  )
}

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px' })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const lineH = useTransform(scrollYProgress, [0.1, 0.85], ['0%', '100%'])

  return (
    <section id="experience" ref={sectionRef} className="relative px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 mx-50 max-[1000px]:mx-5">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-4">
            Experience
          </motion.p>
          <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-black leading-tight text-white font-display md:text-5xl lg:text-6xl">
            Where I've{' '}
            <span className="gradient-text">built & shipped</span>
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute left-[200px] top-0 bottom-0 w-px ml-6 bg-white/5 overflow-hidden">
            <motion.div className="w-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500" style={{ height: lineH, originY: 0 }} />
          </div>

          <div className="space-y-12">
            {experience.map((item, i) => (
              <ExperienceCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
