import React from "react";

export default function HeroSection() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-pink-500">
            Para una personita extremadamente
            <br className="hidden lg:inline-block" />
            <span className="lg:hidden"> </span>
            especial y maravillosa
          </h1>
          <p className="mb-8 leading-relaxed">
            Todas las personas que trabajamos para lograr esta paginita te
            queremos con la vida. Te consideramos una persona maravillosa. Capaz
            de alegrarle el dia a cualquiera con una sonrisa. Esperamos que este
            dia sea especial y que podamos disfrutarlo de esta manera durante
            muchos años. Y que cuando estemos lejos esta paginita sirva de
            recordatorio de cuanto te queremos
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
