export interface Experience {
  company: string;
  subCompany?: string;
  role: string;
  subRole?: string;
  subRole2?: string;
  years: string;
  logo?: string;
  minimizedInfo: string;
  maximizedInfo: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  skills?: string[];
  thumbnails?: string[];
  heroImage?: string;
  link?: string;
}

export const PORTFOLIO_DATA = {
  name: "Ivan Sostaric",  
  role: "University of Guelph",
  specialization: "Computer Science Major | Business Minor | AI Specialization",
  bio: "I'm pursuing a Bachelor of Computing in Computer Science at the University of Guelph, specializing in Artificial Intelligence with a Business minor. My background combines software engineering, data analytics, and AI, with a focus on building full-stack applications with robust architecture, scalable backends, and intuitive frontends. The intersection of AI and business is also a key interest of mine, especially using data, automation, and intelligent systems to improve decision-making, create better products, and turn technical ideas into practical value.",
  email: "ivansostaric64@gmail.com",
  github: "https://github.com/Ivansost",
  linkedin: "https://www.linkedin.com/in/ivansost/",
  resume: "/Ivan_Sostaric_Resume.pdf",
  skills: [
    "Python", "SQL", "Java", "C/C++", "JavaScript", "HTML/CSS", "R",
    "React", "Node.js", "Next.js", "Flask", "Shopify Polaris",
    "Power BI", "Tableau", "Git", "Databricks", "Azure", "AWS", "Docker", "Jira", "Agile (Scrum)",
    "pandas", "NumPy", "SQLite", "Matplotlib", "GraphQL", "REST APIs"
  ],
  experience: [
    {
      company: "Bank of Montreal (BMO)",
      role: "Anti-Money Laundering Investigator",
      years: "Mar 2026 - Present",
      logo: "/bmo.png",
      minimizedInfo: "Incoming AML @ BMO",
      maximizedInfo: ""
    },
    {
      company: "Helios Technology Solutions Inc.",
      role: "Shopify Developer",
      years: "May 2025 - Sep 2025",
      logo: "/helios.png",
      minimizedInfo: "Developed a high-performance Python data migration tool and built full-stack Shopify integrations using Remix, deploying scalable solutions to AWS.",
      maximizedInfo: "• Developed a Python data migration tool processing 300 products/min, 140× faster than competitors\n• Reduced client turnaround time from 15 h to 1 h (approx. 15x) by automating data migration\n• Parsed large datasets using Pandas and optimized GraphQL API queries for high-volume migrations\n• Built and tested full-stack apps with JavaScript, Remix, and Shopify Polaris for app integrations\n• Deployed code on AWS Lambda and RDS, ensuring reliable and scalable performance\n• Implemented and optimized Shopify POS systems for clients, delivering end-to-end setup\n• Worked closely with clients to manage their transition to Shopify and delivered personalized training"
    },
    {
      company: "Users Self Storage and Warehousing",
      role: "I.T. and Business Associate",
      years: "Jun 2021 - Sep 2025",
      logo: "/users-self-storage.png",
      minimizedInfo: "Designed, implemented, and maintained IT systems and web assets while managing financial tracking and providing ongoing technical support.",
      maximizedInfo: "• Designed, implemented, and maintained all IT systems from the ground up\n• Developed and managed the company website, ensuring seamless functionality and regular updates\n• Created and maintained financial tracking spreadsheets using Excel and Quickbooks\n• Customer Liaison, including storage unit rentals and inquiries\n• Processed transactions and managed payments efficiently using Square\n• Installed and maintain video surveillance system\n• Performed hands-on building maintenance and repairs"
    },
    {
      company: "Conservation Halton",
      role: "Snowboard Instructor",
      years: "Dec 2023 - Mar 2024",
      logo: "/conservation-halton.png",
      minimizedInfo: "Taught snowboarding and skiing to all age groups, focusing on safety, tailored instruction, and clear communication.",
      maximizedInfo: "• Taught new snowboarders and skiers of all ages with a focus on proper techniques and safety.\n• Appropriate communication with individuals of all ages\n• Developed problem-solving, leadership and teamwork skills.\n• Tailored instructions to various skill and knowledge levels."
    }
  ] as Experience[],
  volunteering: [] as Experience[],
  education: [
    {
      company: "Honours Bachelor of Computing (B.Comp.)",
      subCompany: "University of Guelph",
      role: "Computer Science Major",
      subRole: "Business Minor",
      subRole2: "AI Specialization",
      years: "Sep 2024 - Apr 2028",
      logo: "/guelph.png",
      minimizedInfo: "",
      maximizedInfo: "I am currently pursuing a Bachelor of Computing in Computer Science at the University of Guelph, specializing in Artificial Intelligence. My coursework is building a strong foundation in algorithms, data structures, operating systems, systems design, and machine learning, which are directly applicable to building reliable software, scalable systems, and intelligent tools that solve real-world problems. Alongside my major, I am completing a Business minor that complements my technical background by helping me understand how AI intersects with business strategy, product development, operations, and decision-making. I am especially interested in how AI can help companies work more efficiently, uncover better insights from data, and turn technical innovation into practical value."
    }
  ] as Experience[],
  projects: [
    {
      title: "GitZero",
      category: "Python CLI / ML Tooling",
      description: "I built GitZero as a Python CLI that scans repositories for signals consistent with AI-generated or AI-assisted code. It combines git-history analysis, static code signals, explainable scoring, false-positive guards, JSON/CSV exports, and an experimental Random Forest pipeline trained on labeled repositories.",
      skills: ["Python", "Typer", "Rich", "PyDriller", "Static Analysis", "Testing"],
      heroImage: "/project/GitZero/mainreport.png",
      link: "/projects/gitzero"
    },
    {
      title: "Credit Risk Analysis",
      category: "Machine Learning",
      description: "I built a credit risk scoring project using the UCI Credit Card dataset, which contains 30,000 customer records with demographic, financial, and repayment history data. The goal was to explore real world credit behavior, uncover patterns in default risk, and build a model that can predict which customers are more likely to default on their next payment.",
      skills: ["Data Analysis", "SQL", "Machine Learning"],
      heroImage: "/project/creditRisk/MOSTLIKELYDEFAULT.png",
      link: "/projects/credit-risk"
    },
    {
      title: "Detecting Money Laundering Using Network Analytics",
      category: "Data Analytics",
      description: "I parsed and explored a large-scale financial transaction dataset using SQL, then modeled account relationships as a transaction network in Python with NetworkX. The project combines graph analytics, risk scoring, and Power BI visualizations to surface suspicious clusters, central accounts, and fund-dispersion patterns commonly associated with AML investigations.",
      skills: ["SQL", "Python", "NetworkX", "Power BI", "AML Analytics"],
      heroImage: "/project/AML/Graph.png",
      link: "/projects/aml"
    },
    {
      title: "TravelPal - GDSCHacks 2025",
      category: "Full Stack AI App",
      description: "Built at GDSCHacks 2025, TravelPal is a green AI-powered trip planner that generates personalized, eco-conscious itineraries with Gemini. My team built a full-stack app with Next.js, Convex, Clerk, Vapi, and carbon-aware planning features to help users understand the environmental impact of each trip.",
      skills: ["Next.js", "Convex", "Google Gemini", "Clerk", "Vapi"],
      heroImage: "/project/TravelPal/page.jpg",
      link: "/projects/travelpal"
    }
  ] as Project[]
};
