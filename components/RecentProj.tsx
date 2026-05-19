"use client";

import React, { useMemo, useState } from "react";
import { Project, projects } from "@/data";

const filters = ["All", "AI", "Full Stack"];

const RecentProj = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const featured = projects.find((p) => p.isFeatured);

  const others = useMemo(() => projects.filter((p) => !p.isFeatured), []);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return others;
    return others.filter((p) => p.category === activeFilter);
  }, [activeFilter, others]);

  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        Selected <span className="text-purple">Projects</span>
      </h1>

      <p className="text-center text-white-200 mt-4 max-w-2xl mx-auto">
        Production-grade AI systems work alongside full-stack projects.
      </p>

      {featured && (
        <div className="w-full rounded-3xl bg-black-200 border border-purple/30 p-8 md:p-10 relative overflow-hidden mt-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple/5 blur-3xl rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Image — full width on mobile, fixed width on large screens */}
            <div className="w-full lg:w-[42%] flex-shrink-0">
              <div className="relative overflow-hidden rounded-xl w-full h-[36vh] lg:h-[340px]">
                <img src={featured.img} alt={featured.title} className="object-cover object-center w-full h-full" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <span className="px-3 py-1 rounded-full bg-purple/10 border border-purple/30 text-purple text-xs uppercase tracking-widest inline-block self-start">
                Featured Project
              </span>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-4">{featured.title}</h2>

              <p className="text-white-200 mt-3 leading-7 text-base">{featured.des}</p>

              <div className="flex flex-wrap gap-2 mt-5">
                {featured.tags?.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-black-100 border border-white/10 text-xs text-white-200">
                    {t}
                  </span>
                ))}
              </div>

              {featured.stats && (
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {featured.stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-black-100 border border-white/10 p-3 text-center">
                      <div className="text-xl font-bold text-white">{s.value}</div>
                      <div className="text-xs text-white-200 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3 mt-6">
                <a href={featured.caseStudyLink} className="px-5 py-2.5 rounded-full bg-purple text-black-100 text-sm font-semibold hover:bg-purple/80 transition">
                  View Details
                </a>
                <a href={featured.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-white/20 text-white-200 text-sm hover:border-white/40 transition">
                  GitHub
                </a>
                <a
                  href="https://www.youtube.com/watch?v=zbQr0HsbnW0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full border border-white/20 text-white-200 text-sm hover:border-white/40 transition"
                >
                  Demo Video
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center text-white-200 text-xs uppercase tracking-widest mt-16 mb-2">More Projects</div>

      <div className="flex justify-center gap-3 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full border text-sm transition ${activeFilter === filter
                ? "bg-purple text-black-100 border-purple font-semibold"
                : "bg-black-200 text-white-200 border-white/10"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-12 gap-y-8 mt-10">
        {filtered.map((p: Project) => (
          <div key={p.id} className="relative bg-black-200 border border-white/10 rounded-3xl p-6 w-[80vw] sm:w-[570px] hover:border-purple transition duration-300">
            <div className="relative flex items-center justify-center w-full overflow-hidden h-[30vh] mb-6 sm:h-[40vh]">
              <img src={p.img} alt={p.title} className="object-cover rounded-xl w-full h-full" />
            </div>

            <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-2">{p.title}</h3>
            <p className="lg:text-lg font-light text-sm mt-2 text-white-200">{p.des}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              {p.tags?.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-black-100 border border-white/10 text-xs text-white-200">{tag}</span>
              ))}
            </div>

            <div className="flex justify-center items-center mt-6">
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-purple hover:underline text-sm md:text-base">View on GitHub →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProj;