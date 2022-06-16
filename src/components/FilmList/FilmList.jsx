import FilmListItem from "./FilmListItem";
import style from "./FilmList.module.css";

export const FilmList = ({ movies }) => {
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
