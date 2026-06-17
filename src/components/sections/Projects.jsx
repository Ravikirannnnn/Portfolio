import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { projects,personalProjects } from '@/data/portfolio'
import { fadeUp, stagger } from '@/utils/animations'
import SpotlightCard from './Bits/SpotlightCard'

function ProjectCard({ project, index, featured }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })
  const [hovered, setHovered] = useState(false)

  return (
        <SpotlightCard

             spotlightColor={project.color}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative rounded-2xl overflow-hidden border border-white/5 group cursor-pointer ${
        featured ? 'col-span-1 md:col-span-2' : 'col-span-1'
      }`}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
      <div className="absolute inset-0 glass" />

      {/* Glow on hover */}
      <motion.div
        className="absolute inset-0 transition-all duration-300 rounded-2xl"
        animate={{ boxShadow: hovered ? `0 0 60px ${project.color}20, 0 0 0 1px ${project.color}30` : '0 0 0 0 transparent' }}
      />

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{ background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)` }} />

      <div className="relative z-10 p-7 flex flex-col h-full min-h-[260px]">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full" style={{ background: project.color }} />
              <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">{project.subtitle}</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display md:text-2xl">{project.title}</h3>
          </div>
          <div className="flex gap-2 transition-opacity opacity-0 group-hover:opacity-100">
            {project.github !== '#' && (
              <motion.a
                href={project.github}
                className="flex items-center justify-center w-8 h-8 text-gray-400 transition-colors border rounded-lg glass border-white/10 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                className="flex items-center justify-center w-8 h-8 text-gray-400 transition-colors border rounded-lg glass border-white/10 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="flex-1 mb-5 text-sm leading-relaxed text-gray-400">
          {hovered ? project.longDescription : project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium glass border border-white/8 text-gray-400"
              style={{ borderColor: hovered ? `${project.color}30` : undefined }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px' })
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
   const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prev =
    (active - 1 + projects.length) % projects.length;
  const next =
    (active + 1) % projects.length;


  return (
    <section id="projects" ref={sectionRef} className="relative px-6 py-32 overflow-hidden">
      <div className="mx-50
      max-[1000px]:mx-5">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-4">
            Projects
          </motion.p>
          <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-black leading-tight text-white font-display md:text-5xl lg:text-6xl">
            Things I've{' '}
            <span className="gradient-text">designed & built</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl mt-4 text-lg text-gray-400">
            Hover cards to reveal the full story. Click links to explore.
          </motion.p>
        </motion.div>

        {/* Featured projects – 2-col */}
        <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured={false} />
          ))}
        </div>

        {/* Other projects – 3-col */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured={false} />
          ))}
        </div>

<section className="mt-32">
  <div className="text-center mb-14">
    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4">
      Personal Projects
    </p>

    <h2 className="text-4xl md:text-5xl font-black text-white">
      Side Projects & Experiments
    </h2>

    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
      Projects built outside of work to explore ideas,
      improve engineering skills, and experiment with new technologies.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6">
    {personalProjects.map((project, index) => (
      <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-2xl">
            {project.icon}
          </div>

          <h3 className="text-xl font-bold text-white mb-3">
            {project.title}
          </h3>

          <p className="text-gray-400 mb-5 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">

  <div className="flex flex-wrap gap-2">

    {/* Wedding Project - Show 3 Sites */}
    {project.websites?.map((site, idx) => (
      <motion.a
        key={site.name}
        href={site.url}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-pink-500/20 bg-pink-500/10 text-pink-300 text-xs font-medium hover:bg-pink-500/20 transition-all"
      >
        <span>
          {idx === 0 ? '💍' : idx === 1 ? '💒' : '❤️'}
        </span>

        <span>
          Site {idx + 1}
        </span>
      </motion.a>
    ))}

    {/* Github */}
   {project.github !== '#' && (
              <motion.a
                href={project.github}
                className="flex items-center justify-center w-8 h-8 text-gray-400 transition-colors border rounded-lg glass border-white/10 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                className="flex items-center justify-center w-8 h-8 text-gray-400 transition-colors border rounded-lg glass border-white/10 hover:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            )}
  </div>

  <span className="text-cyan-400 text-sm font-medium">
    View Project →
  </span>

</div>
        </div>
      </motion.div>
    ))}
  </div>
</section>
      </div>


    </section>
  )
}
