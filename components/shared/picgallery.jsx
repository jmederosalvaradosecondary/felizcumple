import React from "react";
import ReactImageGallery from "react-image-gallery";

export default function PicGallery({ images }) {
  return (
    <ReactImageGallery
      items={images}
      showThumbnails={false}
      showNav={false}
      showBullets={true}
    />
  );
}
