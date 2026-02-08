"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

// Tech Badge Component
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

// Media Carousel Component
function MediaCarousel({ mediaItems }: { mediaItems: MediaItem[] }) {
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

  const handleImageClick = () => {
    // Allow fullscreen for both images and videos
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <div className="relative">
        {/* Main Display */}
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] max-w-sm mx-auto">
          {currentMedia.type === "video" ? (
            <div
              onClick={handleImageClick}
              className="relative w-full h-full cursor-pointer group"
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
              onClick={handleImageClick}
              className="relative w-full h-full cursor-pointer group"
            >
              <Image
                src={currentMedia.src}
                alt={`Screenshot ${currentIndex}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-contain"
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
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
            aria-label="Previous"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
            aria-label="Next"
          >
            <ChevronRight className="size-6" />
          </button>

          {/* Media Type Indicator */}
          {currentMedia.type === "video" && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
              <Play className="size-3" />
              VIDEO
            </div>
          )}
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 relative w-16 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === index
                  ? "border-orange-600 scale-105"
                  : "border-slate-200 hover:border-orange-300 opacity-60 hover:opacity-100"
              }`}
            >
              {item.type === "video" ? (
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                  <Play className="size-6 text-white" />
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
        <p className="text-center text-sm text-slate-500 mt-2">
          {currentIndex + 1} / {mediaItems.length}
        </p>
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
          {/* Show Previous button only if not at first item (index 0) */}
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

          {/* Show Next button only if not at last item */}
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
                sizes="100vw"
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

// Mobile Project Component
interface MobileProjectProps {
  title: string;
  description: string;
  techStack: string[];
  mediaItems: MediaItem[];
}

export default function MobileProject({
  title,
  description,
  techStack,
  mediaItems,
}: MobileProjectProps) {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 p-8 lg:p-12">
        {/* --- ROW 1: HEADERS --- */}
        <div className="lg:col-start-1 lg:row-start-1">
          <h3 className="text-4xl font-bold text-slate-900">{title}</h3>
        </div>

        <div className="lg:col-start-2 lg:row-start-1 flex items-end">
          <h4 className="text-2xl font-semibold text-slate-900">About</h4>
        </div>

        {/* --- ROW 2: CONTENT --- */}
        <div className="lg:col-start-1 lg:row-start-2">
          <MediaCarousel mediaItems={mediaItems} />
        </div>

        <div className="lg:col-start-2 lg:row-start-2 flex flex-col gap-6">
          <p className="text-slate-600 leading-relaxed text-xl">
            {description}
          </p>

          <div>
            <h4 className="text-2xl font-semibold text-slate-900 mb-3">
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
