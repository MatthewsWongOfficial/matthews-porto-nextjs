import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.header
      className="fixed w-full z-50 glass-effect"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text">
            MW
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul
            className={`md:flex space-y-4 md:space-y-0 md:space-x-8 ${isOpen ? "block" : "hidden"} absolute md:relative top-full left-0 right-0 md:top-auto bg-slate-800 md:bg-transparent p-4 md:p-0 rounded-b-lg md:rounded-none`}
          >
            {["About", "Education", "Experience", "Certifications", "Contact"].map((item) => (
              <motion.li key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-white transition-colors block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}

