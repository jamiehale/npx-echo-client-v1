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
      <a
        href="https://www.creative-tim.com?ref=mdr-sidebar"
        className={
          classNames(
            classes.logoLink,
            {
              [classes.logoLinkRTL]: rtlActive
            }
          )
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  );
};

export default Brand;
