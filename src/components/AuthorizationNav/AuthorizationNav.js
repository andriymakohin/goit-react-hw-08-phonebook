import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  link: {
    marginRight: theme.spacing(2),
    textDecoration: 'none',
    '&:last-of-type': {
      marginRight: 0
    }
  },

}));

const AuthorizationNav = () => {
  const classes = useStyles();

  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={classes.link}
      >
        <Button variant="contained" color="secondary">Sign Up</Button>
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={classes.link}
      >
        <Button variant="contained">Log In</Button>
      </NavLink>
    </div>
  )
};

export default AuthorizationNav;