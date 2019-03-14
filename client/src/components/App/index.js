import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Smigel from '../SmigelYusem';
import Players from '../Players';
import Teams from '../Teams';
import Profile from '../Profile';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <div style={{
          textAlign: 'center',

        }}>
      <img src="http://portlandsquash.org/graphics/logo_racquet_shadow.png"></img>
      </div>
      <hr />
    <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.SMIGEL} component={Smigel} />
      <Route path={ROUTES.PLAYERS} component={Players} />
      <Route path={ROUTES.TEAMS} component={Teams} />


    </div>
  </Router>
);

export default withAuthentication(App);
