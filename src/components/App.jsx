import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
class App extends Component {
  render() {
    return (
      <div style={{ paddingLeft: 15 }}>
        <h1 className="Contact_title">Phonebook</h1>
        <ContactForm />
        <h2 className="Contact__title">Contacts</h2>
        <ul className="Contact__list"></ul>
      </div>
    );
  }
}

export default App;
