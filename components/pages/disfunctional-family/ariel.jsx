import React from "react";
import PicGallery from "../../shared/picgallery";

const images = [
  { original: "/assets/desfunctional-family/ariel/pic-1.jpeg" },
  { original: "/assets/desfunctional-family/ariel/pic-2.jpeg" },
  { original: "/assets/desfunctional-family/ariel/pic-3.jpeg" }
];

export default function ariel() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto py-6">
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <div className="rounded-lg overflow-hidden">
            <PicGallery images={images} />
          </div>
        </div>
      </div>
    </section>
  );
}
