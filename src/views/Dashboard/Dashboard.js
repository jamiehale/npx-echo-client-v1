import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  return (
    <h2>Howdy</h2>
  );
}
