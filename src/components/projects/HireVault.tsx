"use client";

import { Shield, ExternalLink, Briefcase, Users, Cpu } from "lucide-react";

export function HireVault() {
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
          {["Next.js 14", "TypeScript", "FastAPI", "WebSockets", "Supabase", "Groq", "Whisper"].map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium bg-[#ff6b00]/5 border border-[#ff6b00]/20 text-[#ff6b00]/90 rounded-md">
              {tech}
            </span>
          ))}
        </div>


        <div className="mb-10">
          <p className="text-zinc-300 leading-relaxed text-lg mb-4">
            A full-stack, AI-native ecosystem bridging the gap between candidates and hiring managers.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The job market is asymmetric: candidates submit resumes into an ATS void, while hiring managers process countless unparsed PDFs. To solve this, I built a distributed platform where advanced AI orchestration manages the heavy lifting for both sides of the hiring pipeline.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-accent" />
              <h4 className="text-white font-semibold">For Candidates</h4>
            </div>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><strong className="text-zinc-300">ATS Optimization Studio:</strong> Dynamically tailors your CV to specific JDs while maintaining parsing compliance.</li>
              <li><strong className="text-zinc-300">Conversational AI Interviews:</strong> Stateful WebSocket engine maintains real-time history and code sandbox state.</li>
              <li><strong className="text-zinc-300">Live Voice & Code:</strong> Real-time Whisper transcription powers audio answers alongside a shared editor.</li>
              <li><strong className="text-zinc-300">Offer Negotiation:</strong> Practice salary negotiation against an AI recruiter with hidden budgets.</li>
            </ul>
          </div>


          <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-5 h-5 text-accent" />
              <h4 className="text-white font-semibold">For Hiring Managers</h4>
            </div>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><strong className="text-zinc-300">Bulk Resume Intelligence:</strong> Upload 100+ CVs. A Python worker evaluates and scores them against the JD.</li>
              <li><strong className="text-zinc-300">Dynamic Reranking:</strong> Adjust priority sliders to instantly re-score the entire talent pool.</li>
              <li><strong className="text-zinc-300">AI Copilot Inbox:</strong> Two-way chat alongside live match scores and AI-generated executive summaries.</li>
            </ul>
          </div>
        </div>


        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="w-5 h-5 text-accent" />
            <h4 className="text-lg font-semibold text-white">Engineering the AI</h4>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors rounded-2xl">
              <h5 className="text-white font-medium mb-2">1. Ultra-Low Latency Audio over WebSockets</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Traditional timeslice chunking caused Whisper to crash. I engineered a solution to accumulate and stream complete .webm blobs over WebSockets the exact moment speech stops, reducing transcription latency to near-instant levels.
              </p>
            </div>
            <div className="p-6 bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors rounded-2xl">
              <h5 className="text-white font-medium mb-2">2. Deterministic AI Outputs</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Orchestrating complex resume scoring required deep integration with Groq&apos;s JSON mode. This guarantees the Next.js UI consistently receives perfectly structured, strongly-typed data without hallucinations.
              </p>
            </div>
          </div>
        </div>


        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
          <a href="https://github.com/Yug-Dave020/HireVault" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-brand-dark bg-accent hover:bg-accent/90 rounded-lg transition-all">
            <ExternalLink className="w-4 h-4" />
            View Repository / Live Demo
          </a>
        </div>

      </div>
    </div>
  );
}
