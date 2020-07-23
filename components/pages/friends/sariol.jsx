import React from "react";
import PicGallery from "../../shared/picgallery";

const images = [
  { original: "/assets/friends/sariol/pic-1.jpeg" },
  { original: "/assets/friends/sariol/pic-2.jpeg" },
  { original: "/assets/friends/sariol/pic-3.jpeg" }
];

export default function Sariol() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto py-6">
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <div className="rounded-lg overflow-hidden">
            <PicGallery images={images} />
          </div>
        </div>
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center mt-6">
          <p class="leading-relaxed text-lg">
            Karencita!!!! Muchas felicidades para tí. Estoy encantado de haberte
            podido conocer y que además te hayas convertido en una de mis
            mejores amigas. Te deseo lo mejor del mundo mundial. Gracias por
            regalar tanta alegría. Espero seguir siendo ese team ingenieril
            super durako en que nos hemos convertido.Se te quiere un montón....
            PD: Por muy fuerte que te pongas siempre te seguiré molestando con
            el bracito...😅😅
          </p>
          <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
}
