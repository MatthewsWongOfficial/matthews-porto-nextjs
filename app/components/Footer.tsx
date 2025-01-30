import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer id="contact" className="py-12">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Connect with Me
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/matthewswong", label: "LinkedIn" },
            { icon: FaGithub, href: "https://github.com/MatthewsWongOfficial", label: "GitHub" },
            { icon: FaEnvelope, href: "mailto:matthewswong2610@gmail.com", label: "Email" },
          ].map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <IconComponent size={24} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            );
          })}
        </motion.div>
        <p className="text-sm text-gray-500">© 2025 Matthews Wong. All rights reserved.</p>
      </div>
    </footer>
  );
}
