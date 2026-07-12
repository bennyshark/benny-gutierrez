"use client";

import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import WebDesignShowcase from "@/components/sections/WebDesignShowcase";
import SectionNavigator from "@/components/common/SectionNavigator";
import ChatBot from "@/components/Chatbot";

// Cloudinary base URLs
const CLD_IMG = "https://res.cloudinary.com/dhsgwmuax/image/upload/f_auto,q_auto";
const CLD_VID = "https://res.cloudinary.com/dhsgwmuax/video/upload";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToFeatured = () => {
    const element = document.getElementById("web-design");
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

  // breathe cafe media
  const breatheCafeMedia = [
    { type: "image" as const, src: `${CLD_IMG}/breathe-cafe-image3.png` },
    { type: "image" as const, src: `${CLD_IMG}/breathe-cafe-image18.png` },
    { type: "image" as const, src: `${CLD_IMG}/breathe-cafe-image26.png` },
    { type: "image" as const, src: `${CLD_IMG}/breathe-cafe-image17.png` },
    { type: "image" as const, src: `${CLD_IMG}/breathe-cafe-image24.png` },
  ];

  const breatheCafeTechStack = [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Framer Motion", "Sanity", "PayMongo API", "Zustand", "Vercel",
  ];

  // pad thai express media
  const padThaiMedia = [
    { type: "image" as const, src: `${CLD_IMG}/pad-thai-express-image2.png` },
    { type: "image" as const, src: `${CLD_IMG}/pad-thai-express-image21.png` },
    { type: "image" as const, src: `${CLD_IMG}/pad-thai-express-image19.png` },
    { type: "image" as const, src: `${CLD_IMG}/pad-thai-express-image1.png` },
    { type: "image" as const, src: `${CLD_IMG}/pad-thai-express-image12.png` },
    { type: "image" as const, src: `${CLD_IMG}/pad-thai-express-image4.png` },
    { type: "image" as const, src: `${CLD_IMG}/pad-thai-express-image20.png` },
    { type: "image" as const, src: `${CLD_IMG}/pad-thai-express-image15.png` },
    { type: "image" as const, src: `${CLD_IMG}/pad-thai-express-image25.png` },
    { type: "image" as const, src: `${CLD_IMG}/pad-thai-express-image14.png` },
  ];

  const padThaiTechStack = [
    "React", "TanStack Start", "TypeScript", "Tailwind CSS",
    "Supabase", "PostgreSQL", "PayMongo", "Lalamove API",
    "Telegram Bot API", "Framer Motion", "shadcn/ui", "Vercel",
  ];

  // chamber of mines media
  const chamberOfMinesMedia = [
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image23.png` },
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image11.png` },
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image16.png` },
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image7.png` },
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image13.png` },
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image27.png` },
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image10.png` },
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image22.png` },
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image9.png` },
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image6.png` },
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image5.png` },
    { type: "image" as const, src: `${CLD_IMG}/chamber-of-mines-image8.png` },
  ];

  const chamberOfMinesTechStack = [
    "React", "Next.js", "TypeScript", "Tailwind CSS",
    "Supabase", "PostgreSQL", "PayMongo QR Ph", "Vercel",
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
        "Leveraged AI-assisted tools such as Claude Code, Lovable, Opencode, and Gemini for rapid web development. Successfully developed and delivered around 100 websites catering to diverse business models, including marketing sites, e-commerce platforms, booking systems, and ordering systems.",
      achievements: [
        "Rapidly developed and deployed approximately 100 websites across various industries and business models.",
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

  // web design showcase data
  const webDesignProjects = [
    {
      id: 'bike-senter',
      title: 'BIKE-SENTER',
      description: '',
      images: [
        `${CLD_IMG}/bike-senter-image28.png`,
        `${CLD_IMG}/bike-senter-image33.png`,
        `${CLD_IMG}/bike-senter-image4.png`,
      ],
      siteUrl: 'https://ivanov-bike-senter.vercel.app/',
      accent: 'indigo' as const,
    },
    {
      id: 'masterbuilder',
      title: 'Masterbuilder',
      description: '',
      images: [
        `${CLD_IMG}/masterbuilder-image11.png`,
      ],
      siteUrl: 'https://masterbuilder.demo-previews.com/',
      accent: 'rose' as const,
    },
    {
      id: 'byggmester-osland',
      title: 'Byggmester Osland',
      description: '',
      images: [
        `${CLD_IMG}/byggmester-osland-image42.png`,
      ],
      siteUrl: 'https://www.byggmesterosland.no/',
      accent: 'amber' as const,
    },
    {
      id: 'likana-travel-tours',
      title: 'Likana Travel Tours Puerto Galera',
      description: '',
      images: [
        `${CLD_IMG}/likana-travel-tours-image25.png`,
        `${CLD_IMG}/likana-travel-tours-image48.png`,
        `${CLD_IMG}/likana-travel-tours-image9.png`,
      ],
      siteUrl: 'https://likana-travel-tours-puerto-galera.demo-previews.com/',
      accent: 'rose' as const,
    },
    {
      id: 'domedi-painting',
      title: 'Domedi Painting LLC',
      description: '',
      images: [
        `${CLD_IMG}/domedi-painting-image.png`,
      ],
      siteUrl: 'https://domedi-painting-llc.demo-previews.com/',
      accent: 'indigo' as const,
    },
    {
      id: 'breathe-cafe',
      title: 'Breathe Cafe',
      description: '',
      images: [
        `${CLD_IMG}/breathe-cafe-image27.png`,
      ],
      siteUrl: 'https://breathe-cafe-malaybalay-bukidnon-preview.vercel.app/',
      accent: 'indigo' as const,
    },
    {
      id: 'pad-thai-express',
      title: 'Pad Thai Express',
      description: '',
      images: [
        `${CLD_IMG}/pad-thai-express-image2.png`,
        `${CLD_IMG}/pad-thai-express-image5.png`,
      ],
      siteUrl: 'https://pad-thai-express.vercel.app/',
      accent: 'amber' as const,
    },
    {
      id: 'jon-otterbeck-as',
      title: 'Jon otterbeck as',
      description: '',
      images: [
        `${CLD_IMG}/jon-otterbeck-as-image7.png`,
      ],
      siteUrl: 'https://jon-otterbeck-as.demo-previews.com/',
      accent: 'indigo' as const,
    },
    {
      id: 'ogr-as',
      title: 'Ogr AS',
      description: '',
      images: [
        `${CLD_IMG}/ogr-as-image12.png`,
        `${CLD_IMG}/ogr-as-image40.png`,
      ],
      siteUrl: 'https://ogr-as.demo-previews.com/',
      accent: 'indigo' as const,
    },
    {
      id: 'fagmenn-as',
      title: 'Fagmenn AS',
      description: '',
      images: [
        `${CLD_IMG}/fagmenn-as-image30.png`,
      ],
      siteUrl: 'https://fagmenn-as.demo-previews.com/',
      accent: 'rose' as const,
    },
    {
      id: 'opien-stall-og-smbruk',
      title: 'Opien Stall og Smbruk',
      description: '',
      images: [
        `${CLD_IMG}/opien-stall-og-smbruk-image39.png`,
        `${CLD_IMG}/opien-stall-og-smbruk-image37.png`,
      ],
      siteUrl: 'https://opien-stall-og-smbruk-as.demo-previews.com/',
      accent: 'amber' as const,
    },
    {
      id: 'boxen',
      title: 'BOXEN',
      description: '',
      images: [
        `${CLD_IMG}/boxen-image47.png`,
        `${CLD_IMG}/boxen-image10.png`,
        `${CLD_IMG}/boxen-image15.png`,
      ],
      siteUrl: 'https://molde-padel-as.demo-previews.com/',
      accent: 'indigo' as const,
    },
    {
      id: 'napoli-barbershop-butani',
      title: 'Napoli barbershop butani',
      description: '',
      images: [
        `${CLD_IMG}/napoli-barbershop-butani-image4.png`,
        `${CLD_IMG}/napoli-barbershop-butani-image5.png`,
        `${CLD_IMG}/napoli-barbershop-butani-image10.png`,
      ],
      siteUrl: 'https://napoli-barbershop-butani.demo-previews.com/',
      accent: 'indigo' as const,
    },
    {
      id: 'jek-regnskap-as',
      title: 'JEK Regnskap AS',
      description: '',
      images: [
        `${CLD_IMG}/jek-regnskap-as-image18.png`,
        `${CLD_IMG}/jek-regnskap-as-image16.png`,
      ],
      siteUrl: 'https://jek-regnskap-as.demo-previews.com/',
      accent: 'amber' as const,
    },
    {
      id: 'kg-fabulous-cleaning-service',
      title: 'Kg fabulous cleaning service',
      description: '',
      images: [
        `${CLD_IMG}/kg-fabulous-cleaning-service-image8.png`,
      ],
      siteUrl: 'https://kg-fabulous-cleaning-service.demo-previews.com/',
      accent: 'rose' as const,
    },
    {
      id: 'ms-cars-as',
      title: 'Ms cars as',
      description: '',
      images: [
        `${CLD_IMG}/ms-cars-as-image9.png`,
        `${CLD_IMG}/ms-cars-as-image3.png`,
        `${CLD_IMG}/ms-cars-as-image6.png`,
      ],
      siteUrl: 'https://ms-cars-as.demo-previews.com/',
      accent: 'indigo' as const,
    },
    {
      id: 'pro-studio-by-elsa',
      title: 'Pro Studio by Elsa',
      description: '',
      images: [
        `${CLD_IMG}/pro-studio-by-elsa-image32.png`,
        `${CLD_IMG}/pro-studio-by-elsa-image34.png`,
        `${CLD_IMG}/pro-studio-by-elsa-image49.png`,
      ],
      siteUrl: 'https://pro-studio-by-elsa.demo-previews.com/',
      accent: 'indigo' as const,
    },
    {
      id: 'nues',
      title: 'NUES',
      description: '',
      images: [
        `${CLD_IMG}/nues-image21.png`,
        `${CLD_IMG}/nues-image36.png`,
      ],
      siteUrl: 'https://norsk-utvalg-for-eierstyring-og-selskapsledelse.demo-previews.com/',
      accent: 'amber' as const,
    },
    {
      id: 'east-bay-tax-group',
      title: 'East Bay Tax Group',
      description: '',
      images: [
        `${CLD_IMG}/east-bay-tax-group-image35.png`,
      ],
      siteUrl: 'https://east-bay-tax-group.demo-previews.com/',
      accent: 'rose' as const,
    },
    {
      id: 'risr-tur-taxi-as',
      title: 'Risr tur taxi as',
      description: '',
      images: [
        `${CLD_IMG}/risr-tur-taxi-as-image1.png`,
      ],
      siteUrl: 'https://risr-tur-taxi-as.demo-previews.com/',
      accent: 'amber' as const,
    },
    {
      id: 'atlas-malerservice',
      title: 'Atlas Malerservice',
      description: '',
      images: [
        `${CLD_IMG}/atlas-malerservice-image8.png`,
        `${CLD_IMG}/atlas-malerservice-image1.png`,
        `${CLD_IMG}/atlas-malerservice-image43.png`,
      ],
      siteUrl: 'https://atlas-malerservice-as.demo-previews.com/',
      accent: 'indigo' as const,
    },
    {
      id: 'william-a-morin',
      title: 'William A Morin',
      description: '',
      images: [
        `${CLD_IMG}/william-a-morin-image14.png`,
        `${CLD_IMG}/william-a-morin-image26.png`,
      ],
      siteUrl: 'https://william-a-morin.demo-previews.com/',
      accent: 'amber' as const,
    },
    {
      id: 'stordalen-fjellstove',
      title: 'Stordalen Fjellstove',
      description: '',
      images: [
        `${CLD_IMG}/stordalen-fjellstove-image24.png`,
        `${CLD_IMG}/stordalen-fjellstove-image38.png`,
        `${CLD_IMG}/stordalen-fjellstove-image6.png`,
      ],
      siteUrl: 'https://stordalen-fjellstove-as.demo-previews.com/',
      accent: 'rose' as const,
    },
    {
      id: 'sandmoen-bed-breakfast',
      title: 'Sandmoen Bed Breakfast',
      description: '',
      images: [
        `${CLD_IMG}/sandmoen-bed-breakfast-image29.png`,
        `${CLD_IMG}/sandmoen-bed-breakfast-image54.png`,
      ],
      siteUrl: 'https://sandmoen-bed-breakfast-as.demo-previews.com/',
      accent: 'indigo' as const,
    },
    {
      id: 'whiskey-creek-plumbing',
      title: 'Whiskey Creek Plumbing',
      description: '',
      images: [
        `${CLD_IMG}/whiskey-creek-plumbing-image22.png`,
        `${CLD_IMG}/whiskey-creek-plumbing-image11.png`,
      ],
      siteUrl: 'https://whiskey-creek-plumbing.demo-previews.com/',
      accent: 'amber' as const,
    },
    {
      id: 'log-cabin-sagada',
      title: 'Log Cabin Sagada',
      description: '',
      images: [
        `${CLD_IMG}/log-cabin-sagada-image41.png`,
        `${CLD_IMG}/log-cabin-sagada-image51.png`,
      ],
      siteUrl: 'https://log-cabin-sagada.demo-previews.com/',
      accent: 'rose' as const,
    },
    {
      id: 'best-buddies-ph',
      title: 'Best Buddies PH',
      description: '',
      images: [
        `${CLD_IMG}/best-buddies-ph-image13.png`,
      ],
      siteUrl: 'https://best-buddies-ph.demo-previews.com/',
      accent: 'indigo' as const,
    },
    {
      id: 'monssveen-maskin',
      title: 'Monssveen Maskin',
      description: '',
      images: [
        `${CLD_IMG}/monssveen-maskin-image7.png`,
        `${CLD_IMG}/monssveen-maskin-image55.png`,
      ],
      siteUrl: 'https://monssveen-maskin.demo-previews.com/',
      accent: 'amber' as const,
    },
    {
      id: 'spirit-plants-nursery',
      title: 'Spirit Plants Nursery',
      description: '',
      images: [
        `${CLD_IMG}/spirit-plants-nursery-image45.png`,
        `${CLD_IMG}/spirit-plants-nursery-image31.png`,
      ],
      siteUrl: 'https://spirit-plants-nursery-llc.demo-previews.com/',
      accent: 'rose' as const,
    },
    {
      id: 'fairfax-perfect-maids',
      title: 'Fairfax perfect maids',
      description: '',
      images: [
        `${CLD_IMG}/fairfax-perfect-maids-image2.png`,
      ],
      siteUrl: 'https://fairfax-perfect-maids.demo-previews.com/',
      accent: 'amber' as const,
    },
    {
      id: 'woodlyn-tree-services',
      title: 'Woodlyn Tree Services',
      description: '',
      images: [
        `${CLD_IMG}/woodlyn-tree-services-image.png`,
        `${CLD_IMG}/woodlyn-tree-services-image2.png`,
      ],
      siteUrl: 'https://woodlyn-tree-services.demo-previews.com/',
      accent: 'indigo' as const,
    },
  ];

  // section navigation
  const sectionNavigation = [
    {
      id: "snapfolia-go",
      nextProjectId: "pad-thai-express",
      nextProjectTitle: "Pad Thai Express",
    },
    {
      id: "pad-thai-express",
      nextProjectId: "chamber-of-mines",
      nextProjectTitle: "Chamber of Mines",
    },
    {
      id: "chamber-of-mines",
      nextProjectId: "breathe-cafe",
      nextProjectTitle: "Breathe Cafe",
    },
    {
      id: "breathe-cafe",
      nextProjectId: "synergreens",
      nextProjectTitle: "Synergreens",
    },
    {
      id: "synergreens",
      nextProjectId: "sandy-automotive",
      nextProjectTitle: "Sandy Automotive",
    },
    {
      id: "sandy-automotive",
      nextProjectId: "sandy-cafe-pos",
      nextProjectTitle: "Sandy Cafe POS",
    },
    {
      id: "sandy-cafe-pos",
      nextProjectId: "experience",
      nextProjectTitle: "Check My Experience",
    },
  ];

  return (
    <>
      {/* hero */}
      <HeroSection onScrollToFeatured={scrollToFeatured} />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <WebDesignShowcase id="web-design" items={webDesignProjects} />

      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

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
          id="pad-thai-express"
          title="Pad Thai Express"
          description="Pad Thai Express is a full-stack web application for a Thai restaurant chain in Metro Manila. It features a public-facing website with menu browsing, online ordering with pickup and Lalamove delivery, event reservations, order tracking — plus a complete staff operations portal with a real-time order management dashboard, live customer chat, sales reports with charts, staff account management, and configurable store settings. Integrated with automated Telegram notifications for new orders, payments, and chat messages."
          techStack={padThaiTechStack}
          mediaItems={padThaiMedia}
          siteUrl="https://pad-thai-express.vercel.app"
          accent="indigo"
          regenBuilt
        />

        <ProjectShowcase
          id="chamber-of-mines"
          title="Chamber of Mines of the Philippines — Official Exhibitor Portal"
          description="A full-stack exhibitor booth reservation and event ticketing system built for the Chamber of Mines of the Philippines (COMP). It replaces their third-party platform (Glue Up) for the annual Mining Philippines conference. Features include a live interactive floor map with zoom/pan for booth selection, ticket/package cart with multi-item checkout, QR Ph (GCash/Maya) and bank transfer payment flows, an admin dashboard with revenue tracking and CSV exports, a visual drag-and-drop floor plan editor for designing booth layouts, and Supabase real-time broadcasting for live map updates."
          techStack={chamberOfMinesTechStack}
          mediaItems={chamberOfMinesMedia}
          siteUrl="https://chamber-of-mines-of-the-philippines.vercel.app/about"
          accent="amber"
          regenBuilt
        />

        <ProjectShowcase
          id="breathe-cafe"
          title="Breathe Cafe — QR Dine-In Ordering System"
          description="A scan-to-order web application for Breathe Cafe in Malaybalay, Bukidnon, Philippines. Dine-in guests scan a QR code at their table to browse the full menu, customize their drinks and food with options (size, sugar level, add-ons), pay via GCash/QR Ph or cash, and watch their order progress live as it moves through the kitchen — all without downloading an app or creating an account. The system features a three-lane Kanban kitchen board with per-item prep checklists and urgency timers, a limited cashier station for front-counter settlement, and an admin dashboard with real-time revenue analytics, menu management, and QR code generation for each table. Server-side price validation prevents client-side tampering, and the architecture uses Sanity's real-time listener as a pub/sub mechanism so updates propagate instantly across all connected interfaces."
          techStack={breatheCafeTechStack}
          mediaItems={breatheCafeMedia}
          siteUrl="https://breathe-cafe-malaybalay-bukidnon-or.vercel.app"
          accent="rose"
          regenBuilt
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
          id="sandy-cafe-pos"
          title="Sandy Cafe POS"
          description="Sandy Cafe POS is a point-of-sale and inventory system built for cafe and restaurant businesses. It streamlines order management, menu customization, kitchen view, inventory management, and sales tracking in one clean interface."
          techStack={sandyCafeTechStack}
          mediaItems={sandyCafeMedia}
          siteUrl="https://sandy-cafe-pos.vercel.app"
          label="prototype"
          accent="rose"
        />
      </section>

      {/* experience */}
      <ExperienceTimeline experiences={experiences} />

      {/* chatbot */}
      <ChatBot onOpenChange={setIsChatOpen} />
    </>
  );
}
