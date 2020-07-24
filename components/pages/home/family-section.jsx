import React from "react";
import Link from "next/link";

export default function FamilySection() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-pink-500">
            Tu Familia
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Un hogar no es un edificio, ni una calle, ni una ciudad; no tiene
            nada que ver con cosas tan materiales como los ladrillos y el
            cemento. Un hogar es donde está tu familia. ¿Entiendes?
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt=""
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="/assets/family/home-family/preview.jpg"
              />
              <div className="w-full">
                <Link href="/familia-de-casita">
                  <a className="title-font font-medium text-lg text-pink-500">
                    Tu Hermosa Familia
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt=""
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="/assets/family/usa-family/pic-8.jpeg"
              />
              <div className="w-full">
                <Link href="/familia-de-mas-lejitos">
                  <a className="title-font font-medium text-lg text-pink-500">
                    Tu Familia de más Lejitos
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt=""
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="/assets/family/jmederos-family/preview.jpg"
              />
              <div className="w-full">
                <Link href="/ultimo-trocito-de-familia">
                  <a className="title-font font-medium text-lg text-pink-500">
                    Tu Ultimo Trocito de Familia
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt=""
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="/assets/family/abueqq/preview.jpeg"
              />
              <div className="w-full">
                <Link href="/abueqq">
                  <a className="title-font font-medium text-lg text-pink-500">
                    Tu Abuelita QQ
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
