import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import styles from './tableStyle.js';

const useStyles = makeStyles(styles);

const classFromValue = (value) => {
  if (value < 2) {
    return 'tableCellGreen';
  }
  if (value === 2) {
    return 'tableCellWhite';
  }
  if (value === 3) {
    return 'tableCellYellow';
  }
  return 'tableCellRed';
};

const InputRow = ({
  title,
  values,
}) => {
  const classes = useStyles();

  return (
    <TableRow className={classes.tableBodyRow}>
      <TableCell className={classes.tableCell}>{title}</TableCell>
      {values.map((value, i) => (
        <TableCell className={classNames(classes.tableCell, classes[classFromValue(value)])}>{value}</TableCell>
      ))}
      <TableCell className={classes.tableCell}>
        <Button>View</Button>
      </TableCell>
    </TableRow>
  );
};

export default InputRow;
