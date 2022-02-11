import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { Reset } from 'styled-reset';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
