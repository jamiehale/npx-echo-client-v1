import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import NewReportMenu from './NewReportMenu';

import styles from "./dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Switch>
      <Route exact path="/admin/dashboard">
        <Menu classes={classes} />
      </Route>
      <Route path="/admin/dashboard/reports/new">
        <NewReportMenu classes={classes} />
      </Route>
    </Switch>
  );
}
