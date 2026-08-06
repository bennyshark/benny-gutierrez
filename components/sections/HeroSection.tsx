"use client";

import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const CLD_IMG = "https://res.cloudinary.com/dhsgwmuax/image/upload/f_auto,q_auto";

interface HeroSectionProps {
  onScrollToFeatured: () => void;
}

export default function HeroSection({ onScrollToFeatured }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-0 overflow-hidden">
      
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-7xl w-full relative z-10">
        
        {/* text side */}
        <div className="flex flex-col space-y-6 sm:space-y-8 flex-1 text-center lg:text-left z-20">
          <div>
            <p className="text-sm sm:text-base text-primary font-mono mb-4 tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              designer & developer
            </p>
            <h1 className="font-display font-bold leading-[1.05] tracking-tight">
              <span className="block text-[clamp(2rem,6vw,3.5rem)] text-text-secondary">
                hi, i'm
              </span>
              <span className="block text-[clamp(3rem,8vw,6.5rem)] text-gradient-gold pb-2">
                benedict
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary font-mono font-light mt-4 sm:mt-6 border-l-2 border-primary/50 pl-4 max-w-md mx-auto lg:mx-0">
              <span className="block font-bold text-primary mb-2 text-sm sm:text-base uppercase tracking-widest">web & machine learning developer</span>
              I build scalable web applications, machine learning projects, and ai/api integrations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
            <button
              onClick={onScrollToFeatured}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center bg-gradient-to-r from-secondary to-primary btn-glow"
            >
              <span className="text-sm sm:text-base font-bold font-mono tracking-wider uppercase text-bg-base">view projects</span>
              <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform text-bg-base" />
            </button>

            <div className="flex gap-4">
              <a
                href="https://github.com/bennyshark"
                className="p-4 rounded-full border border-white/10 glass-panel hover:border-primary/50 hover:bg-primary/5 transition-all group hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="size-5 text-text-secondary group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/benedict-gutierrez-15917b333"
                className="p-4 rounded-full border border-white/10 glass-panel hover:border-primary/50 hover:bg-primary/5 transition-all group hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5 text-text-secondary group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:benedictgutierrezcs25@gmail.com"
                className="p-4 rounded-full border border-white/10 glass-panel hover:border-primary/50 hover:bg-primary/5 transition-all group hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                aria-label="Email"
              >
                <Mail className="size-5 text-text-secondary group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* 3d orbital graphic side */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px]">
          
          {/* Orbital Rings */}
          <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[560px] lg:h-[560px] rounded-full border-t border-r border-primary/20 animate-spin-slow" />
          <div className="absolute w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full border-b border-l border-secondary/30 animate-spin-slow-reverse" />
          <div className="absolute w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] lg:w-[660px] lg:h-[660px] rounded-full border border-white/5 border-dashed animate-spin-slow" style={{ animationDuration: '25s' }} />
          
          {/* Central Glowing Core */}
          <div className="absolute inset-0 m-auto w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
          
          {/* Core Image Container */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border border-primary/40 glass-panel p-2 animate-float-slow z-10">
            <div className="w-full h-full rounded-full overflow-hidden bg-surface relative">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <Image
                src={`${CLD_IMG}/ben4.png`}
                alt="Benedict Gutierrez"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
                className="object-cover contrast-125 saturate-50"
                priority
              />
            </div>
          </div>

          {/* Floating Data Nodes */}
          <div className="absolute top-1/4 right-[10%] sm:right-[15%] z-30 glass-panel border border-white/10 px-4 py-2 rounded-lg animate-bounce" style={{ animationDuration: '3s' }}>
            <span className="font-mono text-xs text-primary">100+ Sites Deployed</span>
          </div>
          <div className="absolute bottom-1/3 left-[5%] sm:left-[10%] z-30 glass-panel border border-white/10 px-4 py-2 rounded-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <span className="font-mono text-xs text-secondary">Available for Work</span>
          </div>

        </div>
      </div>
    </section>
  );
}
