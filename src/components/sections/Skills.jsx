import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/data/portfolio'
import { fadeUp, stagger } from '@/utils/animations'
import SpotlightCard from './Bits/SpotlightCard'

function SkillBar({ name, level, icon, index, color }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">{name}</span>
        </div>
        <span className="font-mono text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}
const recruiterHighlights = [
  {
    icon: '⚛️',
    title: 'React Ecosystem Expert',
    desc: 'Deep React.js, hooks, context, component architecture, state management with Redux, and API integration.'
  },
  {
    icon: '🚀',
    title: 'Performance First',
    desc: 'Code splitting, lazy loading, efficient rendering, bundle optimization, and responsive user experiences.'
  },
  {
    icon: '🔄',
    title: 'State Management',
    desc: 'Redux, Context API, async data handling, global state organization, and scalable application architecture.'
  },
  {
    icon: '🎨',
    title: 'Modern UI Development',
    desc: 'Tailwind CSS, Material UI, Bootstrap, responsive layouts, reusable components, and pixel-perfect interfaces.'
  },
  {
    icon: '🔌',
    title: 'API Integration',
    desc: 'REST API integration, authentication flows, data fetching, error handling, and seamless frontend-backend communication.'
  },
  {
    icon: '📐',
    title: 'UI Architecture',
    desc: 'Reusable component design, scalable folder structures, clean code practices, and maintainable frontend applications.'
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px' })

  const hexToRgba = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
  return (
    <section id="skills" ref={sectionRef} className="relative px-6 py-32 overflow-hidden">
      {/* bg accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-10"
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
            Tech Stack
          </motion.p>
          <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-black leading-tight text-white font-display md:text-5xl lg:text-6xl">
            Tools that turn{' '}
            <span className="gradient-text">ideas into reality</span>
          </motion.h2>
        </motion.div>

        {/* Skill categories grid */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-6 mb-20 md:grid-cols-2 xl:grid-cols-4"
        >
          {skills.map((category) => (
            <SpotlightCard
             spotlightColor={hexToRgba(category.color, 0.4)}
              key={category.category}
              variants={fadeUp}
              className="p-6 border glass glass-hover rounded-2xl border-white/5"
            >
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: category.color, boxShadow: `0 0 8px ${category.color}` }} />
                <h3 className="text-sm font-semibold tracking-wide text-white uppercase font-display">{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    index={i}
                    color={category.color}
                  />
                ))}
              </div>
            </SpotlightCard>
          ))}
        </motion.div>

        {/* Recruiter highlight cards */}
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h3 variants={fadeUp} className="mb-8 text-2xl font-bold text-white font-display">
            What I bring to your team
          </motion.h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recruiterHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="p-5 border glass glass-hover rounded-2xl border-white/5 group"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="text-sm font-semibold text-white transition-all font-display group-hover:gradient-text">{item.title}</h4>
                </div>
                <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
