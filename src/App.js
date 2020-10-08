import React from 'react';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts';
import {Provider} from './context';
import AddContact from './components/contacts/AddContact';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './App.css';

function App() {
  return (
    <Provider>
      <Router>
      <div className="App">
        <Header title="NITRO" />
        <Switch>
        <section className="container mt-5">
          <Route exact path="/" component={Contacts}/>
          <Route exact path="/contacts/add" component={AddContact}/>
          {/* <Route component={NotFound}/> */}
        </section>
        </Switch>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
