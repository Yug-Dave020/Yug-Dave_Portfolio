"use client";

import { useState } from "react";
import { Shield, ExternalLink, Briefcase, Users, Cpu, ChevronLeft, ChevronRight } from "lucide-react";
import { Github } from "@/components/icons";

export function HireVault() {
  const images = [
    "/hirevault/1.png",
    "/hirevault/2.png",
    "/hirevault/3.png",
    "/hirevault/4.png",
    "/hirevault/5.png",
    "/hirevault/6.png",
    "/hirevault/7.png",
    "/hirevault/8.png",
    "/hirevault/9.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-gradient-to-b from-[#1a110a] to-[#0a0a0a] border border-[#ff6b00]/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">

      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-accent/10 rounded-xl border border-accent/20">
            <Shield className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight">HireVault</h3>
        </div>


        <div className="flex flex-wrap gap-2 mb-8">
          {["Next.js 14", "TypeScript", "FastAPI", "WebSockets", "Supabase", "AI Orchestration"].map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium bg-[#ff6b00]/5 border border-[#ff6b00]/20 text-[#ff6b00]/90 rounded-md">
              {tech}
            </span>
          ))}
        </div>


        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 items-center">
          <div className="flex-1">
            <p className="text-zinc-300 leading-relaxed text-lg mb-4">
              A full-stack, AI-native ecosystem bridging the gap between candidates and hiring managers.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              The job market is asymmetric. Candidates submit resumes into an ATS void, while hiring managers sift through countless unparsed PDFs. Neither side gets what it actually needs. I built HireVault to close that gap — a platform where advanced AI does the heavy lifting for both.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="w-full lg:w-[400px] xl:w-[480px] shrink-0 flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-[#ff6b00]/20 shadow-[0_0_30px_rgba(255,107,0,0.1)] bg-black relative aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={images[currentIndex]} 
                alt={`HireVault Preview ${currentIndex + 1}`} 
                className="w-full h-full object-contain bg-black/50 transition-opacity duration-300"
              />
              <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl mix-blend-overlay z-10"></div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-6">
              <button 
                onClick={prevImage}
                className="p-2 rounded-full bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Image indicators */}
              <div className="flex items-center justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-accent scale-125" : "bg-white/20 hover:bg-white/40"}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextImage}
                className="p-2 rounded-full bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-accent" />
              <h4 className="text-white font-semibold">For Candidates</h4>
            </div>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><strong className="text-zinc-300">ATS Optimization Studio:</strong> Dynamically tailors your CV to a specific job description while maintaining strict parsing compliance.</li>
              <li><strong className="text-zinc-300">Conversational AI Interviews:</strong> Practice technical and behavioral rounds with defined interviewer personas, with full conversation history and code sandbox state maintained in real time.</li>
              <li><strong className="text-zinc-300">Live Voice & Code Sandbox:</strong> Speak your answers naturally or solve problems live in a shared code editor, with instant transcription throughout.</li>
              <li><strong className="text-zinc-300">Offer Negotiation Simulator:</strong> Practice salary negotiation against an AI recruiter operating under hidden budget constraints.</li>
            </ul>
          </div>


          <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-5 h-5 text-accent" />
              <h4 className="text-white font-semibold">For Hiring Managers</h4>
            </div>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><strong className="text-zinc-300">Bulk Resume Intelligence:</strong> Upload 100+ CVs at once. Each one is evaluated and scored against the job description, with candidates automatically sorted into archetypes and flagged for skill gaps.</li>
              <li><strong className="text-zinc-300">Dynamic Reranking:</strong> Adjust priority sliders to instantly re-score and reorder the entire talent pool.</li>
              <li><strong className="text-zinc-300">AI Copilot Inbox & Async Screens:</strong> Message candidates directly with live match scores alongside the conversation, backed by AI-generated executive summaries of their async video interviews.</li>
            </ul>
          </div>
        </div>


        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-5 h-5 text-accent" />
            <h4 className="text-lg font-semibold text-white">What Makes HireVault Different</h4>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors rounded-2xl">
              <h5 className="text-white font-medium mb-2">1. Beyond Keyword Matching</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Most platforms operate on keyword matching, rewarding keyword-stuffing over substance. HireVault is built around semantic understanding. Every resume is analyzed for meaning — mapping a candidate&apos;s actual experience, project impact, and skill depth against the intent of the job description, not just its vocabulary.
              </p>
            </div>
            <div className="p-6 bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors rounded-2xl">
              <h5 className="text-white font-medium mb-2">2. Authentic Candidate Evaluation</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">
                By understanding the context, the system infers candidate archetypes, surfaces real skill gaps, and flags inflated or inconsistent claims. Candidates get feedback reflecting a thoughtful human reader, and hiring managers get a talent pool ranked by substance and authenticity — not by who gamed the parser best.
              </p>
            </div>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
          <a href="https://github.com/Yug-Dave020/HireVault" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all">
            <Github className="w-4 h-4" />
            View Repository
          </a>
          <a href="https://hire-vault-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-brand-dark bg-accent hover:bg-accent/90 rounded-lg transition-all">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>

      </div>
    </div>
  );
}
