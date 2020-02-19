import {
  defaultFont,
  blackColor,
  grayColor,
  hexToRgb
} from "../../assets/jss/material-dashboard-react.js";

const brandStyle = () => ({
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
  logoLink: {
    ...defaultFont,
    textTransform: "uppercase",
    padding: "5px 0",
    display: "block",
    fontSize: "18px",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "30px",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&,&:hover": {
      color: blackColor
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
});

export default brandStyle;
