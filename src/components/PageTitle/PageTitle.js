import React from 'react';
import Typography from '@material-ui/core/Typography';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import styles from './PageTitle.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 36
    }
  }
}));

const PageTitle = ({ title }) => {
  const classes = useStyles();

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={styles}
      unmountOnExit
    >

      <Typography className={classes.root} variant="h2" color="primary">{title}</Typography>
    </CSSTransition>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;