import React, { useState, useRef, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbars/Navbar';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';
import usePerfectScrollbar from '../../hooks/perfect-scrollbar';
import useStupidResizeCloseSidebar from '../../hooks/stupid-resize-close-sidebar';

import routes from '../../routes';

import styles from './adminStyle.js';

import bgImage from '../../assets/img/sidebar-2.jpg';
import logo from '../../assets/img/reactlogo.png';

const switchRoutes = (
  <Switch>
    {routes.map((route, i) => {
      if (route.layout === '/admin') {
        return (
          <Route
            path={route.layout + route.path}
            component={route.component}
            key={route.layout + route.path}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

const Admin = (props) => {
  const classes = useStyles();
  const ref = useRef();
  usePerfectScrollbar(ref);
  const [mobileOpen, setMobileOpen] = useState(false);

  const onCloseSidebar = useCallback(() => {
    setMobileOpen(false);
  }, [setMobileOpen]);
  
  useStupidResizeCloseSidebar(onCloseSidebar);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={routes}
        logoText="ECHO"
        logo={logo}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color="blue"
        {...props}
      />
      <div className={classes.mainPanel} ref={ref}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...props}
        />
        <div className={classes.map}>{switchRoutes}</div>
      </div>
    </div>
  );
};

export default Admin;
