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

export default function Header () {
  const classes = useStyles();

  return <header className={classes.footer}>2021</header>;
};