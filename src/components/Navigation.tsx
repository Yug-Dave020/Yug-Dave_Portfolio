"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export function Navigation() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 py-6 px-8 max-w-[1400px] mx-auto flex items-center justify-between"
    >
      <div className="flex items-center">
        <span className="text-2xl font-bold tracking-tight text-white">Portfolio.</span>
      </div>

      <div className="hidden md:flex items-center gap-2 bg-zinc-900/50 border border-white/5 rounded-full px-4 py-2 backdrop-blur-md">
        <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-accent text-sm font-medium px-4 py-1 cursor-pointer">Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium px-4 py-1 cursor-pointer">About</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium px-4 py-1 cursor-pointer">Projects</a>
        <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium px-4 py-1 cursor-pointer">Experience</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium px-4 py-1 cursor-pointer">Connect</a>
      </div>

      <div>
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-2 bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-all rounded-full px-5 py-2.5 backdrop-blur-md text-white font-medium text-sm"
        >
          <FileText className="w-4 h-4" />
          Download Resume
        </a>
      </div>
    </motion.nav>
  );
}
