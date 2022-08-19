import { Component } from "react";
import Notiflix from 'notiflix';
import { ContactForm, ContactList, Filter } from 'components';
import s from "./Contacts.module.scss"

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitDataForm = data => {
    const { contacts } = this.state;
    if (contacts.find(el => el.name === data.name)) {
      Notiflix.Report.warning(
        `Warning`,
        `${data.name} is already in cotacts`,
        'Confirm'
      );
      return;
    }
    Notiflix.Notify.success('You have a new Contact');
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  removeContacts = (id) => {
    Notiflix.Notify.failure('You delete the contact')
    this.setState(({ contacts }) => {
      const newBooks = contacts.filter(item => item.id !== id);
      return {
        contacts: newBooks,
      }
    })
  }

  searchName = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  showContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(cont => cont.name.toLowerCase().includes(filter));
  };


  render() {
    const { removeContacts, searchName, showContacts, submitDataForm } = this
    const { filter } = this.state;

    return (
      <div className={ s.container }>
        <h2>PhoneBook</h2>
        <ContactForm onSubmit={ submitDataForm } />
        <h2>Contacts</h2>
        <Filter value={ filter } searchName={ searchName } />
        <ContactList
          contacts={ showContacts() }
          removeContacts={ removeContacts } />
      </div>
    );
  }
}


