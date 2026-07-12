// data/portfolio-data.ts
export const portfolioData = {
  personal: {
    name: "Benedict Gutierrez",
    nickname: "Benny",
    role: "Web & Machine Learning Developer",
    tagline: "I build scalable web applications, machine learning projects, and AI/API integrations.",
    email: "benedictgutierrezcs25@gmail.com",
    github: "https://github.com/bennyshark",
    linkedin: "https://linkedin.com/in/benedict-gutierrez-15917b333",
    location: "Tanauan, Batangas, Philippines"
  },

  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "Dart"],
    webDevelopment: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML/CSS",
      "Framer Motion",
      "shadcn/ui",
      "TanStack Start",
      "Sanity",
      "Vercel deployment"
    ],
    machineLearning: [
      "PyTorch",
      "TensorFlow",
      "YOLOv8",
      "Object Detection",
      "Image Classification",
      "Transfer Learning",
      "Model Training",
      "Data Preprocessing",
      "Roboflow"
    ],
    mobileDevelopment: ["Flutter", "Dart", "Flutter Vision", "TensorFlow Lite"],
    dataTools: [
      "Power BI",
      "Pandas",
      "NumPy",
      "Jupyter Notebook",
      "Data Cleaning",
      "Data Validation"
    ],
    databases: [
      "Supabase",
      "PostgreSQL",
      "Neon",
      "Firebase",
      "NoSQL",
      "Drizzle ORM"
    ],
    apis: [
      "Google Maps API",
      "Google Sheets API",
      "Resend API",
      "Anthropic API",
      "PayMongo API",
      "Lalamove API",
      "Telegram Bot API",
    ],
    other: [
      "Git",
      "GPU Acceleration",
      "Zustand",
      "Claude Code",
      "Lovable",
      "Opencode",
    ],
  },

  projects: [
    {
      name: "Snapfolia Go",
      type: "Mobile Application",
      label: "project",
      description: "A live leaf classifier mobile app dedicated to FAITH Colleges, Marian Orchard and Batangas Lake Lands. Derived from Snapfolia (https://snapfolia.vercel.app), Snapfolia Go is a mobile app that provides real-time results simply by scanning a leaf with the device's camera. The app aims to offer a better user experience, delivering live results and object tracking.",
      technologies: [
        "Dart",
        "Flutter",
        "YOLOv8",
        "TensorFlow Lite",
        "Flutter Vision",
        "Python",
        "PyTorch"
      ],
      highlights: [
        "Real-time leaf classification using device camera",
        "Object tracking and live detection",
        "Built with Flutter for cross-platform support",
        "Uses YOLOv8 for accurate object detection",
        "Integrated TensorFlow Lite for on-device inference"
      ]
    },
    {
      name: "Synergreens by Deo Abutal",
      type: "Web Application",
      label: "project",
      url: "https://synergreens.ckdigitals.com",
      description: "Synergreens by Deo Abutal is a Direct Sales Website built to support a distributor-based sales model. It features product catalog, customer inquiry handling, and an order workflow. The platform includes structured company and distributor profiles, FDA registration information, an ordering system with automated email notifications, Google Maps integration for location display with directions, form validation, and layouts optimized for different devices.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Google Maps API",
        "Google Sheets API",
        "Resend API",
        "Vercel"
      ],
      highlights: [
        "Distributor-based sales model implementation",
        "Automated email notifications for orders",
        "Google Maps integration with directions",
        "Responsive design for all devices",
        "FDA registration information display",
        "Form validation and error handling"
      ]
    },
    {
      name: "Sandy Cafe POS",
      type: "Web Application",
      label: "prototype",
      url: "https://sandy-cafe-pos.vercel.app",
      description: "Sandy Cafe POS is a point-of-sale/inventory system built for café/restaurant businesses. It streamlines order management, menu customization, kitchen view, inventory management and sales tracking in one clean interface. The system supports cashier workflows including order entry, payment processing, and receipt generation, while also providing an admin dashboard for monitoring daily sales, managing menu items, and viewing transaction history.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Neon",
        "PostgreSQL",
        "Drizzle ORM",
        "Vercel"
      ],
      highlights: [
        "Full cashier workflow with order entry and payment processing",
        "Kitchen view for order management",
        "Menu customization and inventory tracking",
        "Admin dashboard for daily sales monitoring",
        "Receipt generation",
        "PostgreSQL with Drizzle ORM via Neon"
      ]
    },
    {
      name: "Sandy Automotive Inventory",
      type: "Web Application",
      label: "prototype",
      url: "https://sandy-inventory.vercel.app",
      description: "Sandy Automotive Inventory is an inventory management system prototype designed for an automotive parts business. It enables tracking of spare parts stock levels, supplier information, and orders management. The system includes low-stock alerts, item categorization, and a dashboard for monitoring inventory health, helping the business reduce manual record-keeping and minimize stock discrepancies.",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "NoSQL",
        "Vercel"
      ],
      highlights: [
        "Spare parts stock level tracking",
        "Supplier information management",
        "Low-stock alerts and notifications",
        "Item categorization system",
        "Inventory health dashboard",
        "Firebase NoSQL backend"
      ]
    },
    {
      name: "Pad Thai Express",
      type: "Web Application",
      label: "project",
      url: "https://pad-thai-express.vercel.app",
      description: "Pad Thai Express is a full-stack web application for a Thai restaurant chain in Metro Manila. It features a public-facing website with menu browsing, online ordering with pickup and Lalamove delivery, event reservations, order tracking — plus a complete staff operations portal with a real-time order management dashboard, live customer chat, sales reports with charts, staff account management, and configurable store settings. Integrated with automated Telegram notifications for new orders, payments, and chat messages.",
      technologies: [
        "React", "TanStack Start", "TypeScript", "Tailwind CSS",
        "Supabase", "PostgreSQL", "PayMongo", "Lalamove API",
        "Telegram Bot API", "Framer Motion", "shadcn/ui", "Vercel",
      ],
      highlights: [
        "Online ordering with pickup and Lalamove delivery",
        "Real-time order management dashboard",
        "Live customer chat with Telegram notifications",
        "Event reservations and order tracking",
        "Staff account management and sales reports",
      ],
      builtUnderRegen: true,
    },
    {
      name: "Chamber of Mines of the Philippines — Official Exhibitor Portal",
      type: "Web Application",
      label: "project",
      url: "https://chamber-of-mines-of-the-philippines.vercel.app/about",
      description: "A full-stack exhibitor booth reservation and event ticketing system built for the Chamber of Mines of the Philippines (COMP). It replaces their third-party platform (Glue Up) for the annual Mining Philippines conference. Features include a live interactive floor map with zoom/pan for booth selection, ticket/package cart with multi-item checkout, QR Ph (GCash/Maya) and bank transfer payment flows, an admin dashboard with revenue tracking and CSV exports, a visual drag-and-drop floor plan editor for designing booth layouts, and Supabase real-time broadcasting for live map updates.",
      technologies: [
        "React", "Next.js", "TypeScript", "Tailwind CSS",
        "Supabase", "PostgreSQL", "PayMongo QR Ph", "Vercel",
      ],
      highlights: [
        "Live interactive floor map with zoom/pan for booth selection",
        "Ticket/package cart with multi-item checkout",
        "QR Ph (GCash/Maya) and bank transfer payment flows",
        "Admin dashboard with revenue tracking and CSV exports",
        "Visual drag-and-drop floor plan editor",
        "Supabase real-time broadcasting for live map updates",
      ],
      builtUnderRegen: true,
    },
    {
      name: "Breathe Cafe — QR Dine-In Ordering System",
      type: "Web Application",
      label: "project",
      url: "https://breathe-cafe-malaybalay-bukidnon-or.vercel.app",
      description: "A scan-to-order web application for Breathe Cafe in Malaybalay, Bukidnon, Philippines. Dine-in guests scan a QR code at their table to browse the full menu, customize their drinks and food with options (size, sugar level, add-ons), pay via GCash/QR Ph or cash, and watch their order progress live as it moves through the kitchen — all without downloading an app or creating an account. The system features a three-lane Kanban kitchen board with per-item prep checklists and urgency timers, a limited cashier station for front-counter settlement, and an admin dashboard with real-time revenue analytics, menu management, and QR code generation for each table. Server-side price validation prevents client-side tampering, and the architecture uses Sanity's real-time listener as a pub/sub mechanism so updates propagate instantly across all connected interfaces.",
      technologies: [
        "React", "Next.js", "TypeScript", "Tailwind CSS",
        "Framer Motion", "Sanity", "PayMongo API", "Zustand", "Vercel",
      ],
      highlights: [
        "QR code scan-to-order without app download",
        "Real-time Kanban kitchen board with per-item prep checklists",
        "GCash/QR Ph and cash payment integration",
        "Admin dashboard with revenue analytics and menu management",
        "Sanity real-time listener as pub/sub for instant updates",
      ],
      builtUnderRegen: true,
    },
  ],

  experience: [
    {
      company: "Regen Digital Solutions (Nettsaga)",
      companyType: "Agency",
      position: "Full Stack Developer/Web Design",
      location: "Norway",
      duration: "March 2026 - Present",
      workSetup: "Remote",
      description: "Leveraged AI-assisted tools such as Claude Code, Lovable, Opencode, and Gemini for rapid web development under Regen Digital Solutions. Successfully developed and delivered around 100 websites catering to diverse business models, including marketing sites, e-commerce platforms, booking systems, and ordering systems.",
      achievements: [
        "Rapidly developed and deployed approximately 100 websites under Regen Digital Solutions across various industries and business models",
        "Built diverse web applications including e-commerce platforms, booking systems, and marketing websites",
        "Utilized AI coding assistants (Claude Code, Lovable, Opencode, Gemini) to significantly accelerate development cycles"
      ],
      technologies: ["React", "Next.js", "Paymongo", "Supabase", "Claude Code", "Lovable", "Opencode", "Gemini", "Lalamove API", "Sanity CMS"],
      projectUrl: "https://www.regen-digital.com/"
    },
    {
      company: "Nidec Drives",
      companyType: "Multinational Company",
      position: "Data Scientist",
      location: "BGC, Taguig, Philippines",
      duration: "February 2025 - May 2025",
      workSetup: "Hybrid",
      description: "Responsible for cleaning, researching, validating, and standardizing international company datasets. I developed geographic heatmaps in Power BI for market analysis and automated data processing workflows using Python (PyTorch, Pandas, and NumPy). Additionally, I led a website migration project for internal employees and global partners, managing authentication, site architecture, and the overall deployment. My role also involved the preprocessing and analysis of EEG (electroencephalogram) data for research applications.",
      achievements: [
        "Utilized Power BI heatmaps to verify and validate the geographic accuracy of South Korean company datasets",
        "Successfully cleaned and standardized datasets across 8 different countries, ensuring data integrity for global operations",
        "Successfully deployed a web portal utilized by users across multiple countries, including internal employees and global partners",
        "Performed the cleaning and preprocessing of EEG data across multiple research subjects",
        "Engineered a GPU-accelerated script that reduced processing time by 99% and increased overall computational efficiency by 54.81% compared to the previous scripts"
      ],
      technologies: ["Python", "PyTorch", "Pandas", "NumPy", "Power BI"],
      projectUrl: null,
      note: "Actual project content is confidential and not for disclosure"
    },
    {
      company: "FAITH",
      position: "Machine Learning Engineer",
      location: "Tanauan, Batangas, Philippines",
      duration: "June 2024 - December 2024",
      workSetup: "Hybrid",
      description: "Facilitated end-to-end machine learning process, overseeing data annotation and preparation using Roboflow. In addition to team supervision, I actively trained object detection and classification models using PyTorch and contributed to on-site data collection across various field locations. My role also encompassed Quality Assurance, where I assisted in conducting stress testing to validate both server stability and model performance.",
      achievements: [
        "Created a full Python script that augments and preprocesses the whole dataset used for training",
        "Completed data annotation for all target leaf species",
        "Successfully trained object detection and classification models, utilizing YOLOv8 transfer learning"
      ],
      technologies: [
        "Python",
        "PyTorch",
        "YOLOv8",
        "Jupyter Notebook",
        "Roboflow"
      ],
      projectUrl: "https://snapfolia.vercel.app"
    }
  ],

  interests: {
    anime: [
      "Oregairu",
      "JJK",
      "Attack on Titan",
      "Death Note",
      "Demon Slayer",
      "Tokyo Ghoul",
      "Solo Leveling",
      "MHA"
    ],
    hobbies: [
      "Sports Analysis",
      "Building Web Apps",
      "Watching Anime",
      "Pickleball",
      "Badminton",
      "Table Tennis",
      "Chess",
      "Basketball"
    ],
    currentlyLearning: [
      "ORM",
      "API Architectures",
    ]
  },

  favoriteProject: {
    name: "Snapfolia Go",
    reason: "It combines machine learning with mobile development to create a real-time leaf classifier that has practical applications for agriculture and education. The technical challenge of deploying YOLOv8 on-device with TensorFlow Lite through Flutter was incredibly rewarding, and seeing it work in real-time is always exciting."
  },

  careerGoals: [
    "Develop more AI-powered applications",
    "Contribute to open-source ML projects",
    "Build scalable web platforms that solve real problems",
    "Integrate AI capabilities into everyday applications",
    "Work on projects that make a meaningful impact",
    "Continue learning cutting-edge technologies"
  ]
};