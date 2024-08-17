"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="mb-20 py-20 flex flex-col lg:flex-row flex-wrap items-center justify-center bg-white dark:bg-black w-3/4 gap-y-16 mx-auto px-12">
        <Card
          title="HYPER VISOR"
          icon={<img src="/images/hyper.jpg" />}
          link={
            "https://open.spotify.com/artist/2qPzTaIaNHnC01RWTzVw5I?si=8dac7717130c4319"
          }
        >
          <CanvasRevealEffect
            // animationSpeed={5.1}
            // containerClassName="bg-emerald-900"
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
        </Card>
        <Card
          title="ENVI"
          icon={<img src="/images/clandestina.jpg" />}
          link={
            "https://open.spotify.com/artist/0dll1EAkzgRVzLAGppbpXN?si=2af344b085dd4b48"
          }
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            // colors={[
            //   [236, 72, 153],
            //   [232, 121, 249],
            // ]}
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="rks."
          icon={<img src="/images/aicha.jpg" />}
          link={
            "https://open.spotify.com/artist/330gTP3Pzh5lGKybXO0YuJ?si=a0499043910346cd"
          }
        >
          <CanvasRevealEffect
            // animationSpeed={3}
            // containerClassName=" bg-pink-400"
            // colors={[[125, 211, 252]]}
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
        </Card>
        <Card
          title="ADRL"
          icon={<img src="/images/adrl.jpg" />}
          link={
            "https://open.spotify.com/artist/6cTAL3LcbKeXfkHAdnvhEi?si=67468d27312447b4"
          }
        >
          <CanvasRevealEffect
            // animationSpeed={3}
            // containerClassName="bg-sky-600"
            // colors={[[125, 211, 252]]}
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Rush Besight"
          icon={<img src="/images/rush.jpg" />}
          link={
            "https://open.spotify.com/artist/7mEd2TMAa8WfcxjfeFl6Dk?si=936a100e6a0d405e"
          }
        >
          <CanvasRevealEffect
            // animationSpeed={3}
            // containerClassName="bg-sky-600"
            // colors={[[125, 211, 252]]}
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Bourbon"
          icon={<img src="/images/bourbon.jpg" />}
          link={
            "https://open.spotify.com/artist/5QgLka5eZ8pChrTofSFkPh?si=x1NHNhm4T_qr_q8_6IGy_A"
          }
        >
          <CanvasRevealEffect
            // animationSpeed={3}
            // containerClassName="bg-sky-600"
            // colors={[[125, 211, 252]]}
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[125, 211, 252]]}
            dotSize={2}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({ title, icon, children, link }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-4"
    >
      <div className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto  relative h-[30rem] ">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        {/* <div className="relative z-20"> */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className="dark:text-white text-2xl opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:absolute group-hover/canvas-card:inset-0 group-hover/canvas-card:flex group-hover/canvas-card:items-center group-hover/canvas-card:justify-center group-hover/canvas-card:transition-all group-hover/canvas-card:duration-200">
            {title}
          </h2>
        </div>
      </div>
    </a>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
