import React from "react";
import { Player } from "video-react";

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
          <div>
            <img
              src="/assets/friends/adri/pic-0.jpg"
              className="rounded-lg overflow-hidden object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
