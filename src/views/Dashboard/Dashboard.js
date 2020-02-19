import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WarningIcon from '@material-ui/icons/Warning';
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import ActionsTable from './ActionsTable';

import styles from "./dashboardStyle";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon";
import CardFooter from "../../components/Card/CardFooter";

const useStyles = makeStyles(styles);

const KpiCard = ({
  colour,
  icon,
  title,
  value,
  lastUpdated,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color={colour} stats icon>
        <CardIcon color={colour}>
          {icon}
        </CardIcon>
        <p className={classes.cardCategory}>{title}</p>
        <h3 className={classes.cardTitle}>{value}</h3>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <i className="material-icons">update</i> Last updated {lastUpdated}
        </div>
      </CardFooter>
    </Card>
  );
};

const ReponsibleSystemsIcon = () => (
  <i className="fas fa-project-diagram"></i>
);

const ReportsCompletedIcon = () => (
  <i className="fas fa-user-check"></i>
);

const Dashboard = () => {
  const [isActionsExpanded, setActionsExpanded] = useState(false);

  const handleToggleActionsExpanded = () => {
    setActionsExpanded(!isActionsExpanded);
  };

  return (
    <GridContainer>
      {isActionsExpanded ? (
        <GridItem xs={12} sm={12} md={12}>
          <ActionsTable
            isExpanded={true}
            onToggleExpand={handleToggleActionsExpanded}
          />
        </GridItem>
      ) : (
        <>
          <GridItem xs={12} sm={12} md={12}>
            <ActionsTable
              isExpanded={isActionsExpanded}
              onToggleExpand={handleToggleActionsExpanded}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <KpiCard
              colour="info"
              icon={<ReponsibleSystemsIcon />}
              title="Reponsible Systems"
              value={5}
              lastUpdated="yesterday"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <KpiCard
              colour="warning"
              icon={<WarningIcon />}
              title="Upcoming health reports"
              value={5}
              lastUpdated="yesterday"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <KpiCard
              colour="success"
              icon={<ReportsCompletedIcon />}
              title="Reports completed"
              value={5}
              lastUpdated="yesterday"
            />
          </GridItem>
        </>
      )}
    </GridContainer>
  );
};

export default Dashboard;
