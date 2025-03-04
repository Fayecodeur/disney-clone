import { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import CallApi from "../Services/CallApi";
import CardTitle from "./CardTitle";
import Card from "./Card";

function MovieList({ genreId, indexId }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    CallApi.getMovieById(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      {/* Conteneur principal avec flex pour centrer le contenu */}
      <div className="relative flex items-center justify-center">
        {/* Flèche de gauche */}
        <IoChevronBackOutline
          onClick={() => slideLeft(elementRef.current)}
          className={`text-[50px] text-white p-2 z-10 cursor-pointer absolute left-[-40px] md:left-[-60px] 
            ${
              indexId % 3 === 0 ? "top-[50%]" : "top-[50%]"
            } transform -translate-y-1/2`}
        />

        {/* Conteneur du slider */}
        <div
          ref={elementRef}
          className="flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-4 px-3 pb-4 w-full"
        >
          {movieList.map((item, index) => (
            <>
              {indexId % 3 === 0 ? (
                <CardTitle key={index} movie={item} />
              ) : (
                <Card key={index} movie={item} />
              )}
            </>
          ))}
        </div>

        {/* Flèche de droite */}
        <IoChevronForwardOutline
          onClick={() => slideRight(elementRef.current)}
          className={`text-[50px] text-white p-2 cursor-pointer z-10 absolute right-[-40px] md:right-[-60px] 
            ${
              indexId % 3 === 0 ? "top-[50%]" : "top-[50%]"
            } transform -translate-y-1/2`}
        />
      </div>
    </div>
  );
}

export default MovieList;
