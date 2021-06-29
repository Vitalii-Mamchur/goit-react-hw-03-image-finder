import React, { Component } from "react";
import "./styles.css";
import fetchPhotosAPI from "./services/photosAPI";
import Loader from "react-loader-spinner";
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
    currentImgObj: { largeUrl: "", alt: "" },
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits(this.state.searchQuery);
    }
  }

  onChangeQuery = (query) => {
    this.setState({ hits: [], searchQuery: query, currentPage: 1 });
  };

  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });

    fetchPhotosAPI(searchQuery, currentPage)
      .then(({ hits }) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
        if (this.state.hits.length === 0) {
          alert("Oooops, enter the correct request");
        }
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

  handleClickGalleryItem = (e) => {
    const largeUrl = e.target.lowsrc;
    const alt = e.target.alt;

    this.setState({ currentImgObj: { largeUrl, alt } });
    this.toggleModal();
  };

  render() {
    const { hits, isLoading, error, showModal, currentImgObj } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />

        {error && <p>Whoops, something went wrong: {error.message}</p>}

        {hits.length > 0 && (
          <ImageGallery hits={hits} onClick={this.handleClickGalleryItem} />
        )}
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
      </div>
    );
  }
}

export default App;
