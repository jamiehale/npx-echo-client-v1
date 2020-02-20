import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { makeStyles } from "@material-ui/core/styles";
import ChartistGraph from "react-chartist";
import Chartist from 'chartist';
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from '../../components/Card/CardBody';
import CardIcon from '../../components/Card/CardIcon';

import styles from "./dashboardStyle";
import CardFooter from '../../components/Card/CardFooter';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

const useStyles = makeStyles(styles);

const data = [
  {
    date: new Date('2020-01-01'),
    values: [5, 2],
  },
  {
    date: new Date('2020-01-02'),
    values: [10, 3],
  },
  {
    date: new Date('2020-01-03'),
    values: [15, 5],
  },
  {
    date: new Date('2020-01-04'),
    values: [17, 12],
  },
  {
    date: new Date('2020-01-05'),
    values: [19, 16],
  },
  {
    date: new Date('2020-01-06'),
    values: [21, 18],
  },
  {
    date: new Date('2020-01-07'),
    values: [22, 21],
  },
];

const Container = styled.div`
  display: inline-block;
  padding-right: 8px;
  i {
    margin-right: 4px;
    color: ${({colour}) => colour};
    border: 1px solid ${({drawBorder}) => (drawBorder ? 'grey' : 'white')};
    border-radius: 50%;
  }
`;

const LegendItem = ({
  colour,
  drawBorder = false,
  children,
}) => (
  <Container colour={colour} drawBorder={drawBorder}>
    <i className="fa fa-circle" />
    {children}
  </Container>
);

const SystemHealthLineCard = () => {
  const classes = useStyles();

  return (
    <Card chart>
      <CardHeader color="info" stats icon>
        <CardIcon color="info">
          <i className="material-icons">timeline</i>
        </CardIcon>
        <h4 className={classes.cardTitlePieChart}>Performance History</h4>
      </CardHeader>
      <CardBody className={classes.systemHealthLine}>
        <ChartistGraph
          className="ct-chart"
          data={{
            labels: data.map(datum => moment(datum.date).format('MMM D')),
            series: [
              data.map(datum => datum.values[0]),
              data.map(datum => datum.values[1]),
            ],
          }}
          type="Line"
          options={{
            lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
            }),
            low: 0,
            height: '200px',
            fullWidth: true,
            chartPadding: {
              top: 0,
              right: 20,
              bottom: 0,
              left: 0
            },
          }}
        />
      </CardBody>
      <CardFooter stats>
        <GridContainer>
          <GridItem xs={12}>
            <h4 className={classes.cardCategory}>LEGEND</h4>
          </GridItem>
          <GridItem xs={12}>
            <LegendItem colour="#ef5350">Total Assigned Tasks</LegendItem>
            <LegendItem colour="#26c6da">Number of Tasks Completed</LegendItem>
          </GridItem>
        </GridContainer>
      </CardFooter>
    </Card>
  );
};

export default SystemHealthLineCard;
