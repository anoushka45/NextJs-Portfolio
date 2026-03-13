import React from "react";

const nextFocus = [
  {
    title: "Agent Workflows",
    desc: "Exploring how multiple AI agents can coordinate tasks, decisions, and actions within one system.",
  },
  {
    title: "Real Business Use Cases",
    desc: "Designing AI features around restaurant operations like forecasting, complaints, and optimization.",
  },
  {
    title: "Product Thinking",
    desc: "Building it like a real product , not just a demo - with clear workflows, usability, and system design.",
  },
];

const techStack = ["FastAPI", "LangGraph", "LLMs", "PostgreSQL", "AI Workflows"];

const WhatsNext = () => {
  return (
    <section id="next" className="py-20">
      <h1 className="heading">
        What&apos;s <span className="text-purple">Next</span>
      </h1>

      <div className="mt-12 rounded-3xl border border-white/10 bg-black-200 p-8 md:p-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.2em] text-purple mb-3">
            Currently Building
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            CortexKitchen
          </h2>

          <p className="mt-3 text-lg md:text-xl text-purple">
            An AI-powered restaurant operations engine
          </p>

          <p className="mt-5 text-white-200 max-w-3xl leading-7">
            I’m exploring how AI can move beyond chat and become part of real operational systems.
            CortexKitchen is my attempt to design a product where intelligent workflows can help
            with demand forecasting, complaint analysis, menu decisions, and day-to-day restaurant operations.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {techStack.map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-black-100 border border-white/10 text-sm text-white-200"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {nextFocus.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black-100 p-5"
              >
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-white-200 text-sm mt-3 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 rounded-full border border-green-400/20 bg-green-400/10 text-green-300 text-sm">
              In planning
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-black-100 text-white-200 text-sm">
              Personal capstone
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-black-100 text-white-200 text-sm">
              AI systems focus
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNext;