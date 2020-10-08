import React, { Component } from 'react'
import { context } from '../../context';
import Contact from './Contact';

class Contacts extends Component {
  render() {
    return (
      <context.Consumer>
        {value => {
          const { contacts } = value;
          return (
            <div>
              <div className="row justify-content-center mb-2">
                <h2 className="text-center text-secondary">Contact List</h2>
              </div>
              <div className="row">
                {contacts.map(element => (
                  <div key={element.id} className=" col-12 px-1">
                    <Contact contact={element} />
                  </div>
                ))}
              </div>
            </div>
          )
        }}
      </context.Consumer>
    )
  }
}

export default Contacts;