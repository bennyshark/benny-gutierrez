"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

interface FloatingNextProjectProps {
  projects: Array<{
    id: string;
    nextProjectId?: string;
    nextProjectTitle?: string;
  }>;
}

export default function FloatingNextProject({ projects }: FloatingNextProjectProps) {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check which project is currently in view
      for (const project of projects) {
        const element = document.getElementById(project.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if project is in viewport (accounting for navbar and giving some buffer)
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveProject(project.id);
            return;
          }
        }
      }
      setActiveProject(null);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects]);

  const scrollToNext = (nextId: string) => {
    const element = document.getElementById(nextId);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500;
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
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

  // Find the current project and check if it has a next project
  const currentProject = projects.find((p) => p.id === activeProject);
  const hasNextProject = currentProject?.nextProjectId && currentProject?.nextProjectTitle;

  if (!hasNextProject) return null;

  return (
    <button
      onClick={() => currentProject.nextProjectId && scrollToNext(currentProject.nextProjectId)}
      className={`fixed bottom-8 right-8 z-40 group flex items-center gap-3 px-6 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:bg-orange-700 ${
        hasNextProject ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ transition: "opacity 0.3s, transform 0.3s" }}
      aria-label={`Scroll to ${currentProject?.nextProjectTitle}`}
    >
      <span>{currentProject?.nextProjectTitle}</span>
      <ArrowDown className="size-5 group-hover:translate-y-1 transition-transform" />
    </button>
  );
}