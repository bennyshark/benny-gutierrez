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
    <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium border border-orange-200">
      {children}
    </span>
  );
}

function CompanyName({ company, color = "text-orange-600" }: { company: string; color?: string }) {
  // Check if company name has parenthetical text
  const match = company.match(/^(.+?)(\s*\(.+\))$/);
  
  if (match) {
    const [, mainName, parenthetical] = match;
    return (
      <p className="text-xl font-semibold mb-4">
        <span className={color}>{mainName}</span>
        <span className="text-slate-900">{parenthetical}</span>
      </p>
    );
  }
  
  // Default: show entire company name in the specified color
  return (
    <p className={`text-xl font-semibold mb-4 ${color}`}>
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
      <Icon className="size-4" />
      <span className="text-sm font-medium">{config.label}</span>
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

  // If restricted content, treat it as having 2 slides (image + disclosure)
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
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group">
          {isDisclosureSlide ? (
            // Disclosure slide
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Lock className="size-8 text-orange-400" />
                </div>
                <p className="text-white text-xl font-semibold">
                  Actual Nidec project content: not for disclosure
                </p>
                <p className="text-slate-400 text-sm">
                  This project contains proprietary information
                </p>
              </div>
            </div>
          ) : (
            // Image slide
            <div
              onClick={handleImageClick}
              className="relative w-full h-full cursor-pointer"
            >
              <Image
                src={images[currentIndex]}
                alt={`Project ${currentIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                  Click to view fullscreen
                </p>
              </div>
            </div>
          )}

          {/* Show arrows if more than 1 slide */}
          {totalSlides > 1 && (
            <>
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
            </>
          )}
        </div>

        {/* Thumbnails only for non-restricted multi-image galleries */}
        {images.length > 1 && !hasRestrictedContent && (
          <div className="flex items-center gap-4 mt-4">
            <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-hide flex-1">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    currentIndex === index
                      ? "border-orange-600 ring-2 ring-orange-200 scale-105"
                      : "border-slate-200 hover:border-slate-300 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            
            <p className="text-sm text-slate-500 font-medium whitespace-nowrap">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        )}

        {/* Counter for restricted content */}
        {hasRestrictedContent && (
          <p className="text-center text-sm text-slate-500 mt-4">
            {currentIndex + 1} / {totalSlides}
          </p>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm z-10"
            aria-label="Close fullscreen"
          >
            <X className="size-8" />
          </button>

          {images.length > 1 && currentIndex > 0 && (
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

          {images.length > 1 && currentIndex < images.length - 1 && (
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

          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`Fullscreen ${currentIndex}`}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}

// Separate ExperienceCard component without section heading
export function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200/50 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-8 lg:p-10">
        <div className="mb-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
            {experience.position}
          </h3>
          <CompanyName company={experience.company} color={experience.companyColor} />
          <div className="flex flex-wrap gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Calendar className="size-4" />
              <span className="text-sm">{experience.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4" />
              <span className="text-sm">{experience.location}</span>
            </div>
            <WorkSetupIcon setup={experience.workSetup} />
          </div>

          {/* Project URL - Clean Link Style */}
          {experience.projectUrl && (
            <div className="mt-4">
              <a
                href={experience.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-orange-600 transition-colors group w-fit"
              >
                <Globe className="size-4 group-hover:rotate-12 transition-transform" />
                <span className="font-medium text-base underline decoration-slate-300 group-hover:decoration-orange-600 transition-colors">
                  {experience.projectUrl}
                </span>
                <ExternalLink className="size-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          )}
        </div>

        {experience.projectImages.length > 0 && (
          <div className="mb-8">
            <ImageCarousel 
              images={experience.projectImages} 
              hasRestrictedContent={experience.hasRestrictedContent}
            />
          </div>
        )}

        <div className="mb-6">
          <p className="text-slate-600 leading-relaxed text-lg mb-4">
            {experience.description}
          </p>

          {experience.achievements.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-orange-600 rounded-full mt-2"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {experience.technologies.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
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
    <section id="experience" className="w-full bg-slate-50 py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-center">
          Experience
        </h2>
        <p className="text-xl text-slate-600 text-center mb-16 max-w-2xl mx-auto">
          Professional journey and contributions
        </p>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} id={`experience-${index}`}>
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}