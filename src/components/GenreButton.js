import React from "react";
import Genre from "../assets/genres.json";
import { Button } from "@material-ui/core";

export const GenreButton = (props) => {
  const genresJSON = Genre.data;

  return (
    <div className="genreButton">
      {genresJSON && genresJSON.map((genre) => {
        return (
          <Button
            onClick={(e) =>
                props.setGenreName(genre.name)
            }
            variant="outlined"
            size="medium"
            color="primary"
            key={genre.id}
          >
            {genre.name}
          </Button>
        );
      })}
    </div>
  );
};
