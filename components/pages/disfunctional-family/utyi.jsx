import React from "react";
import PicGallery from "../../shared/picgallery";

const images = [
  { original: "/assets/disfunctional-family/utyi/pic-1.jpeg" },
  { original: "/assets/disfunctional-family/utyi/pic-2.jpeg" },
  { original: "/assets/disfunctional-family/utyi/pic-3.jpeg" },
  { original: "/assets/disfunctional-family/utyi/pic-4.jpeg" },
  { original: "/assets/disfunctional-family/utyi/pic-5.jpeg" },
  { original: "/assets/disfunctional-family/utyi/pic-6.jpeg" }
];

export default function Utyi() {
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
            Karencia Felicidadesss!!!!!! Fue dificil escoger las fotos porque
            casi todas me las pasaste tu, pero bueno aquí estan las que mas
            lindos recuerdos me traen !!!!
          </p>
          <p class="leading-relaxed text-lg">
            Como olvidar tus caminatas sin rumbo por la unidad abandonada, los
            espionajes y ver un udyi de casualidad en las paredes jj
          </p>
          <p class="leading-relaxed text-lg">
            Quería poner unos videítos pero están deshonrosos jaja los miraba y
            pensaba que mongas jj pero los amo, nos divertíamos tantooooo
          </p>
          <p class="leading-relaxed text-lg">
            Hemos cambiado muchísimo (por suerte) en todos los sentidos pero
            nunca olvidaremos todos los maravilosos momentos que vivimos juntos
            y los que vendrán
          </p>
          <p class="leading-relaxed text-lg">
            Te deseo un super cumple con todo lo que quieras, gracias por estar
            pendiente de todos muchos besitos muaaaaaaaaaaaaaaaaa
          </p>
          <span class="inline-block h-1 w-10 rounded bg-pink-500 mt-8 mb-6"></span>
        </div>
      </div>
    </section>
  );
}
