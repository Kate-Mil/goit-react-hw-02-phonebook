import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactForm/ContactList';
import ContactForm from './ContactForm/ContactForm';
class App extends Component {
  state = {
    contacts: [],
    // name: '',
    // number: '',
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

  render() {
    const { contacts } = this.state;
    return (
      <div style={{ paddingLeft: 15 }}>
        <h1 className="contact_title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className="contact__title">Contacts</h2>
        <ul className="contact__list">
          {contacts.map(contact => (
            <ContactList
              key={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
