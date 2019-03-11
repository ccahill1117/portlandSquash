import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Firebase, { FirebaseContext } from './lib/Firebase';

ReactDOM.render(


  <FirebaseContext.Provider value={new Firebase()}>
    <HashRouter>
      <App/>
    </HashRouter>
  </FirebaseContext.Provider>,

document.getElementById('root'));


serviceWorker.unregister();
