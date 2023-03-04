import React from 'react';

import { createStore } from 'redux';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import Routes from './Routes';

import rootReducer from 'redux/modules';

import GlobalStyle from 'styles/GlobalStyle';

const store = createStore(rootReducer);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // forum search 이후 window focus시 data 불러오는 이슈로 인한 옵션 추기
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <GlobalStyle />
        <Routes />
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>,
);
