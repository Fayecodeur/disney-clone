import React, { useEffect, useState, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { getVideos } from "../Services/CallApi.jsx";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function Slider() {
  const [moviesList, setMoviesList] = useState([]);
  const imageSliderRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuellement affichée

  const getMovies = async () => {
    try {
      const resp = await getVideos();
      setMoviesList(resp);
    } catch (error) {
      console.error("Erreur lors de la récupération des films :", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const sliderRight = () => {
    if (currentIndex < moviesList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Revenir au début si on atteint la fin
    }
  };

  const sliderLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(moviesList.length - 1); // Aller à la fin si on est au début
    }
  };

  return (
    <section>
      <div className="relative">
        {/* Flèche gauche */}
        <MdKeyboardArrowLeft
          onClick={sliderLeft}
          className="text-white text-[40px] absolute mx-8 mt-[250px] z-50 cursor-pointer"
        />
        {/* Flèche droite */}
        <MdKeyboardArrowRight
          onClick={sliderRight}
          className="text-white text-[40px] absolute mx-8 mt-[250px] z-50 cursor-pointer right-0"
        />
      </div>

      {/* Conteneur des images */}
      <div
        className="flex overflow-x-hidden w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={imageSliderRef}
        style={{ height: "90vh" }} // Réduit la hauteur à 80% de la hauteur de la fenêtre
      >
        {moviesList.map((item, index) => (
          <div
            key={index}
            className={`relative w-full flex-shrink-0 h-full mr-5 rounded-md hover:border-[4px] border-gray-200 cursor-pointer transition-all ${
              index === currentIndex ? "block" : "hidden"
            }`} // Affiche l'image correspondant à currentIndex
          >
            <img
              src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
              alt="image film"
              className="w-full h-full object-cover object-center"
            />
            <h2 className="font-semibold text-white text-4xl absolute bottom-[2rem] left-[2rem]">
              {item.name ? item.name : item.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
