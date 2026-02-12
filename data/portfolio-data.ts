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
      databases: ["Supabase"],
      apis: [
        "Google Maps API",
        "Google Sheets API",
        "Resend API",
        "Anthropic API"
      ],
      other: ["Git", "GPU Acceleration"]
    },
  
    projects: [
      {
        name: "Snapfolia Go",
        type: "Mobile Application",
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
        name: "BraveBoard",
        type: "Web Application",
        url: "https://braveboard.vercel.app",
        description: "BraveBoard is a school-exclusive social media platform designed for the FirstAsia community. It focuses on capturing and sharing memories through school events, bringing together students, professors, and organizations in one shared digital space. More than just a feed, BraveBoard is event-centric, allowing users to post photos, stories, and experiences tied to specific events, helping preserve moments that matter across campus life. It also serves as an open, community-driven discussion space where students can freely express ideas, ask questions, seek help, and engage in conversations on forums.",
        technologies: [
          "React",
          "Next.js",
          "Supabase",
          "TypeScript",
          "Tailwind CSS",
          "Vercel"
        ],
        highlights: [
          "Event-centric social media platform",
          "Community forums for open discussions",
          "Photo and story sharing for school events",
          "Exclusive to FirstAsia community",
          "Built with Next.js and Supabase for real-time features",
          "User authentication and authorization"
        ],
        note: "Only FirstAsia accounts can sign in"
      }
    ],
  
    experience: [
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
        "One Piece",
        "Hunter x Hunter",
        "Naruto",
        "Attack on Titan",
        "Death Note",
        "Fullmetal Alchemist",
        "Code Geass"
      ],
      hobbies: [
        "Building web applications",
        "Training ML models",
        "Learning new technologies",
        "Contributing to open source",
        "Watching anime",
        "Problem solving",
        "Data analysis"
      ],
      currentlyLearning: [
        "Advanced AI/ML techniques",
        "Large Language Models",
        "API integrations",
        "Real-time applications",
        "GPU acceleration"
      ]
    },
  
    favoriteProject: {
      name: "BraveBoard",
      reason: "It's a complete social media platform that serves the FirstAsia community. I'm proud of building an event-centric platform that brings students, professors, and organizations together. The technical challenges of building real-time features with Supabase and creating a scalable architecture were incredibly rewarding. It combines my passion for web development with creating something that has a real impact on the community."
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