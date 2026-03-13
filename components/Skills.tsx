import React from "react";

const skillGroups = [
  {
    title: "AI / LLM",
    items: ["LangChain", "LangGraph", "RAG Pipelines", "Azure OpenAI", "Gemini", "Prompt Engineering", "Vector Search"],
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Angular"],
  },
  {
    title: "Databases & Tools",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Git", "Postman", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        Technologies I <span className="text-purple">Work With</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-black-200 p-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              {group.title}
            </h2>

            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-black-100 border border-white/10 text-sm text-white-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;