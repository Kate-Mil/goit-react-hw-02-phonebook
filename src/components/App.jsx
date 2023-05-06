import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filer from './Filter/Filter';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  formSubmitHandler = data => {
    const preCheck = this.state.contacts.some(
      contact => (contact.name === data.name) & (contact.number === data.number)
    );
    if (preCheck) {
      return alert(`Sorry, contact ${data.name} is already exists`);
    } else {
      const contact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <div style={{ paddingLeft: 15 }}>
        <h1 className="contact_title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className="contact__title">Contacts</h2>
        <Filer value={filter} onChange={this.changeFilter} />
        <ContactList visibleContacts={this.getVisibleContacts()} />
      </div>
    );
  }
}

export default App;
