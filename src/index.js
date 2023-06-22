import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
// import store from './store';
import counterReducer from './reducers/index';
import { createStore } from 'redux';

const store=createStore(counterReducer);

ReactDOM.render(
  <Provider  store={store}>
     <App />
  </Provider>,
  document.getElementById('root')

);

