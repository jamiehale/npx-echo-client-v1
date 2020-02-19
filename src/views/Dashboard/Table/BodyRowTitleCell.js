import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cell from './Cell';

import styles from './tableStyle';

const useStyles = makeStyles(styles);

const BodyRowTitleCell = ({
  title,
}) => {
  const classes = useStyles();

  return (
    <Cell>{title}</Cell>
  );
};

export default BodyRowTitleCell;
