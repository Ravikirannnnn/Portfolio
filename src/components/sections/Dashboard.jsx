import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { dashboardStats } from '@/data/portfolio'
import { fadeUp, stagger } from '@/utils/animations'
import SpotlightCard from './Bits/SpotlightCard'

function AnimatedCounter({ to, suffix, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = to / (duration * 60)
    const id = setInterval(() => {
      start += step
      if (start >= to) { setCount(to); clearInterval(id) }
      else setCount(Math.floor(start))
    }, 1000 / 60)
    return () => clearInterval(id)
  }, [isInView, to, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

function CircleProgress({ value, color, size = 80 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const r = 32
  const circumference = 2 * Math.PI * r

  return (
    <svg ref={ref} width={size} height={size} viewBox="0 0 80 80" className="rotate-[-90deg]">
      <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
      <motion.circle
        cx="40" cy="40" r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={isInView ? { strokeDashoffset: circumference * (1 - value / 100) } : {}}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      />
    </svg>
  )
}

const gameBadges = [
  { icon: '🏆', title: 'Performance Master', desc: '30% load optimization', rarity: 'Legendary', color: '#f59e0b' },
  { icon: '⚛️', title: 'React Architect', desc: '200+ components built', rarity: 'Epic', color: '#8b5cf6' },
  { icon: '✦', title: 'Motion Wizard', desc: 'Framer Motion expert', rarity: 'Rare', color: '#3b82f6' },
  { icon: '🔥', title: 'Cross-browser Compatibility', desc: 'Realtime systems', rarity: 'Epic', color: '#f97316' },
  { icon: '🌐', title: 'API Integrator', desc: '15+ integrations', rarity: 'Epic', color: '#22d3ee' },
  { icon: '📐', title: 'UI Architect', desc: 'Design system builder', rarity: 'Legendary', color: '#34d399' },
]

const rarityColors = { Legendary: '#f59e0b', Epic: '#8b5cf6', Rare: '#3b82f6' }

const levelSkills = [
  { name: 'React.js', level: 95, color: '#61dbfb' },
  { name: 'REST APIs', level: 90, color: '#8b5cf6' },
  { name: 'Performance', level: 88, color: '#22d3ee' },
  { name: 'JavaScript', level: 82, color: '#3178c6' },
]

export default function Dashboard() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px' })

  return (
    <section ref={sectionRef} className="relative px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-50 pointer-events-none section-grid" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 mx-50 max-[1000px]:mx-5">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-4">
            Developer Stats
          </motion.p>
          <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-black leading-tight text-white font-display md:text-5xl lg:text-6xl">
            Leveling up,{' '}
            <span className="gradient-text">one commit at a time</span>
          </motion.h2>
        </motion.div>

        {/* Stat counter cards */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 gap-4 mb-10 lg:grid-cols-4"
        >
          {dashboardStats.map((stat, i) => (
            <SpotlightCard
             spotlightColor="rgba(34, 211, 238, 0.2)"
              key={stat.label}
              variants={fadeUp}
              className="relative p-6 overflow-hidden text-center border glass glass-hover rounded-2xl border-white/5 group"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <motion.div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />
              <div className="mb-3 text-3xl">{stat.icon}</div>
              <div className="mb-1 text-3xl font-black font-display" style={{ color: stat.color }}>
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs font-medium text-gray-500">{stat.label}</p>
            </SpotlightCard>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 mb-10 lg:grid-cols-2">
          {/* Level progress */}
          <SpotlightCard
             spotlightColor="rgba(168, 85, 247, 0.25)"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="border glass rounded-2xl p-7 border-white/5"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="mb-1 text-xs tracking-widest text-gray-500 uppercase">Current Level</p>
                <h3 className="text-2xl font-bold text-white font-display">Senior Frontend Dev</h3>
              </div>
              <div className="relative">
                <CircleProgress value={78} color="#8b5cf6" />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white font-display">78%</span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-2 text-xs">
                <span className="text-gray-500">XP Progress</span>
                <span className="font-mono text-purple-400">9,400 / 12,000 XP</span>
              </div>
              <div className="h-2.5 rounded-full bg-white/5 overflow-hidden relative">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)' }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '78%' } : {}}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-white/5" />
              </div>
            </div>

            <div className="space-y-3">
              {levelSkills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-400">{skill.name}</span>
                    <span className="font-mono" style={{ color: skill.color }}>{skill.level}</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: skill.color }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Achievement badges */}
          <SpotlightCard
             spotlightColor="rgba(34, 211, 238, 0.25)"
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="border glass rounded-2xl p-7 border-white/5"
          >
            <h3 className="mb-6 text-lg font-bold text-white font-display">Achievement Badges</h3>
            <div className="grid grid-cols-2 gap-3">
              {gameBadges.map((badge, i) => (
                <motion.div
                  key={badge.title}
                  className="p-3 border cursor-default rounded-xl group"
                  style={{ background: `${badge.color}08`, borderColor: `${badge.color}20` }}
                  whileHover={{ scale: 1.04, borderColor: `${badge.color}50`, boxShadow: `0 0 20px ${badge.color}20` }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{badge.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: rarityColors[badge.rarity] }}>
                      {badge.rarity}
                    </span>
                  </div>
                  <p className="text-white text-xs font-semibold leading-tight mb-0.5">{badge.title}</p>
                  <p className="text-gray-600 text-[11px]">{badge.desc}</p>
                </motion.div>
              ))}
            </div>
          </SpotlightCard>
          
        </div>
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
