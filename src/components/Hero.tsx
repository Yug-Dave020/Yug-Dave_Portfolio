"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import Image from "next/image";
import { Github, Linkedin } from "@/components/icons";

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-12 md:pt-32 md:pb-20 px-8 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 relative overflow-hidden">

      {/* Left Column */}
      <div className="flex-1 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-2 md:mb-4">
            Hey, I am <span className="text-accent font-semibold">Yug Dave</span>
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight leading-[1.1] text-balance">
            Full-Stack AI Engineer
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-lg mb-6 md:mb-10 leading-relaxed">
            Designed, architected, and deployed end-to-end AI-driven applications from scratch. Built responsive user interfaces, engineered robust backend business logic integrated with advanced LLM APIs, and managed the complete cloud deployment pipeline.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 md:mb-16">
            <a
              href="#projects"
              className="px-6 py-3 md:px-8 md:py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-full transition-all whitespace-nowrap text-sm md:text-base"
            >
              View Projects
            </a>
            <a
              href="mailto:daveyug2002@gmail.com"
              className="p-3 md:p-4 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-full transition-all text-zinc-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://github.com/Yug-Dave020"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-full transition-all text-zinc-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/yug-dave020"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-full transition-all text-zinc-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Column - Avatar and Icons */}
      <div className="flex-1 w-full relative min-h-[300px] sm:min-h-[400px] md:min-h-[600px] flex items-center justify-center mt-2 md:mt-8 lg:mt-0">

        {/* Orbiting Icons */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[600px] md:h-[600px]">
            {/* React Icon */}
            <div className="absolute top-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-2xl bg-[#1c2c3a] border border-[#2d465c] p-2 flex items-center justify-center shadow-[0_0_15px_rgba(97,218,251,0.2)]">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><circle cx="12" cy="12" r="2"></circle><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></ellipse></svg>
              </motion.div>
            </div>

            {/* TypeScript Icon */}
            <div className="absolute top-[25%] right-[5%] translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-[#3178C6]/10 border border-[#3178C6]/30 p-2 md:p-2.5 flex items-center justify-center shadow-[0_0_15px_rgba(49,120,198,0.2)]">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="#3178C6" className="w-full h-full" fillRule="evenodd" clipRule="evenodd"><path d="M1.5 1.5v21h21v-21h-21zm11.3 15.6c-1.3 0-2.3-.4-3.1-1.1-.4-.4-.3-1 .1-1.4l1-1c.4-.4 1-.4 1.4 0 .4.4.9.6 1.4.6.8 0 1.2-.4 1.2-1 0-.6-.4-.9-1.5-1.2-1.6-.4-2.8-1.1-2.8-2.6 0-1.4 1-2.6 2.8-2.6 1.1 0 2.1.3 2.8.9.4.3.4.9 0 1.3l-1 1c-.4.3-.9.3-1.3 0-.3-.3-.7-.5-1.1-.5-.6 0-1 .3-1 .8 0 .5.4.7 1.4 1 1.7.5 2.9 1.1 2.9 2.7.1 1.6-1.1 2.5-3.2 2.5zm-5.8-1.4h-2.3V10.2H2.3V8.1h7.3v7.6z" /></svg>
              </motion.div>
            </div>

            {/* Python Icon */}
            <div className="absolute bottom-[25%] right-[5%] translate-x-1/2 translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-[#3776AB]/10 border border-[#3776AB]/30 p-2 flex items-center justify-center shadow-[0_0_15px_rgba(55,118,171,0.2)]">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 110 110" className="w-full h-full">
                  <path fill="#3776AB" d="M53.8,4.1c-25,0-23.7,10.8-23.7,10.8l-0.1,11.1h24.6v3.5H21.5C9.8,29.5,8,40.1,8,52.9c0,13.2,2.2,21.6,13.8,21.6h10.4 v-12c0-11.8,9.9-21.5,21.9-21.5h22.6V16.7C76.8,4.5,65.3,4.1,53.8,4.1z M39.6,12.7c3.1,0,5.6,2.5,5.6,5.6s-2.5,5.6-5.6,5.6 s-5.6-2.5-5.6-5.6S36.5,12.7,39.6,12.7z" />
                  <path fill="#FFD43B" d="M55.7,105.9c25,0,23.7-10.8,23.7-10.8l0.1-11.1H54.9v-3.5h33.1c11.7,0,13.5-10.6,13.5-23.4c0-13.2-2.2-21.6-13.8-21.6 H77.3v12c0,11.8-9.9,21.5-21.9,21.5H32.8v24.2C32.8,105.5,44.2,105.9,55.7,105.9z M69.9,97.3c-3.1,0-5.6-2.5-5.6-5.6 s2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6S73,97.3,69.9,97.3z" />
                </svg>
              </motion.div>
            </div>

            {/* AI / LLM (Sparkles) */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-indigo-500/10 border border-indigo-500/30 p-2 md:p-3 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="w-full h-full flex items-center justify-center">
                <Sparkles className="w-full h-full text-indigo-400" />
              </motion.div>
            </div>

            {/* Docker Icon */}
            <div className="absolute bottom-[25%] left-[5%] -translate-x-1/2 translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-[#2496ED]/10 border border-[#2496ED]/30 p-2 flex items-center justify-center shadow-[0_0_15px_rgba(36,150,237,0.2)]">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="#2496ED" className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><path d="M13.2 9.6v2.3h-2.3V9.6h2.3zm0-2.8v2.3h-2.3V6.8h2.3zm0-2.8v2.3h-2.3V4h2.3zm-2.8 5.6v2.3H8.1V9.6h2.3zm0-2.8v2.3H8.1V6.8h2.3zm-2.8 2.8v2.3H5.3V9.6h2.3zm-2.8 0v2.3H2.5V9.6h2.3zm16.8 1.7c-.2-.7-.9-1.2-1.7-1.2h-3.9v3.4h8.3c-.2-1.1-.9-2-2.7-2.2zm-9.3 2c-4 0-7.3 3.3-7.3 7.3h14.7c0-4-3.3-7.3-7.4-7.3z" /></svg>
              </motion.div>
            </div>

            {/* Tailwind CSS Icon */}
            <div className="absolute top-[25%] left-[5%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 p-2 md:p-2.5 flex items-center justify-center shadow-lg">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} className="w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="tailwind-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#0891b2" />
                    </linearGradient>
                  </defs>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 4.5c-3.1 0-5.1 1.7-6 5.1 1.5-2.2 3.2-2.9 5.2-2.1.8.3 1.4.9 2.1 1.7 1.2 1.4 2.7 3.3 6.7 3.3 3.1 0 5.1-1.7 6-5.1-1.5 2.2-3.2 2.9-5.2 2.1-.8-.3-1.4-.9-2.1-1.7-1.2-1.4-2.7-3.3-6.7-3.3zM6 12.5c-3.1 0-5.1 1.7-6 5.1 1.5-2.2 3.2-2.9 5.2-2.1.8.3 1.4.9 2.1 1.7 1.2 1.4 2.7 3.3 6.7 3.3 3.1 0 5.1-1.7 6-5.1-1.5 2.2-3.2 2.9-5.2 2.1-.8-.3-1.4-.9-2.1-1.7-1.2-1.4-2.7-3.3-6.7-3.3z" fill="url(#tailwind-gradient)" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Framed 3D Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative z-10 w-[200px] h-[260px] sm:w-[280px] sm:h-[360px] md:w-[350px] md:h-[450px]"
        >
          {/* Glass Container */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)" }}
          >

            <Image
              src="/character.png"
              alt="Yug 3D Avatar"
              fill
              className="object-cover object-top scale-[1.15] mt-4 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>

        </motion.div>
      </div>

    </section>
  );
}
