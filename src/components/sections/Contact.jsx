import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal } from '@/data/portfolio'
import { fadeUp, stagger } from '@/utils/animations'

const socialLinks = [
  {
    name: 'GitHub',
    href: personal.github,
    color: '#fff',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: personal.linkedin,
    color: '#0a66c2',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
{
  name: 'Instagram',
  href: personal.instagram,
  color: '#E4405F',
  icon: (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 013.95 3.95v8.5a3.95 3.95 0 01-3.95 3.95h-8.5a3.95 3.95 0 01-3.95-3.95v-8.5A3.95 3.95 0 017.75 3.8zm8.95 1.35a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2zM12 6.6A5.4 5.4 0 106 12a5.4 5.4 0 006-5.4zm0 1.8A3.6 3.6 0 118.4 12 3.6 3.6 0 0112 8.4z" />
    </svg>
  ),
},
  {
    name: 'Email',
    href: `mailto:${personal.email}`,
    color: '#8b5cf6',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

const handleSubmit = async (e) => {
  e.preventDefault()

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSdagAciZtc_hGETM1nIyetPD5rvFHXO98Gc8PNexsqNrV9DBA/formResponse"

  const formDataToSend = new FormData()

  formDataToSend.append(
    "entry.2008265284",
    formState.name
  )

  formDataToSend.append(
    "entry.35033181",
    formState.email
  )

  formDataToSend.append(
    "entry.721752183",
    formState.message
  )

  try {
    await fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formDataToSend,
    })

    const whatsappMessage = `
Name: ${formState.name}
Email: ${formState.email}

Message:
${formState.message}
`

    window.open(
      `https://wa.me/918296996668?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    )

    setSubmitted(true)
  } catch (error) {
    console.error(error)
  }
}

  return (
    <section id="contact" ref={sectionRef} className="relative px-6 py-32 overflow-hidden">
      {/* Ambient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 mx-50 max-[1000px]:mx-5">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400 mb-4">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black leading-tight text-white font-display md:text-5xl lg:text-6xl">
            Let's create something{' '}
            <span className="gradient-text">incredible</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-xl mx-auto mt-4 text-lg text-gray-400">
            Open to impactful frontend engineering opportunities. Let's talk about what we can build together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">
          {/* Left: Info panel */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {/* Availability status */}
            <motion.div variants={fadeUp} className="p-6 border glass rounded-2xl border-white/5">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex w-3 h-3">
                  <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                  <span className="relative inline-flex w-3 h-3 bg-green-400 rounded-full" />
                </span>
                <span className="text-sm font-medium text-green-400">Available for new opportunities</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Currently open to full-time frontend engineering roles where I can contribute to large-scale, impactful products with a great team.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Full-Time', 'Remote', 'Hybrid', 'Frontend', 'React'].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-full text-xs glass border border-white/8 text-gray-400">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={fadeUp} className="space-y-3">
              <a href={`mailto:${personal.email}`} className="flex items-center gap-3 p-4 border glass glass-hover rounded-xl border-white/5 group">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-purple-400 rounded-lg bg-purple-500/10">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <p className="text-sm text-white transition-colors group-hover:text-purple-300">{personal.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 border glass rounded-xl border-white/5">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-blue-400 rounded-lg bg-blue-500/10">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Location</p>
                  <p className="text-sm text-white">{personal.location} • Remote-friendly</p>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp}>
              <p className="mb-4 text-xs tracking-widest text-gray-500 uppercase">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center justify-center text-gray-400 border w-11 h-11 rounded-xl glass border-white/8"
                    whileHover={{ scale: 1.12, color: social.color, borderColor: `${social.color}50`, boxShadow: `0 0 20px ${social.color}25` }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3 }}
            className="relative p-8 overflow-hidden border glass rounded-2xl border-white/5"
          >
            <div className="absolute top-0 right-0 w-48 h-48 translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
              style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }} />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center"
              >
                <div className="mb-4 text-5xl">✅</div>
                <h3 className="mb-2 text-xl font-bold text-white font-display">Message sent!</h3>
                <p className="text-gray-400">I'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <h3 className="mb-6 text-lg font-bold text-white font-display">Send a message</h3>
                {[
                  { label: 'Name', key: 'name', type: 'text', placeholder: 'Your full name' },
                  { label: 'Email', key: 'email', type: 'email', placeholder: 'your@email.com' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label className="block mb-2 text-xs font-medium text-gray-400">{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={formState[key]}
                      onChange={(e) => setFormState((s) => ({ ...s, [key]: e.target.value }))}
                      required
                      className="w-full px-4 py-3 text-sm text-white placeholder-gray-600 transition-colors bg-transparent border rounded-xl glass border-white/8 focus:border-purple-500/50 focus:outline-none"
                    />
                  </div>
                ))}
                <div>
                  <label className="block mb-2 text-xs font-medium text-gray-400">Message</label>
                  <textarea
                    placeholder="Tell me about the role or project..."
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    required
                    className="w-full px-4 py-3 text-sm text-white placeholder-gray-600 transition-colors bg-transparent border resize-none rounded-xl glass border-white/8 focus:border-purple-500/50 focus:outline-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-purple-900/30"
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message ✦
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
