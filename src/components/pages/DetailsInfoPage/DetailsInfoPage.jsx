import { useEffect, useState, lazy } from "react";
import {
  useParams,
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { onDetailsFilmInfo } from "../../../api-service";

const CastPage = lazy(() => import("../CastPage"));
const ReviewsPage = lazy(() => import("../Reviews"));

export const DetailsInfoPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState("");
  const navigation = useNavigate();
  const location = useLocation();

  useEffect(() => {
    onDetailsFilmInfo(id).then(setFilm);
  }, [id]);

  const onGoBack = () => {
    navigation(location?.state?.from ?? "/");
  };

  return (
    <>
      <button type="button" onClick={onGoBack}>
        Назад к списку фильмов
      </button>
      {film && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
            alt=""
          ></img>
          <div>
            <h1>{film.title}</h1>
            <p>Users Vote {film.vote_average}</p>
            <h2>Overview</h2>
            <p> {film.overview}</p>
            <h2>Genres</h2>
            <p>{film.genres && film.genres.map(({ name }) => `${name} `)}</p>
          </div>
        </div>
      )}
      <ul>
        <li>
          <Link to={`/movies/${id}/cast`}> Cast </Link>
        </li>
        <li>
          <Link to={`/movies/${id}/reviews`}> Reviews </Link>
        </li>
      </ul>

      <Routes>
        <Route path={`cast`} element={<CastPage />} />
        <Route path={`reviews`} element={<ReviewsPage />}></Route>
      </Routes>
    </>
  );
};
