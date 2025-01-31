import { motion } from "framer-motion"
import type { FC } from 'react'

// Reuse the same FloatingOrb component for consistency
interface FloatingOrbProps {
  className?: string;
}

const FloatingOrb: FC<FloatingOrbProps> = ({ className }) => (
  <div className={`absolute w-64 h-64 rounded-full ${className}`} />
);

const About: FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background effects from Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/0 via-slate-900/80 to-slate-900" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Side effects */}
      <div className="absolute -left-24 top-1/4 w-96 h-screen">
        <FloatingOrb className="bg-blue-500/10 blur-3xl animate-float" />
        <FloatingOrb className="bg-purple-500/10 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 left-12 w-1 h-32 bg-gradient-to-b from-blue-500/50 to-transparent animate-pulse" />
        <div className="absolute top-2/3 left-24 w-1 h-24 bg-gradient-to-b from-purple-500/50 to-transparent animate-pulse delay-700" />
      </div>
      
      <div className="absolute -right-24 top-1/4 w-96 h-screen">
        <FloatingOrb className="bg-indigo-500/10 blur-3xl animate-float-delayed" />
        <FloatingOrb className="bg-blue-500/10 blur-3xl animate-float" />
        <div className="absolute top-1/4 right-12 w-1 h-32 bg-gradient-to-b from-indigo-500/50 to-transparent animate-pulse delay-300" />
        <div className="absolute top-1/2 right-24 w-1 h-24 bg-gradient-to-b from-blue-500/50 to-transparent animate-pulse delay-1000" />
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/3 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
        <div className="absolute right-1/4 top-2/3 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-300" />
        <div className="absolute left-1/3 bottom-1/4 w-2 h-2 bg-indigo-500 rounded-full animate-ping delay-700" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            About Me
          </span>
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Glass card effects */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
            <div className="glass-effect p-8 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 relative">
              <motion.p 
                className="text-lg mb-6 text-slate-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                👋 Hello everyone! I&apos;m Matthews Wong, an Information Technology student at Swiss German University,
                specializing in Technopreneurship.
              </motion.p>
              
              <motion.p 
                className="text-lg mb-6 text-slate-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I am currently working as a DevOps Engineer intern at Commsult Indonesia, where I previously gained
                experience as an SDET (Software Development Engineer in Test) intern before transitioning into my current
                role.
              </motion.p>
              
              <motion.p 
                className="text-lg text-slate-300"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                I am passionate about continuous learning and actively engage in international tech communities, including
                Microsoft Learning and Red Hat Learning, to stay updated with the latest advancements.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About