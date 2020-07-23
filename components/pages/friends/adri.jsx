import React from "react";
import { Player } from "video-react";
import PicGallery from "../../shared/picgallery";

const images = [
  { original: "/assets/friends/adri/pic-5.jpeg" },
  { original: "/assets/friends/adri/pic-1.jpeg" },
  { original: "/assets/friends/adri/pic-2.jpeg" },
  { original: "/assets/friends/adri/pic-3.jpeg" },
  { original: "/assets/friends/adri/pic-4.jpeg" }
];

export default function Adri() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto py-6">
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/friends/adri/video.mp4"
            aspectRatio="16:9"
          />
        </div>
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <PicGallery images={images} />
        </div>
      </div>
    </section>
  );
}
