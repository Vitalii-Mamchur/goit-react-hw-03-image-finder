import React from "react";
import "../../styles.css";
import ImageGalleryItem from "../../components/ImageGalleryItem";

const ImageGallery = ({ hits }) => {
  return (
    <ul className="ImageGallery">
      {hits.map(({ id, tags, largeImageURL }) => (
        <ImageGalleryItem key={id} src={largeImageURL} alt={tags} />
      ))}
    </ul>
  );
};

export default ImageGallery;
