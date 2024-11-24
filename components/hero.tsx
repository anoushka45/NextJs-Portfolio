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
  <p className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-300 font-bold hover:from-pink-400 hover:to-violet-600 hover:shadow-lg transition-all duration-800 ease-in-out hover:cursor-pointer">
  ANOUSHKA VYAS
</p>

  </div>
</div>

<TextGenerateEffect 
  words='Shaping Concepts into Immersive Digital Experiences' 
  className='text-center text-[40px] md:text-4xl lg:text-5xl' 
/>


      <p className='bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-blue-400  hover:from-pink-300 hover:to-blue-500 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl relative'>


       A Web Developer and final-year IT student passionate about building intuitive, user-friendly web applications. I love transforming ideas into fully functional digital experiences. Take a look at my work and see what I’ve been creating!

</p>
  

<a href="/docs/resume1.pdf" target="_blank" rel="noopener noreferrer">
  <MagicButton title="Show my work" 
    icon={<FaLocationArrow />}
    position='right' />
</a>

    </div>

  )
}

export default Hero;