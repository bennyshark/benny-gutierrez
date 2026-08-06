"use client";

import Image from "next/image";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiTypescript, SiNodedotjs, SiSupabase, SiMongodb,
  SiPostgresql, SiPython, SiDart, SiFlutter,
  SiPytorch, SiTensorflow, SiAnthropic, SiGoogle,
  SiFramer, SiSanity, SiReactquery, SiTelegram, SiShadcnui,
} from "react-icons/si";
import { BiData, BiBot, BiCar } from "react-icons/bi";
import { TbBrain, TbBrandCashapp } from "react-icons/tb";
import { LuBot } from "react-icons/lu";
import { MdOutlineSmartToy } from "react-icons/md";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SkillItem = { icon?: any; label: string; imageSrc?: string; type?: string };

const skillCategories = [
  {
    name: "frontend",
    skills: [
      { icon: SiHtml5, label: "HTML" },
      { icon: SiCss3, label: "CSS" },
      { icon: SiJavascript, label: "JavaScript" },
      { icon: SiReact, label: "React" },
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiTailwindcss, label: "Tailwind CSS" },
      { icon: SiTypescript, label: "TypeScript" },
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiFramer, label: "Framer Motion" },
      { icon: SiReactquery, label: "TanStack Start" },
      { icon: SiShadcnui, label: "shadcn/ui" },
    ],
  },
  {
    name: "backend & data",
    skills: [
      { icon: SiSupabase, label: "Supabase" },
      { type: "image" as const, imageSrc: "/firebase.png", label: "Firebase" },
      { icon: SiMongodb, label: "MongoDB" },
      { icon: SiPostgresql, label: "PostgreSQL" },
      { icon: BiData, label: "NoSQL" },
      { icon: SiSanity, label: "Sanity" },
    ],
  },
  {
    name: "languages & mobile",
    skills: [
      { icon: SiPython, label: "Python" },
      { icon: SiDart, label: "Dart" },
      { icon: SiFlutter, label: "Flutter" },
    ],
  },
  {
    name: "ai & apis",
    skills: [
      { icon: SiPytorch, label: "PyTorch" },
      { icon: SiTensorflow, label: "TensorFlow Lite" },
      { icon: TbBrain, label: "LLM" },
      { icon: SiAnthropic, label: "Anthropic API" },
      { icon: SiGoogle, label: "Google API" },
      { icon: SiTelegram, label: "Telegram Bot API" },
      { icon: TbBrandCashapp, label: "PayMongo" },
      { icon: BiCar, label: "Lalamove API" },
      { icon: LuBot, label: "Claude Code" },
      { icon: MdOutlineSmartToy, label: "Lovable" },
      { icon: BiBot, label: "Opencode" },
    ],
  },
];

function SkillIcon({ skill }: { skill: SkillItem }) {
  return (
    <div className="group relative flex items-center gap-2 px-2.5 py-1.5 sm:gap-2.5 sm:px-3.5 sm:py-2 rounded border border-white/5 bg-black/40 hover:border-primary/50 hover:bg-primary/10 transition-all card-glow-hover">
      <div className="p-1 rounded-sm sm:p-1.5 group-hover:scale-110 transition-transform">
        {skill.type === "image" ? (
          <Image src={skill.imageSrc!} alt={skill.label} width={16} height={16} className="size-3.5 sm:size-4 object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all" />
        ) : (
          <skill.icon className="size-3.5 sm:size-4 text-text-muted group-hover:text-primary transition-colors" />
        )}
      </div>
      <span className="font-mono text-[10px] sm:text-xs tracking-wide text-text-secondary group-hover:text-text-primary transition-colors leading-tight sm:leading-normal">
        {skill.label}
      </span>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm text-primary font-mono tracking-widest lowercase mb-4 flex items-center justify-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            skills & capabilities
            <span className="w-4 h-[1px] bg-primary" />
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary lowercase tracking-tight">
            tech <span className="text-gradient-gold">stack</span>
          </h2>
          <p className="text-sm sm:text-base font-mono text-text-secondary max-w-2xl mx-auto mt-4 sm:mt-6 border border-white/10 glass-panel py-2 px-4 rounded-lg inline-block">
            <span className="text-primary mr-2">&gt;</span> technologies i use to build modern applications
          </p>
        </div>

        {/* bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.name}
              className={`rounded-2xl border border-white/10 glass-panel p-6 sm:p-8 transition-all card-glow-hover relative overflow-hidden group ${
                idx === 0 || idx === 3 ? "lg:col-span-2" : "lg:col-span-2"
              }`}
            >
              {/* background watermark */}
              <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity font-display font-bold text-8xl text-white select-none pointer-events-none">
                0{idx + 1}
              </div>

              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 relative z-10">
                <span className="text-xs sm:text-sm font-mono lowercase tracking-widest text-primary flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary animate-pulse" />
                  {cat.name}
                </span>
                <span className="text-[10px] font-mono text-text-muted opacity-50">NODE_0{idx + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2 relative z-10">
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
