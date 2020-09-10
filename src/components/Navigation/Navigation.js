import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/auth';

const useStyles = makeStyles(theme => ({
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    color: theme.palette.common.white
  },
  activeLink: {
    color: theme.palette.secondary.light
  }
}));

const Navigation = ({ isAuthenticated }) => {
  const classes = useStyles();

  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        <Button color="inherit">Home</Button>
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          <Button color="inherit">Contacts</Button>
        </NavLink>
      )}
    </nav>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);