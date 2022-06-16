import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { onCastData } from "../../../api-service";

export const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCastData = async () => {
      try {
        const castItems = await onCastData(id);
        setCast(castItems.cast);
      } catch (error) {
        alert("Ooops...something break");
      }
    };
    getCastData();
  }, [id]);

  return (
    <>
      {cast.map(({ id, character, name, profile_path }) => {
        const posterImg = `https://image.tmdb.org/t/p/w200${profile_path}`;
        return (
          <li key={id}>
            <img src={posterImg} alt="" />
            <h3>{name}</h3>
            <p>Character : {character}</p>
          </li>
        );
      })}
    </>
  );
};
