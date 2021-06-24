import React from "react";
import "../../styles.css";
import ImageGalleryItem from "../../components/ImageGalleryItem";

const ImageGallery = ({ hits, onClick }) => {
  return (
    <ul className="ImageGallery" onClick={onClick}>
      {hits.map(({ id, tags, webformatURL }) => (
        <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
      ))}
    </ul>
  );
};

export default ImageGallery;
