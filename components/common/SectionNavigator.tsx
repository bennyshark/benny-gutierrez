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
}

export default function SectionNavigator({ projects }: SectionNavigatorProps) {
  const [currentSection, setCurrentSection] = useState<
    "skills" | string | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      // ========== ADJUST THESE VALUES ==========
      const appearThreshold = 0.6;
      const disappearThreshold = 0.95;
      // =========================================

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
      const targetPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
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

  return (
    <button
      onClick={() => smoothScroll(targetId)}
      className={`fixed bottom-8 right-8 z-40 group flex items-center gap-3 px-6 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:bg-orange-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ transition: "opacity 0.3s, transform 0.3s" }}
      aria-label={`Scroll to ${buttonText}`}
    >
      <span className={currentSection === "skills" ? "hidden sm:inline" : ""}>
        {buttonText}
      </span>
      {currentSection === "skills" && (
        <span className="sm:hidden">Projects</span>
      )}
      <ArrowDown className="size-5 group-hover:translate-y-1 transition-transform" />
    </button>
  );
}