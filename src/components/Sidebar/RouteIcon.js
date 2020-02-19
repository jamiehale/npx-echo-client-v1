import React from 'react';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';
import { makeStyles } from "@material-ui/core/styles";

import styles from './routeIconStyle.js';
const useStyles = makeStyles(styles);

const RouteIcon = ({
  route,
  isActiveRoute,
}) => {
  const classes = useStyles();

  const whiteFontClasses = classNames({
    [classes.whiteFont]: isActiveRoute
  });

  return (typeof route.icon === "string") ? (
    <Icon
      className={classNames(classes.itemIcon, whiteFontClasses)}
    >
      {route.icon}
    </Icon>
  ) : (
    <route.icon
      className={classNames(classes.itemIcon, whiteFontClasses)}
    />
  );
};

export default RouteIcon;
