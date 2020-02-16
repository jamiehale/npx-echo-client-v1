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
  const [openNotification, setOpenNotification] = useState(null);
  const [openProfile, setOpenProfile] = useState(null);

  const handleClickNotification = event => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };

  const handleCloseNotification = () => {
    setOpenNotification(null);
  };

  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };

  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  return (
    <div>
      <Search classes={classes} />
      <Settings classes={classes} />
      <Notifications
        classes={classes}
        openNotification={openNotification}
        handleClickNotification={handleClickNotification}
        handleCloseNotification={handleCloseNotification}
      />
      <Profile
        classes={classes}
        openProfile={openProfile}
        handleClickProfile={handleClickProfile}
        handleCloseProfile={handleCloseProfile}
      />
    </div>
  );
};

export default AdminNavbarLinks;
