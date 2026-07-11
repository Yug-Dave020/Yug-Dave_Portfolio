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
      "Addressed operational bottlenecks in complex enterprise inventory management by mapping mission-critical pharmaceutical supply chain workflows. Delivered documented process optimizations that actively informed backend architecture decisions for high-availability logistics systems.",
    skills: ["Enterprise Resource Planning (ERP)", "Process Optimization", "High-Availability Systems", "Workflow Analysis"],
  },
  {
    title: "Software Engineer Intern",
    company: "L&T Technology Services",
    type: "Internship",
    duration: "Dec 2023 - Apr 2024",
    location: "Vadodara, Gujarat, India · On-site",
    description:
      "Replaced error-prone, manual spreadsheet workflows by engineering a centralized Automated Vehicle Calculation Dictionary using a React.js frontend and a Python/Node.js REST API layer. This streamlined specialized calculations, significantly increasing engineering efficiency and data accuracy across development teams.",
    skills: ["React.js", "Node.js", "Python (Flask)", "REST APIs", "Agile/Scrum"],
  },
  {
    title: "Software Engineer Intern",
    company: "Prakash Software Solutions Pvt. Ltd",
    type: "Internship",
    duration: "May 2023 - Jun 2023",
    location: "Vadodara, Gujarat, India · On-site",
    description:
      "Digitized inefficient physical record-keeping by developing a full-stack Online Library Management System using ASP.NET MVC and MSSQL. This centralized database management and role-based access control vastly reduced administrative overhead for university librarians and students.",
    skills: ["ASP.NET MVC", "MSSQL", "C#", "Role-Based Authentication", "Database Design"],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Prakash Software Solutions Pvt. Ltd",
    type: "Internship",
    duration: "May 2022 - Jun 2022",
    location: "Vadodara, Gujarat, India · On-site",
    description:
      "Modernized regional ticket booking by building a full-stack Online Bus Reservation Portal with dynamic JavaScript/AJAX seat selection. Enabled secure digital seat reservations and engineered backend PDF rendering for seamless automated receipt generation.",
    skills: ["JavaScript", "AJAX", "Full-Stack Web Development", "HTML/CSS", "PDF Generation"],
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

              <div className="leading-relaxed mb-6">
                {exp.description}
              </div>

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
