import React from "react";
import { Player } from "video-react";

export default function Sharon() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto py-6">
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/disfunctional-family/sharon/video.MOV"
            aspectRatio="16:9"
          />
        </div>
      </div>
    </section>
  );
}
