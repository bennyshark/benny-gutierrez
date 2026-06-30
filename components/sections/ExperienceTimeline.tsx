"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Laptop, Building2, Shuffle, ChevronLeft, ChevronRight, X, Lock, Globe, ExternalLink } from "lucide-react";
import TechTile from "../common/TechTile";

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
      <span className="text-xs font-medium">{config.label}</span>
    </div>
  );
}

function ImageCarousel({ images, hasRestrictedContent }: { images: string[]; hasRestrictedContent?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalSlides = hasRestrictedContent ? 2 : images.length;
  const isDisclosureSlide = hasRestrictedContent && currentIndex === 1;

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    setIsLoading(true);
    setCurrentIndex(index);
  };

  const nextSlide = () => goTo((currentIndex + 1) % totalSlides);
  const prevSlide = () => goTo((currentIndex - 1 + totalSlides) % totalSlides);

  return (
    <>
      <div className="relative w-full aspect-video rounded-lg sm:rounded-xl overflow-hidden border border-zinc-700/50 bg-zinc-900 group">
        {isDisclosureSlide ? (
          <div className="w-full h-full flex items-center justify-center bg-zinc-900 p-6 sm:p-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Lock className="size-5 text-primary" />
              </div>
              <p className="text-text-primary text-sm sm:text-base font-semibold">actual nidec project content: not for disclosure</p>
              <p className="text-text-muted text-xs">this project contains proprietary information</p>
            </div>
          </div>
        ) : (
          <div onClick={() => !isDisclosureSlide && setIsFullscreen(true)} className="relative w-full h-full cursor-pointer">
            <div className={`absolute inset-0 bg-black z-10 pointer-events-none transition-opacity duration-150 ${isLoading ? "opacity-100" : "opacity-0"}`} />
            <Image
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, 700px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onLoad={() => setIsLoading(false)}
              priority={currentIndex === 0}
            />
          </div>
        )}

        {totalSlides > 1 && (
          <>
            <button onClick={prevSlide} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-all backdrop-blur-sm z-30">
              <ChevronLeft className="size-4" />
            </button>
            <button onClick={nextSlide} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-all backdrop-blur-sm z-30">
              <ChevronRight className="size-4" />
            </button>
          </>
        )}

        {images.length > 1 && !hasRestrictedContent && (
          <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-xs rounded-md backdrop-blur-sm z-30">
            {currentIndex + 1}/{images.length}
          </div>
        )}
      </div>

      {/* fullscreen */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setIsFullscreen(false)}>
          <button onClick={() => setIsFullscreen(false)} className="absolute top-2 right-2 sm:top-6 sm:right-6 p-2.5 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all z-10 backdrop-blur-sm">
            <X className="size-5 sm:size-6" />
          </button>
          {currentIndex > 0 && <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full z-10"><ChevronLeft className="size-6" /></button>}
          {currentIndex < images.length - 1 && <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full z-10"><ChevronRight className="size-6" /></button>}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image key={currentIndex} src={images[currentIndex]} alt={`Fullscreen ${currentIndex}`} fill className="object-contain" onClick={(e) => e.stopPropagation()} />
          </div>
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">{currentIndex + 1} / {images.length}</p>
        </div>
      )}
    </>
  );
}

function TimelineEntry({ experience }: { experience: ExperienceItem; index: number }) {

  return (
    <div className="relative flex items-start gap-4 sm:gap-6 lg:gap-8 pb-12 sm:pb-16 last:pb-0">
      {/* timeline dot + line */}
      <div className="relative flex flex-col items-center flex-shrink-0">
        <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-zinc-900 z-10 animate-dot-pulse" />
        <div className="w-0.5 h-full bg-zinc-800 absolute top-3" />
      </div>

      {/* content */}
      <div className="flex-1 min-w-0">
        <div className="rounded-xl sm:rounded-2xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 hover:border-zinc-700/50 transition-all">
          {/* header */}
          <div className="mb-4 sm:mb-6">
            <p className="text-xs font-mono tracking-widest text-primary mb-1">{experience.duration}</p>
            <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-text-primary">
              {experience.position}
            </h3>
            <p className="text-sm sm:text-base text-text-secondary mt-0.5">{experience.company}</p>
            <div className="flex flex-wrap gap-3 sm:gap-4 text-text-muted mt-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="size-3.5" />
                <span className="text-xs">{experience.location}</span>
              </div>
              <WorkSetupIcon setup={experience.workSetup} />
            </div>

            {experience.projectUrl && (
              <div className="mt-3">
                <a href={experience.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors group text-sm">
                  <Globe className="size-3.5 group-hover:rotate-12 transition-transform" />
                  <span className="underline decoration-zinc-600 group-hover:decoration-primary/50">{experience.projectUrl}</span>
                  <ExternalLink className="size-3 opacity-60 group-hover:opacity-100" />
                </a>
              </div>
            )}
          </div>

          {/* images */}
          {experience.projectImages.length > 0 && (
            <div className="mb-4 sm:mb-6">
              <ImageCarousel images={experience.projectImages} hasRestrictedContent={experience.hasRestrictedContent} />
            </div>
          )}

          {/* description */}
          <p className="text-sm text-text-secondary leading-relaxed mb-4">{experience.description}</p>

          {/* achievements */}
          {experience.achievements.length > 0 && (
            <div className="mb-4 sm:mb-6">
              <p className="text-xs font-mono tracking-widest text-primary mb-2 sm:mb-3 uppercase">key achievements</p>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* tech */}
          {experience.technologies.length > 0 && (
            <div>
              <p className="text-xs font-mono tracking-widest text-primary mb-2 sm:mb-3 uppercase">technologies</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
    <section id="experience" className="w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm text-primary font-mono tracking-widest uppercase mb-2">
            career
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
            experience
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto mt-3 sm:mt-4">
            professional experience and contributions
          </p>
        </div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineEntry key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
