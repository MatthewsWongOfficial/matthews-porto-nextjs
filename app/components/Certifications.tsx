import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const certifications = [
  {
    name: "DevOps Professional Certificate",
    issuer: "PagerDuty",
    image:
      "https://github.com/MatthewsWongOfficial/portofolio-images-bucket/blob/main/Screenshot%202025-01-30%20at%2020.23.23.png?raw=true",
  },
  {
    name: "Network Defense Essentials",
    issuer: "EC-Council",
    image:
      "https://github.com/MatthewsWongOfficial/portofolio-images-bucket/blob/main/Screenshot%202025-01-30%20at%2020.24.21.png?raw=true",
  },
  {
    name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    image:
      "https://github.com/MatthewsWongOfficial/portofolio-images-bucket/blob/main/Screenshot%202025-01-30%20at%2020.49.57.png?raw=true",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="content-section">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Notable Certifications
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-effect p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full pb-[75%] mb-4">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={cert.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-indigo-400">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="https://www.linkedin.com/in/matthewswong/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View all of my certifications on LinkedIn
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

