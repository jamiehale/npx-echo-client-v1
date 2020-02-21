import React, { useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { makeStyles } from "@material-ui/core/styles";
import FullScreenIcon from '@material-ui/icons/Fullscreen';
import FullScreenExitIcon from '@material-ui/icons/FullscreenExit';
import Table from "./components/Table.js";
import TableRow from './components/TableRow';
import TableCell from './components/TableCell';
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const statusFromId = id => (['green', 'white', 'yellow', 'red'][id % 4]);

const action = (id, type) => ({
  id,
  escalated: false,
  type,
  dateReceived: '2020-01-01',
  byWhom: 'SCHMOE, Joe',
  dateDue: '2020-01-02',
  priority: '9',
  status: statusFromId(id),
});

const allActions = [
  action(0, 'System'),
  action(1, 'Component'),
  action(2, 'Request'),
  action(3, 'System'),
  action(4, 'Component'),
  action(5, 'Request'),
  action(6, 'System'),
  action(7, 'Component'),
  action(8, 'Request'),
  action(9, 'System'),
  action(10, 'Component'),
  action(11, 'Request'),
  action(12, 'System'),
  action(13, 'Component'),
  action(14, 'Request'),
  action(15, 'System'),
  action(16, 'Component'),
  action(17, 'Request'),
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

const useActions = (initialActions) => {
  const [actions, setActions] = useState(initialActions);

  const escalate = (id) => {
    setActions(actions.map(action => (action.id === id ? ({
      ...action,
      escalated: true,
    }) : action)));
  };

  const unescalatedActions = actions.filter(action => !action.escalated);

  return [
    unescalatedActions,
    escalate,
  ];
};

const StatusBlock = styled.div`
  background-color: ${({theme, status}) => theme.statusColours[status]};
  width: ${({theme}) => theme.spacing[6]}px;
  height: ${({theme}) => theme.spacing[4]}px;
  border: 1px solid ${({theme, status}) => theme.statusBorders[status]};
  border-radius: 6px;
`;

const StatusTableCell = ({
  status,
}) => (
  <TableCell>
    <StatusBlock status={status} />
  </TableCell>
);

const ActionsTable = ({
  isExpanded,
  onToggleExpand,
}) => {
  const [unescalatedActions, escalate] = useActions(allActions);
  const classes = useStyles();

  const handleClickEscalate = id => () => {
    escalate(id);
  };

  return (
    <Card>
      <CardHeader color="info">
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
          columnNames={['Escalate', 'Type', 'Date Received', 'By Whom', 'Date Due', 'Priority', 'System Health Indication']}
        >
          {unescalatedActions.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox value={false} onChange={handleClickEscalate(row.id)}>Something</Checkbox>
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.dateReceived}</TableCell>
              <TableCell>{row.byWhom}</TableCell>
              <TableCell>{row.dateDue}</TableCell>
              <TableCell>{row.priority}</TableCell>
              <StatusTableCell status={row.status} />
            </TableRow>
          ))}
        </Table>
      </CardBody>
    </Card>
  );
};

export default ActionsTable;
