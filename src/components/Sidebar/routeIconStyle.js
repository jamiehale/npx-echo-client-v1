import {
  blackColor,
  hexToRgb
} from "../../assets/jss/material-dashboard-react.js";

const routeIconStyle = theme => ({
  itemIcon: {
    width: "24px",
    height: "30px",
    fontSize: "24px",
    lineHeight: "30px",
    float: "left",
    marginRight: '0',
    textAlign: "center",
    verticalAlign: "middle",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.8)",
  },
});

export default routeIconStyle;
