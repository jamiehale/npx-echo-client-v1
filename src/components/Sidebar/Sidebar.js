/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { NavLink, useRouteMatch } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// core components

import Brand from './Brand';
import RouteIcon from './RouteIcon';

import styles from "./sidebarStyle.js";

const useStyles = makeStyles(styles);

const Sidebar = ({
  color,
  image,
  routes,
  open,
  handleDrawerToggle,
}) => {
  const classes = useStyles();
  const { url } = useRouteMatch('/admin/:path');
  
  const isActiveRoute = route => url === `${route.layout}${route.path}`;

  const links = routes.map((route, i) => (
    <NavLink
      to={route.layout + route.path}
      className={
        classNames(
          classes.item,
          {
            [classes.displayOnMobileOnly]: route.displayOnMobileOnly,
          },
        )
      }
      activeClassName="active"
      key={i}
    >
      <ListItem
        button
        className={
          classNames(
            classes.itemLink,
            {
              [classes[color]]: isActiveRoute(route),
            }
          )
        }
      >
        <RouteIcon
          route={route}
          isActiveRoute={isActiveRoute(route)}
        />
        <ListItemText
          primary={route.name}
          className={
            classNames(
              classes.itemText,
              {
                [classes.whiteFont]: isActiveRoute(route),
              }
            )
          }
          disableTypography={true}
        />
      </ListItem>
    </NavLink>
  ));

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="right"
          open={open}
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <Brand />
          <div className={classes.sidebarWrapper}>
            <List className={classes.list}>
              {links}
            </List>
          </div>
          {image && (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          )}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor="left"
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper)
          }}
        >
          <Brand />
          <div className={classes.sidebarWrapper}>
            <List className={classes.list}>
              {links}
            </List>
          </div>
          {image && (
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
          )}
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  handleDrawerToggle: PropTypes.func,
  bgColor: PropTypes.oneOf(["purple", "blue", "green", "orange", "red"]),
  image: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool
};

export default Sidebar;
