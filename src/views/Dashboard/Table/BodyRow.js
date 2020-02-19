import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';

import styles from './tableStyle';

const useStyles = makeStyles(styles);

const BodyRow = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <TableRow className={classes.tableBodyRow}>
      {children}
    </TableRow>
  );
};

export default BodyRow;
