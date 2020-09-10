import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

import withTheme from '../hoc/withTheme';
import { LIGHT } from '../../constants';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    top: 30,
    right: 20,
    zIndex: 1
  }
}));

const ThemeSwitch = ({ myTheme }) => {
  const classes = useStyles();
  const { type, toggleTheme } = myTheme;

  return (
    <div className={classes.root}>
      <Switch
        checked={type === LIGHT}
        onChange={toggleTheme}
        color="primary"
        name="checkTheme"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>

  )
};

export default withTheme(ThemeSwitch);