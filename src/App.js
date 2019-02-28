import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './lib/Footer';
import Header from './lib/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <p>this is app</p>

        <Footer />
      </div>
    );
  }
}

export default App;
