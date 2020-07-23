import React from "react";
import PicGallery from "../../shared/picgallery";

const images = [
  { original: "/assets/disfunctional-family/arianna/pic-1.jpeg" },
  { original: "/assets/disfunctional-family/arianna/pic-2.jpeg" },
  { original: "/assets/disfunctional-family/arianna/pic-3.jpeg" },
  { original: "/assets/disfunctional-family/arianna/pic-4.jpeg" },
  { original: "/assets/disfunctional-family/arianna/pic-5.jpeg" },
  { original: "/assets/disfunctional-family/arianna/pic-6.jpeg" },
  { original: "/assets/disfunctional-family/arianna/pic-7.jpeg" },
  { original: "/assets/disfunctional-family/arianna/pic-8.jpeg" },
  { original: "/assets/disfunctional-family/arianna/pic-9.jpeg" }
];

export default function Arianna() {
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
            Tita mía....FELIZ FELIZ CUMPLEAÑOS hoy más que nunca me acuerdo
            mucho de todo lo que vivimos. Cuando me acompañabas al teatro y nos
            ibamos a estudiar por ahi o simplemente a caminar, cuando nos
            pasabamos las noches conversando. Eres mi plan fijo😁, mi ciclista y
            compañara de casa de campaña. Te adoro....FELICIDADES!!!!!🥳
          </p>
          <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
}
