"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Laptop, Building2, Shuffle, ChevronLeft, ChevronRight, Lock, Globe, ExternalLink } from "lucide-react";
import TechTile from "../common/TechTile";
import { useLightbox } from "../common/LightboxProvider";

interface ExperienceItem {
  company: string;
  position: string;
  location: string;
  duration: string;
  workSetup: "remote" | "onsite" | "hybrid";
  description: string;
  achievements: string[];
  projectImages: string[];
  projectUrl?: string;
  technologies: string[];
  hasRestrictedContent?: boolean;
  companyColor?: string;
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

function WorkSetupIcon({ setup }: { setup: "remote" | "onsite" | "hybrid" }) {
  const configs = {
    remote: { icon: Laptop, label: "remote", color: "text-primary" },
    onsite: { icon: Building2, label: "on-site", color: "text-secondary" },
    hybrid: { icon: Shuffle, label: "hybrid", color: "text-accent" },
  };
  const config = configs[setup];
  const Icon = config.icon;

  return (
    <div className={`flex items-center gap-1.5 ${config.color}`}>
      <Icon className="size-3" />
      <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">{config.label}</span>
    </div>
  );
}

function ImageCarousel({ images, hasRestrictedContent }: { images: string[]; hasRestrictedContent?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { open: openLightbox } = useLightbox();

  const totalSlides = hasRestrictedContent ? 2 : images.length;
  const isDisclosureSlide = hasRestrictedContent && currentIndex === 1;

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const nextSlide = () => goTo((currentIndex + 1) % totalSlides);
  const prevSlide = () => goTo((currentIndex - 1 + totalSlides) % totalSlides);

  const handleImageClick = () => {
    if (isDisclosureSlide) return;
    openLightbox(
      images.map((src) => ({ src, alt: "Image" })),
      currentIndex,
    );
  };

  return (
    <>
      <div className="relative w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden border border-white/10 bg-black group shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
        {isDisclosureSlide ? (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900 p-6 sm:p-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto border border-secondary/30">
                <Lock className="size-5 text-secondary" />
              </div>
              <p className="text-white text-sm sm:text-base font-mono uppercase tracking-wide">CONFIDENTIAL_DATA</p>
              <p className="text-text-muted text-[10px] font-mono tracking-widest">ENCRYPTED PROJECT FILES</p>
            </div>
          </div>
        ) : (
          <div onClick={handleImageClick} className="relative w-full h-full cursor-pointer">
            <Image
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 700px"
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              priority={currentIndex === 0}
            />
          </div>
        )}

        {totalSlides > 1 && (
          <>
            <button onClick={prevSlide} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 border border-white/10 hover:bg-primary text-white hover:text-black rounded transition-all backdrop-blur-sm z-30">
              <ChevronLeft className="size-4" />
            </button>
            <button onClick={nextSlide} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 bg-black/60 border border-white/10 hover:bg-primary text-white hover:text-black rounded transition-all backdrop-blur-sm z-30">
              <ChevronRight className="size-4" />
            </button>
          </>
        )}

        {images.length > 1 && !hasRestrictedContent && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 border border-white/10 text-white font-mono text-[10px] tracking-widest rounded-md backdrop-blur-sm z-30">
            {currentIndex + 1}/{images.length}
          </div>
        )}
      </div>
    </>
  );
}

function TimelineEntry({ experience, index }: { experience: ExperienceItem; index: number }) {

  return (
    <div className="relative flex items-start gap-4 sm:gap-6 lg:gap-8 pb-12 sm:pb-16 last:pb-0 group/timeline">
      {/* timeline dot + line (blockchain ledger style) */}
      <div className="relative flex flex-col items-center flex-shrink-0 z-10">
        <div className="w-5 h-5 rounded-full border border-primary/50 bg-black flex items-center justify-center z-10 shadow-[0_0_15px_rgba(251,191,36,0.3)] group-hover/timeline:shadow-[0_0_25px_rgba(251,191,36,0.6)] group-hover/timeline:scale-110 transition-all duration-300">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
        <div className="w-px h-full bg-gradient-to-b from-primary/50 via-secondary/20 to-transparent absolute top-5" />
      </div>

      {/* content */}
      <div className="flex-1 min-w-0 -mt-1.5">
        <div className="rounded-2xl border border-white/10 glass-panel p-6 sm:p-8 lg:p-10 transition-all card-glow-hover relative overflow-hidden group">
          
          {/* background block number */}
          <div className="absolute top-4 right-6 opacity-5 font-mono text-4xl text-primary font-bold pointer-events-none">
            #{1000 + (index * 1337) % 9000}
          </div>

          {/* header */}
          <div className="mb-6 sm:mb-8 border-b border-white/10 pb-6 relative z-10">
            <p className="text-[10px] sm:text-xs font-mono tracking-widest text-primary mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary" />
              {experience.duration}
            </p>
            <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary uppercase tracking-tight">
              {experience.position}
            </h3>
            <p className="text-sm sm:text-base font-mono text-secondary mt-1 tracking-wider uppercase">{experience.company}</p>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-text-muted mt-4">
              <div className="flex items-center gap-1.5">
                <MapPin className="size-3.5" />
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest">{experience.location}</span>
              </div>
              <WorkSetupIcon setup={experience.workSetup} />
            </div>

            {experience.projectUrl && (
              <div className="mt-4">
                <a href={experience.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-text-secondary active:text-primary hover:text-primary transition-colors group/link text-sm">
                  <div className="p-1.5 rounded bg-white/5 border border-white/10 group-hover/link:border-primary/50 transition-colors">
                    <Globe className="size-3.5" />
                  </div>
                  <span className="font-mono underline decoration-white/20 group-hover/link:decoration-primary/50">{experience.projectUrl}</span>
                  <ExternalLink className="size-3 opacity-60 active:opacity-100 group-hover/link:opacity-100" />
                </a>
              </div>
            )}
          </div>

          {/* images */}
          {experience.projectImages.length > 0 && (
            <div className="mb-6 sm:mb-8 relative z-10">
              <ImageCarousel images={experience.projectImages} hasRestrictedContent={experience.hasRestrictedContent} />
            </div>
          )}

          {/* description */}
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 relative z-10">{experience.description}</p>

          {/* achievements */}
          {experience.achievements.length > 0 && (
            <div className="mb-6 sm:mb-8 relative z-10">
              <p className="text-[10px] sm:text-xs font-mono tracking-widest text-primary mb-3 sm:mb-4 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                key metrics & execution
              </p>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="font-mono text-primary/50 text-xs mt-0.5">&gt;</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* tech */}
          {experience.technologies.length > 0 && (
            <div className="relative z-10">
              <p className="text-[10px] sm:text-xs font-mono tracking-widest text-secondary mb-3 sm:mb-4 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary" />
                infrastructure
              </p>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                {experience.technologies.map((tech, i) => (
                  <TechTile key={i} label={tech} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm text-primary font-mono tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            career journey
            <span className="w-4 h-[1px] bg-primary" />
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary uppercase tracking-tight">
            professional <span className="text-gradient-gold">experience</span>
          </h2>
          <p className="text-sm sm:text-base font-mono text-text-secondary max-w-2xl mx-auto mt-4 sm:mt-6 border border-white/10 glass-panel py-2 px-4 rounded-lg inline-block">
            <span className="text-primary mr-2">&gt;</span> past roles and professional contributions
          </p>
        </div>

        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineEntry key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
