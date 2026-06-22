"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

const Lightbox = dynamic(() => import("../../../components/Lightbox"), { ssr: false });

/* ─────────────────────────────────────────────────────────────
   Screenshot paths — place these in /public/projects/cortexkitchen/
   See the "Screenshots" section at the bottom of this file
   ───────────────────────────────────────────────────────────── */
const S = {
  hero:             "/projects/cortexkitchen_screenshots/03_dashboard/03_plan_approved_top.png",
  pipelineRunning:  "/projects/cortexkitchen_screenshots/03_dashboard/02_loading_screen.png",
  servicePlanning:  "/projects/cortexkitchen_screenshots/03_dashboard/05_service_planning.png",
  menuDirection:    "/projects/cortexkitchen_screenshots/03_dashboard/06_menu_direction.png",
  operationalRisk:  "/projects/cortexkitchen_screenshots/03_dashboard/07_operational_risk.png",
  whatIf:           "/projects/cortexkitchen_screenshots/03_dashboard/08_what_if_simulator.png",
  chatbot:          "/projects/cortexkitchen_screenshots/05_chat/02_conversation_complaints.png",
  runs:             "/projects/cortexkitchen_screenshots/04_runs/runs_history_audit.png",
  runsDetail:       "/projects/cortexkitchen_screenshots/04_runs/run_detail_history_panel.png",
  observability:    "/projects/cortexkitchen_screenshots/06_data_health/observability_panel.png",
  dataHealth:       "/projects/cortexkitchen_screenshots/06_data_health/data_health.png",
  langsmith:        "/projects/cortexkitchen_screenshots/09_observability_tools/langsmith_run_traces.png",
  langsmithGolden:  "/projects/cortexkitchen_screenshots/09_observability_tools/langsmith_golden_dataset.png",
  sentry:           "/projects/cortexkitchen_screenshots/09_observability_tools/sentry_error_capture.png",
  pdfExport:        "/projects/cortexkitchen_screenshots/08_exports/pdf_chef_brief.png",
  excelChef:        "/projects/cortexkitchen_screenshots/08_exports/excel_inventory_chef_view.png",
  excelOwner:       "/projects/cortexkitchen_screenshots/08_exports/excel_cost_breakdown_owner_view.png",
  settings:         "/projects/cortexkitchen_screenshots/07_config/settings.png",
  profiles:         "/projects/cortexkitchen_screenshots/07_config/restaurant_profiles.png",
  // NEW — CometAPI
  cometapi:         "/projects/cortexkitchen_screenshots/07_config/cometapi.png",
  cometapiDash:     "/projects/cortexkitchen_screenshots/07_config/cometapi-dashboard.png",
  cometapiRun:      "/projects/cortexkitchen_screenshots/07_config/cometapi-run.png",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-orange-400/80 font-mono">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
      {children}
    </h2>
  );
}

function Shot({
  src,
  caption,
  className = "",
}: {
  src: string;
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-white/10 bg-black-200 ${className}`}
    >
      <Image src={src} alt={caption} className="w-full h-auto block" width={1400} height={900} sizes="(max-width: 1024px) 100vw, 1200px"/>
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black/70 backdrop-blur-sm">
        <p className="text-[10px] font-mono tracking-wider text-white/60 uppercase">
          {caption}
        </p>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-black-200 border border-white/10 text-white-200">
      {children}
    </span>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-black-200 border border-white/10 p-6 ${className}`}
    >
      {children}
    </div>
  );
}

export default function Page() {
  const [lightbox, setLightbox] = useState<{ src: string; caption?: string } | null>(null);
  return (
    <main className="min-h-screen bg-black-100 text-white px-5 sm:px-10 pb-24">
      {/* ── back nav ── */}
      <div className="max-w-5xl mx-auto pt-8">
        <a
          href="/"
          className="group relative inline-flex items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-6 py-2 text-sm font-medium text-neutral-200 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
        >
          <div className="mr-3 h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.9)]" />
          <span className="relative tracking-[0.18em] uppercase text-[11px]">
            View Full Portfolio
          </span>
          <span className="relative ml-3 text-base opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
            →
          </span>
        </a>
      </div>

      <div className="max-w-5xl mx-auto">

        {/* ════════════════════════════════════════
            HERO
            ════════════════════════════════════════ */}
        <section className="py-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-orange-400/10 border border-orange-400/25 text-orange-300 tracking-wider">PHASE 6 IN PROGRESS</span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-400/10 border border-blue-400/25 text-blue-300 tracking-wider">P6-00 SHIPPED</span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-green-400/10 border border-green-400/25 text-green-300 tracking-wider">PRODUCTION</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-2 leading-none">
            Cortex<span className="text-orange-400">Kitchen</span>
          </h1>

          <p className="text-white-200 text-xl mt-5 max-w-2xl leading-8">
            A <span className="text-white font-semibold">multi-agent AI platform</span> for restaurant operations. Five specialist agents run in parallel through a{" "}
            <span className="text-white font-semibold">9-node LangGraph pipeline</span>, critic-verified across five quality dimensions, streamed live to the dashboard — and resolved into a single ops brief in under 90 seconds.
          </p>

          <p className="mt-4 text-lg text-orange-200/95 font-semibold">One verified, production-ready brief — under 90 seconds.</p>


          <div className="flex gap-3 mt-8 flex-wrap">
            <a
              href="https://github.com/anoushka45/cortexkitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-orange-400 text-black font-semibold text-sm hover:bg-orange-300 transition"
            >
              GitHub
            </a>
            <span className="px-5 py-2.5 rounded-full border border-white/20 text-white-200 text-sm cursor-default select-none">
              Demo Video — Coming Soon
            </span>
            {/* <a
              href="/docs/CortexKitchen_Overview.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm hover:border-orange-400/50 transition"
            >
              Overview PDF
            </a> */}
          </div>

          {/* live stats from observability panel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {[
              { v: "9", label: "LangGraph Nodes" },
              { v: "59", label: "Runs (7 days)" },
              { v: "81%", label: "Critic Pass Rate" },
              { v: "0.81", label: "Avg Critic Score" },
              { v: "16.6s", label: "Avg Latency" },
              { v: "5", label: "Quality Dimensions" },
              { v: "50", label: "Golden Eval Runs" },
              { v: "5+", label: "Phases Shipped" },
            ].map(({ v, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-black-200 p-6 text-center"
              >
                <div className="text-3xl font-bold text-white font-mono">{v}</div>
                <div className="text-sm text-white-200 mt-2">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* hero screenshot */}
        <div onClick={() => setLightbox({ src: S.hero, caption: "Plan Approved — Critic 0.92 / 1.00 · Five agent metric cards" })} className="cursor-zoom-in">
          <Shot src={S.hero} caption="Plan Approved — Critic 0.92 / 1.00 · Five agent metric cards" className="mb-2" />
        </div>

        {/* ════════════════════════════════════════
            THE PROBLEM
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>The Problem</Label>
          <SectionTitle>
            Restaurant managers make dozens of high-stakes calls every shift with no system to help them.
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <Card>
              <h3 className="text-white font-semibold mb-2">No Early Warning</h3>
              <p className="text-sm text-white-200 leading-6">
                Staffing and prep decisions are reactive. By the time a demand spike is visible, it's too late to adjust.
              </p>
            </Card>
            <Card>
              <h3 className="text-white font-semibold mb-2">Fragmented Signals</h3>
              <p className="text-sm text-white-200 leading-6">
                Complaint data, reservation pressure, inventory levels, and menu performance sit in separate systems with no synthesis layer.
              </p>
            </Card>
            <Card>
              <h3 className="text-white font-semibold mb-2">No Audit Trail</h3>
              <p className="text-sm text-white-200 leading-6">
                When a shift goes badly, there's no record of what was recommended, what was decided, or why.
              </p>
            </Card>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ARCHITECTURE
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Architecture</Label>
          <SectionTitle>A stateful orchestration graph — not a chatbot.</SectionTitle>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            CortexKitchen is built on LangGraph — a stateful DAG where each node receives a typed{" "}
            <code className="text-orange-300 font-mono text-sm">OrchestratorState</code>, updates its output key, and passes state forward. Deterministic services handle structured computation: Prophet for forecasting, SQL aggregations for reservation pressure, rule-based logic for inventory alerts. LLMs are introduced only where they add value — synthesis, interpretation, and evaluation.
          </p>

          {/* architecture diagram */}
          <div className="relative mt-16 rounded-[34px] border border-white/10 bg-[#050505] p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-orange-400/8 blur-[140px]" />
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:42px_42px]" />

            <div className="relative z-10">
              <div className="flex justify-center mb-14">
                <div className="px-5 py-2 rounded-full border border-orange-400/25 bg-orange-400/10">
                  <p className="text-[11px] tracking-[0.35em] uppercase text-orange-200 font-medium font-mono">
                    LangGraph · 9-Node Stateful Topology
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                {/* ops manager */}
                <div className="relative rounded-3xl border border-orange-400/30 bg-[#0d0d0d]/90 px-6 py-4 min-w-[220px] text-center shadow-[0_0_60px_rgba(251,146,60,0.12)]">
                  <div className="flex justify-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse shadow-[0_0_20px_rgba(251,146,60,0.9)]" />
                  </div>
                  <p className="text-white text-sm font-semibold">Ops Manager</p>
                  <p className="text-[11px] text-white/40 mt-1.5 tracking-wide">validates · fans out · syncs state</p>
                </div>

                <div className="w-[2px] h-12 bg-gradient-to-b from-orange-400/70 to-blue-400/30" />

                {/* demand forecast */}
                <div className="relative rounded-3xl border border-blue-400/30 bg-[#0d0d0d]/90 px-6 py-4 min-w-[220px] text-center">
                  <p className="text-white text-sm font-semibold">Demand Forecast</p>
                  <p className="text-[11px] text-white/40 mt-1.5 tracking-wide">Prophet · peak detection · confidence band</p>
                </div>

                {/* fan-out */}
                <div className="flex flex-col items-center">
                  <div className="w-[2px] h-10 bg-gradient-to-b from-blue-400/70 to-cyan-400/20" />
                  <div className="w-[65vw] max-w-[850px] h-[2px] bg-gradient-to-r from-transparent via-orange-400/40 to-transparent relative">
                    {[12, 37, 63, 88].map((p) => (
                      <div
                        key={p}
                        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-300 shadow-[0_0_16px_rgba(251,146,60,0.8)]"
                        style={{ left: `${p}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-[0.3em] text-orange-200/60 font-mono">
                    concurrent superstep — 4 specialists
                  </div>
                </div>

                {/* 4 parallel agents */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8 w-full max-w-6xl">
                  {[
                    { title: "Bookings & Tables", desc: "occupancy · waitlist pressure · capacity", color: "cyan" },
                    { title: "Guest Feedback", desc: "RAG over Qdrant · complaint patterns · SOPs", color: "pink" },
                    { title: "Menu Intelligence", desc: "push / ease-back / avoid · stock-aligned", color: "yellow" },
                    { title: "Stock & Inventory", desc: "shortage alerts · spoilage · restock priority", color: "teal" },
                  ].map((a) => (
                    <div key={a.title} className="rounded-[24px] border border-white/10 bg-[#0d0d0d]/95 p-4 hover:-translate-y-1 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-300 shadow-[0_0_14px_rgba(251,146,60,0.9)]" />
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-orange-400/30 to-transparent" />
                      </div>
                      <h3 className="text-white text-sm font-semibold">{a.title}</h3>
                      <p className="text-xs text-white/45 mt-2 leading-5">{a.desc}</p>
                    </div>
                  ))}
                </div>

                {/* merge */}
                <div className="flex flex-col items-center mt-8">
                  <div className="w-[65vw] max-w-[850px] h-[2px] bg-gradient-to-r from-transparent via-green-400/40 to-transparent relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-300 shadow-[0_0_24px_rgba(52,211,153,0.9)]" />
                  </div>
                  <div className="w-[2px] h-10 bg-gradient-to-b from-green-400/70 to-white/10" />
                </div>

                {/* final nodes */}
                <div className="flex flex-col items-center gap-5 w-full max-w-md">
                  {[
                    { title: "Aggregator", desc: "merge all domain outputs · assemble RAG context", border: "border-orange-400/20" },
                    { title: "Critic / Quality Gate", desc: "5-dim scoring · approve / revision / reject", border: "border-green-400/30" },
                    { title: "Final Assembler", desc: "shape API response · append execution trace", border: "border-white/15" },
                  ].map((n) => (
                    <div key={n.title} className={`relative w-full rounded-[24px] ${n.border} border bg-[#0d0d0d]/95 p-4 hover:-translate-y-0.5 transition-transform duration-300`}>
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full bg-orange-300 shadow-[0_0_14px_rgba(251,146,60,0.9)]" />
                        <div>
                          <h3 className="text-white text-sm font-semibold">{n.title}</h3>
                          <p className="text-xs text-white/45 mt-1">{n.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* pipeline running screenshot */}
          <div onClick={() => setLightbox({ src: S.pipelineRunning, caption: "Pipeline mid-run — Ops Manager + Demand Forecast done, 4 specialists running in parallel" })} className="cursor-zoom-in">
            <Shot src={S.pipelineRunning} caption="Pipeline mid-run — Ops Manager + Demand Forecast done, 4 specialists running in parallel" className="mt-10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Card>
              <h3 className="text-white font-semibold mb-2">Hybrid Intelligence</h3>
              <p className="text-sm text-white-200 leading-6">
                Deterministic services compute structured signals. LLMs are introduced only for synthesis and interpretation — where they add value without adding correctness risk.
              </p>
            </Card>
            <Card>
              <h3 className="text-white font-semibold mb-2">Typed Shared State</h3>
              <p className="text-sm text-white-200 leading-6">
                All nodes communicate through a typed{" "}
                <code className="text-orange-300 font-mono text-xs">OrchestratorState</code>{" "}
                TypedDict. The keep_last reducer handles concurrent writes from the parallel superstep safely.
              </p>
            </Card>
            <Card>
              <h3 className="text-white font-semibold mb-2">Provider Independence</h3>
              <p className="text-sm text-white-200 leading-6">
                Agents receive an injected{" "}
                <code className="text-orange-300 font-mono text-xs">BaseLLMProvider</code>{" "}
                — no direct imports. Groq is primary; Gemini auto-fallback. With <code className="text-orange-300 font-mono text-xs">COMET_TIERED=true</code>, each node gets a tier-appropriate model: fast for structured tasks, balanced for RAG synthesis, strong for the Critic.
              </p>
            </Card>
          </div>

          <div onClick={() => setLightbox({ src: S.pipelineRunning, caption: "Live pipeline mid-run — Ops Manager complete, four parallel specialists running simultaneously" })} className="cursor-zoom-in mt-8">
            <Shot src={S.pipelineRunning} caption="Live pipeline mid-run — parallel specialists running simultaneously" />
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-black-200 px-8 py-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/30 font-mono mb-5 text-center">Integrations</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { src: "/projects/cortexkitchen_screenshots/logos/langgraph.png",  alt: "LangGraph"     },
                { src: "/projects/cortexkitchen_screenshots/logos/langsmith.png",  alt: "LangSmith"     },
                { src: "/projects/cortexkitchen_screenshots/logos/groq.png",       alt: "Groq"          },
                { src: "/projects/cortexkitchen_screenshots/logos/gemini.png",     alt: "Gemini"        },
                { src: "/projects/cortexkitchen_screenshots/logos/deepseek.png",   alt: "DeepSeek"      },
                { src: "/projects/cortexkitchen_screenshots/logos/claude.png",     alt: "Claude"        },
                { src: "/projects/cortexkitchen_screenshots/logos/redis.png",      alt: "Redis"         },
                { src: "/projects/cortexkitchen_screenshots/logos/sentry.png",     alt: "Sentry"        },
                { src: "/projects/cortexkitchen_screenshots/logos/otel.png",       alt: "OpenTelemetry" },
                { src: "/projects/cortexkitchen_screenshots/logos/ragas.png",      alt: "RAGAS"         },
                { src: "/projects/cortexkitchen_screenshots/logos/mcp.png",        alt: "MCP"           },
                { src: "/projects/cortexkitchen_screenshots/logos/github.png",     alt: "GitHub"        },
              ].map(({ src, alt }) => (
                <div key={alt} className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-200">
                  <Image src={src} alt={alt} width={32} height={32} className="object-contain" />
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider">{alt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            PER-NODE MODEL TIER ROUTING
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Per-Node Intelligence</Label>
          <SectionTitle>The right model for each node. Not one model for everything.</SectionTitle>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            When <code className="text-orange-300 font-mono text-sm">COMET_TIERED=true</code>, each LangGraph node is routed to a model tier matched to its task complexity. Powered by <span className="text-white font-semibold">CometAPI</span> — a unified proxy exposing 500+ models through a single OpenAI-compatible key.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="rounded-2xl bg-black-200 border border-blue-400/20 p-6 hover:border-blue-400/40 transition">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-400/10 border border-blue-400/20 text-blue-300">fast tier</span>
              <p className="text-white font-mono text-sm mt-3">deepseek-v4-flash</p>
              <p className="text-xs text-white/40 mt-1 mb-3">Demand Forecast · Inventory · Reservation</p>
              <p className="text-sm text-white-200 leading-6">Structured computation and deterministic analysis. Fast model suffices — and saves cost on the highest-volume nodes.</p>
            </div>
            <div className="rounded-2xl bg-black-200 border border-purple/20 p-6 hover:border-purple/40 transition">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple/10 border border-purple/20 text-purple">balanced tier</span>
              <p className="text-white font-mono text-sm mt-3">gemini-3.5-flash</p>
              <p className="text-xs text-white/40 mt-1 mb-3">Complaint Intelligence · Menu Intelligence</p>
              <p className="text-sm text-white-200 leading-6">RAG synthesis over retrieved complaints and promotion signals — tasks that benefit from a stronger reasoning model.</p>
            </div>
            <div className="rounded-2xl bg-black-200 border border-orange-400/30 p-6 hover:border-orange-400/50 transition">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-orange-400/10 border border-orange-400/25 text-orange-300">strong tier</span>
              <p className="text-white font-mono text-sm mt-3">claude-sonnet-4-6</p>
              <p className="text-xs text-white/40 mt-1 mb-3">Critic · Quality Gate</p>
              <p className="text-sm text-white-200 leading-6">The highest-stakes node. Scores across five dimensions, issues the final verdict. Always gets the best model available.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Card>
              <h3 className="font-semibold text-white mb-2">CometAPI — unified model proxy</h3>
              <p className="text-sm text-white-200 leading-6">Single OpenAI-compatible endpoint, one API key, 500+ models. Each tier has a fallback chain — if the primary model fails, the node degrades to the next tier rather than erroring.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-white mb-2">Per-node cost visibility in LangSmith</h3>
              <p className="text-sm text-white-200 leading-6">LangSmith traces show exactly which model hit which node. Per-model cost visible in every run's <code className="text-orange-300 font-mono text-xs">llm_usage</code> breakdown — fast vs strong tier cost difference visible per run.</p>
            </Card>
          </div>

          <Card className="mt-4">
            <p className="text-sm text-white-200 leading-6">
              <span className="text-white font-semibold">Fully opt-in.</span> Set <code className="text-orange-300 font-mono text-xs">LLM_PROVIDER=comet</code> and <code className="text-orange-300 font-mono text-xs">COMET_TIERED=true</code>. Groq default and Gemini fallback unchanged otherwise. The async fix that came with this branch also cut fan-out latency from 48.7s to 17s.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div onClick={() => setLightbox({ src: S.cometapi, caption: "CometAPI — unified model proxy" })} className="cursor-zoom-in">
              <Shot src={S.cometapi} caption="CometAPI — unified model proxy" />
            </div>
            <div onClick={() => setLightbox({ src: S.cometapiDash, caption: "CometAPI — usage and model breakdown" })} className="cursor-zoom-in">
              <Shot src={S.cometapiDash} caption="CometAPI — usage and model breakdown" />
            </div>
            <div onClick={() => setLightbox({ src: S.cometapiRun, caption: "CometAPI — per-node model routing in a live run" })} className="cursor-zoom-in">
              <Shot src={S.cometapiRun} caption="CometAPI — per-node model routing in a live run" />
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            INTELLIGENCE NODES
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Intelligence Nodes</Label>
          <SectionTitle>9 specialised nodes. Each owns a distinct operational domain.</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {[
              { badge: "Entry · Deterministic", title: "Ops Manager", desc: "Validates the scenario against the registry. If invalid, short-circuits directly to Final Assembler — no domain nodes run. Sets scenario metadata in shared state." },
              { badge: "Forecasting · Prophet", title: "Demand Forecast", desc: "Fits a Prophet model on historical order data. Produces a yhat estimate with upper/lower confidence bounds and a peak_ratio for the service window. Runs first — Inventory and Menu depend on its output." },
              { badge: "Analysis · SQL + LLM", title: "Bookings & Tables", desc: "Reads reservation records, calculates slot-level occupancy, and identifies high-pressure windows. Deterministic for numeric analysis; LLM used only for natural-language interpretation." },
              { badge: "RAG · LLM", title: "Guest Feedback", desc: "Retrieves semantically similar complaints and SOPs from Qdrant using cosine similarity. LLM synthesises them into a structured risk summary with recommended mitigations." },
              { badge: "Analysis · LLM", title: "Menu Intelligence", desc: "Computes item-level sales velocity, classifies top performers and underperformers, and generates scenario-aware push / ease-back / avoid promotion suggestions." },
              { badge: "Rule-Based · LLM", title: "Stock & Inventory", desc: "Checks stock against reorder thresholds and spoilage flags. A 40% demand spike elevates a marginal stock level to a critical shortage — feasibility-aware planning." },
              { badge: "Deterministic", title: "Aggregator", desc: "No LLM call. Merges all four parallel domain outputs into a single recommendations object and assembles the RAG context payload for the critic." },
              { badge: "Evaluation · LLM", title: "Critic / Quality Gate", desc: "The quality gate. Scores across 5 dimensions and returns a verdict — approved, revision, or rejected — with annotated reasoning and cost-aware penalty logic." },
              { badge: "Output · Deterministic", title: "Final Assembler", desc: "Shapes the final API response with full metadata, token cost, and node-level latency. Handles error paths cleanly. Appends execution trace when debug flag is set." },
            ].map((n) => (
              <Card key={n.title} className="hover:border-orange-400/25 transition duration-200">
                <span className="px-2 py-0.5 rounded text-xs bg-black-100 border border-white/10 text-white-200 inline-block mb-3 font-mono">
                  {n.badge}
                </span>
                <h3 className="text-lg font-semibold text-white">{n.title}</h3>
                <p className="text-sm text-white-200 mt-2 leading-6">{n.desc}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div onClick={() => setLightbox({ src: S.servicePlanning, caption: "Service Planning — Prophet forecast + reservation pressure" })} className="cursor-zoom-in">
              <Shot src={S.servicePlanning} caption="Service Planning — Prophet forecast + reservation pressure" />
            </div>
            <div onClick={() => setLightbox({ src: S.menuDirection, caption: "Menu Direction — push / ease-back / avoid strategy" })} className="cursor-zoom-in">
              <Shot src={S.menuDirection} caption="Menu Direction — push / ease-back / avoid strategy" />
            </div>
            <div onClick={() => setLightbox({ src: S.operationalRisk, caption: "Operational Risk — complaints + inventory shortage alerts" })} className="cursor-zoom-in">
              <Shot src={S.operationalRisk} caption="Operational Risk — complaints + inventory shortage alerts" />
            </div>
          </div>
        </section>
        {lightbox ? (
          // @ts-ignore
          <Lightbox src={lightbox.src} caption={lightbox.caption} onClose={() => setLightbox(null)} />
        ) : null}

        {/* ════════════════════════════════════════
            CRITIC GATE
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Critic System</Label>
          <SectionTitle>Nothing reaches the operator unreviewed.</SectionTitle>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            The Critic Agent is structurally part of the orchestration graph — not a post-hoc check. Every aggregated plan is scored across five dimensions before the operator sees anything. The Critic returns a 0.0–1.0 score, a verdict, and annotated revision reasons. Below threshold → blocked. Borderline → revision loop.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-10">
            {[
              { dim: "Safety", desc: "No allergen risk, no understaffed peaks, no capacity violations." },
              { dim: "Feasibility", desc: "Stock and staffing can actually support what's recommended." },
              { dim: "Evidence", desc: "Every claim backed by retrieved complaints and SOPs." },
              { dim: "Actionability", desc: "Concrete steps a chef or manager can execute immediately." },
              { dim: "Clarity", desc: "Structured, unambiguous, easy to skim 5 minutes before shift." },
            ].map(({ dim, desc }) => (
              <div key={dim} className="rounded-xl bg-black-200 border border-white/10 p-5 text-center hover:border-orange-400/25 transition">
                <div className="text-sm font-semibold text-white mb-2">{dim}</div>
                <div className="text-xs text-white-200 leading-5">{desc}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
            <span className="px-5 py-2 rounded-full border border-green-400/30 text-green-300 bg-green-400/10 text-sm font-medium">Approved</span>
            <span className="text-white/30">·</span>
            <span className="px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-300 bg-yellow-400/10 text-sm font-medium">Revision Loop</span>
            <span className="text-white/30">·</span>
            <span className="px-5 py-2 rounded-full border border-red-400/30 text-red-300 bg-red-400/10 text-sm font-medium">Rejected</span>
          </div>

          <Card className="mt-8">
            <div className="font-semibold text-white mb-2">Cost-Aware Scoring</div>
            <div className="text-sm text-white-200 leading-6">
              A separate layer evaluates operational tradeoffs beyond the five dimensions — prep burden against forecast confidence, stock risk, reservation pressure. High operational pressure can suppress feasibility and actionability scores. The operator sees a cost-aware breakdown alongside the critic verdict.
            </div>
          </Card>
        </section>

        {/* ════════════════════════════════════════
            STREAMING & REAL-TIME
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Streaming &amp; Real-Time</Label>
          <SectionTitle>Two independent streams.</SectionTitle>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            Planning and chat use completely separate transport mechanisms. Each solves a different real-time problem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-400/10 border border-blue-400/20 text-blue-300">
                  POST /api/v1/planning/stream
                </span>
              </div>
              <h3 className="font-semibold text-white mb-3 text-lg">Planning SSE</h3>
              <p className="text-sm text-white-200 leading-6">
                As each LangGraph node completes, a{" "}
                <code className="text-orange-300 font-mono text-xs">node_complete</code>{" "}
                event is emitted carrying the node name. The loading screen pipeline diagram updates in real time — you see exactly which agents are done, running, or waiting. A final{" "}
                <code className="text-orange-300 font-mono text-xs">complete</code>{" "}
                event delivers the full plan payload in one shot.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Chip>FastAPI SSE</Chip>
                <Chip>LangGraph</Chip>
                <Chip>JWT-protected</Chip>
              </div>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple/20 border border-purple/30 text-purple">
                  POST /api/v1/chat
                </span>
              </div>
              <h3 className="font-semibold text-white mb-3 text-lg">Chat Token Stream</h3>
              <p className="text-sm text-white-200 leading-6">
                The Ask AI chatbot streams individual tokens word-by-word via AsyncGroq. An entirely separate mechanism from the planning SSE — each{" "}
                <code className="text-orange-300 font-mono text-xs">{`{"token":"..."}`}</code>{" "}
                event renders progressively via ReactMarkdown. Multi-turn memory means follow-up questions understand prior context.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Chip>AsyncGroq</Chip>
                <Chip>llama-3.3-70b</Chip>
                <Chip>ReactMarkdown</Chip>
              </div>
            </Card>
          </div>

          <Card className="mt-6">
            <div className="font-semibold text-white mb-2">Redis Caching Layer</div>
            <p className="text-sm text-white-200 leading-6">
              1-hour TTL cache keyed by scenario + date. Only{" "}
              <code className="text-orange-300 font-mono text-xs">approved</code>{" "}
              plans are cached — revision and rejected plans always re-run. Zero LLM cost on cache hits; the{" "}
              <code className="text-orange-300 font-mono text-xs">cache_hit</code>{" "}
              flag in the response tells you which path ran. Effectively &lt; 1s response on repeat queries.
            </p>
          </Card>
        </section>

        {/* ════════════════════════════════════════
            ASK AI / CHATBOT
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Ask AI</Label>
          <SectionTitle>Conversational intelligence over your actual data.</SectionTitle>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            The Ask AI chatbot is grounded in your restaurant's own run history, inventory records, and guest feedback — not generic AI knowledge. Groq llama-3.3-70b streams answers token by token. Suggested question cards surface on first load.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <Card>
              <h3 className="font-semibold text-white mb-2">Multi-turn memory</h3>
              <p className="text-sm text-white-200 leading-6">Follow-up questions understand prior context in the same session. "What about the Friday runs specifically?" lands correctly after a prior broad question.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-white mb-2">RAG-grounded answers</h3>
              <p className="text-sm text-white-200 leading-6">Answers are built from retrieved records in your Postgres runs table and feedback table — not hallucinated. Every answer cites your own operational history.</p>
            </Card>
          </div>

          <Shot src={S.chatbot} caption="Ask AI — RAG-grounded conversation over run history and guest feedback" className="mt-6" />
        </section>

        {/* ════════════════════════════════════════
            WHAT-IF SIMULATOR
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>What-If Simulator</Label>
          <SectionTitle>Instant scenario exploration — zero LLM calls.</SectionTitle>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            Slide the cover count from 35 to 195 and the cost pressure, benefit, and tradeoff scores update in real time. No LangGraph execution, no LLM call — purely deterministic scoring via{" "}
            <code className="text-orange-300 font-mono text-sm">CostAwareScoringService</code>.
            The operator can explore demand scenarios without burning tokens.
          </p>

          <Shot src={S.whatIf} caption="What-If Simulator — cover count 135, scores update instantly without a new LLM call" className="mt-8" />
        </section>

        {/* ════════════════════════════════════════
            EXPORTS
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Exports</Label>
          <SectionTitle>Every plan, downloadable. Role-aware.</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Card>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-orange-400/10 border border-orange-400/20 text-orange-300">PDF · ReportLab</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Chef Brief</h3>
              <p className="text-sm text-white-200 leading-6">
                Print-ready PDF with plan summary, full agent outputs, critic verdict, dimension scores per 100, cost-aware analysis, and prioritised action items. Generated server-side by ReportLab, served via a signed download URL.
              </p>
            </Card>
            <Card>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-green-400/10 border border-green-400/20 text-green-300">Excel · openpyxl</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Role-Aware Workbook</h3>
              <p className="text-sm text-white-200 leading-6">
                A two-sheet <code className="text-orange-300 font-mono text-xs">.xlsx</code> — Inventory &amp; Staffing sheet (chef view: shortage alerts, spoilage risk, restock actions) and Cost Breakdown sheet (owner view: LLM tokens, cost USD, critic dimension scores).
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Shot src={S.pdfExport} caption="PDF Chef Brief — Approved 0.90, action items, dimension scores" />
            <Shot src={S.excelChef} caption="Excel · Chef View — inventory shortage alerts with severity" />
            <Shot src={S.excelOwner} caption="Excel · Owner View — token cost, critic scores per 100" />
          </div>
        </section>

        {/* ════════════════════════════════════════
            RUN HISTORY & AUDIT
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Run History &amp; Audit Trail</Label>
          <SectionTitle>Every run persisted. Every decision traceable.</SectionTitle>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            Each planning run is stored as a{" "}
            <code className="text-orange-300 font-mono text-sm">PlanningRun</code>{" "}
            record in PostgreSQL — full response, critic output, RAG context, and recommendations as JSONB. The /runs page surfaces the complete history with scenario filter, date range picker, and critic score trend chart.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <Card>
              <h3 className="font-semibold text-white mb-2">Run History</h3>
              <p className="text-sm text-white-200 leading-6">Filter by scenario, verdict, and date range. Critic score trend chart across all runs. Every session accessible.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-white mb-2">Critic Drilldown</h3>
              <p className="text-sm text-white-200 leading-6">Per-run breakdown across all 5 dimensions with revision notes and cost-aware tradeoff flags.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-white mb-2">RAG Inspection</h3>
              <p className="text-sm text-white-200 leading-6">The specific complaints and SOPs retrieved for that exact run — preserved through state, not recomputed.</p>
            </Card>
          </div>

          <Shot src={S.runs} caption="Plan History — run list with scenario labels, critic scores, and full detail panel" className="mt-6" />
        </section>

        {/* ════════════════════════════════════════
            OBSERVABILITY
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Observability</Label>
          <SectionTitle>Five tools watching every run.</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[
              { tool: "LangSmith", desc: "Per-node tracing for every planning run. Latency, token spend, and node lineage. Enabled via LANGSMITH_TRACING env var." },
              { tool: "OpenTelemetry", desc: "HTTP request tracing via console exporter (OTLP-ready for production). Every API request carries a trace ID." },
              { tool: "Prometheus", desc: "/metrics scrape endpoint. Latency histograms, throughput, and error rate — drop into Grafana without any code change." },
              { tool: "Sentry", desc: "Unhandled exception capture with FastAPI integration. LangGraph node failures are wrapped with capture_exception — stack traces tagged by node name." },
              { tool: "structlog", desc: "JSON-structured logs across all orchestration nodes. Every log entry carries run_id, org_id, node name, token counts, and cost_usd." },
              { tool: "Observability Panel", desc: "7-day frontend summary: total runs, success rate, avg critic score, avg duration. Breakdown by verdict and scenario. Live from /api/v1/observability/summary." },
            ].map(({ tool, desc }) => (
              <Card key={tool} className="hover:border-orange-400/20 transition">
                <h3 className="font-semibold text-white mb-2">{tool}</h3>
                <p className="text-sm text-white-200 leading-6">{desc}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Shot src={S.observability} caption="Observability Panel — 59 runs, 81% success, 16.6s avg" />
            <Shot src={S.langsmith} caption="LangSmith — per-node traces with latency and token breakdown" />
            <Shot src={S.sentry} caption="Sentry — exception capture tagged by LangGraph node" />
          </div>
        </section>

        {/* ════════════════════════════════════════
            REGRESSION EVALS
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Regression Evals</Label>
          <SectionTitle>A 90% quality gate on every CI run.</SectionTitle>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            CortexKitchen is evaluated across five layers — software correctness, LangSmith regression, LLM quality (RAGAS + DeepEval), planning quality, and audit visibility. The CI gate fails the run if the golden dataset pass rate drops below 90%.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <Card>
              <span className="px-2 py-0.5 rounded text-xs font-mono bg-black-100 border border-white/10 text-orange-300 inline-block mb-3">LangSmith</span>
              <h3 className="font-semibold text-white mb-2">Golden Dataset</h3>
              <p className="text-sm text-white-200 leading-6">
                <code className="text-orange-300 font-mono text-xs">cortexkitchen-golden-v1</code> — 50 curated planning runs across all four scenarios. Built by{" "}
                <code className="text-orange-300 font-mono text-xs">build_golden_dataset.py</code>. CI gate requires 90% pass rate — below that, the run fails.
              </p>
            </Card>
            <Card>
              <span className="px-2 py-0.5 rounded text-xs font-mono bg-black-100 border border-white/10 text-blue-300 inline-block mb-3">RAGAS</span>
              <h3 className="font-semibold text-white mb-2">Retrieval Quality</h3>
              <p className="text-sm text-white-200 leading-6">
                Faithfulness ≥ 0.8 on complaint RAG pipeline — every claim must be grounded in retrieved Qdrant context. Context precision ≥ 0.7. Evaluator LLM: Groq llama-3.3-70b.
              </p>
            </Card>
            <Card>
              <span className="px-2 py-0.5 rounded text-xs font-mono bg-black-100 border border-white/10 text-purple inline-block mb-3">DeepEval</span>
              <h3 className="font-semibold text-white mb-2">Plan Quality</h3>
              <p className="text-sm text-white-200 leading-6">
                HallucinationMetric ≤ 0.5 on critic output. AnswerRelevancyMetric ≥ 0.7 on agent outputs. Checks that the critic doesn't make claims contradicted by the aggregated plan.
              </p>
            </Card>
          </div>

          <Shot src={S.langsmithGolden} caption="LangSmith — cortexkitchen-golden-v1 · 50 runs across all four scenarios" className="mt-6" />
        </section>

        {/* ════════════════════════════════════════
            AUTH & MULTI-TENANT
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Multi-Tenant Auth</Label>
          <SectionTitle>JWT auth, org-scoped end to end.</SectionTitle>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            Every planning run, complaint vector, and settings record is scoped to an{" "}
            <code className="text-orange-300 font-mono text-sm">org_id</code>. The ID is carried through{" "}
            <code className="text-orange-300 font-mono text-sm">OrchestratorState</code>{" "}
            at every node — Postgres queries filter by it, Qdrant payload filters enforce it. Two workspaces cannot see each other's data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <Card>
              <h3 className="font-semibold text-white mb-2">JWT HS256</h3>
              <p className="text-sm text-white-200 leading-6">passlib + bcrypt password hashing. Access token on login. All planning, runs, chat, and settings routes are protected. Register UI creates org + user in one step.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-white mb-2">Complete Org Isolation</h3>
              <p className="text-sm text-white-200 leading-6">PostgreSQL row-level scoping on all queries. Qdrant payload filter{" "}<code className="text-orange-300 font-mono text-xs">{`{"org_id": id}`}</code>{" "}on complaint and SOP vectors. Settings, profiles, and exports all isolated per workspace.</p>
            </Card>
          </div>
        </section>

        {/* ════════════════════════════════════════
            MCP INTEGRATION
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>MCP Integration</Label>
          <SectionTitle>Run planning from Claude, natively.</SectionTitle>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            The{" "}
            <code className="text-orange-300 font-mono text-sm">.mcp.json</code>{" "}
            in the project root is auto-discovered by Claude Code. The MCP server (built on the Anthropic MCP SDK) exposes two tools over stdio — trigger real planning runs with real auth, real data, and real critic verdicts directly from natural language in Claude Code CLI or Claude Desktop.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <Card>
              <h3 className="font-semibold text-white mb-3">Two Tools</h3>
              <div className="space-y-3">
                <div className="rounded-xl bg-black-100 border border-white/10 p-4">
                  <code className="text-orange-300 font-mono text-sm">run_planning_scenario</code>
                  <p className="text-xs text-white-200 mt-1">Execute a full planning pipeline end-to-end — auth, data, critic, verdict.</p>
                </div>
                <div className="rounded-xl bg-black-100 border border-white/10 p-4">
                  <code className="text-orange-300 font-mono text-sm">get_run_history</code>
                  <p className="text-xs text-white-200 mt-1">Query past runs by scenario, verdict, or date range.</p>
                </div>
              </div>
            </Card>
            <Card className="bg-[#0a0a14]">
              <h3 className="font-semibold text-white mb-3">From Claude Code</h3>
              <div className="font-mono text-xs leading-6 text-white-200">
                <div><span className="text-white/40">&gt; </span><span className="text-green-300">run a friday rush planning scenario</span></div>
                <div className="ml-4 text-orange-300">→ tool_use: run_planning_scenario</div>
                <div className="ml-4 text-green-400">→ APPROVED · 0.92 · 14.8s</div>
                <div className="mt-3"><span className="text-white/40">&gt; </span><span className="text-green-300">show the last 5 approved runs</span></div>
                <div className="ml-4 text-orange-300">→ tool_use: get_run_history</div>
                <div className="ml-4 text-green-400">→ 5 results, scenario · score · cost</div>
              </div>
            </Card>
          </div>
        </section>

        {/* ════════════════════════════════════════
            RAG + EXPLAINABILITY
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>RAG + Explainability</Label>
          <SectionTitle>The system shows what it retrieved — not just what it decided.</SectionTitle>
          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            The Guest Feedback node retrieves semantically similar complaints and SOPs from Qdrant before the LLM synthesises anything. That raw context is preserved through the full graph and surfaced to the operator in a RAG Context Drawer — so every recommendation has a traceable evidence chain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <Card>
              <h3 className="font-semibold text-white mb-3">Retrieval Flow</h3>
              <div className="text-sm text-white-200 leading-7 space-y-1">
                <div>Query constructed from operational context</div>
                <div>→ Embedded and passed to Qdrant cosine similarity search</div>
                <div>→ Top-k complaints retrieved with similarity scores</div>
                <div>→ Parallel SOP retrieval for operational guidelines</div>
                <div>→ Both passed to LLM for synthesis</div>
                <div>→ Raw items preserved as <code className="text-orange-300 font-mono text-xs">rag_context</code> in the final response</div>
              </div>
            </Card>
            <Card>
              <h3 className="font-semibold text-white mb-3">Why It Matters</h3>
              <p className="text-sm text-white-200 leading-7">
                A black-box recommendation gives a manager no reason to trust the output. CortexKitchen surfaces the exact complaints and SOPs that shaped each recommendation — visible in the dashboard RAG Context Drawer. The operator can agree, disagree, or override based on the same evidence the system used.
              </p>
            </Card>
          </div>

          <Card className="mt-6 bg-black-100">
            <code className="text-xs text-white-200 leading-6">
              Active Qdrant collections: <span className="text-orange-300">complaint_memory</span> (embedded complaint texts with platform, type, rating, and date metadata) · <span className="text-orange-300">sop_memory</span> (embedded operational guidelines retrieved against kitchen and service area queries)
            </code>
          </Card>
        </section>

        {/* ════════════════════════════════════════
            TRADEOFFS
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Tradeoffs</Label>
          <SectionTitle>Deliberate decisions — not defaults.</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <Card>
              <h3 className="font-semibold text-white mb-2">LLMs used selectively</h3>
              <p className="text-sm text-white-200 leading-6">Reservation and Inventory nodes use deterministic SQL and rule-based logic for numeric analysis. The LLM is invoked only for natural-language interpretation of pre-computed signals. Latency low, correctness high where outcomes are measurable.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-white mb-2">Demand Forecast runs before the fan-out</h3>
              <p className="text-sm text-white-200 leading-6">Prophet runs as a dedicated sequential step before the four parallel domain nodes. Both Inventory and Menu Intelligence depend on forecast output — the concurrency boundary is placed after the forecast intentionally.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-white mb-2">Groq primary, Gemini fallback</h3>
              <p className="text-sm text-white-200 leading-6">No agent imports a provider directly — they receive an injected <code className="text-orange-300 font-mono text-xs">BaseLLMProvider</code>. If Groq hits a rate limit, <code className="text-orange-300 font-mono text-xs">FallbackLLMProvider</code> retries transparently on Gemini. Adding OpenAI or Claude means implementing one interface.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-white mb-2">Seeded for every edge case</h3>
              <p className="text-sm text-white-200 leading-6">The schema is production-ready; the data is engineered. Friday demand spikes, 7–9 PM reservation pressure, complaint clusters by dish type, deliberate low-stock edge cases — seeded to stress-test every node under realistic conditions. Phase 6-01 connects live POS and reservation feeds.</p>
            </Card>
            <Card>
              <h3 className="font-semibold text-white mb-2">Per-node model complexity matching</h3>
              <p className="text-sm text-white-200 leading-6">
                Numeric nodes like Demand Forecast and Inventory use the fast-tier model — deterministic computation doesn't need strong reasoning. Complaint and Menu Intelligence use balanced for RAG synthesis. The Critic always gets the strongest model. Cost stays low; quality isn't sacrificed where it matters.
              </p>
            </Card>
          </div>
        </section>

        {/* ════════════════════════════════════════
            BUILD JOURNEY
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Build Journey</Label>
          <SectionTitle>Built solo. Mar – Jun 2026.</SectionTitle>

          <p className="text-white-200 mt-4 max-w-3xl leading-7">
            CortexKitchen started as a system design exercise — what would a real production AI platform look like built properly from scratch? No tutorials, no templates. Phase 0 was just documents: architecture, data model, API contracts, evaluation rubric. Every phase after that added one real layer of complexity, and every decision had a reason.
          </p>

          <div className="mt-6 border-l-2 border-orange-400/30 pl-4 max-w-2xl">
            <p className="text-sm text-white/50 italic leading-6">Build it the way a small team would. Spec first, infra second, intelligence third. Every commit has a reason. No scaffolding code, no tutorial architecture, no skipped steps.</p>
          </div>

          {/* Timeline */}
          <div className="relative mt-12">
            {/* spine */}
            <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-orange-400/50 via-white/[0.06] to-yellow-400/25" />

            <div className="space-y-5">
              {[
                {
                  phase: "Phase 0",
                  label: "Design before code",
                  date: "Mar 15, 2026",
                  problem: "Most AI projects start with a model call and figure out structure later. I wanted to do it backwards — write the architecture doc, data model, and API contracts first, then build to spec.",
                  shipped: "PRD, system architecture, LangGraph topology diagram, PostgreSQL schema, API contracts, evaluation rubric. All five docs merged to dev in a single day.",
                },
                {
                  phase: "Phase 1",
                  label: "Get the skeleton running end-to-end",
                  date: "Mar 16 – Apr 13, 2026",
                  problem: "The hardest part of a multi-agent system is getting state to flow correctly through all nodes without breaking. I needed a working 9-node graph with real services behind each node — not stubs.",
                  shipped: "Docker Compose stack, FastAPI app, SQLAlchemy + Alembic, LangGraph 9-node graph with parallel fan-out, all five domain services, CriticService, Qdrant seeding, Next.js dashboard — 12 branches merged.",
                },
                {
                  phase: "Phase 2",
                  label: "Make the intelligence actually intelligent",
                  date: "Apr 16 – Apr 26, 2026",
                  problem: "The first pass used placeholder logic. Phase 2 made the domain nodes genuinely useful — Prophet for demand forecasting, real inventory shortage detection, menu strategy aligned to stock signals.",
                  shipped: "Prophet time-series forecasting with peak detection and confidence bands, feasibility-aware inventory shortage/overstock alerts, menu push/ease-back/avoid strategy, evaluation refinement with automated sanity checks.",
                },
                {
                  phase: "Phase 3",
                  label: "Multiple scenarios, auditable decisions",
                  date: "Apr 27 – Apr 29, 2026",
                  problem: "A single hardcoded scenario isn't useful. And if the system can't show you why it made a decision, it's not trustworthy.",
                  shipped: "Four scenario presets (friday_rush, weekday_lunch, holiday_spike, low_stock_weekend), persisted planning runs with full JSONB storage, cost-aware CriticService with 5-dimension scoring and revision feedback.",
                },
                {
                  phase: "Phase 4",
                  label: "Turn it into a real product",
                  date: "May 31 – Jun 3, 2026",
                  problem: "A system with no auth, no tracing, and no observability isn't a product — it's a script. Phase 4 added everything that makes it multi-tenant and production-observable.",
                  shipped: "JWT multi-tenant auth, LangSmith per-node tracing, structlog JSON logging, LLM cost tracking, restaurant profiles, BaseLLMProvider abstraction with Groq/Gemini fallback, RAGAS + DeepEval evals, MCP server — 12 branches, all merged within 4 days.",
                },
                {
                  phase: "Phase 5",
                  label: "Polish everything the operator actually touches",
                  date: "Jun 2026",
                  problem: "The backend was solid. The operator experience wasn't. Phase 5 closed that gap — exports they can hand to a chef, a live pipeline they can watch, a chatbot that knows their actual data.",
                  shipped: "PDF chef brief + role-aware Excel export, Redis plan caching (1hr TTL), SSE streaming with live pipeline diagram, What-If simulator, OpenTelemetry + Prometheus, Sentry, LangSmith golden dataset CI gate, multi-tenant Qdrant isolation, RAG chatbot with AsyncGroq SSE.",
                },
                {
                  phase: "Phase 6",
                  label: "Per-node model routing — P6-00 shipped",
                  date: "Jun 19, 2026",
                  problem: "One model for every node is wasteful and wrong. The Critic needs the best reasoning available. Demand Forecast just needs something fast. And the async fix that came with this branch cut fan-out latency from 48.7s to 17s.",
                  shipped: "CometAPI integration, three-tier routing (deepseek-v4-flash / gemini-3.5-flash / claude-sonnet-4-6), per-model cost attribution, LangSmith per-node model visibility. P6-01 next: real data connectors.",
                  inProgress: true,
                },
              ].map(({ phase, label, date, problem, shipped, inProgress }) => (
                <div key={phase} className="relative flex gap-5">
                  {/* timeline node */}
                  <div className="relative flex-shrink-0 flex items-start" style={{ width: 40 }}>
                    <div className={`w-[14px] h-[14px] rounded-full border-2 mt-2 z-10 ${
                      inProgress
                        ? "border-yellow-400 bg-yellow-400/20 shadow-[0_0_10px_rgba(250,204,21,0.35)]"
                        : "border-orange-400 bg-orange-400/10 shadow-[0_0_8px_rgba(251,146,60,0.25)]"
                    }`} />
                  </div>

                  {/* card */}
                  <div className="flex-1 rounded-2xl bg-black-200 border border-white/10 p-5 hover:border-white/20 transition mb-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {inProgress ? (
                        <span className="px-2 py-0.5 rounded text-xs font-mono bg-yellow-400/10 border border-yellow-400/20 text-yellow-300">⟳ IN PROGRESS</span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-xs font-mono bg-green-400/10 border border-green-400/20 text-green-300">✓ SHIPPED</span>
                      )}
                      <span className="font-mono text-xs text-orange-400 font-semibold">{phase}</span>
                      <span className="text-white font-semibold">{label}</span>
                      <span className="ml-auto text-xs font-mono text-white/30 hidden sm:block">{date}</span>
                    </div>
                    <p className="text-sm text-white/50 italic leading-6 mb-3">{problem}</p>
                    <p className="text-sm text-white-200 leading-6">
                      <span className="text-white/40 font-mono text-xs uppercase tracking-wider mr-2">Shipped</span>
                      {shipped}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            TECH STACK
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10">
          <Label>Stack</Label>
          <SectionTitle>Built with production-grade tooling.</SectionTitle>

          <div className="space-y-6 mt-10">
            {[
              {
                layer: "Backend",
                items: ["FastAPI 0.115", "Uvicorn", "Pydantic v2", "SQLAlchemy", "Alembic", "structlog"],
              },
              {
                layer: "Orchestration / AI",
                items: ["LangGraph", "StateGraph", "Groq llama-3.3-70b", "Gemini (fallback)", "AsyncGroq", "Prophet", "Pandas"],
              },
              {
                layer: "Data",
                items: ["PostgreSQL 16", "Qdrant", "Redis 7", "Alembic migrations"],
              },
              {
                layer: "Frontend",
                items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Recharts", "ReactMarkdown"],
              },
              {
                layer: "Auth & Streaming",
                items: ["JWT HS256", "passlib + bcrypt", "FastAPI SSE", "Server-Sent Events"],
              },
              {
                layer: "Observability",
                items: ["LangSmith", "OpenTelemetry", "Prometheus", "Sentry", "structlog JSON"],
              },
              {
                layer: "Evals",
                items: ["LangSmith golden-v1", "RAGAS", "DeepEval", "pytest CI gate"],
              },
              {
                layer: "Exports & Tooling",
                items: ["ReportLab (PDF)", "openpyxl (Excel)", "Anthropic MCP SDK", "Docker Compose"],
              },
            ].map(({ layer, items }) => (
              <div key={layer} className="flex flex-col md:flex-row gap-3 md:items-center">
                <div className="w-40 flex-shrink-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400">{layer}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            FINAL CTA
            ════════════════════════════════════════ */}
        <section className="py-20 border-t border-white/10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Want to see it running?</h2>
          <p className="text-white-200 mt-4 max-w-xl mx-auto">
            The full system runs locally with Docker Compose. Architecture docs, data model, API contracts, and the evaluation rubric are all in the repo.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <a
              href="https://github.com/anoushka45/cortexkitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-orange-400 text-black font-semibold text-sm hover:bg-orange-300 transition"
            >
              View on GitHub
            </a>
            <a
              href="mailto:vyasanoushka@gmail.com"
              className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:border-orange-400/50 transition"
            >
              Get in Touch
            </a>
            {/* <a
              href="/docs/CortexKitchen_Overview.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 text-white text-sm hover:border-orange-400/50 transition"
            >
              Overview PDF
            </a> */}
          </div>
        </section>

      </div>
    </main>
  );
}