import React, { useState, useRef, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbars/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import usePerfectScrollbar from '../../hooks/perfect-scrollbar';
import useStupidResizeCloseSidebar from '../../hooks/stupid-resize-close-sidebar';

import routes from '../../routes';

import styles from './adminStyle.js';

const switchRoutes = routes.filter(route => route.layout === '/admin')
  .map((route, i) => (
    <Route
      path={route.layout + route.path}
      component={route.component}
      key={route.layout + route.path}
    />
  ));

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
        <div className={classes.map}>
          <Switch>
            {switchRoutes}
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Admin;
