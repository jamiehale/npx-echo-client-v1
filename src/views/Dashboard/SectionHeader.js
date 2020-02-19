import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import styles from './tableStyle.js';

const useStyles = makeStyles(styles);

export const SectionHeader = ({
  title,
}) => {
  const classes = useStyles();

  return (
    <TableRow className={classes.tableBodyRow}>
      <TableCell className={classes.tableSectionHeader} colspan="7">{title}</TableCell>
    </TableRow>
  );
};

export default SectionHeader;
