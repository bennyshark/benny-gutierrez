// components/sections/ExperienceSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Calendar, MapPin, ExternalLink, Laptop, Building2, Shuffle, ChevronLeft, ChevronRight, X, Lock, Globe } from "lucide-react";

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

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-orange-50 text-orange-700 rounded-full text-xs sm:text-sm font-medium border border-orange-200">
      {children}
    </span>
  );
}

function CompanyName({ company, color = "text-orange-600" }: { company: string; color?: string }) {
  const match = company.match(/^(.+?)(\s*\(.+\))$/);
  
  if (match) {
    const [, mainName, parenthetical] = match;
    return (
      <p className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
        <span className={color}>{mainName}</span>
        <span className="text-slate-900">{parenthetical}</span>
      </p>
    );
  }
  
  return (
    <p className={`text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 ${color}`}>
      {company}
    </p>
  );
}

function WorkSetupIcon({ setup }: { setup: "remote" | "onsite" | "hybrid" }) {
  const configs = {
    remote: { icon: Laptop, label: "Remote", color: "text-blue-600" },
    onsite: { icon: Building2, label: "On-site", color: "text-green-600" },
    hybrid: { icon: Shuffle, label: "Hybrid", color: "text-purple-600" },
  };

  const config = configs[setup];
  const Icon = config.icon;

  return (
    <div className={`flex items-center gap-1.5 ${config.color}`}>
      <Icon className="size-3.5 sm:size-4" />
      <span className="text-xs sm:text-sm font-medium">{config.label}</span>
    </div>
  );
}

function ImageCarousel({ 
  images, 
  hasRestrictedContent 
}: { 
  images: string[]; 
  hasRestrictedContent?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = hasRestrictedContent ? 2 : images.length;
  const isDisclosureSlide = hasRestrictedContent && currentIndex === 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleImageClick = () => {
    if (!isDisclosureSlide) {
      setIsFullscreen(true);
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <div className="relative">
        <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group">
          {isDisclosureSlide ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-4 sm:p-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Lock className="size-6 sm:size-8 text-orange-400" />
                </div>
                <p className="text-white text-base sm:text-xl font-semibold px-4">
                  Actual Nidec project content: not for disclosure
                </p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  This project contains proprietary information
                </p>
              </div>
            </div>
          ) : (
            <div
              onClick={handleImageClick}
              className="relative w-full h-full cursor-pointer"
            >
              <Image
                src={images[currentIndex]}
                alt={`Project ${currentIndex + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs sm:text-sm font-medium px-4 text-center">
                  Click to view fullscreen
                </p>
              </div>
            </div>
          )}

          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all backdrop-blur-md"
                aria-label="Previous"
              >
                <ChevronLeft className="size-4 sm:size-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all backdrop-blur-md"
                aria-label="Next"
              >
                <ChevronRight className="size-4 sm:size-5" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && !hasRestrictedContent && (
          <div className="flex items-center gap-2 sm:gap-4 mt-3 sm:mt-4">
            <div className="flex gap-1.5 sm:gap-2.5 overflow-x-auto pb-2 scrollbar-hide flex-1">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 relative w-16 h-10 sm:w-20 sm:h-14 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
                    currentIndex === index
                      ? "border-orange-600 ring-2 ring-orange-200 scale-105"
                      : "border-slate-200 hover:border-slate-300 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 64px, 80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-slate-500 font-medium whitespace-nowrap">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        )}

        {hasRestrictedContent && (
          <p className="text-center text-xs sm:text-sm text-slate-500 mt-3 sm:mt-4">
            {currentIndex + 1} / {totalSlides}
          </p>
        )}
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm z-10"
            aria-label="Close fullscreen"
          >
            <X className="size-6 sm:size-8" />
          </button>

          {images.length > 1 && currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="size-6 sm:size-8" />
            </button>
          )}

          {images.length > 1 && currentIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm z-10"
              aria-label="Next"
            >
              <ChevronRight className="size-6 sm:size-8" />
            </button>
          )}

          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`Fullscreen ${currentIndex}`}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <p className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 text-white text-base sm:text-lg">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}

export function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="mb-4 sm:mb-6">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
            {experience.position}
          </h3>
          <CompanyName company={experience.company} color={experience.companyColor} />
          <div className="flex flex-wrap gap-2 sm:gap-4 text-slate-600">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Calendar className="size-3.5 sm:size-4" />
              <span className="text-xs sm:text-sm">{experience.duration}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <MapPin className="size-3.5 sm:size-4" />
              <span className="text-xs sm:text-sm">{experience.location}</span>
            </div>
            <WorkSetupIcon setup={experience.workSetup} />
          </div>

          {experience.projectUrl && (
            <div className="mt-3 sm:mt-4">
              <a
                href={experience.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-1.5 text-slate-600 hover:text-orange-600 transition-colors group w-fit"
              >
                <Globe className="size-3.5 sm:size-4 group-hover:rotate-12 transition-transform flex-shrink-0" />
                <span className="font-medium text-xs sm:text-sm md:text-base underline decoration-slate-300 group-hover:decoration-orange-600 transition-colors break-all">
                  {experience.projectUrl}
                </span>
                <ExternalLink className="size-3 sm:size-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
              </a>
            </div>
          )}
        </div>

        {experience.projectImages.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <ImageCarousel 
              images={experience.projectImages} 
              hasRestrictedContent={experience.hasRestrictedContent}
            />
          </div>
        )}

        <div className="mb-4 sm:mb-6">
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">
            {experience.description}
          </p>

          {experience.achievements.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 text-slate-600 text-xs sm:text-sm md:text-base"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-600 rounded-full mt-1.5 sm:mt-2"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {experience.technologies.length > 0 && (
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-2 sm:mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {experience.technologies.map((tech, index) => (
                <TechBadge key={index}>{tech}</TechBadge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ExperienceSection({
  experiences,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="w-full bg-slate-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 text-center">
          Experience
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 text-center mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto px-4">
          Professional experience and contributions
        </p>

        <div>
          {experiences.map((experience, index) => (
            <div key={index}>
              <div id={`experience-${index}`}>
                <ExperienceCard experience={experience} />
              </div>
              {index < experiences.length - 1 && (
                <div className="my-12 sm:my-16 lg:my-20 flex items-center justify-center">
                  <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}