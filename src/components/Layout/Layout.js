import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles, ThemeProvider, useTheme, createMuiTheme } from '@material-ui/core/styles';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import withTheme from '../hoc/withTheme';
import { LIGHT } from '../../constants';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const useStyles = makeStyles(theme => ({
  wrap: {
    position: 'relative',
    minHeight: '100vh',
    padding: theme.spacing(7, 5),
    overflow: 'hidden'
  }
}));

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const Layout = ({ children, myTheme }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <ThemeProvider theme={myTheme.type === LIGHT ? theme : darkTheme}>
      <CssBaseline />
      <Container maxWidth="md">
        <HeaderMenu />
        <Paper className={classes.wrap} square>
          <ThemeSwitch />
          {children}
        </Paper>
      </Container>
    </ThemeProvider>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}


export default withTheme(Layout);