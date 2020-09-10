import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { authSelectors, authOperations } from '../../redux/auth';

class UserMenu extends Component {
  state = {
    isMenuOpen: false,
    anchorEl: null
  }

  handleManuOpen = e => {
    return this.setState({
      isMenuOpen: true,
      anchorEl: e.currentTarget
    })
  }

  handleManuClose = () => {
    return this.setState({
      isMenuOpen: false,
      anchorEl: null
    })
  }

  handleLogout = () => {
    this.handleManuClose();
    this.props.onLogout();
  }

  render() {
    const { isMenuOpen, anchorEl } = this.state;
    const { name, email } = this.props;

    return (
      <>
        <Button
          aria-label="account of current user"
          aria-haspopup="true"
          onClick={this.handleManuOpen}
          color="inherit"
          startIcon={<AccountCircle />}
        >
          {name}
        </Button>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={this.handleManuClose}
        >
          <MenuItem>{email}</MenuItem>
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
      </>
    )
  }
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  email: authSelectors.getUserEmail(state)
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(UserMenu);