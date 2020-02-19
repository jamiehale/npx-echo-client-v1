import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ChartistGraph from "react-chartist";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from '../../components/Card/CardBody';

import styles from "./dashboardStyle";

const useStyles = makeStyles(styles);

const SystemHealthPieCard = () => {
  const classes = useStyles();

  return (
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
  );
};

export default SystemHealthPieCard;
