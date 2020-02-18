import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import SelectReportType from './SelectReportType';
import SystemHealthReportFlow from './SystemHealthReportFlow';

import styles from "./dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Switch>
      <Route exact path="/admin/dashboard">
        <Menu classes={classes} />
      </Route>
      <Route exact path="/admin/dashboard/reports/new">
        <SelectReportType classes={classes} />
      </Route>
      <Route path="/admin/dashboard/reports/new/system-health-report">
        <SystemHealthReportFlow />
      </Route>
    </Switch>
  );
}
