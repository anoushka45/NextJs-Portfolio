import React from "react";

const techStack = ["FastAPI", "LangGraph", "PostgreSQL", "Qdrant", "Redis", "Next.js", "JWT"];

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
          <p className="text-sm uppercase tracking-[0.2em] text-purple mb-3">Planned</p>

          <h2 className="text-3xl md:text-5xl font-bold text-white">Phase 4 — Productisation</h2>

          <p className="mt-3 text-lg md:text-xl text-purple">CortexKitchen · Planned</p>

          <p className="mt-5 text-white-200 max-w-3xl leading-7">
            Phases 0–3 are complete. The system runs end-to-end across 4 planning scenarios
            with LangGraph orchestration, RAG-backed complaint intelligence, a 5-dimension
            Critic validation layer, and a persisted audit trail. Phase 4 takes it toward a
            real product: multi-tenant auth, live data connectors, async job queue, and
            production observability.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {techStack.map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-black-100 border border-white/10 text-sm text-white-200">
                {item}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">Multi-Tenant Auth</h3>
              <p className="text-sm text-white-200 leading-6">JWT-based login, user and organisation model, workspace separation, and role-based access control across all API routes.</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">Real Data Connectors</h3>
              <p className="text-sm text-white-200 leading-6">POS system integration, CSV import pipeline for orders and reservations, and reservation API connectors (Dineout, EazyDiner).</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">Async + Observability</h3>
              <p className="text-sm text-white-200 leading-6">Redis-backed async planning runs with job status polling and retries. Per-run latency by node, LLM token cost tracking, and an enhanced trace viewer.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 rounded-full border border-green-400/20 bg-green-400/10 text-green-300 text-sm">Phases 0–3 Complete</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-black-100 text-white-200 text-sm">Phase 4 Planned</span>
            <span className="px-4 py-2 rounded-full border border-purple/20 bg-purple/10 text-purple text-sm">Open to early pilots</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNext;