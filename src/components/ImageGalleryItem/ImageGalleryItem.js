import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGalleryItems.module.css";

const ImageGalleryItem = ({ photo }) => {
  return (
    <>
      <li className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItemImage}
          src={photo.webformatURL}
          alt={photo.tags}
          lowsrc={photo.largeImageURL}
        ></img>
      </li>
    </>
  );
};

ImageGalleryItem.defaultProps = {
  largeImageURL: "",
  webformatURL: "",
  tags: "",
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
