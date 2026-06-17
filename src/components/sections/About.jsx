import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { stats, personal } from '@/data/portfolio'
import { fadeUp, stagger, inViewConfig } from '@/utils/animations'

function CounterCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      custom={index}
      className="p-6 text-center glass glass-hover rounded-2xl group"
    >
      <motion.div
        className="mb-2 text-5xl font-black font-display"
        style={{
          background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {item.value}{item.suffix}
      </motion.div>
      <p className="text-sm font-medium text-gray-400">{item.label}</p>
    </motion.div>
  )
}

const 
milestones = [
  { year: '2019', title: 'First Line of Code', desc: 'Fell in love with JavaScript and building interactive web experiences.', color: '#8b5cf6' },
  { year: '2023', title: 'React Ecosystem', desc: 'Went deep into React, hooks, state management, and component architecture.', color: '#3b82f6' },
  { year: '2024', title: 'Hiyaak Systems', desc: 'First professional role as Intern — shipped 4 production apps to 10K+ users.', color: '#22d3ee' },
  { year: '2025', title: 'Bodsphere', desc: 'Joined as Frontend Engineer, leading UI architecture and motion design system.', color: '#34d399' },
  { year: 'Now', title: 'Elite Frontend Engineering', desc: 'Building premium products with React.js, Framer Motion, and deep performance expertise.', color: '#a78bfa' },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px' })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%'])

  return (
    <section id="about" ref={sectionRef} className="relative px-6 py-32 overflow-hidden">

      <div className="mx-50 max-[1000px]:mx-5">
        {/* Section header */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-20"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-4">
            About Me
          </motion.p>
          <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-black leading-tight text-white font-display md:text-5xl lg:text-6xl">
            Frontend engineer with a{' '}
            <span className="gradient-text">design-first</span> mindset
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 mb-20 lg:grid-cols-2">
          {/* Story */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-gray-300">
              I'm <span className="font-semibold text-white">Ravikiran</span>, a Frontend Engineer at{' '}
              <span className="font-semibold gradient-text-purple">Bodsphere</span> building premium wellness experiences that feel cinematic, perform flawlessly, and scale without limits.
            </motion.p>
            <motion.p variants={fadeUp} className="leading-relaxed text-gray-400">
              My work lives at the intersection of <span className="text-white">engineering precision</span> and{' '}
              <span className="text-white">design obsession</span>. I care deeply about micro-interactions,
              sub-100ms response times, accessible interfaces, and the kind of UX that makes users stop and say "wow".
            </motion.p>
            <motion.p variants={fadeUp} className="leading-relaxed text-gray-400">
              When I'm not shipping features, I'm deep in the React ecosystem — exploring new patterns, studying motion design,
              and contributing to the developer community.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-4">
              {['React.js', 'UI Architecture', 'Performance', 'Motion Design' , 'Cross-browser compatibility'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full glass border border-white/8 text-gray-400 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((item, i) => (
              <CounterCard key={item.label} item={item} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Developer journey timeline */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h3 variants={fadeUp} className="mb-10 text-2xl font-bold text-white font-display">
            The Journey
          </motion.h3>

          <div className="relative">
            {/* Animated vertical line */}
            <div className="absolute left-[7px] top-2 w-px h-full bg-white/5 overflow-hidden">
              <motion.div
                className="w-full bg-gradient-to-b from-purple-500 to-blue-500"
                style={{ height: lineHeight, originY: 0 }}
              />
            </div>

            <div className="pl-10 space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  variants={fadeUp}
                  className="relative group"
                >
                  {/* Dot */}
                  <motion.div
                    className="absolute -left-10 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-current transition-all duration-300"
                    style={{ color: m.color, boxShadow: `0 0 0 0 ${m.color}` }}
                    whileInView={{ boxShadow: `0 0 12px 2px ${m.color}40` }}
                    viewport={{ once: true }}
                  />
                  <div className="p-5 border glass glass-hover rounded-xl border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md" style={{ background: `${m.color}20`, color: m.color }}>
                        {m.year}
                      </span>
                      <h4 className="font-semibold text-white font-display">{m.title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
