import React from "react";

const focusCards = [
  {
    title: "Deepening AI Systems",
    body: "Spending focused time on evaluation frameworks, agent reliability patterns, and production LLM architecture. The parts that determine whether a system holds up outside of a demo.",
  },
  {
    title: "What Interests Me Most",
    body: "Evaluation infrastructure for agent systems, reliability at scale, and the observability layer that makes multi-agent pipelines debuggable. Problems where the correctness bar is high and getting it wrong has consequences.",
  },
  {
    title: "Exploring",
    body: "Diving into agent memory architectures and long-horizon planning. Also thinking about the product layer above the API, where most AI systems lose users.",
  },
];

const WhatsNext = () => {
  return (
    <section id="next" className="py-20">
      <p className="eyebrow">Currently</p>
      <h1 className="heading">
        What I&apos;m <span className="text-purple">Focused On</span>
      </h1>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

        {focusCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-black-200 p-6 relative z-10 hover:border-purple/30 transition-colors duration-300"
          >
            <h3 className="text-white font-semibold text-lg mb-3">{card.title}</h3>
            <p className="text-sm text-white-200 leading-6">{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatsNext;
