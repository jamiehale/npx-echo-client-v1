import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";

import styles from "./dashboardStyle";

const useStyles = makeStyles(styles);

const data = [
  ['System', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Component', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Request', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['System', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Component', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Request', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['System', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Component', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Request', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
];

export default function Dashboard() {
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Actions</h4>
          </CardHeader>
          <CardBody style={{
          maxHeight: '220px',
          overflowY: 'scroll',
        }}>
            <Table
              tableHeaderColor="primary"
              tableHead={['Type', 'Date Received', 'By Whom', 'Date Due', 'Priority', 'Labelling Section']}
              tableData={data}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
