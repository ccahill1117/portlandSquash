import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './lib/Home';

import { Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Navigation from './lib/shared/Navigation';
import HomePage from './lib/home/HomePage';
import RegistrationForm from './lib/auth/RegistrationForm';
import config from './app.config';
import LoginPage from './lib/auth/LoginPage';
import ProfilePage from './lib/auth/ProfilePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <main>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route path="/register" component={RegistrationForm} />
          <SecureRoute path="/profile" component={ProfilePage} />
        </main>

      </div>
    );
  }
}

export default App;
