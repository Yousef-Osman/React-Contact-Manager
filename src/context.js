import React, { Component } from 'react'
// import axios from 'axios'

export const context = React.createContext();

const reducer = (action, state) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        default:
            return state;
    }
};

export class Provider extends Component {

    state = {
        contacts: [
            // {
            //     id: 1,
            //     name: 'Adam Vector',
            //     email: 'adam@gmail.com',
            //     phone: '01222222222'
            // },
            // {
            //     id: 2,
            //     name: 'Lili Evans',
            //     email: 'lili@gmail.com',
            //     phone: '01215163151'
            // },
            // {
            //     id: 3,
            //     name: 'Tarek Galal',
            //     email: 'tarek@gmail.com',
            //     phone: '01911651315'
            // }
        ],
        dispatch: action => this.setState(state => reducer(action, state))
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            this.setState({contacts: data.slice(0, 4)});
        })

        // axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(response => this.setState({contacts: response.data}));
    }

    render() {
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        )
    }
}
