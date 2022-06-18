import { FilmListItem } from "./FilmListItem";
import style from "./FilmList.module.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const FilmList = ({ movies, setFilmResult }) => {
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" && setFilmResult([]);
  }, []);

  return (
    <ul className={style.list}>
      {movies.map(({ title, id, poster_path }) => (
        <FilmListItem
          title={title}
          key={id}
          id={id}
          poster_path={poster_path}
        />
      ))}
    </ul>
  );
};
