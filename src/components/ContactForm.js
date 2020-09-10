import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import phonebookOperations from '../redux/phonebook/phonebookOperations'
import FormWrap from './FormWrap/FormWrap';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    })

  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name && number) {
      this.props.onCreateContact(this.state.name, String(this.state.number));
      return this.setState({ name: '', number: '' });
    }

    return null;
  };


  render() {
    const { name, number } = this.state;

    return (
      <FormWrap>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="name-field"
            label="Name"
            variant="outlined"
            fullWidth
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
            margin="normal"
          />
          <TextField
            id="number-field"
            label="Number"
            variant="outlined"
            fullWidth
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Add contact
          </Button>
        </form>
      </FormWrap>
    )
  }
}

const mapDispatchToprops = {
  onCreateContact: phonebookOperations.addContact,
};

export default connect(null, mapDispatchToprops)(ContactForm);