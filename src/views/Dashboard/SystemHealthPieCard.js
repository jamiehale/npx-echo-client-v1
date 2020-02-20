import React from 'react';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import ChartistGraph from "react-chartist";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from '../../components/Card/CardBody';
import CardIcon from '../../components/Card/CardIcon';

import styles from "./dashboardStyle";
import CardFooter from '../../components/Card/CardFooter';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

const useStyles = makeStyles(styles);

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

const SystemHealthPieCard = () => {
  const classes = useStyles();

  return (
    <Card chart>
      <CardHeader color="danger" stats icon>
        <CardIcon color="danger">
          <i className="material-icons">pie_chart</i>
        </CardIcon>
        <h4 className={classes.cardTitlePieChart}>Total System Health Breakdown</h4>
      </CardHeader>
      <CardBody className={classes.systemHealthPie}>
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
      </CardBody>
      <CardFooter stats>
        <GridContainer>
          <GridItem xs={12}>
            <h4 className={classes.cardCategory}>LEGEND</h4>
          </GridItem>
          <GridItem xs={12}>
            <LegendItem colour="green">Low Safety/Security Significance</LegendItem>
            <LegendItem colour="white" drawBorder>Low to Moderate Safety/Security Significance</LegendItem>
            <LegendItem colour="yellow">Substantial Safety/Security Significance</LegendItem>
            <LegendItem colour="red">High Safety/Security Significance</LegendItem>
          </GridItem>
        </GridContainer>
      </CardFooter>
    </Card>
  );
};

export default SystemHealthPieCard;
