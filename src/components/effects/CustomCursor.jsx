import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { stiffness: 180, damping: 28 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const dotX = useSpring(mouseX, { stiffness: 500, damping: 40 })
  const dotY = useSpring(mouseY, { stiffness: 500, damping: 40 })

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleEnter = () => {
      cursorRef.current?.classList.add('scale-150', 'bg-purple-500/20', 'border-purple-400/60')
    }
    const handleLeave = () => {
      cursorRef.current?.classList.remove('scale-150', 'bg-purple-500/20', 'border-purple-400/60')
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-10 h-10 rounded-full border border-white/20 transition-all duration-200"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-purple-400"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}
