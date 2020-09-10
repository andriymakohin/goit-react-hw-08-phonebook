import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Box from '@material-ui/core/Box';

import styles from './FormWrap.module.css'

const FormWrap = ({ children }) => {

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={800}
      classNames={styles}
      unmountOnExit
    >
      <Box maxWidth={300}>
        {children}
      </Box>
    </CSSTransition>
  );
};

FormWrap.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormWrap;