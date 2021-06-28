import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../../components/ImageGalleryItem";

const ImageGallery = ({ hits, onClick }) => {
  return (
    <ul className={styles.ImageGallery} onClick={onClick}>
      {hits.map((hit) => (
        <ImageGalleryItem key={hit.id} photo={hit} />
      ))}
    </ul>
  );
};

ImageGallery.defaultProps = {
  hits: [],
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
