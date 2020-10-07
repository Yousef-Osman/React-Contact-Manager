import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/Contacts';
import {Provider} from './context';
// import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Header title="NITRO" />
        <section className="container">
          <Contacts />
        </section>
      </div>
    </Provider>
  );
}

export default App;
