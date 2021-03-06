import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    background: "#1d1d1d",
    padding: "2px",
  },
}));

export default function Footer (){
  const classes = useStyles();

  return <footer className={classes.footer}>2021</footer>;
};
