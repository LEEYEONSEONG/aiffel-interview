import React from 'react';

import { createStore } from 'redux';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import Routes from './Routes';

import rootReducer from 'redux/modules';

import GlobalStyle from 'styles/GlobalStyle';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <Routes />
    </React.StrictMode>
  </Provider>,
);
