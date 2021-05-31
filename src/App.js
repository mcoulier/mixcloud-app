import React, { useState } from "react";

import Footer from "./components/Footer";
import { PopGenreSearch } from "./components/PopGenreSearch";
import { SearchMix } from "./components/SearchMix";
import { makeStyles } from "@material-ui/core/styles";
import GenreButton from "./components/GenreButton";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#262626",
    overflowX: "hidden",
  },
}));

function App() {
  const classes = useStyles();
  const [genre, setGenre] = useState("funk");

  return (
    <div className={classes.root}>
      <GenreButton setGenre={setGenre} />
      <PopGenreSearch genre={genre} />
      {/*       <SearchMix />
       */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
