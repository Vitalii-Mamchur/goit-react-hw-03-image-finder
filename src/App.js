import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
  };

  componentDidMount() {}

  onChangeQuery = (query) => {
    const { currentPage } = this.state;
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&key=19964688-39e6ce365709953a823cd9b18&image_type=photo&orientation=horizontal&per_page=12&page=${currentPage}`
      )
      .then((res) => {
        // console.log(res.data.hits);
        this.setState({ hits: res.data.hits });
      });
    console.log(query);
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery hits={this.state.hits} />
      </>
    );
  }
}

export default App;
