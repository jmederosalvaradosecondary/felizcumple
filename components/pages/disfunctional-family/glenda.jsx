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
      </div>
    </section>
  );
}
