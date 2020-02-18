import React from 'react';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Table from '../../components/Table/Table';
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const indicators = [
  'Number of Functional Failures',
  'Outstanding Functional Failure Corrective Actions',
  'ODMB (On-Line Deficient Maintenance Backlog)',
  'SDMB (Shutdown Deficient Maintenance Backlog)',
  'OCMB (on-line corrective maintenance backlog)',
  'SCMB (shutdown corrective maintenance backlog)',
  'Predefines - total of late and deferred',
  'Number of Technical Operability Evaluations (TOEs)',
  'Regdoc 3.1.1 Reportable Events',
  'Operator Workarounds',
  'Operator Burdens',
  'TMODs > 6 months',
  'Temporary Configuration Change Backlog > 90 days',
  'Modification Backlog',
  'Total System Health',
];

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

const HealthIndicatorsPage = ({
  report,
  onSubmit,
  onCancel,
}) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Station Summary</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["Performance Indicator", "Unit 0", "Unit 1", "Unit 2", "Unit 3", "Unit 4", "Details"]}
                  tableData={indicators.map(indicator => ([
                    indicator, '2', '1', '4', '0', '3', 'Nope'
                  ]))}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12}>
              <Button onClick={onCancel}>Back</Button>
              <Button variant="contained" color="primary" type="submit">Submit</Button>
            </GridItem>
        </GridContainer>
      </form>
    </div>
  );
};

export default HealthIndicatorsPage;
