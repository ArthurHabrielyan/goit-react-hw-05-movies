import { onTrendingFilms, onQueryFilms } from "./api-service";
import { useState, useEffect, lazy, Suspense } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import { HeaderNav } from "./components/Header";
import { Container } from "./Container";
import { FilmList } from "./components/FilmList";
// const FilmList = lazy(() => import("./components/FilmList"));
const DetailsInfopage = lazy(() =>
  import("./components/pages/DetailsInfoPage")
);
const FilmSearcher = lazy(() => import("./components/pages/FilmSearcher"));

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filmsResult, setFilmResult] = useState([]);
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    onGetMovies();
  }, []);

  const onGetMovies = async () => {
    try {
      const data = await onTrendingFilms();
      setMovies(data);
    } catch (error) {
      alert("Ooops...something break");
    }
  };

  const onSearchByQuery = async (queryValue) => {
    try {
      const queryResult = await onQueryFilms(queryValue);
      setFilmResult(queryResult);
    } catch (error) {
      alert("Ooops...something break");
    }
  };

  return (
    <div>
      {location.pathname === "/goit-react-hw-05-movies/" &&
        (location.pathname = "/")}
      <HeaderNav />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<FilmList movies={movies} />} />
            <Route path="/movies/:id/*" element={<DetailsInfopage />}></Route>
            <Route
              path="/movies/*"
              element={
                <FilmSearcher
                  filmsResult={filmsResult}
                  onSearchByQuery={onSearchByQuery}
                />
              }
            />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
};

export default App;
