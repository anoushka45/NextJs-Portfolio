"use client";

import React, { useMemo, useState } from "react";
import { projects } from "@/data";

const filters = ["All", "AI", "Full Stack"];

const RecentProj = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        Selected <span className="text-purple">Projects</span>
      </h1>

      <p className="text-center text-white-200 mt-4 max-w-2xl mx-auto">
        A mix of AI-focused and full-stack projects that reflect my interests in
        intelligent systems, product thinking, and scalable engineering.
      </p>

      {/* Filters */}
      <div className="flex justify-center gap-3 flex-wrap mt-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2 rounded-full border text-sm transition ${
              activeFilter === filter
                ? "bg-purple text-white border-purple"
                : "bg-black-200 text-white-200 border-white/10"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-12 gap-y-8 mt-10">
        {filteredProjects.map(({ id, title, des, img, link, tags }) => (
          <div
            key={id}
            className="relative bg-black-200 border border-white/10 rounded-3xl p-6 w-[80vw] sm:w-[570px] hover:border-purple transition duration-300"
          >
            {/* Image */}
            <div className="relative flex items-center justify-center w-full overflow-hidden h-[30vh] mb-6 sm:h-[40vh]">
              <img
                src={img}
                alt={title}
                className="object-cover rounded-xl w-full h-full"
              />
            </div>

            {/* Title */}
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-2">
              {title}
            </h1>

            {/* Description */}
            <p className="lg:text-lg font-light text-sm mt-2 text-white-200">
              {des}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-5">
              {tags?.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-black-100 border border-white/10 text-xs text-white-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub link */}
            <div className="flex justify-center items-center mt-6">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple hover:underline text-sm md:text-base"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProj;