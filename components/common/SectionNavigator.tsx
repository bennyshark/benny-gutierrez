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
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const appearThreshold = 0.4;
      const disappearThreshold = 0.9;

      const getSectionVisibility = (rect: DOMRect): number => {
        const sectionHeight = rect.height;
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        return visibleHeight / sectionHeight;
      };

      const checkSection = (id: string): boolean => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        const visibility = getSectionVisibility(rect);
        if (visibility >= appearThreshold) {
          setCurrentSection(id);
          return true;
        }
        if (currentSection === id && visibility >= disappearThreshold) {
          return true;
        }
        return false;
      };

      const sectionOrder = ["web-design", "skills", ...projects.map(p => p.id)];

      for (const id of sectionOrder) {
        if (checkSection(id)) return;
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
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  let buttonText = "";
  let targetId = "";
  let isVisible = false;

  if (currentSection === "web-design") {
    buttonText = "skills & tools";
    targetId = "skills";
    isVisible = true;
  } else if (currentSection === "skills") {
    buttonText = "explore my work";
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

  const bottomClasses = chatOpen
    ? "bottom-[516px] sm:bottom-[616px]"
    : "bottom-[86px]";

  return (
    <button
      onClick={() => smoothScroll(targetId)}
      className={`fixed ${bottomClasses} right-3 sm:right-6 lg:right-8 z-50 group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-bg-base font-medium rounded-full shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ transition: "opacity 0.3s, transform 0.3s, bottom 0.3s" }}
      aria-label={`Scroll to ${buttonText}`}
    >
      <span className="text-xs sm:text-sm">{buttonText}</span>
      <ArrowDown className="size-4 sm:size-5 group-hover:translate-y-1 transition-transform" />
    </button>
  );
}
