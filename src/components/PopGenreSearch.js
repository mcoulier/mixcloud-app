import React from "react";
import { useEffect, useState } from "react";
import { GenreButton } from "./GenreButton";
import { LinearProgress } from "@material-ui/core";

export const PopGenreSearch = () => {
  const [genre, setGenre] = useState("");
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://api.mixcloud.com/discover/${genre}/popular/?limit=10`;

  useEffect(() => {
    setIsLoading(true);
    async function fetchUrl() {
      try {
        let response = await fetch(url);
        setIsLoading(false);
        console.log(isLoading);
        response = await response.json();
        console.log(response.data);
        setPopular(response.data);
      } catch (err) {
        alert(err);
        setIsLoading(false);
      }
    }
    fetchUrl();
  }, [url]);

  return (
    <div>
      <GenreButton setGenreName={setGenre} value={genre} />
      <h1>Top 10 {genre}</h1>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <div>
          {popular &&
            popular.map((mix, mixIndex) => (
              <li key={mixIndex}>
                <img src={mix.pictures.large} alt={mix.name} />
                <h2>{mix.name}</h2>
                <h3>
                  <img src={mix.user.pictures.small} alt={mix.user.name} />
                  {mix.user.name}
                </h3>
                <ul>
                  {mix.tags.map((tag, tagIndex) => (
                    <p key={tagIndex}>{mix.tags[tagIndex].name}</p>
                  ))}
                </ul>
                <p>Plays: {mix.play_count}</p>
                <p>{mix.url}</p>
                <br />
              </li>
            ))}
        </div>
      )}
    </div>
  );
};
