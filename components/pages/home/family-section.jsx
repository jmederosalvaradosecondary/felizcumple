import React from "react";

export default function FamilySection() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-pink-500">
            Tu Familia
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Algo que represente la familia. Que mas menos sea de este largo.
            Esto es solo para rellenar. Esto es solo para rellenar. Esto es solo
            para rellenar. Esto es solo para rellenar.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt=""
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/200x200"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-pink-500">
                  Nombre de la persona
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt=""
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/201x201"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-pink-500">
                  Nombre de la persona
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt=""
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/202x202"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-pink-500">
                  Nombre de la persona
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt=""
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/203x203"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-pink-500">
                  Nombre de la persona
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
