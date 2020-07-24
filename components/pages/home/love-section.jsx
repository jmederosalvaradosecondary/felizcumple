import React from "react";
import Link from "next/link";

export default function LoveSection() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-pink-500">
            Alguien que te necesita mucho
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Aprendemos a amar no cuando encontramos a la persona perfecta, sino
            cuando llegamos a ver de manera perfecta a una persona imperfecta.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt=""
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="/assets/love/jmederos/pic-1.jpg"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-pink-500">
                  Amor Mío
                </h2>
                <Link href="/amor-mio">
                  <a className="text-center text-gray-500 italic hover:underline focus:underline">
                    Click Aquí
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
