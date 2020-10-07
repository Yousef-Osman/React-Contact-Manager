import React, { Component } from 'react'
import { context } from '../context';
import Contact from './Contact';

class Contacts extends Component {
    render() {
        return (
            <context.Consumer>
                {value => {
                    const {contacts} = value;
                    return (
                        <div className="row mt-4">
                            {contacts.map(element => (
                                <div key={element.id} className=" col-12 px-1">
                                    <Contact contact={element}/>
                                </div>
                            ))}
                        </div>
                    )
                }}
            </context.Consumer>
        )
    }
}

export default Contacts;