import React from "react";
import Link from "next/link";

export default function FriendsSection() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-pink-500">
            Tus Amigos
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            La amistad es un alma que habita en dos cuerpos, un corazon que
            habita dos almas.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt=""
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="assets/friends/adri/preview.jpeg"
              />
              <div className="w-full">
                <Link href="/adri">
                  <a className="title-font font-medium text-lg text-pink-500">
                    Adrianita
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
                src="/assets/friends/sariol/preview.jpeg"
              />
              <div className="w-full">
                <Link href="/sariol">
                  <a className="title-font font-medium text-lg text-pink-500">
                    Sariol
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
                src="/assets/friends/ferro/preview.jpeg"
              />
              <div className="w-full">
                <Link href="/ferro">
                  <a className="title-font font-medium text-lg text-pink-500">
                    Ferro
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
