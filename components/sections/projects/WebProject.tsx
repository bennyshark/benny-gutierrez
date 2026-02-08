"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  X,
  ExternalLink,
  Info,
  Globe,
  ArrowDown,
} from "lucide-react";

// Tech Badge Component - Modern Design
function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-m font-medium border border-orange-200">
      {children}
    </span>
  );
}

// Media Item Type
type MediaItem = {
  type: "video" | "image";
  src: string;
};

// Web Media Carousel Component (Landscape)
function WebMediaCarousel({ mediaItems }: { mediaItems: MediaItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
    );
  };

  const currentMedia = mediaItems[currentIndex];

  const handleMediaClick = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <div className="relative">
        {/* Main Display - Landscape */}
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg aspect-video w-full group">
          {currentMedia.type === "video" ? (
            <div
              onClick={handleMediaClick}
              className="relative w-full h-full cursor-pointer"
            >
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
              >
                Your browser does not support the video tag.
              </video>
              {/* Overlay hint on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Click to view fullscreen
                </p>
              </div>
            </div>
          ) : (
            <div
              onClick={handleMediaClick}
              className="relative w-full h-full cursor-pointer"
            >
              <Image
                src={currentMedia.src}
                alt={`Screenshot ${currentIndex}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-fit"
              />
              {/* Overlay hint on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Click to view fullscreen
                </p>
              </div>
            </div>
          )}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all backdrop-blur-md"
            aria-label="Previous"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all backdrop-blur-md"
            aria-label="Next"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Media Type Indicator */}
          {currentMedia.type === "video" && (
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-orange-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-lg">
              <Play className="size-3" />
              VIDEO
            </div>
          )}
        </div>

        {/* Thumbnail Navigation with Counter */}
        <div className="flex items-center gap-4 mt-5">
          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide flex-1">
            {mediaItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 relative w-28 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  currentIndex === index
                    ? "border-orange-600 ring-2 ring-orange-200 scale-105"
                    : "border-slate-200 hover:border-slate-300 opacity-60 hover:opacity-100"
                }`}
              >
                {item.type === "video" ? (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <Play className="size-5 text-white" />
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                )}
              </button>
            ))}
          </div>
          
          {/* Counter */}
          <p className="text-sm text-slate-500 font-medium whitespace-nowrap">
            {currentIndex + 1} / {mediaItems.length}
          </p>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm z-10"
            aria-label="Close fullscreen"
          >
            <X className="size-8" />
          </button>

          {/* Navigation in Fullscreen */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="size-8" />
            </button>
          )}

          {currentIndex < mediaItems.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm z-10"
              aria-label="Next"
            >
              <ChevronRight className="size-8" />
            </button>
          )}

          {/* Fullscreen Content */}
          <div className="relative w-full h-full flex items-center justify-center">
            {currentMedia.type === "video" ? (
              <video
                key={currentIndex}
                src={currentMedia.src}
                controls
                autoPlay
                muted
                loop
                className="max-w-full max-h-full object-contain"
                playsInline
                preload="metadata"
                onClick={(e) => e.stopPropagation()}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={currentMedia.src}
                alt={`Fullscreen ${currentIndex}`}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>

          {/* Counter in Fullscreen */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
            {currentIndex + 1} / {mediaItems.length}
          </p>
        </div>
      )}
    </>
  );
}

// Web Project Component
interface WebProjectProps {
  title: string;
  description: string;
  techStack: string[];
  mediaItems: MediaItem[];
  siteUrl?: string;
  accessNote?: string;
  nextProject?: {
    id: string;
    title: string;
  };
}

export default function WebProject({
  title,
  description,
  techStack,
  mediaItems,
  siteUrl,
  accessNote,
  nextProject,
}: WebProjectProps) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-10 lg:p-14">
        {/* Header Section */}
        <div className="mb-8">
          <h3 className="text-4xl font-bold text-slate-900 mb-6">{title}</h3>

          {/* Site URL - Clean Link Style */}
          {siteUrl && (
            <div className="flex flex-col gap-3 italic">
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-orange-600 transition-colors group w-fit"
              >
                <Globe className="size-5 group-hover:rotate-12 transition-transform" />
                <span className="font-medium text-lg underline decoration-slate-300 group-hover:decoration-orange-600 transition-colors">
                  {siteUrl}
                </span>
                <ExternalLink className="size-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Access Note */}
              {accessNote && (
                <div className="flex items-start gap-2.5 text-base text-slate-600 bg-blue-50 border border-blue-200 rounded-lg p-3.5">
                  <Info className="size-5 flex-shrink-0 text-blue-600 mt-0.5" />
                  <span className="text-blue-700">
                    <span className="font-semibold">Note:</span> {accessNote}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Media Showcase */}
        <div className="mb-14">
          <WebMediaCarousel mediaItems={mediaItems} />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">About</h4>
            <p className="text-slate-600 leading-relaxed text-xl">
              {description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <TechBadge key={index}>{tech}</TechBadge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}