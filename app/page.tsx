"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900">
        <motion.div
          className="text-4xl font-bold gradient-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header />
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Hero />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Education />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <Experience />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <Certifications />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 1.2 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
}