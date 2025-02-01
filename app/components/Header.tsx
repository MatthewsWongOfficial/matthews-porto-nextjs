import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems: string[] = [
    "About",
    "Education",
    "Experience",
    "Certifications",
    "Hackathon",
    "Projects",
    "Contact",
  ];

  // Handle smooth scrolling with offset
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = window.innerWidth < 768 ? 100 : 80; // Smaller offset for mobile
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed w-full z-50 bg-slate-900/30 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse" />
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <nav className="container mx-auto px-4 lg:px-8 py-5 relative">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold relative group"
              onClick={(e) => handleScroll(e, "top")}
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Matthews Wong
              </span>
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            </Link>
          </motion.div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 transition-all duration-300 hover:bg-white/10"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/10 to-white/5 opacity-0 hover:opacity-100 transition-opacity" />
              {isOpen ? (
                <X size={28} className="text-white" />
              ) : (
                <Menu size={28} className="text-white" />
              )}
            </button>
          </div>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex space-x-1 lg:space-x-2"
          >
            {navItems.map((item) => (
              <motion.li
                key={item}
                variants={itemVariants}
                onHoverStart={() => setHoveredItem(item)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative"
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScroll(e, item.toLowerCase())}
                  className="relative px-4 py-2 text-base lg:text-lg text-slate-200 transition-all duration-300 hover:text-white rounded-xl group flex items-center"
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    animate={{
                      background:
                        hoveredItem === item
                          ? "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)"
                          : "none",
                    }}
                  />
                  <span className="relative z-10">
                    {item}
                    {hoveredItem === item && (
                      <motion.div
                        layoutId="navHover"
                        className="absolute inset-0 -z-10 rounded-xl bg-blue-500/10 blur-md"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-2 right-2 mt-2 rounded-xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-xl max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <motion.ul variants={listVariants} className="p-1.5">
                {navItems.map((item) => (
                  <motion.li key={item} variants={itemVariants}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      onClick={(e) => handleScroll(e, item.toLowerCase())}
                      className="block px-3 py-2.5 text-base text-slate-200 rounded-lg transition-all duration-300 hover:bg-white/10 hover:text-white relative group"
                    >
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative z-10">{item}</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}