import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import Settings from './Settings';
import Notifications from './Notifications';
import Profile from './Profile';

import styles from './headerLinksStyle';

const useStyles = makeStyles(styles);

const AdminNavbarLinks = () => {
  const classes = useStyles();

  return (
    <div>
      <Search classes={classes} />
      <Settings classes={classes} />
      <Notifications classes={classes} />
      <Profile classes={classes} />
    </div>
  );
};

export default AdminNavbarLinks;
