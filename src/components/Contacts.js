import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Billie Muzzy",
        email: "billiemj@email.com",
        phone: "763-000-0000"
      },
      {
        id: 2,
        name: "Ben Muzzy",
        email: "muzz826@email.com",
        phone: "763-100-0000"
      },
      {
        id: 3,
        name: "Julieann Wheeler",
        email: "defa@email.com",
        phone: "763-200-0000"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
