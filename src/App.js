import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './lib/Footer';
import Header from './lib/Header';
import Error404 from './lib/Error404';
import UserLogin from './lib/UserLogin';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <p>this is app</p>
            <Switch>
                  <Route exact path='/' component={UserLogin} />
                  <Route component={Error404} />
                </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
