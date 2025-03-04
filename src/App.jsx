import "./App.css";
import Categories from "./components/Categories.jsx";
import Header from "./components/Header.jsx";
import Slider from "./components/Slider.jsx";
import GenreListMoovies from "./components/GenreListMoovies";
function App() {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <GenreListMoovies />
    </>
  );
}

export default App;
