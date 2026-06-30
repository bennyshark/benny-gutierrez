"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import SectionNavigator from "@/components/common/SectionNavigator";
import ChatBot from "@/components/Chatbot";

// Cloudinary base URLs
const CLD_IMG = "https://res.cloudinary.com/dhsgwmuax/image/upload/f_auto,q_auto";
const CLD_VID = "https://res.cloudinary.com/dhsgwmuax/video/upload";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToSkills = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // project data
  const snapfoliaGoMedia = [
    { type: "video" as const, src: `${CLD_VID}/snapfolia-go.mp4` },
    { type: "image" as const, src: `${CLD_IMG}/snap1.jpg` },
    { type: "image" as const, src: `${CLD_IMG}/snap2.jpg` },
    { type: "image" as const, src: `${CLD_IMG}/snap3.jpg` },
    { type: "image" as const, src: `${CLD_IMG}/snap4.jpg` },
    { type: "image" as const, src: `${CLD_IMG}/snap5.jpg` },
    { type: "image" as const, src: `${CLD_IMG}/snap7.jpg` },
    { type: "image" as const, src: `${CLD_IMG}/snap8.jpg` },
    { type: "image" as const, src: `${CLD_IMG}/snap6.jpg` },
  ];

  const snapfoliaGoTechStack = [
    "Dart", "Flutter", "YOLOv8", "TensorFlow Lite",
    "Flutter Vision", "Python", "PyTorch",
  ];

  const synergreensMedia = [
    { type: "image" as const, src: `${CLD_IMG}/sg1.png` },
    { type: "image" as const, src: `${CLD_IMG}/sg2.png` },
    { type: "image" as const, src: `${CLD_IMG}/sg3.png` },
    { type: "image" as const, src: `${CLD_IMG}/sg4.png` },
    { type: "image" as const, src: `${CLD_IMG}/sg5.png` },
    { type: "image" as const, src: `${CLD_IMG}/sg6.png` },
    { type: "image" as const, src: `${CLD_IMG}/sg7.png` },
    { type: "image" as const, src: `${CLD_IMG}/sg8.png` },
  ];

  const synergreensTechStack = [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Google Maps API", "Google Sheets API", "Resend API", "Vercel",
  ];

  const sandyAutomotiveMedia = [
    { type: "image" as const, src: `${CLD_IMG}/auto1.png` },
    { type: "image" as const, src: `${CLD_IMG}/auto2.png` },
    { type: "image" as const, src: `${CLD_IMG}/auto3.png` },
    { type: "image" as const, src: `${CLD_IMG}/auto4.png` },
    { type: "image" as const, src: `${CLD_IMG}/auto5.png` },
    { type: "image" as const, src: `${CLD_IMG}/auto7.png` },
    { type: "image" as const, src: `${CLD_IMG}/auto8.png` },
  ];

  const sandyAutomotiveTechStack = [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Firebase", "NoSQL", "Vercel",
  ];

  const sandyCafeMedia = [
    { type: "image" as const, src: `${CLD_IMG}/cafe1.png` },
    { type: "image" as const, src: `${CLD_IMG}/cafe2.png` },
    { type: "image" as const, src: `${CLD_IMG}/cafe3.png` },
    { type: "image" as const, src: `${CLD_IMG}/cafe4.png` },
    { type: "image" as const, src: `${CLD_IMG}/cafe5.png` },
    { type: "image" as const, src: `${CLD_IMG}/cafe6.png` },
    { type: "image" as const, src: `${CLD_IMG}/cafe7.png` },
    { type: "image" as const, src: `${CLD_IMG}/cafe8.png` },
    { type: "image" as const, src: `${CLD_IMG}/cafe9.png` },
    { type: "image" as const, src: `${CLD_IMG}/cafe10.png` },
  ];

  const sandyCafeTechStack = [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Neon", "PostgreSQL", "Drizzle ORM", "Vercel",
  ];

  const braveboardMedia = [
    { type: "image" as const, src: `${CLD_IMG}/brave.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave1.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave2.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave3.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave4.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave5.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave6.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave7.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave8.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave9.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave10.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave11.png` },
    { type: "image" as const, src: `${CLD_IMG}/brave12.png` },
  ];

  const braveboardTechStack = [
    "React", "Next.js", "Supabase", "PostgreSQL",
    "TypeScript", "Tailwind CSS", "Vercel",
  ];

  // experience data
  const experiences = [
    {
      company: "Regen Digital Solutions (Nettsaga)",
      position: "Full Stack Developer/Web Design",
      location: "Norway",
      duration: "Mar 2026 - Present",
      workSetup: "remote" as const,
      description:
        "Leveraged AI-assisted tools such as Claude Code, Lovable, Opencode, and Gemini for rapid web development. Successfully developed and delivered around 150 websites catering to diverse business models, including marketing sites, e-commerce platforms, booking systems, and ordering systems.",
      achievements: [
        "Rapidly developed and deployed approximately 150 websites across various industries and business models.",
        "Built diverse web applications including e-commerce platforms, booking systems, and marketing websites.",
        "Utilized AI coding assistants (Claude Code, Lovable, Opencode, Gemini) to significantly accelerate development cycles.",
      ],
      projectImages: [`${CLD_IMG}/regen-digital-logo.png`],
      projectUrl: "https://www.regen-digital.com/",
      technologies: ["React", "Next.js", "Paymongo", "Supabase", "Claude Code", "Lovable", "Opencode", "Gemini", "Lalamove API", "Sanity CMS"],
      companyColor: "text-blue-400",
    },
    {
      company: "Nidec Drives (multinational company)",
      position: "Data Scientist",
      location: "Bgc, Taguig, Philippines",
      duration: "Feb 2025 - May 2025",
      workSetup: "hybrid" as const,
      description:
        "Responsible for cleaning, researching, validating, and standardizing international company datasets. I developed geographic heatmaps in Power BI for market analysis and automated data processing workflows using Python (PyTorch, Pandas, and NumPy). Additionally, I led a website migration project for internal employees and global partners, managing authentication, site architecture, and the overall deployment. My role also involved the preprocessing and analysis of EEG (electroencephalogram) data for research applications.",
      achievements: [
        "Utilized Power BI heatmaps to verify and validate the geographic accuracy of South Korean company datasets.",
        "Successfully cleaned and standardized datasets across 8 different countries, ensuring data integrity for global operations.",
        "Successfully deployed a web portal utilized by users across multiple countries, including internal employees and global partners.",
        "Performed the cleaning and preprocessing of EEG data across multiple research subjects.",
        "Engineered a GPU-accelerated script that reduced processing time by 99% and increased overall computational efficiency by 54.81% compared to the previous scripts.",
      ],
      projectImages: [`${CLD_IMG}/nidec1.jpg`],
      hasRestrictedContent: true,
      technologies: ["Python", "PyTorch", "Pandas", "NumPy", "Power BI"],
    },
    {
      company: "FAITH",
      position: "Machine Learning Engineer",
      location: "Tanauan, Batangas, Philippines",
      duration: "Jun 2024 - Dec 2024",
      workSetup: "hybrid" as const,
      description:
        "Facilitated end-to-end machine learning process, overseeing data annotation and preparation using Roboflow. In addition to team supervision, I actively trained object detection and classification models using PyTorch and contributed to on-site data collection across various field locations. My role also encompassed Quality Assurance, where I assisted in conducting stress testing to validate both server stability and model performance.",
      achievements: [
        "Created a full Python script that augment and preprocess the whole dataset use for training.",
        "Completed data annotation for all target leaf species.",
        "Successfully trained object detection and classification models, utilizing YOLOv8 transfer learning.",
      ],
      projectImages: [
        `${CLD_IMG}/faith1.png`, `${CLD_IMG}/faith2.png`, `${CLD_IMG}/faith3.png`,
        `${CLD_IMG}/faith4.png`, `${CLD_IMG}/faith5.png`, `${CLD_IMG}/faith6.png`,
        `${CLD_IMG}/faith7.png`,
      ],
      projectUrl: "https://snapfolia.vercel.app",
      technologies: ["Python", "PyTorch", "YOLOv8", "Jupyter Notebook", "Roboflow"],
    },
  ];

  // section navigation
  const sectionNavigation = [
    {
      id: "snapfolia-go",
      nextProjectId: "synergreens",
      nextProjectTitle: "Synergreens",
    },
    {
      id: "synergreens",
      nextProjectId: "sandy-cafe-pos",
      nextProjectTitle: "Sandy Cafe POS",
    },
    {
      id: "sandy-cafe-pos",
      nextProjectId: "sandy-automotive",
      nextProjectTitle: "Sandy Automotive",
    },
    {
      id: "sandy-automotive",
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
    { id: "experience-1" },
  ];

  return (
    <>
      {/* hero */}
      <HeroSection onScrollToSkills={scrollToSkills} />

      {/* skills */}
      <div id="projects-start" />
      <SkillsSection />

      {/* section navigator */}
      <SectionNavigator projects={sectionNavigation} chatOpen={isChatOpen} />

      {/* projects */}
      <section id="projects" className="w-full py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm text-primary font-mono tracking-widest uppercase text-center">
            portfolio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary text-center">
            featured projects
          </h2>
        </div>

        <ProjectShowcase
          id="snapfolia-go"
          title="Snapfolia Go"
          description="A live leaf classifier mobile app dedicated to FAITH Colleges, Marian Orchard and Batangas Lake Lands. Derived from Snapfolia https://snapfolia.vercel.app , Snapfolia Go is a mobile app that provides real-time results simply by scanning a leaf with the device's camera."
          techStack={snapfoliaGoTechStack}
          mediaItems={snapfoliaGoMedia}
          isMobile
          accent="indigo"
        />

        <ProjectShowcase
          id="synergreens"
          title="Synergreens by Deo Abutal"
          description="Synergreens by Deo Abutal is a Direct Sales Website built to support a distributor-based sales model. It features product catalog, customer inquiry handling, and an order workflow. The platform includes structured company and distributor profiles, FDA registration information, an ordering system with automated email notifications, Google Maps integration, and responsive layouts."
          techStack={synergreensTechStack}
          mediaItems={synergreensMedia}
          siteUrl="https://synergreens.ckdigitals.com"
          accent="amber"
        />

        <ProjectShowcase
          id="sandy-cafe-pos"
          title="Sandy Cafe POS"
          description="Sandy Cafe POS is a point-of-sale and inventory system built for cafe and restaurant businesses. It streamlines order management, menu customization, kitchen view, inventory management, and sales tracking in one clean interface."
          techStack={sandyCafeTechStack}
          mediaItems={sandyCafeMedia}
          siteUrl="https://sandy-cafe-pos.vercel.app"
          label="prototype"
          accent="rose"
        />

        <ProjectShowcase
          id="sandy-automotive"
          title="Sandy Automotive Inventory"
          description="Sandy Automotive Inventory is an inventory management system prototype designed for an automotive parts business. It enables tracking of spare parts stock levels, supplier information, and orders management."
          techStack={sandyAutomotiveTechStack}
          mediaItems={sandyAutomotiveMedia}
          siteUrl="https://sandy-inventory.vercel.app"
          label="prototype"
          accent="indigo"
        />

        <ProjectShowcase
          id="braveboard"
          title="BraveBoard"
          description="BraveBoard is a school-exclusive social media platform designed for the FirstAsia community. It focuses on capturing and sharing memories through school events, bringing together students, professors, and organizations in one shared digital space. More than just a feed, BraveBoard is event-centric, allowing users to post photos, stories, and experiences tied to specific events."
          techStack={braveboardTechStack}
          mediaItems={braveboardMedia}
          siteUrl="https://braveboard.vercel.app"
          accessNote="Only FirstAsia accounts will be able to sign in."
          accent="amber"
        />
      </section>

      {/* experience */}
      <ExperienceTimeline experiences={experiences} />

      {/* chatbot */}
      <ChatBot onOpenChange={setIsChatOpen} />
    </>
  );
}
