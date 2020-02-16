import {
  whiteColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

const routeIconStyle = theme => ({
  itemIcon: {
    width: "24px",
    height: "30px",
    fontSize: "24px",
    lineHeight: "30px",
    float: "left",
    marginRight: '15px',
    textAlign: "center",
    verticalAlign: "middle",
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
    [theme.breakpoints.up('md')]: {
      marginRight: '0',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '15px',
    },
  },
  itemIconRTL: {
    marginRight: "3px",
    marginLeft: "15px",
    float: "right"
  },
});

export default routeIconStyle;
