import React from "react";
import { Player } from "video-react";
import PicGallery from "../../shared/picgallery";

const images = [
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-1.jpeg" },
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-2.jpeg" },
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-3.jpeg" },
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-4.jpeg" },
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-5.jpeg" },
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-6.jpeg" },
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-7.jpeg" },
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-8.jpeg" },
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-9.jpeg" },
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-10.jpeg" },
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-11.jpeg" },
  { original: "/assets/disfunctional-family/fernan-cynthia/pic-12.jpeg" }
];

export default function Ferro() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto py-6">
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/disfunctional-family/fernan-cynthia/video.mp4"
            aspectRatio="16:9"
          />
        </div>
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <div className="rounded-lg overflow-hidden">
            <PicGallery images={images} />
          </div>
        </div>

        <div className="p-6">
          <div className="mt-6 xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              A la chinita más linda de mundo mundial! Sabes q te quiero un
              mundo chinita linda! Me encanta como eres, tu forma de pensar, tus
              actitudes. Soy muy feliz de que seamos amigas. Aunq no hablemos
              casi cuando nos encontramos es como si no pasara el tiempo y
              siento q contigo puedo hablar de cualquier cosa! Le doy gracias a
              las vueltas q da la vida por ponerte en mi camino y me arrepiento
              de no haberte conocido antes.. que pases un lindo día rodeado de
              la gente q te quiere y por supuesto ahí estaré yo!!! Felices 22
              CORAZÓN Gracias por ser TU!
            </p>
            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              Cynthia
            </h2>
          </div>

          <div className="mt-6 xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Chinita, Muchas Felicidades. Espero q tengas el día más
              maravilloso del mundo, junto a este grupo d personas q te adoran y
              q siempre van a estar a tu lado, apoyándote en las buenas y en las
              malas. Te quiero mucho!! Un besote
            </p>
            <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              Fernan
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
