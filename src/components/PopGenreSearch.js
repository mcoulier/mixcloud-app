import React from "react";
import { useEffect, useState } from "react";
import { GenreButton } from "./GenreButton";
import { LinearProgress } from "@material-ui/core";
import { Button } from "@material-ui/core";

export const PopGenreSearch = (props) => {
  const [genre, setGenre] = useState("funk");
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const url = `https://api.mixcloud.com/discover/${genre}/popular/?limit=10&offset=${offset}`;

  useEffect(() => {
    setIsLoading(true);
    async function fetchUrl() {
      try {
        let response = await fetch(url);
        setIsLoading(false);
        response = await response.json();
        console.log(response.paging.next);
        console.log(response.data);
        setPopular(response.data);
      } catch (err) {
        alert(err);
        setIsLoading(false);
      }
    }
    fetchUrl();
  }, [url]);

  const handleNext = () => {
    setOffset(offset + 10);
  };

  return (
    <>
      <h1>MUSIC SEARCH</h1>
      <GenreButton setGenreName={setGenre} offset={setOffset}/>
      <h1>Top 10 {genre}</h1>
      {isLoading ? (
        <LinearProgress className="loadingBar" />
      ) : (
        <div className="popList2">
          {popular.map((mix, mixIndex) => (
            <div
              key={mixIndex}
              className="popListItem"
              onClick={() => console.log(`clicky ${mixIndex}`)}
            >
              <img src={mix.pictures.large} alt={mix.name} />
              <h3>{mix.name}</h3>
              {mix.tags.map((tag, tagIndex) => (
                <ul className="tags" key={tagIndex}>
                  {mix.tags[tagIndex].name}
                </ul>
              ))}
              <br />
              <a href={mix.url} target="_blank" rel="noreferrer">
                Listen!
              </a>
              <br />
              <h3 className="popUser">
                <img src={mix.user.pictures.small} alt={mix.user.name} />
                {mix.user.name}
              </h3>
            </div>
          ))}
        </div>
      )}
      <Button variant="contained" color="primary" onClick={handleNext}>
        NEXT
      </Button>
    </>
  );
};
