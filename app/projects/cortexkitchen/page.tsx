"use client";

import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-black-100 text-white px-5 sm:px-10 pb-20">
      <div className="max-w-5xl mx-auto pt-8">
        <a href="/#projects" className="text-white-200 text-sm hover:text-white transition">← Back to Projects</a>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* SECTION 1 — Hero */}
        <section className="py-20">
          <p className="text-xs uppercase tracking-widest text-purple">Case Study</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-3">CortexKitchen</h1>
          <p className="text-white-200 text-xl mt-5 max-w-2xl leading-8">A 9-node multi-agent decision engine for restaurant operations. LangGraph orchestration, Critic-validated output, RAG-backed intelligence, and a full persisted audit trail.</p>

          <div className="flex gap-3 mt-8 flex-wrap">
            <a href="https://github.com/anoushka45/cortexkitchen" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm hover:border-purple transition">GitHub</a>
            <a href="#" className="px-5 py-2.5 rounded-full bg-purple text-white text-sm hover:bg-purple/80 transition">Demo Video</a>
            <a href="#" className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm hover:border-purple transition">Live Demo</a>
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

          <div className="rounded-2xl bg-black-200 border border-white/10 p-6 mt-10 overflow-x-auto">
            <div className="text-xs text-white-200 mb-1 text-center">concurrent superstep</div>
            <div className="flex items-center justify-center flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full border border-white/20 bg-black-100 text-sm">Ops Manager</span>
              <span className="text-white-200 text-xs mx-2">→</span>
              <span className="px-3 py-1.5 rounded-full border border-white/20 bg-black-100 text-sm">Demand Forecast</span>
              <span className="text-white-200 text-xs mx-2">→</span>
              <span className="px-3 py-1.5 rounded-full border border-purple/30 text-purple/80 bg-black-100 text-sm whitespace-nowrap">Reservation · Complaint Intel · Menu Intel · Inventory</span>
              <span className="text-white-200 text-xs mx-2">→</span>
              <span className="px-3 py-1.5 rounded-full border border-white/20 bg-black-100 text-sm">Aggregator</span>
              <span className="text-white-200 text-xs mx-2">→</span>
              <span className="px-3 py-1.5 rounded-full border border-white/20 bg-black-100 text-sm">Critic</span>
              <span className="text-white-200 text-xs mx-2">→</span>
              <span className="px-3 py-1.5 rounded-full border border-white/20 bg-black-100 text-sm">Final Assembler</span>
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
            <div className="text-white-200">→</div>
            <div className="px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-300 bg-yellow-400/10 text-sm font-medium">Revision</div>
            <div className="text-white-200">→</div>
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
                <div className="text-purple">→</div>
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
            <a href="https://github.com/anoushka45/cortexkitchen" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-purple text-white text-sm font-medium hover:bg-purple/80 transition">View on GitHub</a>
            <a href="mailto:vyasanoushka@gmail.com" className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:border-purple transition">Get in Touch</a>
            <a href="#" className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:border-purple transition">Demo Video</a>
          </div>
        </section>
      </div>
    </main>
  );
}
