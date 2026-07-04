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
        
        <div className="space-y-8 text-lg text-zinc-300 leading-relaxed font-sans">
          
          <div>
            <p className="text-sm font-bold text-accent tracking-widest uppercase mb-3">
              Full-Stack AI Engineer | Digital Transformation
            </p>
            <p className="mb-4 text-white text-xl md:text-2xl font-medium tracking-tight">
              I build resilient software and AI-driven ecosystems.
            </p>
            <p>
              Currently pursuing my M.Sc. in Digital Transformation at FH Dortmund, my engineering philosophy is grounded in real-world business impact. Drawing from my experience in the high-stakes pharmaceutical supply chain at Sanacorp, I understand that robust infrastructure and context-aware AI must go hand-in-hand to solve complex enterprise problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div>
              <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="text-accent font-mono">{'>>'}</span> Core Expertise
              </h3>
              <ul className="space-y-2 text-zinc-400 text-base">
                <li><strong className="text-white">Full-Stack:</strong> React, Next.js, Java, Spring Boot</li>
                <li><strong className="text-white">AI Systems:</strong> LLM Integration, RAG, AI Agents</li>
                <li><strong className="text-white">Infrastructure:</strong> Docker, Nginx, CI/CD</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-4 flex items-center gap-2">
                <span className="text-accent font-mono">{'>>'}</span> Let&apos;s Connect
              </h3>
              <p className="mb-3 text-base text-zinc-400">
                Whether you&apos;re scaling an AI product or modernizing legacy systems, I&apos;m open to discussing new opportunities.
              </p>
              <div className="flex flex-col gap-1 text-base text-accent font-medium">
                <a href="mailto:daveyug2002@gmail.com" className="hover:underline hover:text-white transition-colors w-fit">daveyug2002@gmail.com</a>
                <a href="https://www.linkedin.com/in/yug-dave020" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors w-fit">linkedin.com/in/yug-dave020</a>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
