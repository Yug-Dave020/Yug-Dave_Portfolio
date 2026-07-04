"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Operations & Process Analyst",
    company: "Sanacorp Pharmahandel GmbH",
    type: "Part-time",
    duration: "Jun 2025 - Present",
    location: "Düsseldorf, North Rhine-Westphalia, Germany · On-site",
    description:
      "Analysing and optimising operational workflows in one of Germany's largest pharmaceutical logistics operations, with direct exposure to ERP systems, inventory management platforms, and mission-critical systems.",
    skills: ["Enterprise Resource Planning (ERP)", "Process Analysis", "Workflow Optimization", "Data Analysis"],
  },
  {
    title: "Software Engineer Intern",
    company: "L&T Technology Services",
    type: "Internship",
    duration: "Dec 2023 - Apr 2024",
    location: "Vadodara, Gujarat, India · On-site",
    description:
      "Designed and developed an Automated Vehicle Calculation Dictionary — an internal web tool used by L&T engineers to access and execute specialized calculations required in automated vehicle development.",
    skills: ["React.js", "Software Development", "Frontend Engineering", "API Integration"],
  },
  {
    title: "Software Engineer Intern",
    company: "Prakash Software Solutions Pvt. Ltd",
    type: "Internship",
    duration: "May 2023 - Jun 2023",
    location: "Vadodara, Gujarat, India · On-site",
    description:
      "Designed and developed a fully functional Online Library Management System for CHARUSAT University — enabling students to issue books digitally and giving librarians a centralized platform to manage records.",
    skills: ["ASP.NET MVC", "ASP.NET", "C#", "SQL Server"],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Prakash Software Solutions Pvt. Ltd",
    type: "Internship",
    duration: "May 2022 - Jun 2022",
    location: "Vadodara, Gujarat, India · On-site",
    description:
      "Built an Online Bus Reservation Portal from scratch — a full-stack web application allowing users to browse routes, reserve seats, and complete payments, with automated PDF bill generation upon booking.",
    skills: ["Project Management", "ASP.NET MVC", "C#", "Web Development"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-accent" />
          <h2 className="text-4xl font-bold text-white tracking-tight">Experience</h2>
        </div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-[#0a0a0a]" />

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="text-lg font-medium text-zinc-300 mt-1">
                    {exp.company} <span className="text-zinc-500 font-normal">· {exp.type}</span>
                  </div>
                </div>
                <div className="text-sm font-medium text-accent md:text-right shrink-0">
                  {exp.duration}
                </div>
              </div>

              <div className="text-sm text-zinc-500 mb-4">{exp.location}</div>

              <p className="text-zinc-400 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-zinc-300 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
