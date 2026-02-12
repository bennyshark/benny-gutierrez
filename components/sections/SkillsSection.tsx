"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiDart,
  SiFlutter,
  SiPytorch,
  SiTensorflow,
  SiAnthropic,
  SiGoogle,
} from "react-icons/si";
import { BiData } from "react-icons/bi";

// Skill Item Component
function SkillCard({ icon: Icon, label, color }: { icon: any; label: string; color: string }) {
  return (
    <div className="group flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all hover:scale-105">
      <div
        className="p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="size-8 sm:size-10 md:size-12" style={{ color }} />
      </div>
      <span className="text-xs sm:text-sm md:text-base text-slate-700 font-semibold text-center">
        {label}
      </span>
    </div>
  );
}

export default function SkillsSection() {
  const skills = [
    { icon: SiHtml5, label: "HTML", color: "#E34F26" },
    { icon: SiCss3, label: "CSS", color: "#1572B6" },
    { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
    { icon: SiReact, label: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
    { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
    { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
    { icon: SiSupabase, label: "Supabase", color: "#3ECF8E" },
    { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
    { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
    { icon: BiData, label: "NoSQL", color: "#FF6C37" },
    { icon: SiPython, label: "Python", color: "#3776AB" },
    { icon: SiDart, label: "Dart", color: "#0175C2" },
    { icon: SiFlutter, label: "Flutter", color: "#02569B" },
    { icon: SiPytorch, label: "PyTorch", color: "#EE4C2C" },
    { icon: SiTensorflow, label: "TensorFlow Lite", color: "#FF6F00" },
    { icon: SiAnthropic, label: "Anthropic API", color: "#191919" },
    { icon: SiGoogle, label: "Google API", color: "#4285F4" },
  ];

  return (
    <section id="skills" className="w-full bg-gradient-to-br from-slate-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Skills
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            I have experience with these technologies and tools, building modern web applications,
            mobile apps, and AI-powered solutions.
          </p>
        </div>

        {/* Skills Grid - Responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              label={skill.label}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}