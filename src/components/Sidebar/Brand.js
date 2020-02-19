import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  grayColor,
  hexToRgb
} from "../../assets/jss/material-dashboard-react.js";
import logo from '../../assets/img/reactlogo.png';

const useStyles = makeStyles(() => ({
  logo: {
    position: "relative",
    padding: "15px 15px",
    zIndex: "4",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "rgba(" + hexToRgb(grayColor[6]) + ", 0.3)"
    },
    '& p': {
      padding: 0,
      margin: 0,
    }
  },
  logoImage: {
    width: "30px",
    display: "inline-block",
    maxHeight: "30px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  img: {
    width: "35px",
    top: "22px",
    verticalAlign: "middle",
    border: "0"
  },
}));

const Brand = () => {
  const classes = useStyles();

  return (
    <div className={classes.logo}>
      <div className={classes.logoImage}>
        <img src={logo} alt="logo" className={classes.img} />
      </div>
      <p>ECHO</p>
    </div>
  );
};

export default Brand;
