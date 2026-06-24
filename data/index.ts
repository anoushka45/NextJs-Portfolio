export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  link: string;
  category: string;
  tags: string[];
  isFeatured?: boolean;
  stats?: ProjectStat[];
  caseStudyLink?: string;
  demoVideoLink?: string;
}

export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I design AI systems where the interesting problem is the one after it works: making agents reliable, outputs grounded, and decisions auditable.",
    description: "What I work on",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/bento/aha.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to global teams and collaboration.",
    description: "Based in Mumbai, comfortable working across time zones",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My core tech stack",
    description: "AI + backend + product-focused frontend",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Building AI systems designed for decisions, not just conversations.",
    description: "What I care about",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 hidden md:block",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s build something intelligent together",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "CortexKitchen — Multi-Agent Ops Intelligence",
    des: "A 9-node LangGraph multi-agent platform for restaurant ops. Five parallel specialist agents (demand, bookings, complaints RAG, menu, inventory) with critic-gated output, SSE streaming, Redis caching, PDF/Excel exports, RAG chatbot, What-If simulator, LangSmith CI gate, and MCP integration. P6-00 shipped: per-node model tier routing via CometAPI (deepseek / gemini / claude per node). Built end-to-end solo.",
    img: "/projects/cortexkitchen_screenshots/01_homepage/hero.png",
    link: "https://github.com/anoushka45/cortexkitchen",
    category: "AI",
    tags: [
      "LangGraph",
      "Multi-Agent",
      "FastAPI",
      "RAG",
      "Qdrant",
      "PostgreSQL",
      "Redis",
      "SSE Streaming",
      "LangSmith",
      "RAGAS",
      "MCP",
      "Prophet",
      "Next.js",
      "CometAPI",
      "DeepSeek",
    ],
    isFeatured: true,
    stats: [
      { label: "LangGraph Nodes", value: "9" },
      { label: "Runs (7 days)", value: "59" },
      { label: "Critic Pass Rate", value: "81%" },
      { label: "Avg Critic Score", value: "0.81" },
    ],
    caseStudyLink: "/projects/cortexkitchen",
    demoVideoLink: undefined,
  },
  {
    id: 2,
    title: "DocQuery — Knowledge Assistant",
    des: "A multi-document RAG QA pipeline with semantic chunking, ChromaDB vector search, and grounded, source-attributed answers across heterogeneous document types.",
    img: "/projects/docQuery.png",
    link: "https://github.com/anoushka45/PDF_RAG_Assistant",
    category: "AI",
    tags: ["LangChain", "RAG", "Python", "ChromaDB", "Groq"],
    isFeatured: false,
  },
  {
    id: 3,
    title: "InspireAI — AI Content Generator",
    des: "A full-stack AI content generation platform with Gemini API, multiple content templates, real-time streaming output, and persistent output history.",
    img: "/projects/InspireAI - AI Content Generator.png",
    link: "https://github.com/anoushka45/AI-Content-Generator-App-",
    category: "AI",
    tags: ["Next.js", "Gemini", "TypeScript", "Tailwind"],
    isFeatured: false,
  },
  {
    id: 4,
    title: "UrbanAura — E-Commerce Platform",
    des: "A modern full-stack e-commerce experience using Next.js, TypeScript, TailwindCSS, and Sanity CMS.",
    img: "/projects/urbanAura.png",
    link: "https://github.com/anoushka45/UrbanAura-E-commerce-",
    category: "Full Stack",
    tags: ["Next.js", "CMS", "TypeScript", "Tailwind"],
    isFeatured: false,
  },
  // {
  //   id: 5,
  //   title: "Media Management Portal",
  //   des: "A role-based media approval and management portal for uploads, moderation, and organisation workflows.",
  //   img: "/projects/mediaNest.png",
  //   link: "https://github.com/anoushka45/folder-management-portal",
  //   category: "Full Stack",
  //   tags: ["PHP", "MySQL", "Admin Workflow", "Media"],
  //   isFeatured: false,
  // },
];
export const workExperience = [
  {
    id: 1,
    title: "Software Engineer - Mphasis Ltd",
    desc: "Designing and building enterprise AI systems: multi-agent orchestration with LangGraph, LLM-based intent routing and classification, and hybrid RAG pipelines combining vector search with structured retrieval. Own the full lifecycle from system design and prompt engineering through evaluation, backend integration with FastAPI, and production deployment. Core focus on agent reliability, retrieval accuracy, and making AI decisions explainable to stakeholders.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  // {
  //   id: 2,
  //   title: "Web Developer Intern - Reliance Jio",
  //   desc: "Converted Figma designs into responsive React interfaces and improved cross-device UI consistency for web-based products.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp2.svg",
  // },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/anoushka45", // Replace with your actual link
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "https://twitter.com/yourprofile", // Replace with your actual link
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/anoushka-vyas-a57aa7157/", // Replace with your actual link
  },
];