import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-effect p-8">
            <p className="text-lg mb-6">
              👋 Hello everyone! I'm Matthews Wong, an Information Technology student at Swiss German University,
              specializing in Technopreneurship.
            </p>
            <p className="text-lg mb-6">
              I am currently working as a DevOps Engineer intern at Commsult Indonesia, where I previously gained
              experience as an SDET (Software Development Engineer in Test) intern before transitioning into my current
              role.
            </p>
            <p className="text-lg">
              I am passionate about continuous learning and actively engage in international tech communities, including
              Microsoft Learning and Red Hat Learning, to stay updated with the latest advancements.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

