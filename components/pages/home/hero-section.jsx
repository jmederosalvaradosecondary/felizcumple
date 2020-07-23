import React from "react";

export default function HeroSection() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
            Aqui deberiamos pensar en un
            <br className="hidden lg:inline-block" />
            <span className="lg:hidden"> </span>
            titulito lindo
          </h1>
          <p className="mb-8 leading-relaxed">
            Esto deberia ser un escritico de parte de todos o algo que la
            caracterice a ella, mas o menos que llene este espacio. Aqui estoy
            rellenando el espacio que se debe llevar. Aqui estoy rellenando el
            espacio que se debe llevar. Aqui estoy rellenando el espacio que se
            debe llevar. Aqui estoy rellenando el espacio que se debe llevar.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/assets/home/hero.jpg"
          />
        </div>
      </div>
    </section>
  );
}
