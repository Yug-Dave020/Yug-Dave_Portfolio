"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <Terminal className="w-8 h-8 text-accent" />
          <h2 className="text-4xl font-bold text-white tracking-tight">About</h2>
        </div>
        
        <div className="space-y-12 text-lg text-zinc-300 leading-relaxed font-sans">
          
          {/* Intro Section */}
          <div>
            <p className="text-sm font-bold text-accent tracking-widest uppercase mb-4">
              AI Systems Engineer | Full-Stack Developer | Digital Transformation
            </p>
            <p className="mb-4 text-white text-xl md:text-2xl font-medium tracking-tight">
              I don&apos;t just build software; I build systems that evolve.
            </p>
            <p>
              Currently pursuing my M.Sc. in Digital Transformation at FH Dortmund, my work centers on the belief that modern engineering requires a deep understanding of how AI-driven ecosystems impact enterprise value.
            </p>
          </div>

          {/* Philosophy Section */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold text-white tracking-widest uppercase mb-4">
              <span className="text-accent font-mono">{'>>'}</span> My Engineering Philosophy
            </h3>
            <p className="mb-4">
              I move beyond simple API integrations to architect robust, context-aware AI solutions. Whether it&apos;s backend logic, cloud infrastructure, or LLM implementation, I focus on software that is:
            </p>
            <ul className="space-y-2 ml-6 list-[square] text-accent marker:text-accent">
              <li><span className="text-zinc-300 font-medium">RESILIENT</span></li>
              <li><span className="text-zinc-300 font-medium">MODULAR</span></li>
              <li><span className="text-zinc-300 font-medium">PURPOSE-BUILT FOR THE LONG TERM</span></li>
            </ul>
          </div>

          {/* Beyond the Code */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold text-white tracking-widest uppercase mb-4">
              <span className="text-accent font-mono">{'>>'}</span> Beyond the Code
            </h3>
            <p>
              My perspective is grounded in the high-stakes pharmaceutical supply chain at Sanacorp. I understand that behind every line of code is a business process that must remain uninterrupted.
            </p>
          </div>

          {/* Core Technical Focus */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold text-white tracking-widest uppercase mb-4">
              <span className="text-accent font-mono">{'>>'}</span> Core Technical Focus
            </h3>
            <ul className="space-y-3 ml-6 list-[square] text-accent marker:text-accent">
              <li><strong className="text-white uppercase">Software:</strong> <span className="text-zinc-300">Full-Stack engineering</span></li>
              <li><strong className="text-white uppercase">AI Systems:</strong> <span className="text-zinc-300">Advanced AI Architectures & LLM Deployment</span></li>
              <li><strong className="text-white uppercase">Infrastructure:</strong> <span className="text-zinc-300">Docker & Modern CI/CD Pipelines</span></li>
              <li><strong className="text-white uppercase">Strategy:</strong> <span className="text-zinc-300">Digital Transformation Frameworks</span></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="pt-8 border-t border-white/10">
            <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-3">
              Let&apos;s build something that lasts.
            </h3>
            <p className="mb-4 text-base">
              Whether you&apos;re navigating a digital transformation or architecting a custom AI ecosystem, let&apos;s connect.
            </p>
            <p className="text-base text-accent font-medium">
              Reach out via LinkedIn DM or <a href="mailto:daveyug2002@gmail.com" className="hover:underline hover:text-white transition-colors">daveyug2002@gmail.com</a>
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
