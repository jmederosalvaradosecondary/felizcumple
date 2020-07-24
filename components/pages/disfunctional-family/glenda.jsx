import React from "react";
import PicGallery from "../../shared/picgallery";

const images = [
  { original: "/assets/disfunctional-family/glenda/pic-1.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-2.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-3.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-4.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-5.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-6.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-7.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-8.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-9.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-10.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-11.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-12.jpeg" },
  { original: "/assets/disfunctional-family/glenda/pic-13.jpeg" }
];

export default function Glenda() {
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
            Mi niña feliz cumpleaños!!!!!! Que este y cada año de tu vida venga
            cargado de cosas hermosas para ti que tanto lo mereces! Gracias por
            compartir toda esa dulzura y bondad infantil, que tanto te
            caracteriza, con nosotros: tus amigos, tu familia! Nosotros quienes
            estamos dispuestos a bajar las estrellas para ti si es necesario,
            porque te lo mereces y eres un bello ser humano! 22s años más de
            alegría y momentos felices porque lo demás viene solo y lo atraes tú
            con tanta energía positiva y lindas palabras!!!
          </p>
          <p>Te quiero siempre</p>
          <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
}
