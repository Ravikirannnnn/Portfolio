import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useMousePosition } from '@/hooks/useMousePosition'
import ParticleField from '@/components/effects/ParticleField'
import { personal, roles } from '@/data/portfolio'
import Strands from './Bits/Strands'

const techBadges = ['React.js', 'Framer Motion', 'Tailwind CSS', 'Redux', 'JavaScript']

const firstLine = ['R', 'A', 'V', 'I']
const secondLine = ['K', 'I', 'R', 'A', 'N']

const letterVariant = {
  hidden: { opacity: 0, y: 80, rotateX: -60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const mouse = useMousePosition()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3200)
    return () => clearInterval(id)
  }, [])

  const orbX1 = mouse.x * 0.025
  const orbY1 = mouse.y * 0.025
  const orbX2 = -mouse.x * 0.015
  const orbY2 = -mouse.y * 0.015

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden section-grid ">
      <ParticleField count={70} />
<div className="absolute inset-0 z-0 flex items-center justify-center ">
  <Strands
    colors={["#F97316", "#7C3AED", "#06B6D4"]}
    count={4}
    speed={0.5}
    amplitude={1}
    waviness={1}
    thickness={0.8}
    glow={3}
    taper={3}
    spread={.5}
    intensity={0.7}
    saturation={2}
    opacity={0.8}
    scale={1.8}
    glass={false}
    refraction={1}
    dispersion={1}
    glassSize={1}
    hueShift={0}
  />
</div>
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
            x: orbX1,
            y: orbY1,
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
            x: orbX2,
            y: orbY2,
          }}
          animate={{ scale: [1.08, 1, 1.08], opacity: [1, 0.6, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-5xl px-6 mx-auto text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: -24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8 glass border border-white/10"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
            <span className="relative inline-flex w-2 h-2 bg-green-400 rounded-full" />
          </span>
          <span className="text-sm text-gray-300">Available for opportunities</span>
          <span className="text-gray-600">•</span>
          <span className="text-sm font-medium text-purple-400">Frontend @ {personal.company}</span>
        </motion.div>

        {/* Hero name */}
        <div style={{ perspective: '1000px' }}>
          <div className="flex justify-center overflow-hidden">
            {firstLine.map((letter, i) => (
              <motion.span
                key={`first-${i}`}
                custom={i}
                variants={letterVariant}
                initial="hidden"
                animate="visible"
                className="font-black leading-none select-none font-display"
                style={{
                  fontSize: 'clamp(72px, 15vw, 160px)',
                  color: '#f8fafc',
                  letterSpacing: '-0.03em',
                  display: 'inline-block',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <div className="flex justify-center overflow-hidden">
            {secondLine.map((letter, i) => (
              <motion.span
                key={`second-${i}`}
                custom={i + 4}
                variants={letterVariant}
                initial="hidden"
                animate="visible"
                className="font-black leading-none select-none font-display"
                style={{
                  fontSize: 'clamp(72px, 15vw, 160px)',
                  background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 55%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.03em',
                  display: 'inline-block',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Animated role */}
        <div className="flex items-center justify-center h-10 mt-4 mb-3 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-medium tracking-tight text-[#f8fafc] md:text-3xl font-display"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-400"
        >
          {personal.tagline} Building with{' '}
          <span className="font-medium text-white">React.js</span>,{' '}
          <span className="font-medium text-white">motion design</span>, and a relentless focus on performance at{' '}
          <span className="font-semibold gradient-text-purple">{personal.company}</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-purple-900/40"
            whileHover={{ scale: 1.03, y: -2, boxShadow: '0 20px 40px rgba(139,92,246,0.35)' }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects ↗
          </motion.button>
          <motion.a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl glass border border-white/10 text-white font-semibold text-sm hover:border-white/20 transition-all duration-200"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Download Resume
          </motion.a>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 rounded-xl text-gray-400 hover:text-white font-semibold text-sm transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Connect →
          </motion.button>
        </motion.div>

        {/* Floating tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-2.5 mb-16"
        >
          {techBadges.map((tech, i) => (
            <motion.span
              key={tech}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.5 + i * 0.3, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
              className="px-3.5 py-1.5 rounded-full glass border border-white/8 text-gray-400 text-xs font-medium cursor-default"
              whileHover={{ borderColor: 'rgba(139,92,246,0.5)', color: '#c4b5fd', scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute flex flex-col items-center gap-2 text-gray-600 -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.span className="text-[10px] tracking-[0.3em] uppercase">scroll</motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gray-600 to-transparent"
        />
      </motion.div>
    </section>
  )
}
