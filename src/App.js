import React, { Component } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    currentImgObj: { largeUrl: "" },
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
  }

  onChangeQuery = (query) => {
    this.setState({ hits: [], searchQuery: query, currentPage: 1 });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&key=19964688-39e6ce365709953a823cd9b18&image_type=photo&orientation=horizontal&per_page=12&page=${currentPage}`
      )
      .then((res) => {
        // console.log(res.data.hits);
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...res.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
        this.scrollToButton();
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  scrollToButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { hits, isLoading, error, showModal, currentImgObj } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && alert("Oooops")}
        <ImageGallery hits={hits} onClick={this.toggleModal} />
        <div className="Container">
          {isLoading && (
            <Loader type="ThreeDots" color="#000000" height={80} width={80} />
          )}
          {shouldRenderLoadMoreButton && <Button onFetch={this.fetchHits} />}
        </div>
        {showModal && (
          <Modal
            src={currentImgObj.largeUrl}
            alt={currentImgObj.alt}
            onClose={this.toggleModal}
          ></Modal>
        )}
      </>
    );
  }
}

export default App;
