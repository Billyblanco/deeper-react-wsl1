import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/LoginForm'
import AnotherForm from './components/AnotherForm'
import LoginFormWithRP from './components/LoginFormWithRP'
import PropsChildren from './components/PropsChildren'
import SecretComponent from './components/SecretComponent'
import OnOffButton from './components/OnOffButton'
import ApplicationForm from './components/ApplicationForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LoginForm />
        <AnotherForm />
        <LoginFormWithRP />
        <PropsChildren>
          <p>aloha everyone</p>
          <div>asldfkjasdlfkjasdlkfj</div>
        </PropsChildren>
        <SecretComponent isAuthenticated={true}/>
        <OnOffButton />
        <ApplicationForm />

      </div>
    );
  }
}

export default App;
