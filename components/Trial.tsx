import React from "react";

import { projects } from '@/data'

const Trial = () => {
  return (
    <div className="hidden 3xl:block"> {/* Only visible on screens 2560px and above */}
      <div className="container mx-auto px-8 py-12">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-4 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg p-6 bg-white shadow-lg">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-700 text-base mb-6">{project.des}</p>
              <div className="flex space-x-4 mb-4">
                {project.iconLists.map((icon, idx) => (
                  <img key={idx} src={icon} alt={`Icon ${idx}`} className="w-8 h-8" />
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trial;
