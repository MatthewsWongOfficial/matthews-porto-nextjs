import { motion } from "framer-motion"
import Image from "next/image"

export default function Education() {
  return (
    <section id="education" className="content-section">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-effect p-8 flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <Image
                src="https://github.com/MatthewsWongOfficial/portofolio-images-bucket/blob/main/swiss-german-5beba9eeaeebe136642cd0b8.jpg?raw=true"
                alt="Swiss German University"
                width={160}
                height={120}
                className="rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Swiss German University</h3>
              <p className="text-xl text-indigo-400 mb-2">Bachelor's degree, Information Technology</p>
              <p className="text-lg text-slate-300 mb-4">Aug 2022 - Aug 2026</p>
              <h4 className="text-lg font-semibold mb-2">Activities and societies:</h4>
              <ul className="list-disc list-inside text-slate-300">
                <li>Badminton Club - Secretary (Aug 2022-Jan 2024)</li>
                <li>IT Student Association /Himaprodi - Member (Aug 2022 - Present)</li>
                <li>Chess Club - Event Division (Aug 2022 - Aug 2023)</li>
                <li>SGU BibleFellowship - Head of Creative Division ( Dec 2023 - Present )</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

