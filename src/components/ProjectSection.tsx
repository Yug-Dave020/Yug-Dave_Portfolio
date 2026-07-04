"use client";

import { motion } from "framer-motion";
import { HireVault } from "./projects/HireVault";
import { HeroSync } from "./projects/HeroSync";

export function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Selected Work</h2>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Deep dives into the architecture and technical challenges of my flagship projects.
        </p>
      </motion.div>

      <div className="flex flex-col gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <HireVault />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <HeroSync />
        </motion.div>
      </div>
    </section>
  );
}
