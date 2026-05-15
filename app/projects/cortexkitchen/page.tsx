"use client";

import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-black-100 text-white px-5 sm:px-10 pb-20">
     <div className="max-w-5xl mx-auto pt-8 ">
<a
  href="/#projects"
  className="group relative inline-flex items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-6 py-2 text-sm font-medium text-neutral-200 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
>
  {/* subtle glow */}
  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
    <div className="absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/10 blur-2xl" />
  </div>

  {/* tiny dot */}
  <div className="mr-3 h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.9)]" />

  <span className="relative tracking-[0.18em] uppercase text-[11px]">
    View Full Portfolio
  </span>

  {/* hover arrow */}
  <span className="relative ml-3 text-base opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
    →
  </span>
</a>
</div>

      <div className="max-w-5xl mx-auto">
        {/* SECTION 1 — Hero */}
        <section className="py-20">
          <p className="text-xs uppercase tracking-widest text-purple">PROJECT DETAILS</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-3">Cortex<span className="text-orange-400">Kitchen</span></h1>
          <p className="text-white-200 text-xl mt-5 max-w-2xl leading-8">A 9-node multi-agent decision engine for restaurant operations. LangGraph orchestration, Critic-validated output, RAG-backed intelligence, and a full persisted audit trail.</p>

          <div className="flex gap-3 mt-8 flex-wrap">
            <a href="https://github.com/anoushka45/cortexkitchen" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm hover:border-purple transition">GitHub</a>
            <a href="#" className="px-5 py-2.5 rounded-full bg-purple text-black font-semibold text-sm hover:bg-purple/80 transition">Demo Video</a>
            <a href="/docs/CortexKitchen_Overview.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm hover:border-purple transition">Overview</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            <div className="rounded-2xl border border-white/10 bg-black-200 p-6 text-center">
              <div className="text-3xl font-bold text-white">9</div>
              <div className="text-sm text-white-200 mt-2">Intelligence Nodes</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black-200 p-6 text-center">
              <div className="text-3xl font-bold text-white">4</div>
              <div className="text-sm text-white-200 mt-2">Planning Scenarios</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black-200 p-6 text-center">
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-sm text-white-200 mt-2">Critic Dimensions</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black-200 p-6 text-center">
              <div className="text-3xl font-bold text-white">2</div>
              <div className="text-sm text-white-200 mt-2">Vector Collections</div>
            </div>
          </div>
        </section>

        {/* Project image */}
        <div className="w-full rounded-2xl overflow-hidden border border-white/10 mb-2">
          <img src="/projects/ck.png" alt="CortexKitchen dashboard" className="w-full h-auto object-cover" />
        </div>

        {/* SECTION 2 — The Problem */}
        <section className="py-20 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white-200">The Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 max-w-3xl">Restaurant managers make dozens of high-stakes calls every shift with no system to help them.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">No Early Warning</h3>
              <p className="text-sm text-white-200 leading-6">Staffing and prep decisions are reactive. By the time a demand spike is visible, it's too late to adjust.</p>
            </div>
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">Fragmented Signals</h3>
              <p className="text-sm text-white-200 leading-6">Complaint data, reservation pressure, inventory levels, and menu performance sit in separate systems with no synthesis layer.</p>
            </div>
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">No Audit Trail</h3>
              <p className="text-sm text-white-200 leading-6">When a shift goes badly, there's no record of what was recommended, what was decided, or why.</p>
            </div>
          </div>

          <p className="max-w-3xl mt-10 text-white-200 leading-7">The result: over-prep every service, complaints that repeat because no one joined the dots, and zero traceability on operational decisions. CortexKitchen addresses all of these.</p>
        </section>

        {/* SECTION 3 — Architecture */}
        <section className="py-20 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white-200">Architecture</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">A stateful orchestration graph — not a chatbot.</h2>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">CortexKitchen is built on LangGraph — a stateful DAG where each node receives a typed OrchestratorState, updates its output key, and passes state forward. Deterministic services handle structured computation: Prophet for forecasting, SQL aggregations for reservation pressure, rule-based logic for inventory alerts. The LLM is introduced only where it adds value — synthesis, interpretation, and evaluation.</p>

         
{/* ARCHITECTURE FLOW */}

<div className="relative mt-16 rounded-[34px] border border-white/10 bg-[#050505] p-8 md:p-12 overflow-hidden">

  {/* background glows */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-cyan-400/10 blur-[140px]" />
  <div className="absolute bottom-0 right-0 h-[300px] w-[300px] bg-purple/10 blur-[120px]" />

  {/* grid */}
  <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:42px_42px]" />

  <div className="relative z-10">

    {/* top label */}
    <div className="flex justify-center mb-14">
      <div className="px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl">
        <p className="text-[11px] tracking-[0.35em] uppercase text-cyan-200 font-medium">
          LangGraph Stateful Topology
        </p>
      </div>
    </div>

    {/* graph */}
    <div className="flex flex-col items-center">

      {/* ops manager */}
      <div className="relative group">
        <div className="absolute inset-0 bg-cyan-400/20 blur-3xl opacity-70" />

        <div className="relative rounded-3xl border border-cyan-400/30 bg-[#0d0d0d]/90 backdrop-blur-xl px-6 py-4 min-w-[220px] text-center shadow-[0_0_60px_rgba(34,211,238,0.15)]">
          <div className="flex justify-center mb-3">
            <div className="w-3 h-3 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
          </div>

          <p className="text-white text-sm font-semibold">
            Ops Manager
          </p>

          <p className="text-[11px] text-white/40 mt-1.5 tracking-wide">
            orchestration entrypoint
          </p>
        </div>
      </div>

      {/* connector */}
      <div className="relative w-[2px] h-20 bg-gradient-to-b from-cyan-400/70 to-blue-400/20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.8)]" />
      </div>

      {/* forecast */}
      <div className="relative">
        <div className="absolute inset-0 bg-blue-400/20 blur-3xl opacity-70" />

        <div className="relative rounded-3xl border border-blue-400/30 bg-[#0d0d0d]/90 px-6 py-4 min-w-[220px] text-center shadow-[0_0_60px_rgba(59,130,246,0.12)]">
          <p className="text-white text-sm font-semibold">
            Demand Forecast
          </p>

          <p className="text-[11px] text-white/40 mt-1.5 tracking-wide">
            prophet · predictive calibration
          </p>
        </div>
      </div>

      {/* split */}
      <div className="relative flex flex-col items-center">

        <div className="w-[2px] h-16 bg-gradient-to-b from-blue-400/70 to-cyan-400/20" />

        <div className="w-[65vw] max-w-[850px] h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent relative">

          <div className="absolute left-[12%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
          <div className="absolute left-[38%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
          <div className="absolute right-[38%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
          <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

        </div>

        <div className="mt-3 text-[11px] uppercase tracking-[0.3em] text-cyan-200/60">
          concurrent superstep
        </div>
      </div>

      {/* parallel agents */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-10 w-full max-w-6xl">

        {[
          {
            title: "Reservation Intel",
            desc: "reservation pressure analysis",
            glow: "cyan",
          },
          {
            title: "Complaint Intel",
            desc: "RAG + complaint synthesis",
            glow: "blue",
          },
          {
            title: "Menu Intelligence",
            desc: "sales & promotion insights",
            glow: "emerald",
          },
          {
            title: "Inventory Agent",
            desc: "stock risk & shortages",
            glow: "orange",
          },
        ].map((agent) => (
          <div
            key={agent.title}
            className="group relative"
          >

            <div className="absolute inset-0 rounded-[28px] bg-cyan-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d]/95 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30">

              {/* top line */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent" />
              </div>

              <h3 className="text-white text-sm font-semibold">
                {agent.title}
              </h3>

              <p className="text-xs text-white/45 mt-2 leading-5">
                {agent.desc}
              </p>

              {/* subtle corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/5 blur-2xl" />

            </div>
          </div>
        ))}

      </div>

      {/* merge line */}
      <div className="relative flex flex-col items-center mt-10">

        <div className="w-[65vw] max-w-[850px] h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.9)]" />
        </div>

        <div className="w-[2px] h-16 bg-gradient-to-b from-emerald-400/70 to-white/10" />

      </div>

      {/* final stack */}
      <div className="flex flex-col items-center gap-6 w-full max-w-md">

        {[
          {
            title: "Aggregator",
            desc: "merge & reconcile outputs",
            border: "border-emerald-400/30",
          },
          {
            title: "Critic Agent",
            desc: "governance & evaluation",
            border: "border-orange-400/30",
          },
          {
            title: "Final Assembler",
            desc: "response synthesis layer",
            border: "border-white/20",
          },
        ].map((node) => (
          <div key={node.title} className="relative w-full group">

            <div className="absolute inset-0 bg-white/5 blur-3xl opacity-40" />

            <div
              className={`relative rounded-[28px] ${node.border} border bg-[#0d0d0d]/95 backdrop-blur-xl p-4 transition-all duration-300 hover:-translate-y-1`}
            >

              <div className="flex items-center gap-4">

                <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />

                <div>
                  <h3 className="text-white text-sm font-semibold">
                    {node.title}
                  </h3>

                  <p className="text-xs text-white/45 mt-1">
                    {node.desc}
                  </p>
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  </div>
</div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">Hybrid Intelligence</h3>
              <p className="text-sm text-white-200 leading-6">Deterministic services compute structured signals. The LLM is introduced only for synthesis and interpretation — where it adds value without adding correctness risk.</p>
            </div>
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">Typed Shared State</h3>
              <p className="text-sm text-white-200 leading-6">All nodes communicate through a typed OrchestratorState TypedDict. The keep_last reducer handles concurrent writes from the parallel superstep safely.</p>
            </div>
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">Provider Independence</h3>
              <p className="text-sm text-white-200 leading-6">Agents receive an injected LLM provider — no direct imports. Swap Gemini 2.5 Flash for Groq llama-3.3-70b with one config change. No agent logic changes.</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Intelligence Nodes */}
        <section className="py-20 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white-200">Intelligence Nodes</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">9 specialised nodes. Each owns a distinct operational domain.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6 hover:border-purple/30 transition duration-200">
              <span className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 inline-block mb-3">Entry · Deterministic</span>
              <h3 className="text-lg font-semibold text-white">Ops Manager</h3>
              <p className="text-sm text-white-200 mt-2 leading-6">Validates the scenario against the registry. If invalid, short-circuits directly to Final Assembler — no domain nodes run. Sets scenario metadata in shared state.</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6 hover:border-purple/30 transition duration-200">
              <span className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 inline-block mb-3">Forecasting · Prophet</span>
              <h3 className="text-lg font-semibold text-white">Demand Forecast</h3>
              <p className="text-sm text-white-200 mt-2 leading-6">Fits a Prophet model on historical order data. Produces a yhat estimate with upper/lower confidence bounds and a peak_ratio for the service window. Runs first — Inventory and Menu nodes depend on its output.</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6 hover:border-purple/30 transition duration-200">
              <span className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 inline-block mb-3">Analysis · SQL + LLM</span>
              <h3 className="text-lg font-semibold text-white">Reservation Intelligence</h3>
              <p className="text-sm text-white-200 mt-2 leading-6">Reads reservation records, calculates slot-level occupancy, and identifies high-pressure windows. Deterministic for numeric analysis; LLM used only for natural-language interpretation.</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6 hover:border-purple/30 transition duration-200">
              <span className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 inline-block mb-3">RAG · LLM</span>
              <h3 className="text-lg font-semibold text-white">Complaint Intelligence</h3>
              <p className="text-sm text-white-200 mt-2 leading-6">Retrieves semantically similar complaints and SOPs from Qdrant using cosine similarity. LLM synthesises them into a structured risk summary with recommended mitigations.</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6 hover:border-purple/30 transition duration-200">
              <span className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 inline-block mb-3">Analysis · LLM</span>
              <h3 className="text-lg font-semibold text-white">Menu Intelligence</h3>
              <p className="text-sm text-white-200 mt-2 leading-6">Computes item-level sales velocity, classifies top performers and underperformers, and generates scenario-aware promotion suggestions.</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6 hover:border-purple/30 transition duration-200">
              <span className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 inline-block mb-3">Rule-Based · LLM</span>
              <h3 className="text-lg font-semibold text-white">Inventory Planner</h3>
              <p className="text-sm text-white-200 mt-2 leading-6">Checks stock against reorder thresholds and spoilage flags. Contextualises inventory risk against forecast demand — a 40% demand spike elevates a marginal stock level to a critical shortage.</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6 hover:border-purple/30 transition duration-200">
              <span className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 inline-block mb-3">Deterministic</span>
              <h3 className="text-lg font-semibold text-white">Aggregator</h3>
              <p className="text-sm text-white-200 mt-2 leading-6">No LLM call. Merges all four parallel domain outputs into a single recommendations object and assembles the RAG context payload.</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6 hover:border-purple/30 transition duration-200">
              <span className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 inline-block mb-3">Evaluation · LLM</span>
              <h3 className="text-lg font-semibold text-white">Critic</h3>
              <p className="text-sm text-white-200 mt-2 leading-6">The quality gate. Scores the aggregated plan across 5 dimensions and returns a verdict — approved, revision, or rejected — with annotated reasoning and cost-aware penalty logic.</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6 hover:border-purple/30 transition duration-200">
              <span className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 inline-block mb-3">Output · Deterministic</span>
              <h3 className="text-lg font-semibold text-white">Final Assembler</h3>
              <p className="text-sm text-white-200 mt-2 leading-6">Shapes the final API response. Handles error paths cleanly. Appends execution trace to metadata when debug flag is set.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — Critic System */}
        <section className="py-20 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white-200">Critic System</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Nothing reaches the operator unreviewed.</h2>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">The Critic Agent is the system's quality gate — structurally part of the orchestration graph, not a post-hoc check. Every aggregated plan is scored across five dimensions before the operator sees anything. The Critic returns a 0.0–1.0 score, a verdict, and annotated revision reasons.</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-10">
            <div className="rounded-xl bg-black-200 border border-white/10 p-5 text-center">
              <div className="text-sm font-semibold text-white mb-2">Safety</div>
              <div className="text-xs text-white-200 leading-5">Does the plan violate capacity limits, pricing constraints, or food safety rules?</div>
            </div>
            <div className="rounded-xl bg-black-200 border border-white/10 p-5 text-center">
              <div className="text-sm font-semibold text-white mb-2">Feasibility</div>
              <div className="text-xs text-white-200 leading-5">Can these actions realistically execute within the 24-hour service window?</div>
            </div>
            <div className="rounded-xl bg-black-200 border border-white/10 p-5 text-center">
              <div className="text-sm font-semibold text-white mb-2">Evidence</div>
              <div className="text-xs text-white-200 leading-5">Is the recommendation grounded in retrieved complaints and SOPs?</div>
            </div>
            <div className="rounded-xl bg-black-200 border border-white/10 p-5 text-center">
              <div className="text-sm font-semibold text-white mb-2">Actionability</div>
              <div className="text-xs text-white-200 leading-5">Are the actions specific and concrete enough to act on immediately?</div>
            </div>
            <div className="rounded-xl bg-black-200 border border-white/10 p-5 text-center">
              <div className="text-sm font-semibold text-white mb-2">Clarity</div>
              <div className="text-xs text-white-200 leading-5">Is the recommendation communicated clearly and without ambiguity?</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">
            <div className="px-5 py-2 rounded-full border border-green-400/30 text-green-300 bg-green-400/10 text-sm font-medium">Approved</div>
            <div className="text-white-200">.</div>
            <div className="px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-300 bg-yellow-400/10 text-sm font-medium">Revision</div>
            <div className="text-white-200">.</div>
            <div className="px-5 py-2 rounded-full border border-red-400/30 text-red-300 bg-red-400/10 text-sm font-medium">Rejected</div>
          </div>

          <div className="rounded-2xl bg-black-200 border border-white/10 p-6 mt-10">
            <div className="font-semibold text-white mb-2">Cost-Aware Scoring</div>
            <div className="text-sm text-white-200 leading-6">A separate scoring layer evaluates operational tradeoffs beyond the five dimensions — prep burden against forecast confidence, stock risk, reservation pressure. High operational pressure can suppress feasibility and actionability scores. The operator sees a cost-aware breakdown (stock risk, prep burden, reservation pressure) alongside the critic verdict.</div>
          </div>
        </section>

        {/* SECTION 6 — RAG + Explainability */}
        <section className="py-20 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white-200">RAG + Explainability</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">The system shows what it retrieved — not just what it decided.</h2>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">The Complaint Intelligence node retrieves semantically similar complaints and SOPs from Qdrant before the LLM synthesises anything. That raw context is preserved through the full graph and surfaced to the operator in a RAG Context Drawer — so every recommendation has a traceable evidence chain.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="font-semibold text-white mb-3">Retrieval Flow</h3>
              <div className="text-sm text-white-200 leading-7">
                <div className="text-purple"></div>
                <div>Query constructed from operational context (e.g. "pizza delivery delays, slow service, Friday evening")</div>
                <div className="mt-2">→ Query embedded and passed to Qdrant cosine similarity search</div>
                <div className="mt-2">→ Top-k complaints retrieved with similarity scores</div>
                <div className="mt-2">→ Parallel SOP retrieval for applicable operational guidelines</div>
                <div className="mt-2">→ Both result sets passed to the LLM for synthesis</div>
                <div className="mt-2">→ Raw retrieved items preserved as rag_context in the final response</div>
              </div>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="font-semibold text-white mb-3">What Explainability Means Here</h3>
              <p className="text-sm text-white-200 leading-7">A black-box recommendation gives a manager no reason to trust the output. CortexKitchen surfaces the exact complaints and SOPs that shaped each recommendation — visible in the dashboard RAG Context Drawer. The operator can agree, disagree, or override based on the same evidence the system used. This is what separates decision support from a black box.</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-black-100 border border-white/10 px-5 py-4 text-sm text-white-200 leading-6">Active Qdrant collections: complaint_memory (embedded complaint texts with platform, type, rating, and date metadata) and sop_memory (embedded operational guidelines retrieved against kitchen and service area queries).</div>
        </section>

        {/* SECTION 7 — Audit Trail */}
        <section className="py-20 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white-200">Audit Trail</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Every run is persisted. Every decision is traceable.</h2>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">Each planning run is stored as a PlanningRun record in PostgreSQL — the full final response, critic output, RAG context, and recommendations as JSONB. A DecisionLog record separately captures the critic verdict, score, and dimension-level reasoning. The /runs page makes the entire history inspectable.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="font-semibold text-white mb-2">Run History</h3>
              <p className="text-sm text-white-200 leading-6">Filter by scenario, status, and critic verdict. Every run from every session is accessible with timestamps and metadata.</p>
            </div>
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="font-semibold text-white mb-2">Critic Drilldown</h3>
              <p className="text-sm text-white-200 leading-6">Per-run breakdown of critic score across all 5 dimensions, revision notes, and cost-aware tradeoff flags (stock risk, prep burden, reservation pressure).</p>
            </div>
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="font-semibold text-white mb-2">RAG Inspection</h3>
              <p className="text-sm text-white-200 leading-6">The specific complaints and SOPs retrieved from Qdrant for that exact run — not recomputed, preserved through state and stored at run time.</p>
            </div>
          </div>
        </section>

        {/* SECTION 8 — Engineering Tradeoffs */}
        <section className="py-20 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white-200">Tradeoffs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Deliberate decisions — not defaults.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="font-semibold text-white mb-2">LLMs used selectively</h3>
              <p className="text-sm text-white-200 leading-6">Reservation and Inventory nodes use deterministic SQL and rule-based logic for numeric analysis. The LLM is invoked only to produce natural-language interpretation of pre-computed signals. This keeps latency low and correctness high where outcomes are measurable.</p>
            </div>
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="font-semibold text-white mb-2">Demand Forecast runs before the fan-out</h3>
              <p className="text-sm text-white-200 leading-6">Prophet runs as a dedicated sequential step before the four parallel domain nodes. Both Inventory and Menu Intelligence depend on forecast output — the concurrency boundary is placed after the forecast intentionally.</p>
            </div>
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="font-semibold text-white mb-2">Synthetic data only (Phase 1–3)</h3>
              <p className="text-sm text-white-200 leading-6">All operational data is seeded synthetically with realistic patterns — Friday demand spikes, 7–9 PM reservation clusters, pizza-heavy complaint themes, and deliberate shortage scenarios. Phase 4 introduces real POS and reservation connectors.</p>
            </div>
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <h3 className="font-semibold text-white mb-2">Redis provisioned, not yet fully used</h3>
              <p className="text-sm text-white-200 leading-6">Redis is in the stack, passes health checks, and is configured via REDIS_URL. Forecast caching, job deduplication, and async coordination are Phase 4 scope. Its presence reflects intentional forward design — Phase 4 plugs in without architectural changes.</p>
            </div>
          </div>
        </section>

        {/* SECTION 9 — Demo Video */}
        <section className="py-20 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white-200">Demo</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">See it in action.</h2>

          <div className="rounded-2xl bg-black-200 border border-white/10 overflow-hidden mt-8">
            <div className="aspect-video w-full bg-black-100 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-purple/20 border border-purple/40 flex items-center justify-center text-purple text-xl">▶</div>
              <div className="text-white-200 text-sm mt-4">Demo video coming soon</div>
              <div className="text-white-200/60 text-xs mt-1">Loom walkthrough · Friday Rush scenario end-to-end</div>
            </div>
            {/* Replace with Loom iframe once recorded */}
          </div>
        </section>

        {/* SECTION 10 — Roadmap */}
        <section className="py-20 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white-200">Roadmap</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Phase 4 — Productisation</h2>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">Phases 0–3 are complete. Phase 4 takes the system toward a real product.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <div className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 font-mono inline-block mb-3">P4-01</div>
              <h3 className="font-semibold text-white">Multi-Tenant Auth</h3>
              <p className="text-sm text-white-200 leading-6">User and organisation model, JWT-based login, workspace separation, role-based access control, and protected API routes.</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <div className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 font-mono inline-block mb-3">P4-02</div>
              <h3 className="font-semibold text-white">Real Data Connectors</h3>
              <p className="text-sm text-white-200 leading-6">POS system integration, CSV import pipeline for orders and reservations, reservation API connectors (Dineout, EazyDiner).</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <div className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 font-mono inline-block mb-3">P4-03</div>
              <h3 className="font-semibold text-white">Async Job Queue</h3>
              <p className="text-sm text-white-200 leading-6">Redis-backed async planning runs with job status polling, retries, and deduplication. Enables non-blocking plan generation.</p>
            </div>

            <div className="rounded-2xl bg-black-200 border border-white/10 p-6">
              <div className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 font-mono inline-block mb-3">P4-04</div>
              <h3 className="font-semibold text-white">Observability</h3>
              <p className="text-sm text-white-200 leading-6">Per-run latency breakdown by node, LLM token cost tracking, failure mode logging, and enhanced trace viewer in the UI.</p>
            </div>
          </div>
        </section>

        {/* SECTION 11 — Tech Stack */}
        <section className="py-20 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white-200">Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Built with production-grade tooling.</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {[
              ["FastAPI", "API layer"],
              ["LangGraph", "Orchestration"],
              ["PostgreSQL 16", "Primary store"],
              ["Qdrant", "Vector memory"],
              ["Prophet", "Demand forecast"],
              ["Redis", "Queue / cache"],
              ["Next.js 16", "Dashboard UI"],
              ["Docker Compose", "Local infra"],
              ["SQLAlchemy + Alembic", "ORM + migrations"],
              ["Gemini 2.5 Flash", "Primary LLM"],
              ["Groq llama-3.3-70b", "Fallback LLM"],
              ["Python", "Backend language"],
            ].map((s) => (
              <div key={s[0]} className="rounded-xl bg-black-200 border border-white/10 p-4 text-center">
                <div className="text-white text-sm font-semibold">{s[0]}</div>
                <div className="text-white-200 text-xs mt-1">{s[1]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 12 — Final CTA */}
        <section className="py-20 border-t border-white/10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Want to see it running?</h2>
          <p className="text-white-200 mt-4 max-w-xl mx-auto">The full system runs locally with Docker Compose. Architecture docs, data model, API contracts, and the evaluation rubric are all in the repo.</p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <a href="https://github.com/anoushka45/cortexkitchen" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-purple text-black font-semibold text-sm font-medium hover:bg-purple/80 transition">View on GitHub</a>
            <a href="mailto:vyasanoushka@gmail.com" className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:border-purple transition">Get in Touch</a>
            <a href="#" className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:border-purple transition">Demo Video</a>
          </div>
        </section>
      </div>
    </main>
  );
}
