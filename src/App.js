import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Footer from './lib/Footer';
import Header from './lib/Header';
import Error404 from './lib/Error404';
import UserRegistration from './lib/UserRegistration';
import Landing from './lib/Landing';
import Scores from './lib/Scores';



class App extends Component {



  render() {
    return (
      <div className="App">
        <Header />
          <Switch>
                <Route exact path='/' component={Landing} />
                <Route exact path='/scores' component={Scores} />
                <Route exact path='/userReg' component={UserRegistration} />

                <Route component={Error404} />
              </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
