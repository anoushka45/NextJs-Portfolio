import React from "react";

const skillGroups = [
  {
    title: "AI / LLM",
    items: ["LangChain", "LangGraph", "RAG Pipelines", "Prompt Engineering", "Vector Databases", "Azure OpenAI", "Gemini", "Claude", "Groq", "Llama", "Open Source Models"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express.js", "Docker", "REST APIs"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Angular"],
  },
  {
    title: "Databases & Tools",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Qdrant", "ChromaDB", "Git", "GitHub", "Postman", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <p className="eyebrow">Stack</p>
      <h1 className="heading">
        Technologies I <span className="text-purple">Work With</span>
      </h1>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
  {skillGroups.map((group) => (
    <div
      key={group.title}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black-200/90 backdrop-blur-xl p-6 transition-all duration-300 hover:border-purple/30 hover:shadow-[0_0_35px_rgba(168,85,247,0.12)]"
    >
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-5 pl-3 border-l-2 border-purple/40 tracking-tight">
          {group.title}
        </h2>

        <div className="flex flex-wrap gap-3">
          {group.items.map((item) => (
            <span
              key={item}
              className="relative overflow-hidden rounded-full border border-white/10 bg-black-100 px-4 py-2 text-sm text-white-200 transition-all duration-300 hover:border-purple/40 hover:bg-purple-500/[0.08] hover:text-white hover:shadow-[0_0_18px_rgba(168,85,247,0.16)]"
            >
              <span className="relative z-10">{item}</span>

              <span className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10" />
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
};

export default Skills;