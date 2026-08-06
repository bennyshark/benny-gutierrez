"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft, ChevronRight, Play, ExternalLink, Info,
  Globe,
} from "lucide-react";
import TechTile from "../common/TechTile";
import { useLightbox } from "../common/LightboxProvider";

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
  regenBuilt?: boolean;
}

function ProjectLabel({ label }: { label: "product" | "prototype" }) {
  if (label === "product") {
    return (
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded border border-secondary/20 bg-secondary/10 text-secondary text-[10px] font-mono uppercase tracking-widest shadow-[0_0_10px_rgba(180,83,9,0.2)]">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
        product
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded border border-primary/20 bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-widest shadow-[0_0_10px_rgba(251,191,36,0.2)]">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      prototype
    </span>
  );
}

function MediaCarousel({ mediaItems, isMobile }: { mediaItems: MediaItem[]; isMobile?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { open: openLightbox } = useLightbox();

  const imageItems = mediaItems.filter((m) => m.type === "image");

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  const nextSlide = () => goTo((currentIndex + 1) % mediaItems.length);
  const prevSlide = () => goTo((currentIndex - 1 + mediaItems.length) % mediaItems.length);

  const currentMedia = mediaItems[currentIndex];

  const handleImageClick = () => {
    const imageIndex = mediaItems.slice(0, currentIndex).filter((m) => m.type === "image").length;
    openLightbox(
      imageItems.map((m) => ({ src: m.src, alt: "Screenshot" })),
      imageIndex,
    );
  };

  return (
    <>
      <div className={`relative ${isMobile ? "max-w-[240px] sm:max-w-[280px] mx-auto" : "w-full"}`}>
        {/* main display */}
        <div
          className={`relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black group ${
            isMobile ? "aspect-[9/16]" : "aspect-video"
          }`}
        >
          {/* Terminal header */}
          <div className="absolute top-0 left-0 w-full h-8 bg-surface border-b border-white/10 flex items-center px-4 z-40">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="ml-4 font-mono text-[10px] text-text-muted">media_viewer.exe</span>
          </div>

          <div className="pt-8 w-full h-full">
            {currentMedia.type === "video" ? (
              <div className="relative w-full h-full">
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
              <div onClick={handleImageClick} className="relative w-full h-full cursor-pointer">
                <Image
                  key={currentIndex}
                  src={currentMedia.src}
                  alt={`Screenshot ${currentIndex}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 800px"
                  className="object-contain"
                  priority={currentIndex === 0}
                />
              </div>
            )}
          </div>

          <button onClick={prevSlide} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-primary text-white hover:text-black rounded transition-all backdrop-blur-sm z-30 border border-white/10" aria-label="Previous">
            <ChevronLeft className="size-4" />
          </button>
          <button onClick={nextSlide} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 hover:bg-primary text-white hover:text-black rounded transition-all backdrop-blur-sm z-30 border border-white/10" aria-label="Next">
            <ChevronRight className="size-4" />
          </button>

          {currentMedia.type === "video" && (
            <div className="absolute top-11 right-3 px-2 py-1 bg-primary/20 text-primary border border-primary/50 text-[10px] font-mono rounded flex items-center gap-1 z-30">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              LIVE
            </div>
          )}
        </div>

        {/* thumbnails */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`flex-shrink-0 relative rounded-md overflow-hidden border transition-all bg-black ${
                isMobile ? "w-10 h-14 sm:w-12 sm:h-16" : "w-16 h-12 sm:w-24 sm:h-16"
              } ${
                currentIndex === index ? "border-primary opacity-100" : "border-white/10 opacity-40 hover:opacity-100"
              }`}
            >
              {item.type === "video" ? (
                <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                  <Play className="size-3 sm:size-4 text-text-muted" />
                </div>
              ) : (
                <Image src={item.src} alt={`Thumb ${index}`} fill sizes="96px" className="object-cover" />
              )}
            </button>
          ))}
        </div>

        <p className="text-center font-mono text-[10px] text-text-muted mt-2 tracking-widest">
          {currentIndex + 1} / {mediaItems.length}
        </p>
      </div>
    </>
  );
}

export default function ProjectShowcase({
  title, description, techStack, mediaItems, siteUrl,
  accessNote, label, id, isMobile, regenBuilt,
}: ProjectShowcaseProps) {
  return (
    <section id={id} className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl sm:rounded-3xl border border-white/10 glass-panel p-6 sm:p-8 lg:p-12 transition-all card-glow-hover relative overflow-hidden group">
          
          {/* decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* header row */}
          <div className={`flex flex-wrap items-center gap-4 mb-6 sm:mb-8 ${isMobile ? "justify-center text-center" : ""}`}>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary uppercase tracking-tight">
              {title}
            </h3>
            {label && <ProjectLabel label={label} />}
            {regenBuilt && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/20 bg-white/5 text-text-primary text-[10px] font-mono uppercase tracking-widest ml-auto sm:ml-0">
                <Globe className="size-3" />
                Regen Digital
              </span>
            )}
          </div>

          {/* site url */}
          {siteUrl && (
            <div className="mb-6 sm:mb-8">
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-text-secondary active:text-primary hover:text-primary transition-colors group/link"
              >
                <div className="p-2 rounded bg-white/5 border border-white/10 group-hover/link:border-primary/50 transition-colors">
                  <Globe className="size-4" />
                </div>
                <span className="text-sm sm:text-base font-mono underline decoration-white/20 group-hover/link:decoration-primary/50 break-all transition-colors">
                  {siteUrl}
                </span>
                <ExternalLink className="size-3 opacity-60 active:opacity-100 group-hover/link:opacity-100 transition-all" />
              </a>

              {accessNote && (
                <div className="flex items-start gap-3 mt-4 text-sm text-text-secondary bg-black/40 border border-white/10 rounded-lg p-4 font-mono">
                  <Info className="size-4 flex-shrink-0 text-primary mt-0.5" />
                  <span>
                    <span className="text-primary font-bold uppercase tracking-wider mr-2">note:</span>
                    {accessNote}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* layout: desktop 2-col, mobile stacked */}
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 mt-8">
            {/* media */}
            <div className={`${isMobile ? "lg:w-[30%] flex justify-start" : "lg:w-[55%]"}`}>
              <MediaCarousel mediaItems={mediaItems} isMobile={isMobile} />
            </div>

            {/* content */}
            <div className="flex-1 space-y-8 lg:space-y-12">
              {/* about */}
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <span className="w-1.5 h-1.5 bg-primary" />
                  <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-primary">
                    system overview
                  </p>
                </div>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {description}
                </p>
              </div>

              {/* tech stack */}
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <span className="w-1.5 h-1.5 bg-secondary" />
                  <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-secondary">
                    technical specs
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
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
