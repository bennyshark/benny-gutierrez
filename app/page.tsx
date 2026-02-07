"use client";

import Image from "next/image";
import profilePic from "../public/ben4.png";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import WebProject from "@/components/projects/WebProject";
import MobileProject from "@/components/projects/MobileProject";

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Snapfolia Go project data
  const snapfoliaMedia = [
    { type: "image" as const, src: "/snap1.jpg" },
    { type: "image" as const, src: "/snap2.jpg" },
    { type: "image" as const, src: "/snap3.jpg" },
    { type: "image" as const, src: "/snap4.jpg" },
    { type: "image" as const, src: "/snap5.jpg" },
    { type: "image" as const, src: "/snap7.jpg" },
    { type: "image" as const, src: "/snap8.jpg" },
    { type: "image" as const, src: "/snap6.jpg" },
  ];

  const snapfoliaTechStack = [
    "Dart",
    "Flutter",
    "Yolov8",
    "TensorFlow lite",
    "Flutter_vision",
    "Python",
    "Pytorch",
  ];

  const webProjectMedia = [
    { type: "video" as const, src: "/braveboard-demo.mov" },
    { type: "image" as const, src: "/brave.png" },
    { type: "image" as const, src: "/brave1.png" },
    { type: "image" as const, src: "/brave2.png" },
    { type: "image" as const, src: "/brave3.png" },
    { type: "image" as const, src: "/brave4.png" },
    { type: "image" as const, src: "/brave5.png" },
    { type: "image" as const, src: "/brave6.png" },
    { type: "image" as const, src: "/brave7.png" },
    { type: "image" as const, src: "/brave8.png" },
    { type: "image" as const, src: "/brave9.png" },
  ];

  const webProjectTechStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div
        id="home"
        className="min-h-screen w-full flex items-center justify-center px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl w-full">
          {/* Text Content */}
          <div className="flex flex-col space-y-8 flex-1">
            {/* Main Heading */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Hi! I'm{" "}
                <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Benedict
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-slate-600 font-light mt-6">
                Web & Machine Learning Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              I build scalable web applications, machine learning projects, and
              Ai/Api integrations.
            </p>

            {/* CTA and Social */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:bg-orange-700"
              >
                <span>Explore My Work</span>
                <ArrowDown className="size-5 group-hover:translate-y-1 transition-transform" />
              </button>

              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/bennyshark"
                  className="p-3 rounded-full border-2 border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all group"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-5 text-slate-700 group-hover:text-orange-600 transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/benedict-gutierrez-15917b333"
                  className="p-3 rounded-full border-2 border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all group"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-5 text-slate-700 group-hover:text-orange-600 transition-colors" />
                </a>
                <a
                  href="mailto:benedictgutierrezcs25@gmail.com"
                  className="p-3 rounded-full border-2 border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all group"
                  aria-label="Email"
                >
                  <Mail className="size-5 text-slate-700 group-hover:text-orange-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative w-[400px] h-[400px]">
            <Image
              src={profilePic}
              alt="Benedict Gutierrez"
              fill
              sizes="400px"
              className="rounded-full bg-slate-300 object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="w-full bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-16 text-center">
            Projects
          </h2>

          {/* Snapfolia Go Project */}
          <MobileProject
            title="Snapfolia Go"
            description="A live leaf classifier mobile app dedicated to FAITH Colleges, Marian Orchard and Batangas Lake Lands. Derived from Snapfolia https://snapfolia.vercel.app, Snapfolia Go is a mobile app that provides real-time results simply by scanning a leaf with the device's camera. The app aims to offer a better user experience, delivering live results and object tracking."
            techStack={snapfoliaTechStack}
            mediaItems={snapfoliaMedia}
          />

          {/* Divider */}
          <div className="my-20 flex items-center justify-center">
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>

          {/* BraveBoard Web Project */}
          <WebProject
            title="BraveBoard"
            description="braveboard description"
            techStack={webProjectTechStack}
            mediaItems={webProjectMedia}
            siteUrl="https://braveboard.vercel.app"
            accessNote="Only FirstAsia accounts will be able to sign in."
          />
        </div>
      </section>
    </div>
  );
}
