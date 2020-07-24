import React from "react";
import { Player } from "video-react";

export default function Adri() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto py-6">
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/friends/adri/video.mp4"
            aspectRatio="16:9"
          />
        </div>
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <div>
            <img
              src="/assets/friends/adri/pic-0.jpg"
              className="rounded-lg overflow-hidden object-cover"
            />
          </div>
        </div>
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center mt-6">
          <p className="leading-relaxed text-lg">
            Los cumpleaños van y vienen. Pero las personas inolvidables como tú
            permanecen en el corazón para siempre. Te deseo muchas felicidades
            en este día y espero seguir celebrando más cumpleaños contigo porque
            eres muy especial. Te quiero mi super Karen Karen.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
}
