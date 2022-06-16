import { Link, useLocation } from "react-router-dom";
import style from "./FilmListItem.module.css";

export const FilmListItem = ({ title, id, poster_path }) => {
  const location = useLocation();
  const poster = `https://image.tmdb.org/t/p/w300/${poster_path}`;
  return (
    <Link
      className={style.link}
      to={`/movies/${id}`}
      state={{ from: location }}
    >
      <li className={style.item}>
        <img src={poster} alt="" />
        <p className={style.film_name}>{title}</p>
      </li>
    </Link>
  );
};
