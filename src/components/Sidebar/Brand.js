import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import styles from './brandStyle.js';
const useStyles = makeStyles(styles);

const Brand = ({
  logo,
  logoText,
  rtlActive,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.logo}>
      <div className={classes.logoImage}>
        <img src={logo} alt="logo" className={classes.img} />
      </div>
      <p>{logoText}</p>
    </div>
  );
};

export default Brand;
