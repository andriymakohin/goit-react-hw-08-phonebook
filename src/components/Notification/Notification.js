import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

const Notification = ({ open, type, message, handleClose }) => {
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <MuiAlert elevation={6} variant="filled" severity={type} onClose={handleClose}>{message}</MuiAlert>
    </Snackbar>
  )
};

Notification.propTypes = {
  open: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'info', 'success']),
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

Notification.defaultProps = {
  type: 'error'
};

export default Notification;