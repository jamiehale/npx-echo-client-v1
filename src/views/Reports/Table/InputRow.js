import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BodyRow from './BodyRow';
import Cell from './Cell';
import InputCell from './InputCell';
import BodyRowTitleCell from './BodyRowTitleCell';

//import styles from './tableStyle';

//const useStyles = makeStyles(styles);

const InputRow = ({
  title,
  values,
}) => {
  //const classes = useStyles();

  return (
    <BodyRow>
      <BodyRowTitleCell title={title} />
      {values.map((value, i) => (
        <InputCell value={value} />
      ))}
      <Cell>
        <Button>View</Button>
      </Cell>
    </BodyRow>
  );
};

export default InputRow;
