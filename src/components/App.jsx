import React, { Component } from 'react';
// import css from '.ContactForm/ContactForm.module.css';
import ContactForm from './ContactForm/ContactForm';
class App extends Component {
  state = {
    contacts: [],
    // name: '',
    // number: '',
  };
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div style={{ paddingLeft: 15 }}>
        <h1 className="Contact_title">Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className="Contact__title">Contacts</h2>
        <ul className="Contact__list"></ul>
      </div>
    );
  }
}

export default App;
