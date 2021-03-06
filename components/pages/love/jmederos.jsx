import React from "react";
import { Player } from "video-react";
import PicGallery from "../../shared/picgallery";

const images = [
  { original: "/assets/love/jmederos/pic-1.jpg" },
  { original: "/assets/love/jmederos/pic-2.jpg" },
  { original: "/assets/love/jmederos/pic-3.jpg" },
  { original: "/assets/love/jmederos/pic-4.jpg" }
];

export default function JMederos() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto py-6">
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/love/jmederos/video.mp4"
            aspectRatio="16:9"
          />
        </div>
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <div className="rounded-lg overflow-hidden">
            <PicGallery images={images} />
          </div>
        </div>
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center mt-6">
          <p className="leading-relaxed text-lg">
            Amor mio, aqui algunas foticos que representa momentos muy
            especiales para mi. Sabes que la playa es nuestro lugar especial.
            Quiero que nuestra vida siga llena de estos recuerdos.
          </p>
          <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
}
