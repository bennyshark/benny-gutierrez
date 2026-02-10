// app/page.tsx
"use client";

import Image from "next/image";
import profilePic from "../public/ben4.png";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import MobileProject from "@/components/sections/projects/MobileProject";
import WebProject from "@/components/sections/projects/WebProject";
import SectionNavigator from "@/components/common/SectionNavigator";

export default function Home() {
  const scrollToSkills = () => {
    const element = document.getElementById("skills");
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

  // Snapfolia Go project data
  const snapfoliaGoMedia = [
    { type: "video" as const, src: "/media/snapfolia-go.mp4" },
    { type: "image" as const, src: "/images/snapfolia-go/snap1.jpg" },
    { type: "image" as const, src: "/images/snapfolia-go/snap2.jpg" },
    { type: "image" as const, src: "/images/snapfolia-go/snap3.jpg" },
    { type: "image" as const, src: "/images/snapfolia-go/snap4.jpg" },
    { type: "image" as const, src: "/images/snapfolia-go/snap5.jpg" },
    { type: "image" as const, src: "/images/snapfolia-go/snap7.jpg" },
    { type: "image" as const, src: "/images/snapfolia-go/snap8.jpg" },
    { type: "image" as const, src: "/images/snapfolia-go/snap6.jpg" },
  ];

  const snapfoliaGoTechStack = [
    "Dart",
    "Flutter",
    "Yolov8",
    "TensorFlow lite",
    "Flutter_vision",
    "Python",
    "Pytorch",
  ];

  // Synergreens project data
  const SynergreensMedia = [
    { type: "image" as const, src: "/images/synergreens/sg1.png" },
    { type: "image" as const, src: "/images/synergreens/sg2.png" },
    { type: "image" as const, src: "/images/synergreens/sg3.png" },
    { type: "image" as const, src: "/images/synergreens/sg4.png" },
    { type: "image" as const, src: "/images/synergreens/sg5.png" },
    { type: "image" as const, src: "/images/synergreens/sg6.png" },
    { type: "image" as const, src: "/images/synergreens/sg7.png" },
    { type: "image" as const, src: "/images/synergreens/sg8.png" },
  ];

  const SynergreensTechStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Google Maps API",
    "Google Sheets API",
    "Resend API",
    "Vercel",
  ];

  // BraveBoard project data
  const webProjectMedia = [
    { type: "video" as const, src: "/media/braveboard-demo.mp4" },
    { type: "image" as const, src: "/images/braveboard/brave.png" },
    { type: "image" as const, src: "/images/braveboard/brave1.png" },
    { type: "image" as const, src: "/images/braveboard/brave2.png" },
    { type: "image" as const, src: "/images/braveboard/brave3.png" },
    { type: "image" as const, src: "/images/braveboard/brave4.png" },
    { type: "image" as const, src: "/images/braveboard/brave5.png" },
    { type: "image" as const, src: "/images/braveboard/brave6.png" },
    { type: "image" as const, src: "/images/braveboard/brave7.png" },
    { type: "image" as const, src: "/images/braveboard/brave8.png" },
    { type: "image" as const, src: "/images/braveboard/brave9.png" },
    { type: "image" as const, src: "/images/braveboard/brave10.png" },
    { type: "image" as const, src: "/images/braveboard/brave11.png" },
    { type: "image" as const, src: "/images/braveboard/brave12.png" },
  ];

  const webProjectTechStack = [
    "React",
    "Next.js",
    "Supabase",
    "TypeScript",
    "Tailwind CSS",
    "Vercel",
  ];

    // Experience data
    const experiences = [
      {
        company: "Nidec Drives (multinational company)",
        position: "Data Scientist",
        location: "BGC, Taguig, Philippines",
        duration: "Feb 2025 - May 2025",
        workSetup: "hybrid" as const,
        companyColor: "text-green-600", // Custom color for company name
        description:
          "Led and deployed a website migration from Google Sites to Wix, setting up authentication and page routings. (to edit)",
        achievements: [
          "Managed data cleanup and validation for company datasets spanning 9 countries",
          "to edit",
        ],
        projectImages: [
          "/images/nidec/nidec1.jpg",
        ],
        hasRestrictedContent: true,
        technologies: ["Python", "Pytorch", "Power BI", "Jupyter Notebook", "Google Collab" ],
      },
      {
        company: "FAITH",
        position: "Machine Learning Engineer",
        location: "Tanauan, Philippines",
        duration: "Jun 2024 - Dec 2024",
        workSetup: "hybrid" as const,
        description:
          "Developed and trained machine learning models for image classification and object detection systems.",
        achievements: [
          "Achieved 95% accuracy in leaf classification model",
          "Deployed real-time object detection on mobile devices",
          "Created comprehensive documentation for ML pipeline",
        ],
        projectImages: [
          "/images/faith/faith1.png",
        ],
        projectUrl: "https://snapfolia.vercel.app",
        technologies: ["Python", "PyTorch", "Flutter", "YOLOv8"],
      },
    ];

  // Section navigation configuration
  const sectionNavigation = [
    {
      id: "snapfolia-go",
      nextProjectId: "synergreens",
      nextProjectTitle: "Synergreens",
    },
    {
      id: "synergreens",
      nextProjectId: "braveboard",
      nextProjectTitle: "BraveBoard",
    },
    {
      id: "braveboard",
      nextProjectId: "experience-0",
      nextProjectTitle: "Check My Experience",
    },
    {
      id: "experience-0",
      nextProjectId: "experience-1",
      nextProjectTitle: "FAITH",
    },
    {
      id: "experience-1",
    },
  ];

  return (

    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <div
        id="home"
        className="min-h-screen w-full flex items-center justify-center px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-6xl w-full">
          <div className="flex flex-col space-y-8 flex-1">
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

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              I build scalable web applications, machine learning projects, and
              Ai/Api integrations.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <button
                onClick={scrollToSkills}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 hover:bg-orange-700"
              >
                <span>Check My Skills</span>
                <ArrowDown className="size-5 group-hover:translate-y-1 transition-transform" />
              </button>

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

      {/* Skills Section */}
      <SkillsSection />

      {/* Unified Section Navigator */}
      <SectionNavigator projects={sectionNavigation} />

      {/* Projects Section */}
      <section id="projects" className="w-full bg-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-16 text-center">
            Projects
          </h2>

          <div id="snapfolia-go">
            <MobileProject
              title="Snapfolia Go"
              description="A live leaf classifier mobile app dedicated to FAITH Colleges, Marian Orchard and Batangas Lake Lands. Derived from Snapfolia https://snapfolia.vercel.app, Snapfolia Go is a mobile app that provides real-time results simply by scanning a leaf with the device's camera. The app aims to offer a better user experience, delivering live results and object tracking."
              techStack={snapfoliaGoTechStack}
              mediaItems={snapfoliaGoMedia}
            />
          </div>

          <div className="my-20 flex items-center justify-center">
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>

          <div id="synergreens">
            <WebProject
              title="Synergreens by Deo Abutal"
              description="Synergreens by Deo Abutal is a Direct Sales Website built to support a distributor-based sales model. It features product catalog, customer inquiry handling, and an order workflow. The platform includes structured company and distributor profiles, FDA registration information, an ordering system with automated email notifications, Google Maps integration for location display with directions, form validation, and layouts optimized for different devices. Synergreens by Deo Abutal is designed to provide a clear and accessible online presence for the brand while supporting distributor operations and customer interactions."
              techStack={SynergreensTechStack}
              mediaItems={SynergreensMedia}
              siteUrl="https://synergreens.ckdigitals.com"
            />
          </div>

          <div className="my-20 flex items-center justify-center">
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
          </div>

          <div id="braveboard">
            <WebProject
              title="BraveBoard"
              description="BraveBoard is a school-exclusive social media platform designed for the FirstAsia community. It focuses on capturing and sharing memories through school events, bringing together students, professors, and organizations in one shared digital space.

            More than just a feed, BraveBoard is event-centric, allowing users to post photos, stories, and experiences tied to specific events, helping preserve moments that matter across campus life. It also serves as an open, community-driven discussion space where students can freely express ideas, ask questions, seek help, and engage in conversations on forums."
              techStack={webProjectTechStack}
              mediaItems={webProjectMedia}
              siteUrl="https://braveboard.vercel.app"
              accessNote="Only FirstAsia accounts will be able to sign in."
            />
          </div>
        </div>
      </section>

      {/* Experience Section - Use the component properly */}
      <ExperienceSection experiences={experiences} />
    </div>
  );
}