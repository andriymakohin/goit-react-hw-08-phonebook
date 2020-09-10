import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';

import styles from './Alert.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 100,
    width: '85%',
    [theme.breakpoints.up('sm')]: {
      width: '45%'
    }
  }
}));


const Alert = ({ show, onHide, text }) => {
  const classes = useStyles();

  return (
    <CSSTransition in={show}
      timeout={250}
      classNames={styles}
      onEntered={() => setTimeout(onHide, 2000)}
      unmountOnExit>
      <MuiAlert className={classes.root} elevation={6} variant="filled" severity="error">{text}</MuiAlert>
    </CSSTransition>
  )
};

Alert.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Alert;