import React from 'react';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// core components
import styles from './tableStyle';

const useStyles = makeStyles(styles);

const CustomTable = ({
  units,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableHead className={classes.primaryTableHeader}>
          <TableRow className={classes.tableHeadRow}>
            <TableCell className={classNames(classes.tableCell, classes.tableHeadCell)}>Performance Indicator</TableCell>
            {units.map(unit => (
              <TableCell className={classNames(classes.tableCell, classes.tableHeadCell)}>{`Unit ${unit}`}</TableCell>
            ))}
            <TableCell className={classNames(classes.tableCell, classes.tableHeadCell)}>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;
