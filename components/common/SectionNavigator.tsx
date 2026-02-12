// components/common/SectionNavigator.tsx
"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

interface Project {
  id: string;
  nextProjectId?: string;
  nextProjectTitle?: string;
}

interface SectionNavigatorProps {
  projects: Project[];
  chatOpen?: boolean;
}

export default function SectionNavigator({ projects, chatOpen = false }: SectionNavigatorProps) {
  const [currentSection, setCurrentSection] = useState<
    "skills" | string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      const appearThreshold = 0.6;
      const disappearThreshold = 0.95;

      const getSectionVisibility = (rect: DOMRect): number => {
        const sectionHeight = rect.height;
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        return visibleHeight / sectionHeight;
      };

      // Check if in skills section
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const visibility = getSectionVisibility(rect);

        if (visibility >= appearThreshold) {
          setCurrentSection("skills");
          return;
        }
        if (currentSection === "skills" && visibility >= disappearThreshold) {
          return;
        }
      }

      // Check which section is most visible
      for (const project of projects) {
        const element = document.getElementById(project.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibility = getSectionVisibility(rect);

          if (visibility >= appearThreshold) {
            setCurrentSection(project.id);
            return;
          }
          if (
            currentSection === project.id &&
            visibility >= disappearThreshold
          ) {
            return;
          }
        }
      }

      setCurrentSection(null);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection, projects]);

  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Determine what to show based on current section
  let buttonText = "";
  let targetId = "";
  let isVisible = false;

  if (currentSection === "skills") {
    buttonText = "Explore My Work";
    targetId = "projects";
    isVisible = true;
  } else if (currentSection) {
    const currentProject = projects.find((p) => p.id === currentSection);
    if (currentProject?.nextProjectId && currentProject?.nextProjectTitle) {
      buttonText = currentProject.nextProjectTitle;
      targetId = currentProject.nextProjectId;
      isVisible = true;
    }
  }

  if (!isVisible) return null;

  // Responsive bottom positioning
  // Mobile: 70px (chat button) + 16px = 86px
  // Chat open: 500px (mobile) or 600px (desktop) + 16px
  const bottomClasses = chatOpen 
    ? "bottom-[516px] sm:bottom-[616px]" 
    : "bottom-[86px]";

  return (
    <button
      onClick={() => smoothScroll(targetId)}
      className={`fixed ${bottomClasses} right-3 sm:right-6 lg:right-8 z-50 group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 lg:py-4 bg-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:bg-orange-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ transition: "opacity 0.3s, transform 0.3s, bottom 0.3s" }}
      aria-label={`Scroll to ${buttonText}`}
    >
      <span className={`text-xs sm:text-sm lg:text-base ${currentSection === "skills" ? "hidden sm:inline" : ""}`}>
        {buttonText}
      </span>
      {currentSection === "skills" && (
        <span className="sm:hidden text-xs">Projects</span>
      )}
      <ArrowDown className="size-4 sm:size-5 group-hover:translate-y-1 transition-transform" />
    </button>
  );
}