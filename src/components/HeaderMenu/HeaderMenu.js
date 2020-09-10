import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import AuthorizationNav from '../AuthorizationNav/AuthorizationNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { authSelectors } from '../../redux/auth';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));

const HeaderMenu = ({ isAuthenticated }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthorizationNav />}
      </Toolbar>
    </AppBar>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(HeaderMenu);