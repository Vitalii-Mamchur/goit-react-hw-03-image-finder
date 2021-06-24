// import React, { Component } from "react";
// import { createPortal } from "react-dom";
// import styles from "./Modal.module.css";
// // import Loader from "react-loader-spinner";

// const modalRoot = document.querySelector("#modal-root");

// class Modal extends Component {
//   state = {
//     isImageLoading: true,
//   };

//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleKeyDown);
//   }

//   handleKeyDown = (e) => {
//     if (e.code === "Escape") {
//       this.props.onClose();
//       this.setState({ isImageLoading: true });
//     }
//   };

//   handleBackdropClick = (event) => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//       this.setState({ isImageLoading: true });
//     }
//   };

//   onImageLoad = () => {
//     this.setState({ isImageLoading: false });
//   };

//   render() {
//     const { src, alt } = this.props;
//     console.log(this.props);
//     return createPortal(
//       <div className={styles.Overlay} onClick={this.handleBackdropClick}>
//         <div className={styles.Modal}>
//           {/* {this.state.isImageLoading && (
//             <Loader type="Watch" color="#fff" height={500} width={500} />
//           )} */}
//           <img src={src} alt={alt} onLoad={this.onImageLoad} />
//           {this.props.children}
//         </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

// export default Modal;

import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    console.log("componentWillUpdate");
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;