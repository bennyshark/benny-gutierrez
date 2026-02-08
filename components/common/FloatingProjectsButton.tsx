"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export default function FloatingProjectsButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        const isInSkillsSection = rect.top <= 100 && rect.bottom >= 100;
        setIsVisible(isInSkillsSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
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

  return (
    <button
      onClick={scrollToProjects}
      className={`fixed bottom-8 right-8 z-40 group flex items-center gap-3 px-6 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 hover:bg-orange-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ transition: "opacity 0.3s, transform 0.3s" }}
      aria-label="Scroll to projects"
    >
      <span className="hidden sm:inline">Explore My Work</span>
      <span className="sm:hidden">Projects</span>
      <ArrowDown className="size-5 group-hover:translate-y-1 transition-transform" />
    </button>
  );
}