import React from 'react';

import ThemeContext from '../../context/ThemeContext';

const withTheme = WrappedComponent => {
  return function WithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {theme => <WrappedComponent {...props} myTheme={theme} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;