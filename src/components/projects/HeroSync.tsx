"use client";

import { Cpu, ExternalLink, Network, Sparkles, Server, Layout, MessageSquare } from "lucide-react";
import { Github } from "@/components/icons";

export function HeroSync() {
  return (
    <div className="bg-gradient-to-b from-[#1a110a] to-[#0a0a0a] border border-[#ff6b00]/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">

      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-accent/10 rounded-xl border border-accent/20">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight">HeroSync</h3>
        </div>


        <div className="flex flex-wrap gap-2 mb-8">
          {["Spring Boot 3", "Java 21", "Vue 3", "GraphQL", "Docker", "Nginx", "LLMs (Groq/GPT-4o/Gemini)"].map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium bg-[#ff6b00]/5 border border-[#ff6b00]/20 text-[#ff6b00]/90 rounded-md">
              {tech}
            </span>
          ))}
        </div>


        <div className="mb-10">
          <p className="text-zinc-300 leading-relaxed text-lg mb-4">
            A full-stack AI-driven gamification platform for habit tracking.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Transformed my frustration with habit tracking into a gamified ecosystem. In HeroSync, your habits become quests, your goals are boss battles, and your AI companion tracks your actual XP count to hold you accountable.
          </p>
        </div>


        <div className="mb-12">
          <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-accent" />
            Core Technical Achievements
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            

            <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Network className="w-5 h-5 text-accent" />
                <h5 className="text-white font-medium">Hybrid API Architecture</h5>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The backend utilizes Spring Boot 3 and Java 21 with a hybrid approach: GraphQL for complex nested dashboard data (XP, habits, streaks, achievements in one query) and REST for standard operations, ensuring each technology is used where it fits best.
              </p>
            </div>


            <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5 text-accent" />
                <h5 className="text-white font-medium">Context-Aware AI Sync-Buddy</h5>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                A modular AiProviderChoice system integrates live context (current streak, XP total, completion rate) into every LLM call. It supports Gemini, GPT-4o, and Groq (LLaMA 3.1) with three selectable personas:
              </p>
              <ul className="text-sm text-zinc-500 space-y-1 ml-4 list-disc">
                <li><strong className="text-zinc-300">Sync</strong> (The Strategist) - Minimalist and precise.</li>
                <li><strong className="text-zinc-300">Aura</strong> (The Empathetic Guide) - Soft and supportive.</li>
                <li><strong className="text-zinc-300">Volt</strong> (The High-Energy Motivator) - Loud and disciplined.</li>
              </ul>
            </div>


            <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Server className="w-5 h-5 text-accent" />
                <h5 className="text-white font-medium">Production-Grade DevOps</h5>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The entire stack operates in Docker with a single command. Nginx manages SSL termination and API routing, ensuring a secure, production-grade setup from day one.
              </p>
            </div>


            <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Layout className="w-5 h-5 text-accent" />
                <h5 className="text-white font-medium">Performant Glassmorphic UI</h5>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Features a bespoke Glassmorphic Design System built with pure CSS variables and BEM, achieving 60fps on mobile while utilizing heavy backdrop-filter effects without relying on third-party styling libraries.
              </p>
            </div>

          </div>
        </div>


        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
          <a href="https://github.com/Yug-Dave020/HeroSync" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-zinc-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all">
            <Github className="w-4 h-4" />
            View Repository
          </a>
          <a href="http://89.168.119.240/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-brand-dark bg-accent hover:bg-accent/90 rounded-lg transition-all">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>

      </div>
    </div>
  );
}
