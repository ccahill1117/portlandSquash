import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './lib/Footer';
import Header from './lib/Header';
import Error404 from './lib/Error404';
import UserRegistration from './lib/UserRegistration';
import Scores from './lib/Scores';
import Profile from './lib/Profile';
import matchComponent from './lib/matchComponent';
import Team from './lib/Team';
import Legal from './lib/Legal';
import SmigelYusem from './lib/SmigelYusem';
import UserSignIn from './lib/UserSignIn';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, ImplicitCallback } from '@okta/okta-react';
import { withAuth } from '@okta/okta-react';
import ScoresForm from './lib/ScoresForm';

import Navigation from './lib/Navigation';
import LandingPage from './lib/Landing';
import SignUpPage from './lib/SignUp';
import SignInPage from './lib/SignIn';
import PasswordForgetPage from './lib/PasswordForget';
import HomePage from './lib/Home';
import AccountPage from './lib/Account';
import AdminPage from './lib/Admin';
import { withFirebase } from './lib/Firebase';

const config = {
  issuer: 'https://dev-816756.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '{0oabr696vWGka8xg6356}'
}

var appStyle = {
  padding: '20px',
  margin: '20px',
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

componentDidMount() {
  this.listener = this.props.firebase.auth.onAuthStateChanged(
    authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    }
  );
}

componentWillUnmount() {
  this.listener();
}


  render() {
    return (
      <div style={appStyle} className="App">
        <Header />
          <Navigation authUser={this.state.authUser} />

          <hr />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route exact path="/home" component={PasswordForgetPage} />
          <Route exact path="/account" component={HomePage} />
          <Route exact path="/admin" component={AccountPage} />
          <Route exact path="/pw-forget" component={AdminPage} />
        </Switch>


        <Footer />

      </div>
    );
  }
}

export default withFirebase(App);
