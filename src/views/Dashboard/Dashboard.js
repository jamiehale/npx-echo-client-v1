import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WarningIcon from '@material-ui/icons/Warning';
import ChartistGraph from "react-chartist";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import ActionsTable from './ActionsTable';

import styles from "./dashboardStyle";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from '../../components/Card/CardBody';
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
  const classes = useStyles();
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
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="primary" className={classes.systemHealthPie}>
                <ChartistGraph
                  className="ct-chart"
                  data={{
                    series: [
                      {
                        value: 8,
                      },
                      {
                        value: 10,
                      },
                      {
                        value: 12,
                      },
                      {
                        value: 9,
                      }
                    ]
                  }}
                  type="Pie"
                  options={{
                    width: '200px',
                    height: '200px',
                  }}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Total System Health Breakdown</h4>
              </CardBody>
            </Card>
          </GridItem>
        </>
      )}
    </GridContainer>
  );
};

export default Dashboard;
