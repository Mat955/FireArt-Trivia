import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/style.scss';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);