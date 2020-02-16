import React from 'react';
import classNames from 'classnames';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Hidden from '@material-ui/core/Hidden';
import Poppers from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Person from '@material-ui/icons/Person';
import { Card, CardContent } from '@material-ui/core';
import Button from 'components/CustomButtons/Button';

const Profile = ({
  classes,
  openProfile,
  handleClickProfile,
  handleCloseProfile,
}) => (
  <div className={classes.manager}>
    <Button
      color={window.innerWidth > 959 ? "transparent" : "white"}
      justIcon={window.innerWidth > 959}
      simple={!(window.innerWidth > 959)}
      aria-owns={openProfile ? "profile-menu-list-grow" : null}
      aria-haspopup="true"
      onClick={handleClickProfile}
      className={classes.buttonLink}
    >
      <Person className={classes.icons} />
      <Hidden mdUp implementation="css">
        <p className={classes.linkText}>Profile</p>
      </Hidden>
    </Button>
    <Poppers
      open={Boolean(openProfile)}
      anchorEl={openProfile}
      transition
      disablePortal
      className={
        classNames({ [classes.popperClose]: !openProfile }) +
        " " +
        classes.popperNav
      }
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          id="profile-menu-list-grow"
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom"
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleCloseProfile}>
              <Card>
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  HALE, Jamie
                </Typography>
                <Typography variant="body2" component="p">
                  Last login: 2020-02-14
                </Typography>
                </CardContent>
              </Card>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Poppers>
  </div>
);

export default Profile;
