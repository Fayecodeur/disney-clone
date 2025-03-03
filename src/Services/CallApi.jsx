import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const getVideos = async () => {
  try {
    const response = await axios.get(`${movieBaseUrl}/trending/all/day`, {
      params: { api_key: API_KEY },
    });
    return response.data.results;
  } catch (error) {
    console.error("Erreur API:", error);
    return [];
  }
};

// Export par défaut ✅
export default getVideos;
