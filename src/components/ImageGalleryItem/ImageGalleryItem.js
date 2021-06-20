import React from "react";

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <>
      <li className="ImageGalleryItem">
        <img className="ImageGalleryItem-image" src={src} alt={alt}></img>
      </li>
    </>
  );
};

export default ImageGalleryItem;
