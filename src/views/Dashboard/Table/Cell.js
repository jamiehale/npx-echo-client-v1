import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import styles from './tableStyle';

const useStyles = makeStyles(styles);

const Cell = ({
  children,
  additionalClasses,
}) => {
  const classes = useStyles();

  return (
    <TableCell className={classNames(classes.tableCell, additionalClasses)}>
      {children}
    </TableCell>
  );
};

export default Cell;
