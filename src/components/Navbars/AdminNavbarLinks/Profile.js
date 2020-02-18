import React, { useState } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Person from '@material-ui/icons/Person';
import Button from '../../CustomButtons/Button';

const Profile = ({
  classes,
}) => {
  const [achorEl, setAnchorEl] = useState(null);
  
  const handleClickProfile = event => {
    if (achorEl && achorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const isOpen = Boolean(achorEl);

  return (
    <div className={classes.manager}>
      <Button
        color={window.innerWidth > 959 ? "transparent" : "white"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-owns={isOpen ? "profile-menu-list-grow" : null}
        aria-haspopup="true"
        onClick={handleClickProfile}
        className={classes.buttonLink}
      >
        <Person className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>Profile</p>
        </Hidden>
      </Button>
    </div>
  );
};

export default Profile;
