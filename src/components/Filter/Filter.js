import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { CSSTransition } from 'react-transition-group';

import phonebookActions from '../../redux/phonebook/phonebookActions';
import contactsSelector from '../../redux/phonebook/contactsSelectors';

import styles from './Filter.module.css'

const Filter = ({ contacts, value, onChange }) => {
  return (
    <CSSTransition
      in={contacts.length > 1}
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <Box marginBottom={2}>
        <Typography variant="h6">Find contacts by name</Typography>
        <TextField
          variant="outlined"
          type="text"
          name="filter"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </Box>
    </CSSTransition>
  )

};


const mapStateToProps = state => ({
  contacts: contactsSelector.getContacts(state),
  value: contactsSelector.getFilter(state),
});

const mapDispatchToprops = {
  onChange: phonebookActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToprops)(Filter);