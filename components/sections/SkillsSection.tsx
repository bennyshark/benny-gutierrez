"use client";

import Image from "next/image";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiTypescript, SiNodedotjs, SiDrizzle, SiSupabase, SiMongodb,
  SiPostgresql, SiGraphql, SiPython, SiDart, SiFlutter,
  SiPytorch, SiTensorflow, SiAnthropic, SiGoogle,
} from "react-icons/si";
import { BiData } from "react-icons/bi";
import { TbBrain } from "react-icons/tb";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SkillItem = { icon?: any; label: string; color: string; imageSrc?: string; type?: string };

const skillCategories = [
  {
    name: "frontend",
    color: "#61DAFB",
    bgClass: "from-sky-500/5 to-blue-600/5",
    borderClass: "border-sky-500/20",
    skills: [
      { icon: SiHtml5, label: "HTML", color: "#E34F26" },
      { icon: SiCss3, label: "CSS", color: "#1572B6" },
      { icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
      { icon: SiReact, label: "React", color: "#61DAFB" },
      { icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
      { icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4" },
      { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
      { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
    ],
  },
  {
    name: "backend & data",
    color: "#3ECF8E",
    bgClass: "from-emerald-500/5 to-teal-600/5",
    borderClass: "border-emerald-500/20",
    skills: [
      { icon: SiSupabase, label: "Supabase", color: "#3ECF8E" },
      { type: "image" as const, imageSrc: "/firebase.png", label: "Firebase", color: "#FFCA28" },
      { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
      { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
      { icon: SiGraphql, label: "GraphQL", color: "#E10098" },
      { icon: BiData, label: "NoSQL", color: "#FF6C37" },
      { icon: SiDrizzle, label: "Drizzle", color: "#C5F74F" },
    ],
  },
  {
    name: "languages & mobile",
    color: "#0175C2",
    bgClass: "from-indigo-500/5 to-violet-600/5",
    borderClass: "border-indigo-500/20",
    skills: [
      { icon: SiPython, label: "Python", color: "#3776AB" },
      { icon: SiDart, label: "Dart", color: "#0175C2" },
      { icon: SiFlutter, label: "Flutter", color: "#02569B" },
    ],
  },
  {
    name: "ai & apis",
    color: "#EE4C2C",
    bgClass: "from-rose-500/5 to-orange-600/5",
    borderClass: "border-rose-500/20",
    skills: [
      { icon: SiPytorch, label: "PyTorch", color: "#EE4C2C" },
      { icon: SiTensorflow, label: "TensorFlow Lite", color: "#FF6F00" },
      { icon: TbBrain, label: "LLM", color: "#7C3AED" },
      { icon: SiAnthropic, label: "Anthropic API", color: "#ffffff" },
      { icon: SiGoogle, label: "Google API", color: "#4285F4" },
    ],
  },
];

function SkillIcon({ skill }: { skill: SkillItem }) {
  return (
    <div className="group relative flex items-center gap-2 px-2.5 py-1.5 sm:gap-2.5 sm:px-3.5 sm:py-2 rounded-lg bg-zinc-800/40 border border-zinc-700/30 active:border-zinc-500/60 active:bg-zinc-800/80 hover:border-zinc-600/50 hover:bg-zinc-800/60 transition-all">
      <div
        className="p-1 rounded-md sm:p-1.5 active:scale-110 transition-transform"
        style={{ backgroundColor: `${skill.color}15` }}
      >
        {skill.type === "image" ? (
          <Image src={skill.imageSrc!} alt={skill.label} width={16} height={16} className="size-3.5 sm:size-4 object-contain" />
        ) : (
          <skill.icon className="size-3.5 sm:size-4" style={{ color: skill.color }} />
        )}
      </div>
      <span className="text-[11px] sm:text-sm text-text-secondary active:text-text-primary group-hover:text-text-primary transition-colors font-medium leading-tight sm:leading-normal">
        {skill.label}
      </span>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm text-primary font-mono tracking-widest uppercase mb-2">
            capabilities
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
            skills & tools
          </h2>
          <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto mt-3 sm:mt-4">
            technologies i use to build modern web applications, mobile apps, and ai-powered solutions.
          </p>
        </div>

        {/* bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.name}
              className={`rounded-xl sm:rounded-2xl border ${cat.borderClass} bg-gradient-to-br ${cat.bgClass} p-4 sm:p-5 lg:p-6 transition-all hover:shadow-lg hover:shadow-${cat.color}/5`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest" style={{ color: cat.color }}>
                  {cat.name}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:gap-2">
                {cat.skills.map((skill, i) => (
                  <SkillIcon key={i} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
