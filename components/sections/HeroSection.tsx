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
      {/* decorative shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full animate-float-slow hidden lg:block" />
      <div className="absolute bottom-32 right-20 w-24 h-24 border border-secondary/10 rotate-45 animate-float-medium hidden lg:block" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-accent/10 rounded-full animate-float-fast hidden lg:block" />

      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:gap-24 max-w-6xl w-full relative z-10">
        {/* text side */}
        <div className="flex flex-col space-y-6 sm:space-y-8 flex-1 text-center lg:text-left">
          <div>
            <p className="text-sm sm:text-base text-primary font-mono mb-2 sm:mb-3 tracking-widest uppercase">
              designer & developer
            </p>
            <h1 className="font-display font-bold leading-[1.05] tracking-tight text-text-primary">
              <span className="block text-[clamp(2rem,6vw,4.5rem)] font-medium text-text-secondary">
                hi, i&apos;m
              </span>
              <span className="block text-[clamp(2.8rem,10vw,7rem)] text-text-primary relative">
                benedict
                <span className="absolute -bottom-1 left-0 w-full h-2 bg-primary/20 rounded-full hidden sm:block overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent w-[30%] animate-reflect-line rounded-full" />
                </span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary font-display font-light mt-4 sm:mt-6">
              web & machine learning developer
            </p>
          </div>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
            I build scalable web applications, machine learning projects, and
            ai/api integrations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
            <button
              onClick={onScrollToFeatured}
              className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-bg-base font-display font-semibold rounded-full transition-all hover:bg-primary/90 hover:scale-105 animate-glow-pulse w-full sm:w-auto justify-center"
            >
              <span className="text-sm sm:text-base">featured works</span>
              <ArrowDown className="size-4 sm:size-5 group-hover:translate-y-1 transition-transform" />
            </button>

            <div className="flex gap-3">
              <a
                href="https://github.com/bennyshark"
                className="p-3 rounded-full border border-zinc-700 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="size-5 text-text-secondary group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/benedict-gutierrez-15917b333"
                className="p-3 rounded-full border border-zinc-700 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5 text-text-secondary group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:benedictgutierrezcs25@gmail.com"
                className="p-3 rounded-full border border-zinc-700 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                aria-label="Email"
              >
                <Mail className="size-5 text-text-secondary group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* photo side */}
        <div className="relative flex-shrink-0">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px]">
            {/* glow behind photo */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />

            {/* frame ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30" />

            {/* photo */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-zinc-800">
              <Image
                src={`${CLD_IMG}/ben4.png`}
                alt="Benedict Gutierrez"
                fill
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 380px"
                className="object-cover"
                priority
              />
            </div>

            {/* decorative dots */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-secondary/60 animate-float-fast" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-accent/60 animate-float-medium" />
          </div>
        </div>
      </div>
    </section>
  );
}
