const API_KEY = "40435ef3acb8f6da32bfa6c21057cf43";
const HTTP = "https://api.themoviedb.org/3/";

const onTrendingFilms = () => {
  return fetch(`${HTTP}trending/movie/day?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => data.results);
};

const onQueryFilms = (query) => {
  return fetch(
    `${HTTP}search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) => data.results);
};

const onDetailsFilmInfo = (id) => {
  return fetch(`${HTTP}movie/${id}?api_key=${API_KEY}`).then((response) =>
    response.json()
  );
};

const onCastData = (id) => {
  return fetch(
    `${HTTP}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
};

const onGetReviews = (id) => {
  return fetch(`
${HTTP}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    .then((response) => response.json())
    .then((reviews) => reviews.results);
};

export {
  onTrendingFilms,
  onQueryFilms,
  onDetailsFilmInfo,
  onCastData,
  onGetReviews,
};
