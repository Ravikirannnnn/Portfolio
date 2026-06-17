import CustomCursor from '@/components/effects/CustomCursor'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import MusicShowcase from '@/components/sections/MusicShowcase'
import Dashboard from '@/components/sections/Dashboard'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import TiltedCard from './components/sections/Bits/TiltedCard'

export default function App() {
  return (
    
    <div className="relative min-h-screen bg-[#050509] text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />

        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <MusicShowcase />/ */}
        <Dashboard />
        {/* <Achievements /> */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
  <div className="container mx-50  ">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Content */}
      <div className="space-y-8">

        <div>
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300">
            ✦ Frontend Developer • React Specialist
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Building
            <span className="block bg-gradient-to-r from-fuchsia-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Exceptional
            </span>
            Digital Experiences
          </h1>

          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Frontend Developer with 1.6+ years of experience creating
            high-performance web applications using React, MERN,
            JavaScript, and modern UI technologies.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Node.js"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* <div className="flex gap-4 pt-4">
          <button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition">
            View Projects
          </button>

          <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
            Contact Me
          </button>
        </div> */}

        <div className="flex gap-10 pt-8">
          <div>
            <h3 className="text-3xl font-bold">1.6+</h3>
            <p className="text-zinc-500">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-zinc-500">Projects Built</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-zinc-500">Passion Driven</p>
          </div>
        </div>
      </div>

      {/* Right Visual */}
      <div className="relative flex justify-center">

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-fuchsia-600/20 blur-[120px]" />

        <div className="relative">
          <TiltedCard
            imageSrc="/Pro-file.png"
            altText="Ravikiran Frontend Engineer React.js Developer"
            captionText="Frontend Developer"
            containerHeight="600px"
            containerWidth="500px"
            imageHeight="560px"
            imageWidth="440px"
            rotateAmplitude={12}
            scaleOnHover={1.04}
            showMobileWarning={false}
            showTooltip={true}
          />
        </div>
      </div>

    </div>
  </div>
</section>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
