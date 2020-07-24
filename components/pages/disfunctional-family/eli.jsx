import React from "react";
import PicGallery from "../../shared/picgallery";

const images = [
  { original: "/assets/disfunctional-family/eli/pic-1.jpeg" },
  { original: "/assets/disfunctional-family/eli/pic-2.jpeg" },
  { original: "/assets/disfunctional-family/eli/pic-3.jpeg" }
];

export default function Eli() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto py-6">
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <div className="rounded-lg overflow-hidden">
            <PicGallery images={images} />
          </div>
        </div>
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center mt-6">
          <p className="leading-relaxed text-lg">
            Karencia, desde que nos conocimos en ese repaso en la secundaria
            supe que nuestros caminos no se separarían más. Eres una persona muy
            especial y me alegra mucho que la vida nos haya unido a todas en ese
            C-3 del albergue G-4 de la Lenin. Muchos besitos. Te quiero mucho
            China linda. Felices 22!!😘🥰🥰❤️🥳🎂🍺🥃🍾🥂🍻🎆🎇💥
          </p>
          <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
}
