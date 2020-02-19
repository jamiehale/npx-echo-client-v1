import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Table from './Table';
import SectionHeader from './SectionHeader';
import InputRow from './InputRow';

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
                <Table units={[0,1,2,3,4]}>
                  <SectionHeader title="Functional Failures" />
                  <InputRow title="Number of Functional Failures" values={[2, 1, 4, 0, 3]} />
                  <InputRow title="Outstanding Functional Failure Corrective Actions" values={[2, 1, 4, 0, 3]} />

                  <SectionHeader title="Maintenance Backlog" />
                  <InputRow title="ODMB (On-Line Deficient Maintenance Backlog)" values={[2, 1, 4, 0, 3]} />
                  <InputRow title="SDMB (Shutdown Deficient Maintenance Backlog)" values={[2, 1, 4, 0, 3]} />
                  <InputRow title="OCMB (on-line corrective maintenance backlog)" values={[2, 1, 4, 0, 3]} />
                  <InputRow title="SCMB (shutdown corrective maintenance backlog)" values={[2, 1, 4, 0, 3]} />
                  <InputRow title="Predefines - total of late and deferred" values={[2, 1, 4, 0, 3]} />

                  <SectionHeader title="Operational Challenges" />
                  <InputRow title="Number of Technical Operability Evaluations (TOEs)" values={[2, 1, 4, 0, 3]} />
                  <InputRow title="Regdoc 3.1.1 Reportable Events	" values={[2, 1, 4, 0, 3]} />

                  <SectionHeader title="Engineering" />
                  <InputRow title="Operator Workarounds" values={[2, 1, 4, 0, 3]} />
                  <InputRow title="Operator Burdens" values={[2, 1, 4, 0, 3]} />
                  <InputRow title="TMODs > 6 months" values={[2, 1, 4, 0, 3]} />
                  <InputRow title="Temporary Configuration Change Backlog > 90 days" values={[2, 1, 4, 0, 3]} />
                  <InputRow title="Modification Backlog" values={[2, 1, 4, 0, 3]} />

                  <SectionHeader title="Total Health" />
                  <InputRow title="Total System Health" values={[2, 1, 4, 0, 3]} />
                </Table>
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
