import axios from "axios";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const movieBaseUrl = "https://api.themoviedb.org/3";

// https://api.themoviedb.org/3/trending/all/day?api_key=0c9a6f18917ec1bb52e881f5a3ca8db0

const getVideos = axios.get(
  `${movieBaseUrl}/trending/all/day?api_key=${API_KEY}`
);

const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const getMovieById = (id) =>
  axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

export default { getVideos, getMovieById };
