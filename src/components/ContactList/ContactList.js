import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import List from '@material-ui/core/List';

import ContactListItem from '../ContactListItem';
import phonebookOperations from '../../redux/phonebook/phonebookOperations';
import contactsSelectors from '../../redux/phonebook/contactsSelectors';


import styles from './ContactList.module.css';

class ContactList extends Component {

  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts } = this.props;

    if (contacts.length < 0) {
      return null;
    }

    return (
      <TransitionGroup component={List} style={{ maxWidth: '400px' }}>
        {contacts.map(({ id }) => {
          return (
            <CSSTransition key={id} timeout={250} classNames={styles}>
              <ContactListItem
                key={id}
                id={id}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    )
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getVisibleContacts(state)
});

const mapDispatchToprops = {
  onFetchContacts: phonebookOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToprops)(ContactList);