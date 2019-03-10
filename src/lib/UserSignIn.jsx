import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


function UserSignIn(){
  var signInStyle = {
    borderStyle : 'solid',
    margin: '10px',
    padding: '10px',
  }

  var OktaSignIn = require('@okta/okta-signin-widget');

  var signIn = new OktaSignIn(
    {
      baseUrl: 'https://{https://dev-816756.okta.com}',
      el: '#osw-container'
    }
  );

  signIn.showSignInToGetTokens({
    clientId: '{{0oabr696vWGka8xg6356}}',
    redirectUri: '{{http://localhost:8080/implicit/callback}}',

    // Return an access token from the authorization server
    getAccessToken: true,

    // Return an ID token from the authorization server
    getIdToken: true,

    scope: 'openid profile',

  });



  return (
    <div style={signInStyle}>

      <div id="osw-container">

      </div>


    </div>
  )

}

export default UserSignIn;
