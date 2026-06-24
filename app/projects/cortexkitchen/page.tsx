"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const Lightbox = dynamic(() => import("../../../components/Lightbox"), { ssr: false });
const PhaseChart = dynamic(() => import("./PhaseChart"), { ssr: false });

/* ─── asset map ───────────────────────────────────────────── */
const SC = "/projects/cortexkitchen_screenshots";
const LOGO = `${SC}/logos`;

/* ─── reusable primitives ─────────────────────────────────── */
function Tag({ children, color = "orange" }: { children: React.ReactNode; color?: string }) {
  const map: Record<string, string> = {
    orange: "bg-orange-500/10 border-orange-500/30 text-orange-300",
    blue:   "bg-blue-500/10   border-blue-500/30   text-blue-300",
    green:  "bg-green-500/10  border-green-500/30  text-green-300",
    purple: "bg-purple-500/10 border-purple-500/30 text-purple-300",
    yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
    cyan:   "bg-cyan-500/10   border-cyan-500/30   text-cyan-300",
    pink:   "bg-pink-500/10   border-pink-500/30   text-pink-300",
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-mono border ${map[color] ?? map.orange}`}>
      {children}
    </span>
  );
}

function SectionLabel({ children, color = "orange" }: { children: React.ReactNode; color?: string }) {
  const map: Record<string, string> = {
    orange: "text-orange-400", blue: "text-blue-400", green: "text-green-400",
    purple: "text-purple-400", yellow: "text-yellow-400", cyan: "text-cyan-400",
    pink: "text-pink-400",
  };
  return (
    <p className={`text-xs font-mono uppercase tracking-[0.3em] font-bold mb-3 ${map[color] ?? map.orange}`}>
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-5">{children}</h2>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-[#111] p-6 ${className}`}>
      {children}
    </div>
  );
}

function Shot({
  src, caption, onClick, tall = false,
}: { src: string; caption: string; onClick?: () => void; tall?: boolean }) {
  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] hover:border-white/25 transition-all duration-300 ${onClick ? "cursor-zoom-in" : ""}`}
    >
      <Image
        src={src} alt={caption}
        className={`w-full object-cover ${tall ? "h-72" : "h-auto"}`}
        width={1400} height={900} sizes="100vw"
      />
      <div className="absolute bottom-0 left-0 right-0 px-4 py-2.5 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <p className="text-[11px] font-mono tracking-wider text-white/80">{caption}</p>
      </div>
    </div>
  );
}

/* ─── main page ───────────────────────────────────────────── */
export default function Page() {
  const [lightbox, setLightbox] = useState<{ src: string; caption?: string } | null>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("hero");

  const open = (src: string, caption?: string) => setLightbox({ src, caption });

  const navItems = [
    { id: "hero",          label: "Overview"     },
    { id: "problem",       label: "The Problem"  },
    { id: "pipeline",      label: "Pipeline"     },
    { id: "scenarios",     label: "Scenarios"    },
    { id: "capabilities",  label: "Capabilities" },
    { id: "critic",        label: "Critic Gate"  },
    { id: "observability", label: "Observability"},
    { id: "stack",         label: "Stack"        },
    { id: "journey",       label: "Journey"      },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const ids = navItems.map(n => n.id);
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });


  const nodes = [
    { n: 1, name: "Ops Manager",      tag: "Entry",        color: "orange", detail: "Validates the scenario against the registry. If invalid, short-circuits directly to Final Assembler. Sets metadata in OrchestratorState." },
    { n: 2, name: "Demand Forecast",  tag: "Prophet",      color: "blue",   detail: "Prophet time-series model on historical orders. Produces yhat, upper/lower confidence bands, peak_ratio. Runs first -Inventory and Menu depend on it." },
    { n: 3, name: "Bookings",         tag: "Parallel",     color: "cyan",   detail: "Reads reservation records. Calculates slot-level occupancy, identifies high-pressure windows. Deterministic SQL + LLM interpretation." },
    { n: 4, name: "Guest Feedback",   tag: "RAG",          color: "pink",   detail: "Runs in parallel with nodes 3, 5, 6. Qdrant cosine similarity retrieval over org-scoped complaint vectors. Surfaces recurring patterns and matching SOPs. LLM synthesises into a risk summary with mitigations." },
    { n: 5, name: "Menu Intelligence",tag: "Parallel",     color: "yellow", detail: "Item-level sales velocity, top/weak performers, scenario-aware push/ease-back/avoid promotion strategy aligned to demand + stock." },
    { n: 6, name: "Inventory",        tag: "Parallel",     color: "teal",   detail: "Checks stock against reorder thresholds. A 40% demand spike elevates marginal stock to critical shortage. Spoilage flags, restock priorities." },
    { n: 7, name: "Aggregator",       tag: "Merge",        color: "green",  detail: "No LLM call. Merges all four parallel domain outputs into a single recommendations object. Assembles the RAG context for the Critic." },
    { n: 8, name: "Critic Gate",      tag: "Quality",      color: "red",    detail: "5-dimension scoring: safety, feasibility, evidence, actionability, clarity. Returns approved / revision / rejected + annotated reasoning." },
    { n: 9, name: "Final Assembler",  tag: "Output",       color: "white",  detail: "Shapes the API response with full metadata, token cost, node-level latency, execution trace. Handles error paths cleanly." },
  ];

  const colorMap: Record<string, string> = {
    orange: "border-orange-500/50 bg-orange-500/10 text-orange-400",
    blue:   "border-blue-500/50   bg-blue-500/10   text-blue-400",
    cyan:   "border-cyan-500/50   bg-cyan-500/10   text-cyan-400",
    pink:   "border-pink-500/50   bg-pink-500/10   text-pink-400",
    yellow: "border-yellow-500/50 bg-yellow-500/10 text-yellow-400",
    teal:   "border-teal-500/50   bg-teal-500/10   text-teal-400",
    green:  "border-green-500/50  bg-green-500/10  text-green-400",
    red:    "border-red-500/50    bg-red-500/10    text-red-400",
    white:  "border-white/30      bg-white/10      text-white",
    purple: "border-purple-500/50 bg-purple-500/10 text-purple-400",
  };

  const glowMap: Record<string, string> = {
    orange: "shadow-[0_0_24px_rgba(249,115,22,0.5)]",
    blue:   "shadow-[0_0_24px_rgba(59,130,246,0.5)]",
    cyan:   "shadow-[0_0_24px_rgba(6,182,212,0.5)]",
    pink:   "shadow-[0_0_24px_rgba(236,72,153,0.5)]",
    yellow: "shadow-[0_0_24px_rgba(234,179,8,0.5)]",
    teal:   "shadow-[0_0_24px_rgba(20,184,166,0.5)]",
    green:  "shadow-[0_0_24px_rgba(34,197,94,0.5)]",
    red:    "shadow-[0_0_24px_rgba(239,68,68,0.5)]",
    white:  "shadow-[0_0_24px_rgba(255,255,255,0.3)]",
    purple: "shadow-[0_0_24px_rgba(168,85,247,0.5)]",
  };

  const scenarios = [
    { id: "friday_rush",       label: "Friday Rush",        color: "orange", desc: "High-volume Friday evening. Peak demand forecasted around 7-9 PM. All specialist agents stress-test against surge capacity." },
    { id: "weekday_lunch",     label: "Weekday Lunch",      color: "blue",   desc: "Moderate weekday service. Focus on menu efficiency, quick turns, minimal staffing overhead." },
    { id: "holiday_spike",     label: "Holiday Spike",      color: "purple", desc: "Atypical demand spike - Valentine's, NYE. Inventory risk elevated. Complaint history especially relevant." },
    { id: "low_stock_weekend", label: "Low Stock Weekend",  color: "yellow", desc: "Critical inventory constraints. Menu strategy must avoid unavailable items. Plan approval threshold tightened." },
  ];

  const criticDimensions = [
    { dim: "Safety",        score: 92, desc: "No allergen risk, no understaffed peaks, no capacity violations." },
    { dim: "Feasibility",   score: 88, desc: "Stock and staffing can actually support what is recommended." },
    { dim: "Evidence",      score: 95, desc: "Every claim is backed by retrieved complaints and SOPs." },
    { dim: "Actionability", score: 90, desc: "Concrete steps a chef or manager can execute before the shift." },
    { dim: "Clarity",       score: 85, desc: "Structured, unambiguous, easy to skim 5 minutes before service." },
  ];

  const logos = [
    { src: `${LOGO}/langgraph.png`,   alt: "LangGraph"      },
    { src: `${LOGO}/langsmith.png`,   alt: "LangSmith"      },
    { src: `${LOGO}/groq.png`,        alt: "Groq"           },
    { src: `${LOGO}/gemini.png`,      alt: "Gemini"         },
    { src: `${LOGO}/deepseek.png`,    alt: "DeepSeek"       },
    { src: `${LOGO}/claude.png`,      alt: "Claude"         },
    { src: `${LOGO}/redis.png`,       alt: "Redis"          },
    { src: `${LOGO}/sentry.png`,      alt: "Sentry"         },
    { src: `${LOGO}/otel.png`,        alt: "OpenTelemetry"  },
    { src: `${LOGO}/ragas.png`,       alt: "RAGAS"          },
    { src: `${LOGO}/mcp.png`,         alt: "MCP"            },
    { src: `${LOGO}/github.png`,      alt: "GitHub"         },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* ─── STICKY NAV ───────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" /> ← Portfolio
          </a>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition ${
                  activeSection === id
                    ? "bg-white/10 text-white"
                    : "text-white/40 hover:text-white/70 hover:bg-white/5"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <a
            href="https://github.com/anoushka45/cortexkitchen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-white/50 hover:text-white transition"
          >
            <Image src={`${LOGO}/github.png`} alt="GitHub" width={16} height={16} className="opacity-60" />
            GitHub
          </a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-5 sm:px-10 pt-14">

        {/* ═══════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════ */}
        <section id="hero" className="pt-28 pb-20 relative">
          {/* dot grid */}
          <div className="absolute inset-0 -z-10 hero-dot-grid opacity-100" style={{ maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)" }} />
          {/* colour blobs */}
          <div className="absolute inset-0 -z-20 pointer-events-none">
            <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-orange-600/12 blur-[130px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/8 blur-[120px]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            {/* Left */}
            <div className="flex-1 min-w-0">
              {/* live dot + chips */}
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="flex items-center gap-1.5 text-xs font-mono text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  Phase 6 Active
                </span>
                <span className="w-px h-3 bg-white/15" />
                <Tag color="orange">P6-00 Shipped</Tag>
                <Tag color="blue">Multi-Tenant</Tag>
                <Tag color="purple">LangGraph</Tag>
              </div>

              <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-6">
                <span className="text-white">Cortex</span>
                <span className="relative">
                  <span className="absolute -inset-2 rounded-xl bg-orange-500/15 blur-xl" />
                  <span className="relative text-orange-400">Kitchen</span>
                </span>
              </h1>

              {/* personal hook */}
              <p className="text-xl text-white/80 max-w-xl leading-relaxed mb-3 font-medium">
                Five agents. Nine nodes. One verified brief before the first cover arrives.
              </p>
              <p className="text-base text-white/55 max-w-xl leading-relaxed mb-10">
                CortexKitchen is what happens when all three collide. A production multi-agent AI platform where five specialist agents run in parallel through a 9-node LangGraph pipeline, verified by a critic across five quality dimensions, streamed live to the operator. One verified pre-shift brief in under 90 seconds.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/anoushka45/cortexkitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-6 py-3 rounded-xl bg-orange-500 text-white text-sm font-bold hover:bg-orange-400 transition overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
                  <span className="relative flex items-center gap-2">
                    <Image src={`${LOGO}/github.png`} alt="" width={15} height={15} className="opacity-90" />
                    GitHub
                  </span>
                </a>
                <span className="px-6 py-3 rounded-xl border border-white/12 text-white/45 text-sm font-mono">
                  Demo coming soon
                </span>
              </div>
            </div>

            {/* Right: logo with concentric pulse rings */}
            <div className="flex-shrink-0 flex items-center justify-center md:justify-end">
              <div className="relative float-logo">
                {/* pulse rings */}
                <div className="ring-pulse-1 absolute inset-0 rounded-full border border-orange-500/50" />
                <div className="ring-pulse-2 absolute inset-0 rounded-full border border-orange-400/35" />
                <div className="ring-pulse-3 absolute inset-0 rounded-full border border-orange-300/20" />
                {/* outer glow */}
                <div className="absolute -inset-6 rounded-full bg-orange-500/15 blur-3xl" />
                {/* ring */}
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border border-orange-500/30 bg-[#0c0c0c] overflow-hidden">
                  <Image
                    src={`${SC}/ck-logo.png`}
                    alt="CortexKitchen"
                    width={288}
                    height={288}
                    className="object-contain w-full h-full"
                    style={{ mixBlendMode: "screen" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero screenshot */}
        <div className="mb-28">
          <div className="relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-orange-500/30 via-blue-500/20 to-purple-500/30 blur-sm" />
            <div
              onClick={() => open(`${SC}/03_dashboard/03_plan_approved_top.png`, "Dashboard: Plan Approved, Critic 0.92, five agent metric cards")}
              className="relative cursor-zoom-in"
            >
              <Shot
                src={`${SC}/03_dashboard/03_plan_approved_top.png`}
                caption="Dashboard: Plan APPROVED, Critic 0.92/1.00, demand forecast, reservation pressure, complaints, inventory, menu signals"
              />
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            THE PROBLEM
        ══════════════════════════════════════════════════════ */}
        <section id="problem" className="py-24 border-t border-white/5">
          <SectionLabel>The Problem</SectionLabel>
          <SectionHeading>Restaurants are data-rich, <span className="text-orange-400">insight-poor</span></SectionHeading>
          <p className="text-white/60 text-lg max-w-2xl mb-12 leading-relaxed">
            Before every shift, a restaurant manager needs to synthesize demand signals, reservation data, guest complaints, inventory status, and menu performance. These live in four different systems, a spreadsheet, and a group chat. There is no synthesis layer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { title: "Unpredictable demand",  body: "Rush hours arrive without warning. Staffing decisions are made on gut feel, not data. When the 7 PM spike hits and you're understaffed, it's too late." },
              { title: "Fragmented signals",    body: "Complaints in one system. Reservations in another. Inventory in a spreadsheet. No one has the full picture before service starts." },
              { title: "Recurring problems",    body: "The same complaint surfaces every Friday. The same item runs out mid-service. Without pattern detection, nothing improves." },
              { title: "Menu pushed blind",     body: "Staff push specials based on chef preference, not demand signals or stock levels. High food cost, low sell-through, frustrated guests." },
              { title: "Mid-service surprises", body: "A key ingredient runs out at 8 PM. A spoilage risk wasn't caught during prep. Shortages discovered mid-service are the most expensive kind." },
              { title: "No audit trail",        body: "When a shift goes badly, there's no record of what was recommended, what was decided, or why. No learning happens. History repeats." },
            ].map(({ title, body }) => (
              <Card key={title}>
                <h4 className="text-white font-semibold mb-2">{title}</h4>
                <p className="text-sm text-white/55 leading-6">{body}</p>
              </Card>
            ))}
          </div>

          {/* Product homepage screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div onClick={() => open(`${SC}/01_homepage/hero.png`, "CortexKitchen homepage hero")} className="cursor-zoom-in">
              <Shot src={`${SC}/01_homepage/hero.png`} caption="Homepage: 'Five specialists. One verified brief.' with live dashboard preview" />
            </div>
            <div onClick={() => open(`${SC}/01_homepage/pipeline.png`, "Homepage pipeline explainer")} className="cursor-zoom-in">
              <Shot src={`${SC}/01_homepage/pipeline.png`} caption="Homepage pipeline section: Orchestrator to specialists to Quality Check" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PIPELINE
        ══════════════════════════════════════════════════════ */}
        <section id="pipeline" className="py-24 border-t border-white/5">
          <SectionLabel color="blue">Architecture</SectionLabel>
          <SectionHeading>A 9-node LangGraph pipeline, <span className="text-blue-400">not just another chatbot</span></SectionHeading>
          <p className="text-white/60 text-lg max-w-2xl mb-6 leading-relaxed">
            Every planning run executes a deterministic stateful DAG. Each node receives a typed <code className="text-orange-300 font-mono text-sm">OrchestratorState</code>, updates its output key, and passes state forward. LLMs are introduced only where they add value over deterministic alternatives.
          </p>
          <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-10">Click any node below to inspect its implementation</p>

          {/* Animated pipeline diagram */}
          <div className="relative rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 md:p-12 mb-8 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[100px] pointer-events-none" />

            <p className="text-xs font-mono text-white/30 uppercase tracking-widest text-center mb-12">
              LangGraph StateGraph -9 nodes -parallel fan-out
            </p>

            <div className="relative z-10 flex flex-col items-center gap-3">
              {/* Sequential: nodes 1, 2 */}
              {nodes.slice(0, 2).map((node) => (
                <React.Fragment key={node.n}>
                  <button
                    onClick={() => setActiveNode(activeNode === node.n ? null : node.n)}
                    className={`w-full max-w-sm rounded-xl border px-6 py-4 text-center transition-all duration-200 ${colorMap[node.color]} ${activeNode === node.n ? glowMap[node.color] : "hover:scale-[1.02]"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono opacity-60">{node.n}</span>
                      <Tag color={node.color as "orange"}>{node.tag}</Tag>
                    </div>
                    <p className="text-white font-semibold mt-2">{node.name}</p>
                    {activeNode === node.n && (
                      <p className="text-xs text-white/60 mt-3 text-left leading-5">{node.detail}</p>
                    )}
                  </button>
                  {node.n < 2 && (
                    <div className="w-px h-6 bg-gradient-to-b from-orange-500/60 to-blue-500/30" />
                  )}
                </React.Fragment>
              ))}

              {/* Fan-out label */}
              <div className="w-full flex items-center gap-4 my-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="text-xs font-mono text-white/30 uppercase tracking-widest whitespace-nowrap">parallel superstep</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>

              {/* Parallel 4 */}
              <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 w-full">
                {nodes.slice(2, 6).map((node) => (
                  <button
                    key={node.n}
                    onClick={() => setActiveNode(activeNode === node.n ? null : node.n)}
                    className={`rounded-xl border px-4 py-4 text-left transition-all duration-200 ${colorMap[node.color]} ${activeNode === node.n ? glowMap[node.color] : "hover:scale-[1.02]"}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono opacity-60">{node.n}</span>
                      <Tag color={node.color as "orange"}>{node.tag}</Tag>
                    </div>
                    <p className="text-white text-sm font-semibold">{node.name}</p>
                    {activeNode === node.n && (
                      <p className="text-xs text-white/60 mt-2 leading-5">{node.detail}</p>
                    )}
                  </button>
                ))}
              </div>

              {/* Merge label */}
              <div className="w-full flex items-center gap-4 my-2">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
                <span className="text-xs font-mono text-white/30 uppercase tracking-widest whitespace-nowrap">merge outputs</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
              </div>

              {/* Final 3 nodes */}
              {nodes.slice(6).map((node, i) => (
                <React.Fragment key={node.n}>
                  {i > 0 && <div className="w-px h-5 bg-gradient-to-b from-green-500/50 to-white/10" />}
                  <button
                    onClick={() => setActiveNode(activeNode === node.n ? null : node.n)}
                    className={`w-full max-w-sm rounded-xl border px-6 py-4 text-center transition-all duration-200 ${colorMap[node.color]} ${activeNode === node.n ? glowMap[node.color] : "hover:scale-[1.02]"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono opacity-60">{node.n}</span>
                      <Tag color={node.color as "orange"}>{node.tag}</Tag>
                    </div>
                    <p className="text-white font-semibold mt-2">{node.name}</p>
                    {activeNode === node.n && (
                      <p className="text-xs text-white/60 mt-3 text-left leading-5">{node.detail}</p>
                    )}
                  </button>
                </React.Fragment>
              ))}

            </div>
          </div>

          {/* Pipeline in action */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div onClick={() => open(`${SC}/03_dashboard/02_loading_screen.png`, "Live pipeline mid-run")} className="cursor-zoom-in">
              <Shot src={`${SC}/03_dashboard/02_loading_screen.png`} caption="Live pipeline: Ops Manager done, Demand Forecast done, 4 specialists executing in parallel" tall />
            </div>
            <div onClick={() => open(`${SC}/03_dashboard/04_full_plan_scroll.png`, "Full plan after pipeline completes")} className="cursor-zoom-in">
              <Shot src={`${SC}/03_dashboard/04_full_plan_scroll.png`} caption="Completed plan view: critic verdict banner, service planning, menu direction, operational risk" tall />
            </div>
          </div>

          {/* Architecture principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <Tag color="blue">Hybrid compute</Tag>
              <h4 className="text-white font-semibold mt-3 mb-2">LLMs where they earn it</h4>
              <p className="text-sm text-white/60 leading-6">Reservation and Inventory nodes use SQL and rule-based logic for numeric analysis. LLMs introduced only for synthesis and interpretation where deterministic approaches fall short.</p>
            </Card>
            <Card>
              <Tag color="purple">Typed state</Tag>
              <h4 className="text-white font-semibold mt-3 mb-2">OrchestratorState TypedDict</h4>
              <p className="text-sm text-white/60 leading-6">All 9 nodes communicate through a typed shared state. The <code className="text-orange-300 font-mono text-xs">keep_last</code> reducer handles concurrent writes from the parallel superstep without conflict.</p>
            </Card>
            <Card>
              <Tag color="green">Provider-agnostic</Tag>
              <h4 className="text-white font-semibold mt-3 mb-2">BaseLLMProvider abstraction</h4>
              <p className="text-sm text-white/60 leading-6">Agents never import providers directly. They receive an injected <code className="text-orange-300 font-mono text-xs">BaseLLMProvider</code>. Groq primary, Gemini auto-fallback. One env var to swap everything.</p>
            </Card>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SCENARIOS
        ══════════════════════════════════════════════════════ */}
        <section id="scenarios" className="py-24 border-t border-white/5">
          <SectionLabel color="purple">Scenarios</SectionLabel>
          <SectionHeading>Four shift contexts. <span className="text-purple-400">One planning system.</span></SectionHeading>
          <p className="text-white/60 text-lg max-w-2xl mb-12 leading-relaxed">
            Each scenario preset changes the demand profile, risk weighting, and critic thresholds. The same 9-node graph adapts its behavior based on the context it receives in state.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {scenarios.map(({ id, label, color, desc }) => (
              <div key={id} className={`rounded-2xl border bg-[#111] p-6 hover:border-white/25 transition ${colorMap[color as "orange"].split(" ")[0]}`}>
                <Tag color={color as "orange"}>{id}</Tag>
                <h4 className="text-white font-semibold mt-3 mb-2">{label}</h4>
                <p className="text-sm text-white/60 leading-6">{desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div onClick={() => open(`${SC}/03_dashboard/01_idle_scenario_select.png`, "Scenario selector on dashboard")} className="cursor-zoom-in">
              <Shot src={`${SC}/03_dashboard/01_idle_scenario_select.png`} caption="Dashboard idle: Select from four scenario presets before running the pipeline" />
            </div>
            <div onClick={() => open(`${SC}/03_dashboard/dashboard_running.png`, "Dashboard while pipeline is executing")} className="cursor-zoom-in">
              <Shot src={`${SC}/03_dashboard/dashboard_running.png`} caption="Dashboard running: real-time pipeline status as agents complete" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CAPABILITIES
        ══════════════════════════════════════════════════════ */}
        <section id="capabilities" className="py-24 border-t border-white/5">
          <SectionLabel color="cyan">Capabilities</SectionLabel>
          <SectionHeading>What the system <span className="text-cyan-400">actually produces</span></SectionHeading>

          {/* Demand + Reservations */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Tag color="blue">Node 2 + 3</Tag>
              <h3 className="text-white font-bold text-xl">Demand Forecast & Reservation Pressure</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div onClick={() => open(`${SC}/03_dashboard/05_service_planning.png`, "Service Planning: demand forecast + reservation pressure")} className="cursor-zoom-in">
                <Shot src={`${SC}/03_dashboard/05_service_planning.png`} caption="Prophet demand bar chart by hour with peak detection + reservation pressure panel" />
              </div>
              <div className="space-y-3 text-sm text-white/65 leading-7">
                <p>Prophet fits a time-series model on historical order data and returns a <code className="text-blue-300 font-mono text-xs">yhat</code> estimate with upper/lower confidence bounds and a <code className="text-blue-300 font-mono text-xs">peak_ratio</code> for the service window.</p>
                <p>The Bookings node reads reservation records, calculates slot-level occupancy percentage, identifies high-pressure windows, and flags waitlist risk. Numeric analysis is deterministic; the LLM is used only for natural-language interpretation.</p>
                <p>Both outputs land in <code className="text-orange-300 font-mono text-xs">OrchestratorState</code> and are used by the Aggregator to build the service planning section of the brief.</p>
              </div>
            </div>
          </div>

          {/* Menu Intelligence */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Tag color="yellow">Node 5</Tag>
              <h3 className="text-white font-bold text-xl">Menu Intelligence</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="space-y-3 text-sm text-white/65 leading-7">
                <p>Computes item-level sales velocity from historical order data. Classifies top performers and underperformers. Generates scenario-aware push / ease-back / avoid promotion suggestions.</p>
                <p>Menu recommendations are explicitly aligned to the demand forecast: if Prophet signals a 40% demand spike, push items with sufficient stock and high margin. Avoid items with stock risk.</p>
                <p>Strategy is returned with a priority level and the reasoning behind each recommendation so the chef can agree or override.</p>
              </div>
              <div onClick={() => open(`${SC}/03_dashboard/06_menu_direction.png`, "Menu Direction: push/ease-back/avoid with strategy priority")} className="cursor-zoom-in">
                <Shot src={`${SC}/03_dashboard/06_menu_direction.png`} caption="Menu Intelligence output: items to push, ease back on, and avoid with priority strategy" />
              </div>
            </div>
          </div>

          {/* Guest Feedback RAG + Inventory */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Tag color="pink">Node 4</Tag>
              <Tag color="teal">Node 6</Tag>
              <h3 className="text-white font-bold text-xl">Guest Feedback (RAG) + Inventory</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div onClick={() => open(`${SC}/03_dashboard/07_operational_risk.png`, "Complaint intelligence + inventory shortage alerts")} className="cursor-zoom-in">
                <Shot src={`${SC}/03_dashboard/07_operational_risk.png`} caption="Complaint Intelligence: top issues, action items. Inventory Status: shortage alerts with severity." />
              </div>
              <div className="space-y-3 text-sm text-white/65 leading-7">
                <p>Guest Feedback retrieves semantically similar complaints and SOPs from Qdrant via cosine similarity. The LLM synthesises them into a risk summary with recommended mitigations. Raw context is preserved and shown in the RAG Context Drawer.</p>
                <p>Inventory checks stock against reorder thresholds and spoilage flags. Critically, a 40% demand spike from the forecast can elevate a marginal stock level to a critical shortage. Feasibility-aware -the Critic can reject a plan that ignores inventory risk.</p>
              </div>
            </div>
          </div>

          {/* What-If + Streaming */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Tag color="orange">SSE Streaming</Tag>
                <h3 className="text-white font-bold">Live pipeline diagram</h3>
              </div>
              <p className="text-sm text-white/60 mb-4 leading-6">
                As each LangGraph node completes, a <code className="text-orange-300 font-mono text-xs">node_complete</code> event is emitted over SSE. The loading screen pipeline diagram updates in real time. A final <code className="text-orange-300 font-mono text-xs">complete</code> event delivers the full plan in one shot. Entirely separate from the chat token stream.
              </p>
              <Card className="text-sm text-white/60 font-mono">
                <div>POST /api/v1/planning/stream</div>
                <div className="text-orange-300 mt-1">event: node_complete -data: {"{"}"node": "demand_forecast"{"}"}</div>
                <div className="text-green-400">event: complete -data: {"{"}"plan": ...{"}"}</div>
              </Card>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Tag color="purple">What-If</Tag>
                <h3 className="text-white font-bold">Zero-LLM simulator</h3>
              </div>
              <p className="text-sm text-white/60 mb-4 leading-6">
                Slide cover count from 35 to 195. Cost pressure, benefit, and tradeoff scores update instantly via <code className="text-orange-300 font-mono text-xs">CostAwareScoringService</code>. No LangGraph execution, no tokens consumed. Operators explore demand scenarios without cost.
              </p>
              <div onClick={() => open(`${SC}/03_dashboard/08_what_if_simulator.png`, "What-If Simulator")} className="cursor-zoom-in">
                <Shot src={`${SC}/03_dashboard/08_what_if_simulator.png`} caption="Cover count 135: cost pressure 67, benefit 73, tradeoff scores update instantly" tall />
              </div>
            </div>
          </div>

          {/* Ask AI */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Tag color="pink">RAG Chatbot</Tag>
              <h3 className="text-white font-bold text-xl">Ask AI: Conversational intelligence over your data</h3>
            </div>
            <p className="text-sm text-white/60 mb-6 leading-6 max-w-2xl">
              Not generic AI. Grounded in your restaurant's actual run history, inventory records, and guest feedback. Groq llama-3.3-70b with AsyncGroq SSE token streaming. Multi-turn memory -follow-ups understand prior context. Separate transport from the planning SSE.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div onClick={() => open(`${SC}/05_chat/01_empty_state.png`, "Ask AI empty state")} className="cursor-zoom-in">
                <Shot src={`${SC}/05_chat/01_empty_state.png`} caption="Empty state: suggested questions surface on first load" />
              </div>
              <div onClick={() => open(`${SC}/05_chat/02_conversation_complaints.png`, "Ask AI answering a complaint question")} className="cursor-zoom-in">
                <Shot src={`${SC}/05_chat/02_conversation_complaints.png`} caption="Active conversation: top complaints, specific incidents, improvement steps from real data" />
              </div>
              <div onClick={() => open(`${SC}/05_chat/03_conversation_performance.png`, "Performance overview from Ask AI")} className="cursor-zoom-in">
                <Shot src={`${SC}/05_chat/03_conversation_performance.png`} caption="Multi-turn: 'How is my restaurant performing?' -feedback counts, avg demand, plan scores" />
              </div>
            </div>
          </div>

          {/* Run History */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Tag color="green">Audit Trail</Tag>
              <h3 className="text-white font-bold text-xl">Run history: every decision traceable</h3>
            </div>
            <p className="text-sm text-white/60 mb-6 leading-6 max-w-2xl">
              Every planning run persisted as a <code className="text-orange-300 font-mono text-xs">PlanningRun</code> record in PostgreSQL -full response, critic output, RAG context, and recommendations as JSONB. Filter by scenario, verdict, and date range. Critic score trend chart across all runs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div onClick={() => open(`${SC}/04_runs/runs_history_audit.png`, "Run history audit page")} className="cursor-zoom-in">
                <Shot src={`${SC}/04_runs/runs_history_audit.png`} caption="Run history: scenario, date, critic score and verdict; full run list with filter" />
              </div>
              <div onClick={() => open(`${SC}/04_runs/run_detail_history_panel.png`, "Run detail panel")} className="cursor-zoom-in">
                <Shot src={`${SC}/04_runs/run_detail_history_panel.png`} caption="Run detail: critic notes, dimension score bars, revision reasons, PDF/Excel export" />
              </div>
            </div>
          </div>

          {/* Exports */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Tag color="orange">Exports</Tag>
              <h3 className="text-white font-bold text-xl">Role-aware PDF and Excel</h3>
            </div>
            <p className="text-sm text-white/60 mb-6 leading-6 max-w-2xl">
              PDF chef brief via ReportLab: approved verdict, dimension scores, action items, full agent output. Role-aware Excel workbook: Inventory and Staffing sheet for chefs, Cost Breakdown sheet for owners showing token count, LLM cost, and critic dimension scores per 100.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div onClick={() => open(`${SC}/08_exports/pdf_chef_brief.png`, "PDF chef brief")} className="cursor-zoom-in">
                <Shot src={`${SC}/08_exports/pdf_chef_brief.png`} caption="PDF Chef Brief: APPROVED 0.90/1.00, action items, critic dimension scores" />
              </div>
              <div onClick={() => open(`${SC}/08_exports/excel_inventory_chef_view.png`, "Excel chef view")} className="cursor-zoom-in">
                <Shot src={`${SC}/08_exports/excel_inventory_chef_view.png`} caption="Excel chef view: shortage alerts with severity, spoilage risk, restock actions" />
              </div>
              <div onClick={() => open(`${SC}/08_exports/excel_cost_breakdown_owner_view.png`, "Excel owner view")} className="cursor-zoom-in">
                <Shot src={`${SC}/08_exports/excel_cost_breakdown_owner_view.png`} caption="Excel owner view: $0.004 per run, token count, critic scores per 100" />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CRITIC GATE
        ══════════════════════════════════════════════════════ */}
        <section id="critic" className="py-24 border-t border-white/5">
          <SectionLabel color="red">Quality Gate</SectionLabel>
          <SectionHeading>Nothing reaches the operator <span className="text-red-400">unverified</span></SectionHeading>
          <p className="text-white/60 text-lg max-w-2xl mb-12 leading-relaxed">
            The Critic is structurally embedded in the graph, not a post-hoc check. It scores every aggregated plan across five dimensions before the operator sees anything. Below threshold: blocked. Borderline: revision loop. Passes: delivered with full dimension breakdown.
          </p>

          {/* Dimension bars */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
            {criticDimensions.map(({ dim, score, desc }) => {
              const barColor = score >= 90
                ? "from-green-500 to-green-400"
                : score >= 80
                ? "from-yellow-500 to-yellow-400"
                : "from-red-500 to-red-400";
              const scoreColor = score >= 90 ? "text-green-400" : score >= 80 ? "text-yellow-400" : "text-red-400";
              const borderColor = score >= 90 ? "border-green-500/20" : score >= 80 ? "border-yellow-500/20" : "border-red-500/20";
              return (
                <div key={dim} className={`rounded-2xl border ${borderColor} bg-[#111] p-5`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-white">{dim}</span>
                    <span className={`text-xs font-mono font-bold ${scoreColor}`}>{score}/100</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full mb-3">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${barColor}`}
                      style={{ width: `${score}%` }}
                    />
                  </div>
                  <p className="text-xs text-white/50 leading-5">{desc}</p>
                </div>
              );
            })}
          </div>

          {/* Verdicts */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-green-500/30 bg-green-500/10">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-green-300 font-semibold text-sm">Approved</span>
              <span className="text-xs text-white/40">score above threshold, plan delivered</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10">
              <span className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-yellow-300 font-semibold text-sm">Revision</span>
              <span className="text-xs text-white/40">borderline -loop back with annotated feedback</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-red-500/30 bg-red-500/10">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-red-300 font-semibold text-sm">Rejected</span>
              <span className="text-xs text-white/40">unsafe or infeasible -blocked with reason</span>
            </div>
          </div>

          <Card>
            <h4 className="text-white font-semibold mb-2">Cost-Aware Scoring</h4>
            <p className="text-sm text-white/60 leading-6">
              A separate layer evaluates operational tradeoffs beyond the five dimensions. High reservation pressure can suppress feasibility scores. Inventory risk penalizes actionability. The operator sees a cost-aware breakdown alongside the critic verdict -explaining why a plan scored 0.88 instead of 0.95.
            </p>
          </Card>
        </section>

        {/* ═══════════════════════════════════════════════════════
            OBSERVABILITY
        ══════════════════════════════════════════════════════ */}
        <section id="observability" className="py-24 border-t border-white/5">
          <SectionLabel color="cyan">Observability</SectionLabel>
          <SectionHeading>Five tools <span className="text-cyan-400">watching every run</span></SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { tool: "LangSmith",       color: "purple", body: "Per-node traces for every planning run. Latency breakdown per node, token spend, model used. Full trace linked in every run record." },
              { tool: "OpenTelemetry",   color: "blue",   body: "HTTP request tracing via console exporter. Every API call carries a trace ID. OTLP-ready for production." },
              { tool: "Prometheus",      color: "orange", body: "/metrics scrape endpoint. Latency histograms, throughput, error rate. Drop into Grafana without any code changes." },
              { tool: "Sentry",          color: "red",    body: "Unhandled exception capture with FastAPI integration. LangGraph node failures wrapped with capture_exception, tagged by node name." },
              { tool: "structlog",       color: "green",  body: "JSON-structured logs across all orchestration nodes. Every entry carries run_id, org_id, node name, token counts, cost_usd." },
              { tool: "Observability Panel", color: "cyan", body: "7-day frontend summary: 59 total runs, 81% success rate, 0.81 avg critic score, 16.6s avg duration, breakdown by verdict and scenario." },
            ].map(({ tool, color, body }) => (
              <Card key={tool}>
                <Tag color={color as "orange"}>{tool}</Tag>
                <p className="text-sm text-white/60 mt-3 leading-6">{body}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div onClick={() => open(`${SC}/09_observability_tools/langsmith_run_traces.png`, "LangSmith per-node traces")} className="cursor-zoom-in">
              <Shot src={`${SC}/09_observability_tools/langsmith_run_traces.png`} caption="LangSmith: per-run tracing with latency breakdown per node and scenario labels" />
            </div>
            <div onClick={() => open(`${SC}/09_observability_tools/langsmith_golden_dataset.png`, "LangSmith golden dataset")} className="cursor-zoom-in">
              <Shot src={`${SC}/09_observability_tools/langsmith_golden_dataset.png`} caption="cortexkitchen-golden-v1: 50 curated runs, CI gate at 90% pass rate" />
            </div>
            <div onClick={() => open(`${SC}/09_observability_tools/sentry_error_capture.png`, "Sentry error capture")} className="cursor-zoom-in">
              <Shot src={`${SC}/09_observability_tools/sentry_error_capture.png`} caption="Sentry: RuntimeError from a LangGraph node, full stack trace, tagged by node name" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div onClick={() => open(`${SC}/06_data_health/observability_panel.png`, "Observability panel")} className="cursor-zoom-in">
              <Shot src={`${SC}/06_data_health/observability_panel.png`} caption="Observability panel: 59 runs, 81% success, 0.81 avg score, 16.6s avg, breakdown by verdict" />
            </div>
            <div onClick={() => open(`${SC}/06_data_health/data_health.png`, "Data health page")} className="cursor-zoom-in">
              <Shot src={`${SC}/06_data_health/data_health.png`} caption="Data Health: 6,495 orders, 1,201 reservations, 160 feedback records, 18 inventory items" />
            </div>
          </div>

          {/* Evals */}
          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <Tag color="purple">Automated Evals</Tag>
              <h3 className="text-white font-bold text-lg">RAGAS + DeepEval + LangSmith CI gate</h3>
            </div>
            <p className="text-sm text-white/60 leading-7 mb-8 max-w-2xl">
              Quality is enforced automatically, not checked manually. Three layers of evaluation run against every version: RAG pipeline quality, LLM output quality, and end-to-end regression against a curated golden dataset in CI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="rounded-xl border border-white/10 bg-[#111] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Image src={`${LOGO}/ragas.png`} alt="RAGAS" width={22} height={22} className="opacity-80" />
                  <span className="text-white font-semibold text-sm">RAGAS</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/50">Faithfulness</span>
                    <span className="text-xs font-mono text-green-400 font-bold">0.82 / 0.80 target</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/50">Context Precision</span>
                    <span className="text-xs font-mono text-green-400 font-bold">0.75 / passing</span>
                  </div>
                </div>
                <p className="text-xs text-white/40 mt-3 leading-5">Runs against the complaint RAG pipeline. Verifies retrieved context is actually relevant to the query.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#111] p-5">
                <span className="text-white font-semibold text-sm">DeepEval</span>
                <div className="space-y-2 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/50">Hallucination</span>
                    <span className="text-xs font-mono text-green-400 font-bold">0.42 / max 0.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/50">Answer Relevancy</span>
                    <span className="text-xs font-mono text-green-400 font-bold">0.78 / 0.70 target</span>
                  </div>
                </div>
                <p className="text-xs text-white/40 mt-3 leading-5">HallucinationMetric on critic output. AnswerRelevancyMetric on agent outputs. Fails loudly if a model starts making things up.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#111] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Image src={`${LOGO}/langsmith.png`} alt="LangSmith" width={22} height={22} className="opacity-80" />
                  <span className="text-white font-semibold text-sm">Golden Dataset CI</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/50">Dataset</span>
                    <span className="text-xs font-mono text-white/70">cortexkitchen-golden-v1</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/50">Runs</span>
                    <span className="text-xs font-mono text-green-400 font-bold">50 curated</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-white/50">CI Gate</span>
                    <span className="text-xs font-mono text-green-400 font-bold">90% pass rate</span>
                  </div>
                </div>
                <p className="text-xs text-white/40 mt-3 leading-5">pytest-based CI check. Fails the build if fewer than 45 of 50 golden runs score above the critic threshold.</p>
              </div>
            </div>
            <div onClick={() => open(`${SC}/09_observability_tools/langsmith_golden_dataset.png`, "LangSmith golden dataset")} className="cursor-zoom-in">
              <Shot src={`${SC}/09_observability_tools/langsmith_golden_dataset.png`} caption="cortexkitchen-golden-v1 in LangSmith: 50 curated runs, labeled by scenario, critic score threshold gate" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            TECH STACK + PER-NODE ROUTING
        ══════════════════════════════════════════════════════ */}
        <section id="stack" className="py-24 border-t border-white/5">
          <SectionLabel color="blue">Stack & Architecture</SectionLabel>
          <SectionHeading><span className="text-blue-400">Production-grade</span> decisions</SectionHeading>

          {/* Per-node model routing */}
          <div className="mb-12">
            <h3 className="text-white font-bold text-xl mb-4">Per-node model tier routing</h3>
            <p className="text-sm text-white/60 mb-6 leading-6 max-w-2xl">
              With <code className="text-orange-300 font-mono text-sm">COMET_TIERED=true</code>, each LangGraph node routes to a model tier matched to its task complexity. Powered by CometAPI -a unified proxy exposing 500+ models through a single OpenAI-compatible key. Fully opt-in.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Image src={`${LOGO}/deepseek.png`} alt="DeepSeek" width={28} height={28} />
                  <div>
                    <Tag color="blue">fast tier</Tag>
                    <p className="text-xs text-white/50 font-mono mt-0.5">deepseek-v4-flash</p>
                  </div>
                </div>
                <p className="text-xs text-white/60 leading-5">Demand Forecast, Inventory, Reservation. Structured computation -fast model, low cost.</p>
              </div>
              <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Image src={`${LOGO}/gemini.png`} alt="Gemini" width={28} height={28} />
                  <div>
                    <Tag color="purple">balanced tier</Tag>
                    <p className="text-xs text-white/50 font-mono mt-0.5">gemini-3.5-flash</p>
                  </div>
                </div>
                <p className="text-xs text-white/60 leading-5">Complaint Intelligence, Menu Intelligence. RAG synthesis -balanced reasoning, good context handling.</p>
              </div>
              <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Image src={`${LOGO}/claude.png`} alt="Claude" width={28} height={28} />
                  <div>
                    <Tag color="orange">strong tier</Tag>
                    <p className="text-xs text-white/50 font-mono mt-0.5">claude-sonnet-4-6</p>
                  </div>
                </div>
                <p className="text-xs text-white/60 leading-5">Critic Gate only. The highest-stakes node -always gets the strongest model available.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div onClick={() => open(`${SC}/07_config/cometapi.png`, "CometAPI proxy")} className="cursor-zoom-in">
                <Shot src={`${SC}/07_config/cometapi.png`} caption="CometAPI: unified proxy for 500+ models with one key" />
              </div>
              <div onClick={() => open(`${SC}/07_config/cometapi-dashboard.png`, "CometAPI dashboard")} className="cursor-zoom-in">
                <Shot src={`${SC}/07_config/cometapi-dashboard.png`} caption="CometAPI dashboard: usage and per-model cost breakdown" />
              </div>
              <div onClick={() => open(`${SC}/07_config/cometapi-run.png`, "CometAPI per-node routing in a live run")} className="cursor-zoom-in">
                <Shot src={`${SC}/07_config/cometapi-run.png`} caption="CometAPI in a live run: per-node model attribution in LangSmith" />
              </div>
            </div>
          </div>

          {/* Settings and profiles */}
          <div className="mb-12">
            <h3 className="text-white font-bold text-xl mb-4">Workspace configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div onClick={() => open(`${SC}/07_config/settings.png`, "Workspace settings")} className="cursor-zoom-in">
                <Shot src={`${SC}/07_config/settings.png`} caption="Settings: seating capacity, peak hours, timezone, approval threshold, stock warning levels" />
              </div>
              <div onClick={() => open(`${SC}/07_config/restaurant_profiles.png`, "Restaurant profiles")} className="cursor-zoom-in">
                <Shot src={`${SC}/07_config/restaurant_profiles.png`} caption="Restaurant Profiles: named profiles override org defaults per run" />
              </div>
            </div>
          </div>

          {/* Tech stack table */}
          <div className="mb-10">
            <h3 className="text-white font-bold text-xl mb-6">Full stack</h3>
            <div className="space-y-2">
              {[
                { layer: "Orchestration",    tech: "LangGraph StateGraph, 9 nodes, parallel fan-out, typed OrchestratorState" },
                { layer: "Backend",          tech: "FastAPI 0.115, Uvicorn, Pydantic v2, SQLAlchemy, Alembic" },
                { layer: "LLM",              tech: "Groq llama-3.3-70b (default), Gemini fallback, CometAPI per-node tiering" },
                { layer: "Vector",           tech: "Qdrant -complaints and SOPs, org-scoped payload filters per tenant" },
                { layer: "Database",         tech: "PostgreSQL 16, org_id scoping on all queries" },
                { layer: "Cache",            tech: "Redis 7 -1hr TTL by scenario + date, approved plans only" },
                { layer: "Forecasting",      tech: "Prophet + Pandas, peak detection, confidence bands" },
                { layer: "Frontend",         tech: "Next.js 16, React 19, TypeScript, Tailwind CSS 4, Recharts" },
                { layer: "Streaming",        tech: "FastAPI SSE -node_complete events + final complete; AsyncGroq for chat" },
                { layer: "Auth",             tech: "JWT HS256 + passlib/bcrypt, multi-tenant, org-scoped" },
                { layer: "Observability",    tech: "LangSmith, OpenTelemetry, Prometheus /metrics, Sentry, structlog JSON" },
                { layer: "Evals",            tech: "LangSmith golden-v1 (50 runs, 90% CI gate), RAGAS, DeepEval" },
                { layer: "Exports",          tech: "ReportLab PDF, openpyxl Excel role-aware workbook" },
                { layer: "MCP",              tech: "Anthropic MCP SDK -run_planning_scenario + get_run_history" },
              ].map(({ layer, tech }) => (
                <div key={layer} className="flex gap-4 rounded-xl border border-white/5 bg-[#111] px-5 py-3 hover:border-white/10 transition">
                  <span className="flex-shrink-0 w-32 text-xs font-mono text-orange-400/80 uppercase tracking-wider">{layer}</span>
                  <span className="text-sm text-white/65">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logos */}
          <div className="rounded-2xl border border-black/8 bg-white p-8">
            <p className="text-xs font-mono uppercase tracking-widest text-black/30 text-center mb-8">Integrated ecosystem</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {logos.map(({ src, alt }) => (
                <div key={alt} className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
                  <Image src={src} alt={alt} width={36} height={36} className="object-contain" />
                  <span className="text-[10px] font-mono text-black/70 uppercase tracking-wider font-semibold">{alt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            BY THE NUMBERS
        ══════════════════════════════════════════════════════ */}
        <section className="py-16 border-t border-white/5">
          <p className="text-xs font-mono text-white/25 uppercase tracking-widest text-center mb-8">By the numbers</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { v: "9",     l: "LangGraph nodes"     },
              { v: "59",    l: "Runs last 7 days"     },
              { v: "81%",   l: "Critic pass rate"     },
              { v: "0.92",  l: "Peak critic score"    },
              { v: "17s",   l: "Avg pipeline latency" },
              { v: "5",     l: "Quality dimensions"   },
              { v: "50",    l: "Golden eval runs"     },
              { v: "$0.004",l: "Cost per run"         },
            ].map(({ v, l }) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-[#111] p-5 text-center">
                <div className="text-2xl md:text-3xl font-black text-white font-mono">{v}</div>
                <div className="text-xs text-white/40 mt-1.5 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            BUILD JOURNEY
        ══════════════════════════════════════════════════════ */}
        <section id="journey" className="py-24 border-t border-white/5">
          <SectionLabel color="yellow">Build journey</SectionLabel>
          <SectionHeading>Built solo. <span className="text-yellow-400">Mar to Jun 2026.</span></SectionHeading>
          <p className="text-white/60 text-lg max-w-2xl mb-12 leading-relaxed">
            Not a tutorial project. Not a demo. Six phases, each solving a real problem, each building on the previous one. Spec first, then infrastructure, then intelligence, then production systems.
          </p>

          {/* Recharts phase chart */}
          <div className="rounded-2xl border border-white/10 bg-[#111] p-6 mb-10">
            <p className="text-xs font-mono uppercase tracking-widest text-white/30 mb-6">Features shipped per phase</p>
            <PhaseChart />
          </div>

          {/* Phase detail */}
          <div className="space-y-3">
            {[
              {
                phase: "P0", title: "Architecture first",       date: "Mar 2026",      color: "orange",
                why: "Most AI projects start with a model call. This one started with a PRD, a system architecture doc, a data model, API contracts, and an evaluation rubric. Spec-first before a single line of code.",
                shipped: ["PRD", "System architecture", "PostgreSQL schema", "API contracts", "Evaluation rubric"],
              },
              {
                phase: "P1", title: "End-to-end skeleton",      date: "Mar - Apr 2026", color: "blue",
                why: "The hardest thing in a multi-agent system is getting state to flow correctly through every node without silent failures. Needed a working 9-node graph with real services behind each node, not stubs.",
                shipped: ["LangGraph graph", "FastAPI backend", "SQLAlchemy + Alembic", "5 domain services", "CriticService", "Qdrant seeding", "Next.js dashboard", "Docker Compose stack", "Unit tests", "Integration tests"],
              },
              {
                phase: "P2", title: "Real intelligence",        date: "Apr 2026",      color: "cyan",
                why: "Placeholder logic isn't useful. Phase 2 replaced every stub with real algorithms: Prophet for forecasting, inventory shortage detection with feasibility awareness, menu strategy aligned to stock.",
                shipped: ["Prophet forecasting", "Inventory shortage alerts", "Menu push/ease-back/avoid", "RAG pipeline refinement", "Eval rubric refinement"],
              },
              {
                phase: "P3", title: "Multi-scenario + audit",   date: "Apr 2026",      color: "purple",
                why: "One hardcoded scenario is a demo. Four scenario presets with different demand profiles and risk weights is a product. And if you can't show why you made a decision, you can't trust the system.",
                shipped: ["4 scenario presets", "Persisted planning runs", "Cost-aware CriticService", "5-dimension scoring", "Revision feedback"],
              },
              {
                phase: "P4", title: "Production systems",       date: "May 2026",      color: "green",
                why: "A system with no auth, no tracing, and no observability is a script. Phase 4 shipped across 12 workstream branches: auth, observability, evals, MCP, provider abstraction, all merged sequentially.",
                shipped: ["JWT auth", "LangSmith tracing", "structlog JSON", "LLM cost tracking", "BaseLLMProvider", "RAGAS evals (faithfulness >= 0.8)", "DeepEval (hallucination <= 0.5)", "pytest integration tests", "MCP server", "Restaurant profiles"],
              },
              {
                phase: "P5", title: "Operator experience",      date: "Jun 2026",      color: "yellow",
                why: "The backend was solid. The operator experience was not. Phase 5 closed that gap: exports you can hand to a chef, a live pipeline you can watch, a chatbot that knows your data.",
                shipped: ["PDF chef brief", "Excel role-aware export", "SSE streaming", "Redis caching", "What-if simulator", "OpenTelemetry", "Prometheus", "Sentry", "RAG chatbot", "LangSmith CI gate (pytest, 90% pass rate)", "Golden dataset 50 runs"],
              },
              {
                phase: "P6", title: "Per-node model routing",   date: "Jun 2026",      color: "pink",
                why: "One model for every node is wasteful and wrong. The Critic needs the strongest reasoning available. Demand Forecast just needs something fast. The async rewrite also cut pipeline latency from 48.7s to 17s.",
                shipped: ["CometAPI integration", "3-tier model routing", "Per-model cost attribution", "LangSmith per-node model visibility", "Async rewrite: 48.7s to 17s"],
              },
            ].map(({ phase, title, date, color, why, shipped }) => (
              <div key={phase} className={`rounded-2xl border-l-4 bg-[#111] border border-white/8 p-6 hover:border-white/15 transition ${colorMap[color as "orange"].split(" ")[0]}`}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <Tag color={color as "orange"}>{phase}</Tag>
                    <Tag color="green">Shipped</Tag>
                    <h4 className="text-white font-bold">{title}</h4>
                  </div>
                  <span className="text-xs font-mono text-white/35">{date}</span>
                </div>
                <p className="text-sm text-white/55 italic mb-4 leading-6">{why}</p>
                <div className="flex flex-wrap gap-2">
                  {shipped.map((s) => (
                    <span key={s} className="text-xs bg-white/5 border border-white/10 rounded px-2.5 py-1 text-white/60">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            WHY / CTA
        ══════════════════════════════════════════════════════ */}
        <section className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <SectionLabel color="orange">Why I built this</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Food sparked it.<br />
                <span className="text-orange-400">AI powers it ! </span> 
              </h2>
              <p className="text-white/65 leading-8 mb-4">
                I love building systems where intelligence is actually useful, not decorative. Restaurants fascinate me: high-stakes, data-rich, constantly reactive, and deeply underserved by software. Every shift is a planning problem. Every complaint is a signal. Every inventory item is a constraint.
              </p>
              <p className="text-white/65 leading-8">
                CortexKitchen is what happens when you build the synthesis layer that doesn't exist. Production architecture. Real algorithms. A quality gate that actually blocks bad plans. This isn't a portfolio project. It's a product that works -and it can expand into real POS integrations, live reservation sync, scheduled digests, and role-based access as it grows.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <Tag color="orange">Operators</Tag>
                <h4 className="text-white font-semibold mt-3 mb-2">A shift brief that actually uses your data</h4>
                <p className="text-sm text-white/60 leading-6">Before service starts, five agents have already read your demand forecast, reservation load, guest complaints, stock levels, and menu velocity. A verified brief arrives in under 90 seconds. No tabs. No spreadsheet. No surprises at 7 PM.</p>
              </Card>
              <Card>
                <Tag color="blue">Engineers / CTOs</Tag>
                <h4 className="text-white font-semibold mt-3 mb-2">Production multi-agent architecture you can actually learn from</h4>
                <p className="text-sm text-white/60 leading-6">Typed LangGraph state, hybrid compute nodes, critic quality gate, per-node model routing, RAGAS + DeepEval evals, LangSmith CI gate, OTel tracing, Prometheus metrics, Redis caching, multi-tenant isolation. Every pattern documented in code.</p>
              </Card>
              <Card>
                <Tag color="purple">MCP</Tag>
                <h4 className="text-white font-semibold mt-3 mb-2">Claude Code talks to it natively</h4>
                <p className="text-sm text-white/60 leading-6">Drop <code className="text-orange-300 font-mono text-xs">.mcp.json</code> in your project and Claude Code auto-discovers two tools: <code className="text-orange-300 font-mono text-xs">run_planning_scenario</code> and <code className="text-orange-300 font-mono text-xs">get_run_history</code>. Ask in natural language. The full 9-node pipeline executes with real auth and real data.</p>
              </Card>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-500/8 blur-3xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Want to see it running?</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Clone the repo. Run Docker Compose. Get a Groq key for free. The whole system is running in under 10 minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/anoushka45/cortexkitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-400 transition text-sm"
              >
                GitHub Repository
              </a>
              <a
                href="/"
                className="px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition text-sm"
              >
                Back to Portfolio
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Lightbox */}
      {lightbox && (
        // @ts-ignore
        <Lightbox src={lightbox.src} caption={lightbox.caption} onClose={() => setLightbox(null)} />
      )}
    </main>
  );
}
