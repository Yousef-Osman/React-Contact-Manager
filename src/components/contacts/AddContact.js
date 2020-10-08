import React, { Component } from 'react';
import { context } from '../../context';
import uuid from 'react-uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    error: {}
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone, error } = this.state;

    if (name === '') {
      this.setState({
        error: { name: 'name is required' }
      });
      return;
    }

    if (email === '') {
      this.setState({
        error: { email: 'email is required' }
      });
      return;
    }

    if (phone === '') {
      this.setState({
        error: { phone: 'phone is required' }
      });
      return;
    }

    const newContact = {
      id: uuid(),
      name,   //same as name: name,
      email,
      phone,
      error
    }

    const action = {
      type: 'ADD_CONTACT',
      payload: newContact
    }

    dispatch(action);

    this.setState({
      name: '',
      email: '',
      phone: '',
      error: {}
    })

    this.props.history.push('/');
  }

  render() {
    const { name, email, phone, error } = this.state;
    return (
      <context.Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="d-flex justify-content-center">
              <div className="col-lg-6 col-md-10">
                <div className="card mb-3">
                  <div className="card-header">
                    <h5 className="text-dark">Add new Contact</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.submitForm.bind(this, dispatch)}>

                      <TextInputGroup name="name" label="Full Name" value={name} error={error.name}
                        onValueChange={this.onValueChange} placeholder="Enter your name" />
                      <TextInputGroup name="email" label="Email" value={email} error={error.email}
                        onValueChange={this.onValueChange} type="email" placeholder="Enter your email" />
                      <TextInputGroup name="phone" label="Phone Number" value={phone} error={error.phone}
                        onValueChange={this.onValueChange} placeholder="Enter your phone number" />
                      <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-block" value="Submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </context.Consumer>
    )
  }
}

export default AddContact;