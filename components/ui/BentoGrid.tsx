"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react";

import { useState } from "react";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setcopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('vyasanoushka@gmail.com');
    setcopied(true);
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none   justify-between flex flex-col space-y-4 border border-blue-100/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,35)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Corrected className condition for id == 6 */}
      <div className={`${id === 6 ? "flex justify-center h-full" : ""}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center opacity-50")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id == 5 && 'w-full opacity-40'}`}>
          {
            spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className={`object-cover object-center w-full h-full opacity-50`}

              />


            )
          }
        </div>
        {id == 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white fold-bold " />
          </BackgroundGradientAnimation>
        )}
        <div className={
          cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )
        }>
          {id !== 5 && (
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
          )}
          {id !== 5 && (
            <div className={cn("font-sans font-bold text-lg lg:text-3xl max-w-96 z-10", titleClassName)}>
              {title}
            </div>
          )}

          {id === 2 && (
            <div className="absolute inset-0 z-0">
              <GlobeDemo />
            </div>
          )}          {id === 3 && (
            <div className="flex flex-wrap gap-2 justify-center mt-4 z-10 relative">
              {[
                { name: "LangGraph", dot: "bg-purple" },
                { name: "FastAPI", dot: "bg-sky-400" },
                { name: "Python", dot: "bg-sky-400" },
                { name: "Qdrant", dot: "bg-purple" },
                { name: "PostgreSQL", dot: "bg-sky-400" },
                { name: "Next.js", dot: "bg-white/50" },
              ].map((item) => (
                <span
                  key={item.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10132e] border border-white/[0.08] text-sm text-white/80 flex-shrink-0"
                >
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} />
                  {item.name}
                </span>
              ))}
            </div>
          )}

          {id === 5 && (
            <div className="z-10 relative flex flex-col gap-6 h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple/10 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute bottom-4 left-0 w-24 h-24 bg-sky-400/[0.06] blur-2xl rounded-full pointer-events-none" />

              <div className="pl-5 border-l-2 border-purple/50">
                <p className="text-xs uppercase tracking-[0.18em] text-purple/70 mb-3">Engineering mindset</p>
                <p className="text-white/90 text-base md:text-lg font-bold leading-snug">
                  I think carefully about where a model belongs in a system, and where it does not.
                </p>
                <p className="text-white/50 text-sm mt-3 leading-6">
                  Most reliability problems in production AI are architectural. Getting that boundary right separates a working prototype from something you can actually depend on.
                </p>
              </div>

              <div className="border-t border-white/[0.07]" />

              <div>
                <p className="text-white font-bold text-xl md:text-2xl leading-snug">
                  The never-ending possibilities.
                </p>
                <p className="text-white/50 text-sm mt-3 leading-7">
                  Every problem in AI unlocks three more. The field moves fast enough that there&apos;s always something genuinely new to figure out — and just enough structure to build on.
                </p>
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleclick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}

        </div>

      </div>
    </div>

  );
};
