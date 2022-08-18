import { Component } from "react";
import { nanoid } from 'nanoid'
import { ContactForm, Contacts, Filter } from 'components';
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
    name: '',
    number: ''
  }

  addContact = (data) => {
    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        ...data
      }
      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  }


  removeContacts = (id) => {
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
    const { addContact, removeContacts, searchName, showContacts } = this

    return (
      <div className={ s.container }>
        <h2>PhoneBook</h2>
        <ContactForm onSubmit={ addContact } />
        <h2>Contacts</h2>
        <Filter searchName={ searchName } />
        <Contacts
          contacts={ showContacts() }
          removeContacts={ removeContacts } />
      </div>
    );
  }
}


