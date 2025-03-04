import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "11937915d20a080aeb5761f924ad73f5";

// https://api.themoviedb.org/3/trending/all/day?api_key=0c9a6f18917ec1bb52e881f5a3ca8db0

const getVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
);

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=11937915d20a080aeb5761f924ad73f5";

const getMovieById = (id) =>
  axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default { getVideos, getMovieById };
