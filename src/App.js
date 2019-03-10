import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './lib/Footer';
import Header from './lib/Header';
import Error404 from './lib/Error404';
import UserRegistration from './lib/UserRegistration';
import Landing from './lib/Landing';
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



  render() {
    return (
      <div style={appStyle} className="App">
        <Header />
          <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/scores' component={Scores} />
                <Route exact path='/userReg' component={UserRegistration} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/smigel' component={SmigelYusem} />



                <Route component={Error404} />
              </Switch>

        <Footer />
        <UserSignIn />
      </div>
    );
  }
}

export default App;
