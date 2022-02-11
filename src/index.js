import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { Reset } from 'styled-reset';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { composeWithDevTools } from 'redux-devtools-extension';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Provider store={store} composeWithDevTools={composeWithDevTools}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
