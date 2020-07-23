import React from "react";
import { Player } from "video-react";
import PicGallery from "../../shared/picgallery";

const images = [
  { original: "/assets/friends/ferro/pic-5.jpeg" },
  { original: "/assets/friends/ferro/pic-1.jpeg" },
  { original: "/assets/friends/ferro/pic-2.jpeg" },
  { original: "/assets/friends/ferro/pic-3.jpeg" },
  { original: "/assets/friends/ferro/pic-4.jpeg" }
];

export default function Ferro() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto py-6">
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/friends/ferro/video.mp4"
            aspectRatio="16:9"
          />
        </div>
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <div className="rounded-lg overflow-hidden">
            <PicGallery images={images} />
          </div>
        </div>
      </div>
    </section>
  );
}
