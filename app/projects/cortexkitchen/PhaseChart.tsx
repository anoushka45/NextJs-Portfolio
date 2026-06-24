"use client";

const phases = [
  { phase: "P0", label: "Design",        features: 5,  month: "Mar 2026",      color: "#f97316" },
  { phase: "P1", label: "Skeleton",      features: 12, month: "Mar - Apr 2026", color: "#3b82f6" },
  { phase: "P2", label: "Intelligence",  features: 6,  month: "Apr 2026",      color: "#06b6d4" },
  { phase: "P3", label: "Scenarios",     features: 5,  month: "Apr 2026",      color: "#a855f7" },
  { phase: "P4", label: "Production",    features: 12, month: "May 2026",      color: "#22c55e" },
  { phase: "P5", label: "Polish",        features: 13, month: "Jun 2026",      color: "#eab308" },
  { phase: "P6", label: "Optimize",       features: 5,  month: "Jun 2026",      color: "#ec4899" },
];

const max = Math.max(...phases.map(p => p.features));

export default function PhaseChart() {
  return (
    <div className="space-y-3">
      {phases.map(({ phase, label, features, month, color }) => (
        <div key={phase} className="flex items-center gap-4 group">
          <div className="flex-shrink-0 w-24 flex items-center gap-2">
            <span className="text-xs font-mono font-bold" style={{ color }}>{phase}</span>
            <span className="text-xs text-white/35 truncate">{label}</span>
          </div>
          <div className="flex-1 h-6 bg-white/5 rounded-md overflow-hidden">
            <div
              className="h-full rounded-md flex items-center px-3 transition-all duration-500"
              style={{ width: `${(features / max) * 100}%`, backgroundColor: color, opacity: 0.85 }}
            >
              <span className="text-[10px] font-mono font-bold text-black/80 whitespace-nowrap">
                {features} features
              </span>
            </div>
          </div>
          <div className="flex-shrink-0 w-28 text-right text-xs font-mono text-white/30">
            {month}
          </div>
        </div>
      ))}
      <div className="flex items-center gap-4 pt-1 border-t border-white/5">
        <div className="w-24" />
        <div className="flex-1 text-[10px] text-white/20 font-mono">features shipped</div>
        <div className="w-28 text-right text-[10px] text-white/20 font-mono">month</div>
      </div>
    </div>
  );
}
