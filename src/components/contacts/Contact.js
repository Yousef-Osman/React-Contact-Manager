import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { context } from '../../context';


class Contact extends Component {
    static propTypes = {
        contact: PropTypes.object.isRequired,
    };

    state = {
        displayInfo: false
    }

    toggleContact = () => {
        this.setState({
            displayInfo: !this.state.displayInfo
        });

    }

    deleteContact = (id, dispatch) => {
        const action = {
            type: 'DELETE_CONTACT',
            payload: id
        }
        dispatch(action);
    }

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { displayInfo } = this.state;

        return (
            <context.Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card bg-light mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <h5 className="card-title col" role="button" onClick={this.toggleContact}>{name}
                                        {displayInfo ? (<i className="fas fa-caret-up ml-1"></i>) : (<i className="fas fa-caret-down ml-1"></i>)}
                                    </h5>
                                    <div className="col">
                                        <i className="fa fa-times times-btn" onClick={this.deleteContact.bind(this, id, dispatch)}></i>
                                    </div>
                                </div>
                                {displayInfo ? (
                                    <ul className="list-group">
                                        <li className="list-group-item">Email: {email}</li>
                                        <li className="list-group-item">Phone: {phone}</li>
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    );
                }}
            </context.Consumer>
        )
    }
}

export default Contact;