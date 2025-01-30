import { motion } from "framer-motion"
import Image from "next/image"

const experiences = [
  {
    company: "Commsult Indonesia",
    logo: "https://github.com/MatthewsWongOfficial/portofolio-images-bucket/blob/main/commsult-logo.png?raw=true",
    roles: [
      {
        title: "DevOps Engineer",
        duration: "Jan 2025 - Present",
        description: [
          "Ensure uptime for German and Indonesian websites with uptime alerts.",
          "Monitor system performance using Grafana.",
          "Configure On-Call system with escalation chains.",
          "Set up alerts to notify developers via phone.",
          "Work with Ansible, Docker Swarm, and other DevOps tools."
        ]
      },
      {
        title: "Software Development Engineer in Test",
        duration: "Jul 2024 - Jan 2025",
        description: [
          "Developed and executed automated UI tests.",
          "Used WebdriverIO, Xpath Selector, and Mocha framework for front-end validation."
        ]
      }
    ]
  },
  {
    company: "id/x partners",
    logo: "https://github.com/MatthewsWongOfficial/portofolio-images-bucket/blob/main/RQ8J4BVWEN684XEJ32PPLTHR34CSDCQY2WFWBQ7C-6184f0df.png?raw=true",
    roles: [
      {
        title: "Data Scientist",
        duration: "May 2024 - Jun 2024",
        description: [
          "Mastered data storytelling techniques.",
          "Conducted thorough exploratory data analysis (EDA)."
        ]
      }
    ]
  },
  {
    company: "PT Bank Mandiri (Persero) Tbk",
    logo: "https://github.com/MatthewsWongOfficial/portofolio-images-bucket/blob/main/Bank_Mandiri_logo_2016.svg.png?raw=true",
    roles: [
      {
        title: "Mobile Apps Developer",
        duration: "Jan 2024 - Feb 2024",
        description: [
          "Engaged in Android development using Android Studio.",
          "Worked with UI/Design Patterns, Security, RecyclerView, and SQLite Database."
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="content-section">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Internship Experience
        </motion.h2>
        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-effect p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-24 h-24 rounded-lg bg-white p-2 flex-shrink-0">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={exp.company}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4">{exp.company}</h3>
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className={roleIndex !== 0 ? "mt-6 pt-6 border-t border-white/10" : ""}>
                      <h4 className="text-xl font-semibold text-indigo-400 mb-2">{role.title}</h4>
                      <p className="text-slate-300 mb-2">{role.duration}</p>
                      <p className="text-sm text-slate-400 mb-2">Internship</p>
                      <ul className="list-disc list-inside text-slate-300">
                        {role.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
