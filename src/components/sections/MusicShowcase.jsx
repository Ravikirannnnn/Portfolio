import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { musicTracks } from '@/data/portfolio'
import { fadeUp, stagger } from '@/utils/animations'

const BAR_COUNT = 28

function Visualizer({ isPlaying, color }) {
  return (
    <div className="flex items-end gap-[2px] h-10">
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <motion.div
          key={i}
          className="flex-shrink-0 w-1 rounded-sm"
          style={{ background: color || '#8b5cf6' }}
          animate={
            isPlaying
              ? {
                  height: ['30%', `${40 + Math.random() * 60}%`, '20%', `${50 + Math.random() * 50}%`, '30%'],
                  opacity: [0.7, 1, 0.7, 1, 0.7],
                }
              : { height: '20%', opacity: 0.3 }
          }
          transition={{
            duration: 0.6 + Math.random() * 0.4,
            delay: i * 0.025,
            repeat: isPlaying ? Infinity : 0,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function ProgressBar({ isPlaying }) {
  const [progress, setProgress] = useState(38)

  useEffect(() => {
    if (!isPlaying) return
    const id = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 0.3)), 200)
    return () => clearInterval(id)
  }, [isPlaying])

  return (
    <div>
      <div className="relative h-1 rounded-full cursor-pointer bg-white/10 group">
        <motion.div
          className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
          style={{ width: `${progress}%` }}
        />
        <motion.div
          className="absolute w-3 h-3 transition-opacity -translate-y-1/2 bg-white rounded-full shadow-lg opacity-0 top-1/2 group-hover:opacity-100"
          style={{ left: `${progress}%`, translateX: '-50%' }}
        />
      </div>
      <div className="flex justify-between mt-1.5 text-[11px] text-gray-500 font-mono">
        <span>{Math.floor((progress / 100) * 267 / 60)}:{String(Math.floor((progress / 100) * 267) % 60).padStart(2, '0')}</span>
        <span>4:27</span>
      </div>
    </div>
  )
}

const archCards = [
  {
    icon: '📡',
    title: 'Streaming Architecture',
    desc: 'Adaptive bitrate streaming with Firebase Storage, CDN edge caching, and progressive buffer management for zero-interruption playback.',
    color: '#8b5cf6',
  },
  {
    icon: '🔄',
    title: 'Audio Synchronization',
    desc: 'Cross-tab sync via BroadcastChannel API, Web Audio API for precise timing, WebSocket-based multi-user listen-together sessions.',
    color: '#3b82f6',
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    desc: 'Preloading next tracks, Web Workers for waveform processing, AudioContext pooling, and lazy-loaded album art with intersection observers.',
    color: '#22d3ee',
  },
]

export default function MusicShowcase() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '0px' })
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeTrack, setActiveTrack] = useState(0)
  const [volume, setVolume] = useState(72)

  const track = musicTracks[activeTrack]

  return (
    <section id="music" ref={sectionRef} className="relative px-6 py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 mx-50 max-[1000px]:mx-5">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4">
            Music System
          </motion.p>
          <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-black leading-tight text-white font-display md:text-5xl lg:text-6xl">
            Spotify-style streaming{' '}
            <span className="gradient-text">architecture</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl mt-4 text-gray-400">
            Built for Bodsphere — a production-grade music streaming system with realtime sync, adaptive playback, and immersive visualizations.
          </motion.p>
        </motion.div>

        {/* Player UI */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-10 overflow-hidden border glass rounded-3xl border-white/8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr]">
            {/* Track list */}
            <div className="p-6 border-r border-white/5">
              <h4 className="mb-5 text-xs font-semibold tracking-widest text-gray-500 uppercase">Playlist</h4>
              <div className="space-y-1">
                {musicTracks.map((t, i) => (
                  <motion.button
                    key={t.id}
                    onClick={() => { setActiveTrack(i); setIsPlaying(true) }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                      activeTrack === i ? 'bg-white/8 text-white' : 'text-gray-400 hover:text-white hover:bg-white/4'
                    }`}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    {/* Album color swatch */}
                    <motion.div
                      className="flex items-center justify-center flex-shrink-0 text-sm rounded-lg w-9 h-9"
                      style={{ background: `${t.color}20`, border: `1px solid ${t.color}30` }}
                      animate={activeTrack === i && isPlaying ? { rotate: [0, 360] } : { rotate: 0 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    >
                      {activeTrack === i && isPlaying ? (
                        <div className="flex items-end gap-[2px] h-4">
                          {[0, 1, 2].map((b) => (
                            <motion.div key={b} className="w-0.5 rounded-sm" style={{ background: t.color }}
                              animate={{ height: ['30%', '80%', '45%', '30%'] }}
                              transition={{ duration: 0.6, delay: b * 0.15, repeat: Infinity }}
                            />
                          ))}
                        </div>
                      ) : '♪'}
                    </motion.div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{t.title}</p>
                      <p className="text-xs text-gray-500 truncate">{t.artist}</p>
                    </div>
                    <span className="ml-auto font-mono text-xs text-gray-600">{t.duration}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Main player */}
            <div className="flex flex-col items-center justify-between p-8">
              {/* Album art */}
              <div className="relative mb-6">
                <motion.div
                  className="relative flex items-center justify-center w-40 h-40 overflow-hidden text-5xl rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${track.color}40, ${track.color}10)`, border: `1px solid ${track.color}30` }}
                  animate={isPlaying ? { rotate: [0, 2, -2, 0], scale: [1, 1.02, 1] } : {}}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span>🎵</span>
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                    animate={isPlaying ? { opacity: [0.3, 0.7, 0.3] } : { opacity: 0.3 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
                {/* Glow */}
                {isPlaying && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl -z-10 blur-2xl"
                    style={{ background: `${track.color}40` }}
                    animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </div>

              {/* Track info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTrack}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-5 text-center"
                >
                  <h3 className="text-lg font-bold text-white font-display">{track.title}</h3>
                  <p className="text-sm text-gray-400">{track.artist}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{track.album}</p>
                </motion.div>
              </AnimatePresence>

              {/* Visualizer */}
              <div className="flex justify-center w-full mb-5">
                <Visualizer isPlaying={isPlaying} color={track.color} />
              </div>

              {/* Progress */}
              <div className="w-full mb-5">
                <ProgressBar isPlaying={isPlaying} />
              </div>

              {/* Controls */}
              <div className="flex items-center gap-6">
                <motion.button
                  className="text-gray-500 transition-colors hover:text-white"
                  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTrack((i) => (i - 1 + musicTracks.length) % musicTracks.length)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
                  </svg>
                </motion.button>

                <motion.button
                  className="flex items-center justify-center text-white rounded-full shadow-lg w-14 h-14"
                  style={{ background: `linear-gradient(135deg, ${track.color}, ${track.color}99)`, boxShadow: `0 0 30px ${track.color}40` }}
                  whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </motion.button>

                <motion.button
                  className="text-gray-500 transition-colors hover:text-white"
                  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTrack((i) => (i + 1) % musicTracks.length)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18l8.5-6L6 6v12zm2.5-6 5.5-4v8l-5.5-4zM16 6h2v12h-2z" />
                  </svg>
                </motion.button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-3 mt-5 w-full max-w-[200px]">
                <svg className="flex-shrink-0 w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
                <input
                  type="range" min="0" max="100" value={volume}
                  onChange={(e) => setVolume(+e.target.value)}
                  className="flex-1 h-1 accent-purple-500"
                  style={{ accentColor: track.color }}
                />
              </div>
            </div>

            {/* Queue / info panel */}
            <div className="p-6 border-l border-white/5">
              <h4 className="mb-5 text-xs font-semibold tracking-widest text-gray-500 uppercase">Up Next</h4>
              <div className="space-y-3">
                {musicTracks.slice(activeTrack + 1).concat(musicTracks.slice(0, activeTrack)).slice(0, 4).map((t) => (
                  <div key={t.id} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg" style={{ background: `${t.color}20`, border: `1px solid ${t.color}20` }}>
                      <div className="flex items-center justify-center w-full h-full text-xs rounded-lg">♪</div>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-gray-300 truncate">{t.title}</p>
                      <p className="text-[11px] text-gray-600 truncate">{t.artist}</p>
                    </div>
                    <span className="font-mono text-[11px] text-gray-600 ml-auto">{t.duration}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 mt-8 border-t border-white/5">
                <h4 className="mb-4 text-xs font-semibold tracking-widest text-gray-500 uppercase">Session Stats</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Buffer Size', value: '4 chunks', color: '#8b5cf6' },
                    { label: 'Bitrate', value: '320 kbps', color: '#3b82f6' },
                    { label: 'Latency', value: '< 50ms', color: '#22d3ee' },
                    { label: 'Sync Status', value: isPlaying ? 'Active' : 'Idle', color: '#34d399' },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">{s.label}</span>
                      <span className="font-mono text-xs font-medium" style={{ color: s.color }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Architecture cards */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {archCards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="p-6 border glass glass-hover rounded-2xl border-white/5"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <span className="block mb-4 text-2xl">{card.icon}</span>
              <h4 className="mb-2 text-sm font-bold text-white font-display">{card.title}</h4>
              <p className="text-sm leading-relaxed text-gray-500">{card.desc}</p>
              <div className="h-px mt-4" style={{ background: `linear-gradient(90deg, ${card.color}40, transparent)` }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
