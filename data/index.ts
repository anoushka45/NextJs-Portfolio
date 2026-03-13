
export const navItems = [
  { name: "Home", link: "/" },
  { name: "Focus", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  // { name: "What's Next", link: "#next" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I build intelligent systems with a strong focus on real-world usability, backend architecture, and AI-driven workflows.",
    description: "What I work on",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to global teams and collaborative engineering environments",
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
    title: "I enjoy building systems where AI is practical, explainable, and useful.",
    description: "Engineering mindset",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently focused on enterprise AI systems, retrieval pipelines, and scalable backend services.",
    description:
      "My current work spans LLM-based orchestration, FastAPI services, routing workflows, and real-world AI product development.",
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

export const projects = [
  {
    id: 1,
    title: "DocQuery - Enterprise Knowledge Assistant",
    des: "A Retrieval-Augmented Generation system for answering questions across multiple PDF documents using semantic search and grounded LLM responses.",
    img: "/projects/docQuery.png",
    link: "https://github.com/anoushka45/PDF_RAG_Assistant",
    category: "AI",
    tags: ["LangChain", "RAG", "Python", "ChromaDB", "LLM"],
  },
  {
    id: 2,
    title: "InspireAI - AI Content Generator",
    des: "An AI-powered content generation platform built with Next.js and Gemini for contextual, high-quality content creation.",
    img: "/projects/InspireAI - AI Content Generator.png",
    link: "https://github.com/anoushka45/AI-Content-Generator-App-",
    category: "AI",
    tags: ["Next.js", "Gemini", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    title: "UrbanAura - Modern E-Commerce Platform",
    des: "A modern full-stack e-commerce experience using Next.js, TypeScript, TailwindCSS, and Sanity CMS.",
    img: "/projects/urbanAura.png",   
    link: "https://github.com/anoushka45/UrbanAura-E-commerce-",
    category: "Full Stack",
    tags: ["Next.js", "CMS", "TypeScript", "Tailwind"],
  },
  {
    id: 4,
    title: "Media Management Portal",
    des: "A role-based media approval and management portal for uploads, moderation, and organization workflows.",
    img: "/projects/mediaNest.png",
    link: "https://github.com/anoushka45/folder-management-portal",
    category: "Full Stack",
    tags: ["PHP", "MySQL", "Admin Workflow", "Media"],
  },
];
export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson1",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson2",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson3",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson4",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson5",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "nuskia",
    img: "/b1.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "ape",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Associate Software Engineer - Mphasis Ltd",
    desc: "Working on enterprise AI systems involving LLM-based routing, orchestration workflows, retrieval pipelines, and scalable backend services.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Developer Intern - Reliance Jio",
    desc: "Converted Figma designs into responsive React interfaces and improved cross-device UI consistency for web-based products.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

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

// Define your tech stack icons here
export const techStackIcons = [
  "/re.svg", // React
  "/tail.svg", // Tailwind CSS
  "/ts.svg", // TypeScript
  "/fm.svg", // Firebase (or any other)
  "/next.svg", // Next.js
  // Docker (if applicable)
];
