import axios from "axios";

const URL = "https://pixabay.com/api/";
const KEY = "19964688-39e6ce365709953a823cd9b18";

export default function fetchPhotosAPI(searchQuery, currentPage) {
  return axios
    .get(
      `${URL}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${currentPage}`
    )
    .then((res) => res.data);
}
