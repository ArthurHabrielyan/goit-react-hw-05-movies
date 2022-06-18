import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import style from "./FilmSearcher.module.css";

import { FilmList } from "../../FilmList";
export const FilmSearcher = ({ onSearchByQuery, filmsResult }) => {
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigation = useNavigate();

  const onSubmitSearcher = (event) => {
    event.preventDefault();
    navigation({
      pathname: location.pathname,
      search: `?query=${query}`,
    });
    onSearchByQuery(query);
  };

  const onSearcherValueChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form className={style.form} onSubmit={onSubmitSearcher}>
        <input
          type="text"
          value={query}
          onChange={onSearcherValueChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      {filmsResult.length > 0 && <FilmList movies={filmsResult} />}
      <Outlet />
    </div>
  );
};
