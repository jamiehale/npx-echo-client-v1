import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CreateIcon from '@material-ui/icons/Create';
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";

const SelectReportType = ({
  classes,
}) => (
  <div>
    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <Link to="/admin/dashboard/reports/new/system-health-report">
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <AddIcon />
              </CardIcon>
              <h3 className={classes.cardTitle}>System Health Report</h3>
            </CardHeader>
          </Card>
        </Link>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Link to="/admin/dashboard/reports/new/component-health-report">
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <AddIcon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Component Health Report</h3>
            </CardHeader>
          </Card>
        </Link>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Link to="/admin/dashboard/reports/new/plant-health-report">
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <AddIcon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Plant Health Report</h3>
            </CardHeader>
          </Card>
        </Link>
      </GridItem>
    </GridContainer>
  </div>
);

const NewReportFlow = ({
  classes,
}) => {
  return (
    <Switch>
      <Route exact path="/admin/dashboard/reports/new">
        <SelectReportType classes={classes} />
      </Route>
    </Switch>
  );
};

export default NewReportFlow;
