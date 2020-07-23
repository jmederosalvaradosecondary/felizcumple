import React from "react";
import { Player } from "video-react";
import PicGallery from "../../shared/picgallery";

const images = [
  { original: "/assets/family/usa-family/pic-1.jpeg" },
  { original: "/assets/family/usa-family/pic-2.jpeg" },
  { original: "/assets/family/usa-family/pic-3.jpeg" },
  { original: "/assets/family/usa-family/pic-4.jpeg" },
  { original: "/assets/family/usa-family/pic-5.jpeg" },
  { original: "/assets/family/usa-family/pic-6.jpeg" },
  { original: "/assets/family/usa-family/pic-7.jpeg" },
  { original: "/assets/family/usa-family/pic-8.jpeg" },
  { original: "/assets/family/usa-family/pic-9.jpeg" },
  { original: "/assets/family/usa-family/pic-10.jpeg" },
  { original: "/assets/family/usa-family/pic-11.jpeg" },
  { original: "/assets/family/usa-family/pic-12.jpeg" }
];

export default function USAFamily() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto py-6">
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/family/usa-family/video-ani-mami.mp4"
            aspectRatio="16:9"
          />
        </div>
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/family/usa-family/video-ani.mp4"
            aspectRatio="16:9"
          />
        </div>
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/family/usa-family/video-kids.mp4"
            aspectRatio="16:9"
          />
        </div>
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/family/usa-family/video-eli.mp4"
            aspectRatio="16:9"
          />
        </div>
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/family/usa-family/video-shari.mp4"
            aspectRatio="16:9"
          />
        </div>
        <div className="mt-6 px-6 md:px-12 lg:px-32 flex justify-center items-center">
          <Player
            className="rounded-lg overflow-hidden"
            src="/assets/family/usa-family/video-carli.mp4"
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
