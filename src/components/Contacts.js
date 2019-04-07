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

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
