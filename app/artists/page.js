import { CanvasRevealEffectDemo } from "@/components/canvas-reveal-effect-demo";
import React from "react";

const ArtistsPage = () => {
  return (
    <div className="mt-24 lg:mt-48 flex flex-col items-center justify-center">
      <div className="mb-12 text-center">
        <h1 className="font-bold text-7xl">ARTISTS</h1>

        <p className="mt-12 w-2xl mx-auto">
          ALL ARTISTS ARE MANAGED BY HELLOWORLD
        </p>
        <p> CONTACT US: hello@listentohelloworld.com</p>
      </div>

      <CanvasRevealEffectDemo />
    </div>
  );
};

export default ArtistsPage;
