import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

const ReleasesPage = () => {
  return (
    <div className="mt-24 lg:mt-48 mb-12 flex flex-col items-center justify-center">
      <div className="mb-24">
        <h1 className="relative z-10 text-7xl  bg-clip-text text-center font-sans font-bold">
          RELEASES
        </h1>
      </div>
      <iframe
        src="https://open.spotify.com/embed/playlist/0bBD4tk3mFMwbvqgLi4pbF?utm_source=generator&theme=0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-3/4 h-[600px] opacity-100 z-50"
      ></iframe>
      {/* <BackgroundBeams /> */}
    </div>
  );
};

export default ReleasesPage;
