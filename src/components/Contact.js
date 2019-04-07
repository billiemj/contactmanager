import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {};
  onShowClick = () => {
    console.log(this.state);
  };
  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3 ">
        <ul className="list=group list-group-flush ">
          <h4 className="card-title">
            {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />
          </h4>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
