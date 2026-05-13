import { workExperience } from '@/data';
import React from 'react';

const Experience = () => {
  return (
    <div className='py-20 w-full' id="experience">
      <p className="eyebrow">Background</p>
      <h1 className="heading">
        Work
        <span className="text-purple"> Experience</span>
      </h1>

      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl border border-white/10 bg-black-200 p-6 md:p-8 hover:border-purple/30 transition-colors duration-300"
          >
            <div className="flex items-start gap-5">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-12 h-12 object-contain flex-shrink-0 mt-1"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white">{card.title}</h3>
                <p className="text-white-200 mt-3 leading-7 text-sm">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
