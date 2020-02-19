import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from 'react-router-dom';
import ReportArchive from './ReportArchive';
import SelectReportType from './SelectReportType';
import SystemHealthReportFlow from './SystemHealthReportFlow';

import styles from "./reportsStyle";

const useStyles = makeStyles(styles);

export default function Reports() {
  const classes = useStyles();

  return (
    <Switch>
      <Route exact path="/admin/reports">
        <ReportArchive classes={classes} />
      </Route>
      <Route exact path="/admin/reports/new">
        <SelectReportType classes={classes} />
      </Route>
      <Route path="/admin/reports/new/system-health-report">
        <SystemHealthReportFlow />
      </Route>
    </Switch>
  );
}
