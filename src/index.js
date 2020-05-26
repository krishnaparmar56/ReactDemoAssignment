import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './assets/styles/Style.css'
import { HashRouter } from 'react-router-dom'
import { Provider , connect } from 'react-redux'
import {Main} from './pages/Main'
// We need createStore, connect, and Provider:
import { createStore } from "redux";
import 'react-app-polyfill/ie9';  
import 'react-app-polyfill/stable';

const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    // Respond to the SET_USER action and update
    // the state accordingly
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
 
const store = createStore(reducer);

// const store = configureStore();

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');


const renderApp = Component => {
  ReactDOM.render(
    <Provider store = {store}>
      <HashRouter>
        <Component/>
      </HashRouter>
    </Provider>,
    rootElement
  );
};


renderApp(Main);
// ReactDOM.render(
//     <BrowserRouter basename={baseUrl}>
//       <App />
//     </BrowserRouter>,
//     rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
