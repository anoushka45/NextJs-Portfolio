import React from 'react'
import { FaLocationArrow } from 'react-icons/fa';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { Spotlight } from './ui/spotlight';
import MagicButton from './ui/MagicButton';
const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 hscreen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh]  w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh]  w-[50vw]' fill='blue' />
      </div>


      <div className="h-screen w-full dark:bg-black-100 bg-white  
      dark:bg-grid-white/[0.03] bg-grid-black/[0.2] 
      flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none 
        inset-0 flex items-center justify-center dark:bg-black-100 bg-white
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>





    

          <div className="flex justify-center relative z-10 my-10">
            <div className="text-center text-[40px] md:text-4xl lg:text-6xl flex flex-col items-center justify-center">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple font-bold transition-all duration-500 ease-in-out hover:cursor-pointer">
                ANOUSHKA VYAS
              </p>
            </div>
          </div>

          <TextGenerateEffect
            words="Building the infrastructure behind reliable AI systems."
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
          />

          <p className="text-center text-white-200 md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl max-w-3xl mx-auto relative z-10">
            I work on orchestration, retrieval, agent workflows, and backend systems that turn language models into usable products. Coming from a full-stack background, I&apos;m especially interested in the engineering challenges behind modern AI systems: making them reliable, grounded, and practical beyond controlled demos.
          </p>

          <div className="flex justify-center flex-wrap gap-3 relative z-10 mt-6">
            <a href="https://github.com/anoushka45" target="_blank" rel="noopener noreferrer">
              <MagicButton title="GitHub" icon={<FaLocationArrow />} position="right" otherClasses="!bg-black-200" />
            </a>
            <a href="/docs/Anoushka_Vyas_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <MagicButton title="Resume" icon={<FaLocationArrow />} position="right" otherClasses="!bg-black-200" />
            </a>
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-black-200 border border-white/10 rounded-full px-5 py-2.5 mt-6 relative z-10">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white-200 text-sm">AI Engineer · LLM Systems · Backend Engineering</span>
            </div>
          </div>


    </div>

  )
}

export default Hero;