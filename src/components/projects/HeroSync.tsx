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
          {["Spring Boot 3", "Java 21", "Vue 3", "GraphQL", "Docker", "Nginx", "LLMs"].map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-medium bg-[#ff6b00]/5 border border-[#ff6b00]/20 text-[#ff6b00]/90 rounded-md">
              {tech}
            </span>
          ))}
        </div>


        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 items-center">
          <div className="flex-1">
            <p className="text-zinc-300 leading-relaxed text-lg mb-4">
              A full-stack, AI-driven gamification platform for habit tracking.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Transformed my frustration with habit tracking into a gamified ecosystem. In HeroSync, your habits become quests, your goals become boss battles, and an AI companion tracks your actual progress in real time.
            </p>
          </div>

          {/* Video Demo Frame */}
          <div className="w-full lg:w-[400px] xl:w-[480px] shrink-0 rounded-2xl overflow-hidden border border-[#ff6b00]/20 shadow-[0_0_30px_rgba(255,107,0,0.1)] bg-black relative aspect-video">
            <video 
              src="/videos/herosync-demo.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline
              controls
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
            {/* Subtle overlay gradient for a glassmorphic polish on the border edges */}
            <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl mix-blend-overlay"></div>
          </div>
        </div>


        <div className="mb-12">
          <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-accent" />
            Technical Architecture & Features
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            

            <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Network className="w-5 h-5 text-accent" />
                <h5 className="text-white font-medium">Hybrid API Architecture</h5>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The backend runs on Spring Boot 3 and Java 21, using GraphQL for complex nested dashboard data (XP, habits, streaks, and achievements resolved in a single query) and REST for standard operations — each technology applied where it fits best.
              </p>
            </div>


            <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <MessageSquare className="w-5 h-5 text-accent" />
                <h5 className="text-white font-medium">Context-Aware AI Sync-Buddy</h5>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                A modular AI provider system feeds your live context — current streak, XP total, completion rate — into every AI call. It offers three selectable personas:
              </p>
              <ul className="text-sm text-zinc-500 space-y-1 ml-4 list-disc">
                <li><strong className="text-zinc-300">Sync</strong> (The Strategist): Minimalist and precise.</li>
                <li><strong className="text-zinc-300">Aura</strong> (The Empathetic Guide): Soft and supportive.</li>
                <li><strong className="text-zinc-300">Volt</strong> (The High-Energy Motivator): Loud and disciplined.</li>
              </ul>
            </div>


            <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Server className="w-5 h-5 text-accent" />
                <h5 className="text-white font-medium">Production-Grade Deployment</h5>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                The entire stack runs in Docker with a single command. Nginx handles SSL termination and API routing from day one, providing a reliable and secure infrastructure.
              </p>
            </div>


            <div className="bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Layout className="w-5 h-5 text-accent" />
                <h5 className="text-white font-medium">Glassmorphic Design System</h5>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Built with pure CSS variables and BEM, the UI achieves 60fps on mobile while using heavy backdrop-filter effects — no third-party styling libraries required.
              </p>
            </div>

          </div>
        </div>


        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <h4 className="text-lg font-semibold text-white">What Makes HeroSync Different</h4>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors rounded-2xl">
              <h5 className="text-white font-medium mb-2">1. Beyond Static Checklists</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Most trackers are static — you check a box, and the app has no real sense of how you&apos;re actually doing. Motivation is left entirely to the user. HeroSync is built around context-aware motivation. The AI companion isn&apos;t a generic chatbot; every response is grounded in your actual streak, XP, and completion data.
              </p>
            </div>
            <div className="p-6 bg-black/40 border border-[#ff6b00]/10 hover:border-[#ff6b00]/30 transition-colors rounded-2xl">
              <h5 className="text-white font-medium mb-2">2. An Evolving Narrative</h5>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Encouragement (or a nudge) is based on real behavior, not a scripted reminder. Pairing that with selectable personas means the tone of support adapts to how you personally respond best. The result is a system that treats habit-building like an evolving narrative rather than a to-do list — one that adjusts to you.
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
