import React, { Component } from "react";
import { createPortal } from "react-dom";
import Loader from "react-loader-spinner";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  state = { isLoading: true };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    // console.log("componentDidMount");
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    // console.log("componentWillUpdate");
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
      this.setState({ isImageLoading: true });
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
      this.setState({ isImageLoading: true });
    }
  };

  onImageLoad = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const { isLoading } = this.state;
    const { src, alt } = this.props;

    return createPortal(
      <div className={styles.ModalBackdrop} onClick={this.handleBackdropClick}>
        <div className={styles.ModalContent}>
          {isLoading && (
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          )}
          <img src={src} alt={alt} onLoad={this.onImageLoad} />
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
