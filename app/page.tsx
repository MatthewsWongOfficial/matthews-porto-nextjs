"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Hackathon from "./components/Hackathon";
import Projects from "./components/Projects";  // Import Projects component

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900">
        <div className="text-4xl font-bold gradient-text">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Education />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Certifications />
      </div>
      <div>
        <Hackathon />
      </div>
      <div>
        <Projects />  {/* Add the Projects component here */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
