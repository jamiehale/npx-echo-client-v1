import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import Hidden from '@material-ui/core/Hidden';
import Button from 'components/CustomButtons/Button';

const Settings = ({
  classes,
}) => (
  <div className={classes.manager}>
    <Button
      color={window.innerWidth > 959 ? 'transparent' : 'white'}
      justIcon={window.innerWidth > 959}
      simple={!(window.innerWidth > 959)}
      aria-label="Settings"
      className={classes.buttonLink}
    >
      <SettingsIcon className={classes.icons} />
      <Hidden mdUp implementation="css">
        <p className={classes.linkText}>Settings</p>
      </Hidden>
    </Button>
  </div>
);

export default Settings;
