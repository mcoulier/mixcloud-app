import React from "react";
import { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    textShadow: "1px 1px #c01010",
    color: "#374491",
    fontSize: "35px",
    marginTop: "40px",
  },
  topList: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  },
  spinner: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  topListItem: {
    backgroundColor: "#333333",
    width: "300px",
    margin: "10px",
    padding: "10px",
    textAlign: "center",
  },
}));

export const PopGenreSearch = ({ genre }) => {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const url = `https://api.mixcloud.com/discover/${genre}/popular/?limit=10&offset=${offset}`;
  const classes = useStyles();

  useEffect(() => {
    setIsLoading(true);
    async function fetchUrl() {
      try {
        let response = await fetch(url);
        setIsLoading(false);
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

  const handleNext = () => {
    setOffset(offset + 10);
  };

  return (
    <>
      <Typography className={classes.title}>Top 10 {genre}</Typography>
      {isLoading ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.topList}>
          {popular.map((mix, mixIndex) => (
            <div key={mixIndex} className={classes.topListItem}>
              <img src={mix.pictures.medium} alt={mix.name} />
              <Typography>{mix.name}</Typography>
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
      {!isLoading && (
        <Button variant="contained" color="primary" onClick={handleNext}>
          NEXT
        </Button>
      )}
    </>
  );
};
