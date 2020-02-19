import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// core components
import styles from './tableStyle.js';
import { Button } from '@material-ui/core';

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

export const InputRow = ({
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

CustomTable.defaultProps = {
  tableHeaderColor: 'gray'
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default CustomTable;
