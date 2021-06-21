import React from "react";
import "../../styles.css";
import ImageGalleryItem from "../../components/ImageGalleryItem";

const ImageGallery = ({ hits }) => {
  return (
    <ul className="ImageGallery">
      {hits.map(({ id, tags, webformatURL }) => (
        <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
      ))}
    </ul>
  );
};

export default ImageGallery;
