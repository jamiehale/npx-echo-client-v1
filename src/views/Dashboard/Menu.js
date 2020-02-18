import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CreateIcon from '@material-ui/icons/Create';
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";

const Menu = ({
  classes,
}) => (
  <div>
    <GridContainer>
      <GridItem xs={12} sm={6} md={3}>
        <Link to="/admin/dashboard/reports/new">
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <AddIcon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Add New Report</h3>
            </CardHeader>
          </Card>
        </Link>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Link to="/admin/dashboard/reports">
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <SearchIcon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Report Archive</h3>
            </CardHeader>
          </Card>
        </Link>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Link to="/admin/dashboard/reports/live">
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <TrendingUpIcon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Live Health Reports</h3>
            </CardHeader>
          </Card>
        </Link>
      </GridItem>
      <GridItem xs={12} sm={6} md={3}>
        <Link to="/admin/dashboard/improvement-actions">
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <CreateIcon />
              </CardIcon>
              <h3 className={classes.cardTitle}>Improvement Actions</h3>
            </CardHeader>
          </Card>
        </Link>
      </GridItem>
    </GridContainer>
  </div>
);

export default Menu;
