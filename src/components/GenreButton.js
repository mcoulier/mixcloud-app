import React from "react";
import Genre from "../assets/genres.json";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    textShadow: "1px 1px #c01010",
    color: "#374491",
    fontSize: "50px",
  },
  buttonContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  },
}));

export default function GenreButton({ setGenre }) {
  const classes = useStyles();
  const genresJSON = Genre.data;

  return (
    <>
      <Typography className={classes.title}>MUSIC SEARCH</Typography>
      <div className={classes.buttonContainer}>
        {genresJSON &&
          genresJSON.map((genre) => {
            return (
              <Button
                onClick={(e) => {
                  setGenre(genre.name);
                }}
                variant="contained"
                color="primary"
                key={genre.id}
              >
                {genre.name}
              </Button>
            );
          })}
      </div>
    </>
  );
}
