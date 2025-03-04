import { useEffect, useState, useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CallApi from "../Services/CallApi";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";

export default function Slider() {
  const [moviesList, setMoviesList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Gère l'indice de l'image actuelle
  const imageSliderRef = useRef();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    CallApi.getVideos.then((resp) => {
      setMoviesList(resp.data.results);
    });
  };

  const sliderRight = () => {
    if (currentIndex < moviesList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Recommence depuis la première image quand on atteint la fin
    }
  };

  const sliderLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(moviesList.length - 1); // Reviens à la dernière image si on est au début
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
        style={{ height: "500px" }}
      >
        {moviesList.map((item, index) => (
          <div
            key={index}
            className={`relative w-full flex-shrink-0 h-full mr-5 rounded-md hover:border-[4px] border-gray-200 cursor-pointer transition-all ${
              index === currentIndex ? "block" : "hidden"
            }`} // Affiche uniquement l'image correspondant à currentIndex
          >
            <img
              src={`${IMAGE_BASE_URL}${item.backdrop_path}`}
              alt="image film"
              className="w-full h-full object-conver"
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
