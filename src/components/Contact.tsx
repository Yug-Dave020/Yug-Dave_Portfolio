"use client";

import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

export function Contact() {
  return (
    <footer id="contact" className="border-t border-zinc-800 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Let&apos;s build something great.</h2>
          <p className="text-zinc-400 mb-10 text-lg">
            I&apos;m currently looking for new opportunities to join a team building ambitious technical products.
            My inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:daveyug2002@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20"
            >
              <Mail className="w-5 h-5" />
              Connect with me
            </a>

            <div className="flex items-center gap-4 mt-6 sm:mt-0">
              <a
                href="https://www.linkedin.com/in/yug-dave020"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/Yug-Dave020"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Resume"
              >
                <FileText className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-24 text-zinc-600 text-sm">
          <p>© {new Date().getFullYear()} Yug Dave. Portfolio.</p>
        </div>
      </div>
    </footer>
  );
}
