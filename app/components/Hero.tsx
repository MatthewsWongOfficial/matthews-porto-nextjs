import { motion } from "framer-motion"
import Image from "next/image"
import { FaChevronDown } from "react-icons/fa"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 text-center">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://github.com/MatthewsWongOfficial/portofolio-images-bucket/blob/main/profile-pic.e32711ca8e7b9d8b99fa.png?raw=true"
              alt="Matthews Wong"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-2xl"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">Matthews Wong</h1>
            <h2 className="text-2xl md:text-3xl text-indigo-400 mb-6">DevOps Engineer | IT Student</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Specializing in Technopreneurship at Swiss German University
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-0 right-0 mx-auto text-slate-300 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      >
        <span className="mb-2">Scroll Down</span>
        <FaChevronDown />
      </motion.div>
    </section>
  )
}

