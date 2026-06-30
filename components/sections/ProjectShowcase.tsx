"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft, ChevronRight, Play, X, ExternalLink, Info,
  Globe, Package, FlaskConical,
} from "lucide-react";
import TechTile from "../common/TechTile";

type MediaItem = {
  type: "video" | "image";
  src: string;
};

interface ProjectShowcaseProps {
  title: string;
  description: string;
  techStack: string[];
  mediaItems: MediaItem[];
  siteUrl?: string;
  accessNote?: string;
  label?: "product" | "prototype" | null;
  id: string;
  accent?: "indigo" | "amber" | "rose";
  isMobile?: boolean;
}

function ProjectLabel({ label }: { label: "product" | "prototype" }) {
  if (label === "product") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
        <Package className="size-3" />
        product
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
      <FlaskConical className="size-3" />
      prototype
    </span>
  );
}

function MediaCarousel({ mediaItems, isMobile }: { mediaItems: MediaItem[]; isMobile?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    setIsLoading(true);
    setCurrentIndex(index);
  };

  const nextSlide = () => goTo((currentIndex + 1) % mediaItems.length);
  const prevSlide = () => goTo((currentIndex - 1 + mediaItems.length) % mediaItems.length);

  const currentMedia = mediaItems[currentIndex];

  return (
    <>
      <div className={`relative ${isMobile ? "max-w-[240px] sm:max-w-[280px]" : "w-full"}`}>
        {/* main display */}
        <div
          className={`relative rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-700/50 bg-zinc-900 group ${
            isMobile ? "aspect-[9/16]" : "aspect-video"
          }`}
        >
          {currentMedia.type === "video" ? (
            <div onClick={() => setIsFullscreen(true)} className="relative w-full h-full cursor-pointer">
              <video
                key={currentIndex}
                src={currentMedia.src}
                controls
                autoPlay
                muted
                loop
                className="w-full h-full object-contain bg-black"
                playsInline
                preload="metadata"
              />
            </div>
          ) : (
            <div onClick={() => setIsFullscreen(true)} className="relative w-full h-full cursor-pointer">
              <div className={`absolute inset-0 bg-black z-10 pointer-events-none transition-opacity duration-150 ${isLoading ? "opacity-100" : "opacity-0"}`} />
              <Image
                key={currentIndex}
                src={currentMedia.src}
                alt={`Screenshot ${currentIndex}`}
                fill
                sizes="(max-width: 640px) 100vw, 800px"
                className="object-contain"
                onLoad={() => setIsLoading(false)}
                priority={currentIndex === 0}
              />
            </div>
          )}

          <button onClick={prevSlide} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-all backdrop-blur-sm z-30" aria-label="Previous">
            <ChevronLeft className="size-4" />
          </button>
          <button onClick={nextSlide} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-all backdrop-blur-sm z-30" aria-label="Next">
            <ChevronRight className="size-4" />
          </button>

          {currentMedia.type === "video" && (
            <div className="absolute top-3 left-3 px-2 py-1 bg-primary/80 text-bg-base text-[10px] font-bold rounded-md flex items-center gap-1 z-30">
              <Play className="size-2.5" />
              video
            </div>
          )}
        </div>

        {/* thumbnails */}
        <div className="flex gap-1.5 sm:gap-2 mt-2.5 sm:mt-3 overflow-x-auto pb-1 scrollbar-hide">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`flex-shrink-0 relative rounded-md sm:rounded-lg overflow-hidden border-2 transition-all bg-zinc-900 ${
                isMobile ? "w-10 h-14 sm:w-12 sm:h-16" : "w-14 h-10 sm:w-20 sm:h-12"
              } ${
                currentIndex === index ? "border-primary ring-1 ring-primary/30 scale-105" : "border-zinc-700/50 opacity-60 hover:opacity-100"
              }`}
            >
              {item.type === "video" ? (
                <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                  <Play className="size-3 sm:size-4 text-text-muted" />
                </div>
              ) : (
                <Image src={item.src} alt={`Thumb ${index}`} fill sizes="80px" className="object-cover" />
              )}
            </button>
          ))}
        </div>

        <p className="text-center text-xs text-text-muted mt-2">
          {currentIndex + 1} / {mediaItems.length}
        </p>
      </div>

      {/* fullscreen */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setIsFullscreen(false)}>
          <button onClick={() => setIsFullscreen(false)} className="absolute top-2 right-2 sm:top-6 sm:right-6 p-2.5 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all z-10 backdrop-blur-sm">
            <X className="size-5 sm:size-6" />
          </button>

          {currentIndex > 0 && (
            <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full z-10">
              <ChevronLeft className="size-6" />
            </button>
          )}
          {currentIndex < mediaItems.length - 1 && (
            <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full z-10">
              <ChevronRight className="size-6" />
            </button>
          )}

          <div className="relative w-full h-full flex items-center justify-center">
            {currentMedia.type === "video" ? (
              <video key={currentIndex} src={currentMedia.src} controls autoPlay muted loop className="max-w-full max-h-full object-contain" playsInline preload="metadata" onClick={(e) => e.stopPropagation()} />
            ) : (
              <Image key={currentIndex} src={currentMedia.src} alt={`Fullscreen ${currentIndex}`} fill className="object-contain" onClick={(e) => e.stopPropagation()} />
            )}
          </div>
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">{currentIndex + 1} / {mediaItems.length}</p>
        </div>
      )}
    </>
  );
}

export default function ProjectShowcase({
  title, description, techStack, mediaItems, siteUrl,
  accessNote, label, id, accent = "indigo", isMobile,
}: ProjectShowcaseProps) {
  const accentBorders = {
    indigo: "border-primary/10 hover:border-primary/20",
    amber: "border-secondary/10 hover:border-secondary/20",
    rose: "border-accent/10 hover:border-accent/20",
  };

  return (
    <section id={id} className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className={`rounded-2xl sm:rounded-3xl border ${accentBorders[accent]} bg-surface/30 backdrop-blur-sm p-5 sm:p-8 lg:p-12 transition-all hover:shadow-lg hover:shadow-primary/5`}>
          {/* header row */}
          <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary">
              {title}
            </h3>
            {label && <ProjectLabel label={label} />}
          </div>

          {/* site url */}
          {siteUrl && (
            <div className="mb-6 sm:mb-8">
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors group"
              >
                <Globe className="size-4 group-hover:rotate-12 transition-transform" />
                <span className="text-sm sm:text-base underline decoration-zinc-600 group-hover:decoration-primary/50 break-all">
                  {siteUrl}
                </span>
                <ExternalLink className="size-3 opacity-60 group-hover:opacity-100 transition-all" />
              </a>

              {accessNote && (
                <div className="flex items-start gap-2.5 mt-3 text-sm text-zinc-400 bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-3">
                  <Info className="size-4 flex-shrink-0 text-primary mt-0.5" />
                  <span className="text-zinc-300">
                    <span className="font-semibold">note:</span> {accessNote}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* layout: desktop 2-col, mobile stacked */}
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
            {/* media */}
            <div className={`${isMobile ? "lg:w-[30%] flex justify-start" : "lg:w-3/5"}`}>
              <MediaCarousel mediaItems={mediaItems} isMobile={isMobile} />
            </div>

            {/* content */}
            <div className="flex-1 space-y-6 sm:space-y-8">
              {/* about */}
              <div>
                <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-primary mb-2 sm:mb-3">
                  about
                </p>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {description}
                </p>
              </div>

              {/* tech stack */}
              <div>
                <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-primary mb-2 sm:mb-3">
                  technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <TechTile key={i} label={tech} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
