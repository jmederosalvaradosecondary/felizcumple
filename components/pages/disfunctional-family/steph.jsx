import React from "react";
import { Player } from "video-react";

export default function Steph() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto py-6">
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/disfunctional-family/steph/video.mp4"
            aspectRatio="16:9"
          />
        </div>
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <div className="rounded-lg overflow-hidden">
            <img src="/assets/disfunctional-family/steph/pic-1.jpeg" />
          </div>
        </div>
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center mt-6">
          <p className="leading-relaxed text-lg">
            ...muy “distanciadas” en la foto? 🤔 no es para menos pq i HATE you
            siempre 😜🙃💙
          </p>
          <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
}
