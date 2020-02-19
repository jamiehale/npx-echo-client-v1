import React from 'react';
import classNames from 'classnames';
import { makeStyles } from "@material-ui/core/styles";
import FullScreenIcon from '@material-ui/icons/Fullscreen';
import FullScreenExitIcon from '@material-ui/icons/FullscreenExit';
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import { Button, Typography } from '@material-ui/core';

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
  ['System', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Component', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Request', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['System', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Component', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Request', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['System', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Component', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
  ['Request', '2020-01-01', 'SCHMOE, Joe', '2020-01-02', '9', 'Critical'],
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
  },
  scrollingTable: {
    maxHeight: '220px',
    overflowY: 'scroll',
  },
  fullScreenTable: {
    height: 'calc(100vh - 200px)',
    maxHeight: '100%',
    overflowY: 'scroll',
  },
  flexCardTop: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  whiteIcon: {
    color: 'white',
  },
};

const useStyles = makeStyles(styles);

const ActionsTable = ({
  isExpanded,
  onToggleExpand,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color="primary">
        <div className={classes.flexCardTop}>
          <h4 className={classes.cardTitleWhite}>Actions</h4>
          <Button onClick={onToggleExpand}>
            {isExpanded ? (
              <FullScreenExitIcon className={classes.whiteIcon} />
            ) : (
              <FullScreenIcon className={classes.whiteIcon} />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardBody className={classNames({
        [classes.scrollingTable]: !isExpanded,
        [classes.fullScreenTable]: isExpanded,
      })}>
        <Table
          tableHeaderColor="primary"
          tableHead={['Type', 'Date Received', 'By Whom', 'Date Due', 'Priority', 'Labelling Section']}
          tableData={data}
        />
      </CardBody>
    </Card>
  );
};

export default ActionsTable;
