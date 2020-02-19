import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cell from './Cell';

import styles from './tableStyle';

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

const InputCell = ({
  value,
}) => {
  const classes = useStyles();

  return (
    <Cell additionalClasses={[classes[classFromValue(value)]]}>{value}</Cell>
  );
};

export default InputCell;
