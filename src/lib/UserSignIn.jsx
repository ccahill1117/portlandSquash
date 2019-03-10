import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import OktaSignIn from '@okta/okta-signin-widget';

var Backbone = require('backbone');


export default class UserSignIn extends React.Component{
  constructor(){
    super();
    this.state = { user: null };
    this.widget = new OktaSignIn({
      baseUrl: 'https://https://dev-816756.okta.com',
      clientId: '[0oabr696vWGka8xg6356]',
      redirectUri: 'http://localhost:8080/implicit/callback',
      authParams: {
      responseType: 'id_token'
      }
    });
    this.showLogin = this.showLogin.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount(){
    this.widget.session.get((response) => {
      if(response.status !== 'INACTIVE'){
        this.setState({user:response.login});
      }else{
        this.showLogin();
      }
    });
  }
  showLogin(){
    Backbone.history.stop();
    this.widget.renderEl({el:this.loginContainer},
      (response) => {
        this.setState({user: response.claims.email});
      },
      (err) => {
        console.log(err);
      }
    );
  }
  logout(){
    this.widget.signOut(() => {
      this.setState({user: null});
      this.showLogin();
    });
  }
  render(){
    return(
      <div>
        {this.state.user ? (
          <div className="container">
            <div>Welcome, {this.state.user}!</div>
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : null}
        {this.state.user ? null : (
          <div ref={(div) => {this.loginContainer = div; }} />
        )}
      </div>
    );
  }
}
