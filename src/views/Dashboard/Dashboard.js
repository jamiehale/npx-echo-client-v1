import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CreateIcon from '@material-ui/icons/Create';
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";

import styles from "./dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <AddIcon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Add New Report</h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <SearchIcon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Report Archive</h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <TrendingUpIcon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Live Health Reports</h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <CreateIcon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Improvement Actions</h3>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
