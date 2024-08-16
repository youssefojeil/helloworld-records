import { CanvasRevealEffectDemo } from '@/components/canvas-reveal-effect-demo';
import React from 'react';

const ArtistsPage = () => {
  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <div>
        <p className="mt-24 w-2xl mx-auto">
          ALL ARTISTS ARE MANAGED BY HELLOWORLD CONTACT US:
          hello@listentohelloworld.com
        </p>
        <h1 className="mt-12 text-6xl">ARTISTS</h1>
      </div>

      <CanvasRevealEffectDemo />
    </div>
  );
};

export default ArtistsPage;
