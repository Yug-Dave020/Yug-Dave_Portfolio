import { Hero } from "@/components/Hero";
import { ProjectSection } from "@/components/ProjectSection";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <Hero />
      
      <div className="relative">
        <About />
        <ProjectSection />
        <Experience />
      </div>
      
      <Contact />
    </main>
  );
}
