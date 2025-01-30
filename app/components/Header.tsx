import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.header
      className="fixed w-full z-50 bg-slate-900/60 backdrop-blur-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold relative group"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              MW
            </span>
            <div className="absolute -inset-2 bg-white/20 rounded-lg blur-lg group-hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100" />
          </Link>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none relative">
              <div className="absolute -inset-2 bg-white/20 rounded-lg blur-sm opacity-0 hover:opacity-100 transition-opacity" />
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          <ul
            className={`md:flex space-y-4 md:space-y-0 md:space-x-8 ${
              isOpen ? "block" : "hidden"
            } absolute md:relative top-full left-0 right-0 md:top-auto bg-slate-900/95 md:bg-transparent p-4 md:p-0 rounded-b-lg md:rounded-none backdrop-blur-lg md:backdrop-blur-none`}
          >
            {["About", "Education", "Experience", "Certifications", "Contact"].map((item) => (
              <motion.li 
                key={item} 
                whileHover={{ y: -2 }} 
                whileTap={{ y: 0 }}
                className="relative group"
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white transition-colors block relative z-10"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <div className="absolute -inset-2 bg-white/5 rounded-lg blur-md group-hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}