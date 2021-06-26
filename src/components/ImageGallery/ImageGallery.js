import React from "react";
import PropTypes from "prop-types";
import "./ImageGallery.css";
import ImageGalleryItem from "../../components/ImageGalleryItem";

const ImageGallery = ({ hits, onClick }) => {
  return (
    <ul className="ImageGallery" onClick={onClick}>
      {hits.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          largeImage={largeImageURL}
          alt={tags}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
